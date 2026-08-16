const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const { createClient } = require("@supabase/supabase-js");
const { generateWorld, typeOf, COLS, ROWS } = require("./worldgen");

const BOT_TOKEN = process.env.BOT_TOKEN || "";
const APP_URL = process.env.APP_URL || "";
const PORT = process.env.PORT || 3000;
const PING_URL = process.env.RENDER_PING_URL || (APP_URL ? APP_URL + "/health" : "");

console.log("🗺️  Генерируем мир...");
const world = generateWorld();
console.log(`🗺️  Мир готов (${world.cols}x${world.rows})`);

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_KEY) { console.error("❌ Нет SUPABASE_URL/KEY"); process.exit(1); }
const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const SUPPLY_MAX = 12, SUPPLY_REGEN_MS = 8 * 60 * 1000;
const START_COINS = 300, MAX_OWN = 300, CASE_COST = 120;
const BUILDINGS = {
  barn:   { name: "Амбар",      cost: 140, terrain: ["field"],  income: 2, desc: "+2 койна/мин" },
  medbay: { name: "Медотсек",   cost: 160, terrain: ["field"],  heal: 8,   desc: "+8 HP юнитам/мин" },
  fort:   { name: "Укрепления", cost: 90,  terrain: ["meadow"], defense: 1.35, desc: "+35% защиты клетки" },
  mine:   { name: "Шахта",      cost: 200, terrain: ["hills"],  income: 4, desc: "+4 койна/мин" }
};
const TERRAIN_DEF = { meadow: 1, field: 1, forest: 1.22, swamp: 1.18, hills: 1.34, mountain: 1.6, water: 1 };
const TERRAIN_INCOME = { field: 1, hills: 1 };

const P = {};
const rnd = n => Math.floor(Math.random() * (n + 1));
async function saveProfile(p) { await sb.from("players").upsert({ id: p.id, data: p, updated_at: new Date().toISOString() }); }
async function loadProfile(id, user) {
  if (P[id]) return P[id];
  const { data } = await sb.from("players").select("data").eq("id", id).single();
  if (data) { P[id] = data.data; return P[id]; }
  const p = newProfile(user || { id, first_name: "Игрок" });
  P[id] = p; await saveProfile(p);
  return p;
}

const SERVERS_DIR = path.join(__dirname, "servers");
function scanServers() {
  const out = {};
  if (!fs.existsSync(SERVERS_DIR)) return out;
  for (const dir of fs.readdirSync(SERVERS_DIR)) {
    const full = path.join(SERVERS_DIR, dir);
    if (!fs.statSync(full).isDirectory()) continue;
    const cards = [];
    for (const f of fs.readdirSync(full)) {
      const m = f.match(/^(.+)-air(\d+)-ground(\d+)-protection(\d+)\.(png|jpg|jpeg|webp)$/i);
      if (!m) continue;
      cards.push({ file: f, name: m[1], air: +m[2], ground: +m[3], protection: +m[4] });
    }
    out[dir] = cards;
  }
  return out;
}
let CARDS = scanServers();
for (const [s, cards] of Object.entries(CARDS)) console.log(`📦 Сервер "${s}": карточек — ${cards.length}`);

function mkUnit(c, server) {
  return {
    uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name: c.name, server, file: c.file, air: c.air, ground: c.ground, protection: c.protection, hp: 100, pos: null
  };
}
function newProfile(user) {
  const p = { id: String(user.id), name: user.first_name || "Игрок", coins: START_COINS, supplies: SUPPLY_MAX, supplyTs: Date.now(), tickTs: Date.now(), units: [], owned: [], buildings: {}, cases: 0 };
  const names = Object.keys(CARDS).filter(s => CARDS[s].length);
  if (names.length) p.units.push(mkUnit(CARDS[names[0]][rnd(CARDS[names[0]].length - 1)], names[0]));
  return p;
}

const incomeOf = p =>
  Object.values(p.buildings || {}).reduce((s, b) => s + (BUILDINGS[b].income || 0), 0) +
  (p.owned || []).reduce((s, id) => s + (TERRAIN_INCOME[typeOf(world, id)] || 0), 0);
function healOf(p) {
  let h = Object.values(p.buildings || {}).reduce((s, b) => s + (BUILDINGS[b].heal || 0), 0);
  h += (p.owned || []).filter(id => typeOf(world, id) === "field").length * 2;
  return h;
}
function settle(p) {
  const now = Date.now();
  if (p.supplies < SUPPLY_MAX) {
    const add = Math.floor((now - p.supplyTs) / SUPPLY_REGEN_MS);
    if (add > 0) { p.supplies = Math.min(SUPPLY_MAX, p.supplies + add); p.supplyTs += add * SUPPLY_REGEN_MS; }
  } else p.supplyTs = now;
  const mins = Math.floor((now - p.tickTs) / 60000);
  if (mins > 0) {
    p.coins += mins * incomeOf(p);
    const rate = healOf(p);
    if (rate > 0) for (const u of p.units) u.hp = Math.min(100, u.hp + mins * rate);
    p.tickTs += mins * 60000;
  }
}
const unitPower = u => Math.max(u.air, u.ground);
function powerOf(p) {
  let s = 0;
  for (const id of (p.owned || [])) {
    s += 10 * (TERRAIN_DEF[typeOf(world, id)] || 1);
    const b = (p.buildings || {})[id];
    if (b === "fort") s += 35; else if (b) s += 5;
  }
  for (const u of (p.units || [])) s += unitPower(u) * 5;
  return Math.round(s);
}
function publicProfile(p) {
  return {
    id: p.id, name: p.name, coins: p.coins, supplies: p.supplies, supplyMax: SUPPLY_MAX,
    supplyNextIn: p.supplies >= SUPPLY_MAX ? 0 : Math.max(0, Math.ceil((p.supplyTs + SUPPLY_REGEN_MS - Date.now()) / 1000)),
    income: incomeOf(p), heal: healOf(p), units: p.units, owned: p.owned, buildings: p.buildings
  };
}
async function overlay(meId) {
  const owners = {}, buildings = {}, units = [];
  const { data } = await sb.from("players").select("id, data");
  for (const row of (data || [])) {
    const p = row.data;
    const who = p.id === meId ? "me" : "p" + p.id;
    for (const t of (p.owned || [])) owners[t] = who;
    for (const [t, b] of Object.entries(p.buildings || {})) buildings[t] = { b, own: who };
    for (const u of (p.units || [])) if (u.pos) units.push({ tileId: u.pos, own: who, name: u.name, file: u.file, server: u.server });
  }
  return { owners, buildings, units };
}
async function ownerOf(tileId) {
  const { data } = await sb.from("players").select("id, data");
  for (const row of (data || [])) if (row.data.owned && row.data.owned.includes(tileId)) return row.id;
  return null;
}

function checkInitData(initData, token) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash"); params.delete("hash");
    const dcs = [...params.entries()].map(([k, v]) => `${k}=${v}`).sort().join("\n");
    const secret = crypto.createHmac("sha256", "WebAppData").update(token).digest();
    if (crypto.createHmac("sha256", secret).update(dcs).digest("hex") !== hash) return null;
    if (Date.now() / 1000 - Number(params.get("auth_date") || 0) > 86400) return null;
    return JSON.parse(params.get("user") || "{}");
  } catch { return null; }
}
function auth(req, res, next) {
  const initData = req.body?.initData || req.query.initData || "";
  let user = initData ? checkInitData(initData, BOT_TOKEN) : null;
  if (!user && process.env.NODE_ENV !== "production") user = { id: 1, first_name: "Dev" };
  if (!user || !user.id) return res.status(403).json({ ok: false, error: "Нет доступа" });
  loadProfile(String(user.id), user).then(p => { req.profile = p; next(); });
}

const app = express();
app.use(express.static(path.join(__dirname, "static"), {
  maxAge: "1d",
  setHeaders: (res, filePath) => { if (filePath.endsWith("index.html")) res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); }
}));
app.get(/^\/(?!api|health|files).*/, (req, res) => res.sendFile(path.join(__dirname, "static", "index.html")));
app.use(express.json({ limit: "2mb" }));
app.use("/files", express.static(path.join(__dirname, "servers"), { maxAge: "7d" }));
app.get("/health", (req, res) => res.send("ok"));

app.get("/api/init", auth, async (req, res) => {
  const p = req.profile; settle(p); await saveProfile(p);
  const ov = await overlay(p.id);
  res.json({ ok: true, profile: publicProfile(p), ...ov, pools: CARDS,
    servers: Object.keys(CARDS).map(s => ({ name: s, count: CARDS[s].length })),
    caseCost: CASE_COST, maxOwn: MAX_OWN, catalog: BUILDINGS });
});
app.get("/api/state", auth, async (req, res) => {
  const p = req.profile; settle(p); await saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p), ...(await overlay(p.id)) });
});
app.get("/api/tops", auth, async (req, res) => {
  const { data } = await sb.from("players").select("data");
  const rows = (data || []).map(r => r.data);
  const mk = f => rows.map(p => ({ n: p.name, v: f(p) })).sort((a, b) => b.v - a.v).slice(0, 10);
  res.json({ ok: true, coins: mk(p => Math.round(p.coins || 0)), cards: mk(p => (p.units || []).length), power: mk(p => powerOf(p)) });
});
app.post("/api/case/open", auth, async (req, res) => {
  const p = req.profile; settle(p);
  const pool = CARDS[req.body.server];
  if (!pool || !pool.length) return res.json({ ok: false, error: "На сервере нет карточек" });
  if (p.coins < CASE_COST) return res.json({ ok: false, error: "Не хватает койнов" });
  p.coins -= CASE_COST; p.cases++;
  const unit = mkUnit(pool[rnd(pool.length - 1)], req.body.server);
  p.units.push(unit); await saveProfile(p);
  res.json({ ok: true, unit, profile: publicProfile(p) });
});
app.post("/api/build", auth, async (req, res) => {
  const p = req.profile; settle(p);
  const { tileId, building } = req.body;
  const B = BUILDINGS[building];
  if (!B) return res.json({ ok: false, error: "Нет такого здания" });
  if (!p.owned.includes(tileId)) return res.json({ ok: false, error: "Клетка не ваша" });
  if (p.buildings[tileId]) return res.json({ ok: false, error: "Здесь уже есть постройка" });
  if (!B.terrain.includes(typeOf(world, tileId))) return res.json({ ok: false, error: "Здесь нельзя строить" });
  if (p.coins < B.cost) return res.json({ ok: false, error: "Не хватает койнов" });
  p.coins -= B.cost; p.buildings[tileId] = building; await saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p), building: { tileId, b: building } });
});
app.post("/api/place", auth, async (req, res) => {
  const p = req.profile; settle(p);
  const { unitId, tileId } = req.body;
  const u = p.units.find(x => x.uid === unitId);
  if (!u) return res.json({ ok: false, error: "Нет юнита" });
  if (u.pos) return res.json({ ok: false, error: "Юнит уже на карте" });
  if (u.hp <= 0) return res.json({ ok: false, error: "Юнит ранен" });
  if (!p.owned.includes(tileId)) return res.json({ ok: false, error: "Только своя клетка" });
  u.pos = tileId; await saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p) });
});
app.post("/api/move", auth, async (req, res) => {
  const p = req.profile; settle(p);
  const { unitId, tileId } = req.body;
  const u = p.units.find(x => x.uid === unitId);
  if (!u || !u.pos) return res.json({ ok: false, error: "Юнит не на карте" });
  if (u.hp <= 0) return res.json({ ok: false, error: "Юнит ранен" });
  if (p.supplies < 1) return res.json({ ok: false, error: "Нет энергии ⚡" });
  if (!p.owned.includes(tileId)) return res.json({ ok: false, error: "Только своя клетка" });
  const [r1, c1] = u.pos.split("_").map(Number), [r2, c2] = tileId.split("_").map(Number);
  if (Math.abs(r1 - r2) + Math.abs(c1 - c2) !== 1) return res.json({ ok: false, error: "Только на соседнюю клетку" });
  u.pos = tileId; p.supplies--; await saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p) });
});
app.post("/api/attack", auth, async (req, res) => {
  const p = req.profile; settle(p);
  const { tileId, unitId } = req.body;
  const unit = p.units.find(u => u.uid === unitId);
  const type = typeOf(world, tileId);
  if (!unit) return res.json({ ok: false, error: "Выбери юнита" });
  if (unit.hp <= 0) return res.json({ ok: false, error: "Юнит ранен — вылечи его" });
  if (p.supplies < 1) return res.json({ ok: false, error: "Нет припасов ⚡" });
  if (!type || type === "mountain" || type === "water") return res.json({ ok: false, error: "Нельзя атаковать эту клетку" });
  const defId = await ownerOf(tileId);
  if (defId === p.id) return res.json({ ok: false, error: "Уже ваша" });
  if (p.owned.length >= MAX_OWN) return res.json({ ok: false, error: `Максимум ${MAX_OWN} территорий` });
  if (p.owned.length > 0) {
    const [rr, cc] = tileId.split("_").map(Number);
    const adj = [[rr-1,cc],[rr+1,cc],[rr,cc-1],[rr,cc+1]].some(([a,b]) => p.owned.includes(`${a}_${b}`));
    if (!adj) return res.json({ ok: false, error: "Можно атаковать только соседние со своими клетки" });
  }
  const ov = await overlay(p.id);
  const defMult = (TERRAIN_DEF[type] || 1) * (ov.buildings[tileId]?.b === "fort" ? 1.35 : 1);
  let dp, defStat;
  if (!defId) { dp = (10 + rnd(20)) * defMult; defStat = "defense"; }
  else {
    const o = await loadProfile(defId, null); settle(o);
    const best = o.units.filter(u => u.hp > 0).sort((a, b) => unitPower(b) - unitPower(a))[0];
    dp = (best ? unitPower(best) * 5 + rnd(15) : 12 + rnd(18)) * defMult;
    defStat = best && best.air > best.ground ? "air" : "defense";
  }
  const atkStat = unit.air >= unit.ground ? "air" : "ground";
  const ap = unitPower(unit) * 6 + rnd(18);
  const win = ap > dp;
  const dmg = Math.round((win ? 8 + rnd(12) : 26 + rnd(22)) * (1 - unit.protection * 0.04));
  unit.hp = Math.max(0, unit.hp - dmg);
  p.supplies--;
  if (win) {
    if (defId) {
      const o = await loadProfile(defId, null);
      o.owned = o.owned.filter(t => t !== tileId);
      delete o.buildings[tileId];
      await saveProfile(o);
    }
    p.owned.push(tileId);
    unit.pos = tileId; // юнит встаёт на последнюю захваченную клетку
  }
  await saveProfile(p);
  res.json({ ok: true, result: { win, ap: Math.round(ap), dp: Math.round(dp), dmg, atkStat, defStat, enemy: !!defId },
    owners: { [tileId]: win ? "me" : (defId ? "p" + defId : null) }, profile: publicProfile(p) });
});

if (BOT_TOKEN) {
  const bot = new TelegramBot(BOT_TOKEN, { polling: true });
  bot.setMyCommands([{ command: "start", description: "Начать игру" }, { command: "rescan", description: "Пересканировать карточки" }]);
  bot.onText(/\/start/, msg => bot.sendMessage(msg.chat.id, "🏔️ Добро пожаловать в мир!", {
    reply_markup: { inline_keyboard: [[{ text: "🎮 Открыть карту", web_app: { url: APP_URL } }]] }
  }));
  bot.onText(/\/rescan/, msg => { CARDS = scanServers(); bot.sendMessage(msg.chat.id, "✅ Карточки пересканированы."); });
  console.log("🤖 Бот запущен");
}

app.listen(PORT, () => console.log(`🚀 Сервер на порту ${PORT}`));
if (PING_URL) {
  setInterval(() => { fetch(PING_URL).then(r => console.log("ping:", r.status)).catch(() => {}); }, 5 * 60 * 1000);
}