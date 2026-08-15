const express = require("express");
const crypto = require("crypto");
const fs = require("fs"), path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const { loadOrCreate, typeOf, COLS, ROWS } = require("./worldgen");

const BOT_TOKEN = process.env.BOT_TOKEN || "";
const APP_URL = process.env.APP_URL || ""; // https://твой-домен/ (HTTPS обязателен для TG WebApp)
const PORT = process.env.PORT || 3000;
const DATA_DIR = path.join(__dirname, "data");
const SERVERS_DIR = path.join(__dirname, "servers");
const PLAYERS_DIR = path.join(DATA_DIR, "players");

// ===== БАЛАНС =====
const SUPPLY_MAX = 6, SUPPLY_REGEN_MS = 12 * 60 * 1000;
const START_COINS = 300, MAX_OWN = 8, CASE_COST = 120;
const BUILDINGS = {
  barn:   { name: "Амбар",       cost: 140, terrain: ["field"],  income: 2, desc: "+2 койна/мин" },
  medbay: { name: "Медотсек",    cost: 160, terrain: ["field"],  heal: 8,   desc: "+8 HP юнитам/мин" },
  fort:   { name: "Укрепления",  cost: 90,  terrain: ["meadow"], defense: 1.35, desc: "+35% защиты клетки" },
  mine:   { name: "Шахта",       cost: 200, terrain: ["hills"],  income: 4, desc: "+4 койна/мин" }
};
const TERRAIN_DEF = { meadow: 1, field: 1, forest: 1.22, swamp: 1.18, hills: 1.34, mountain: 1.6 };

const world = loadOrCreate(DATA_DIR);
fs.mkdirSync(PLAYERS_DIR, { recursive: true });

// ===== СКАН КАРТОЧЕК СЕРВЕРОВ =====
function scanServers() {
  const out = {};
  if (!fs.existsSync(SERVERS_DIR)) fs.mkdirSync(SERVERS_DIR, { recursive: true });
  for (const dir of fs.readdirSync(SERVERS_DIR)) {
    const full = path.join(SERVERS_DIR, dir);
    if (!fs.statSync(full).isDirectory()) continue;
    const cards = [];
    for (const f of fs.readdirSync(full)) {
      // формат: Name-air:0-ground:5/10-protection:4/10.png
      const m = f.match(/^(.+)-air:(\d+)-ground:(\d+)\/(\d+)-protection:(\d+)\/(\d+)\.png$/i);
      if (!m) { console.warn("⚠️  Пропущен файл (неверный формат имени):", dir + "/" + f); continue; }
      cards.push({ file: f, name: m[1], air: +m[2], ground: +m[3], protection: +m[5] });
    }
    out[dir] = cards;
    console.log(`📦 Сервер "${dir}": карточек — ${cards.length}`);
  }
  return out;
}
let CARDS = scanServers();

// ===== ПРОФИЛИ =====
const P = {};
const rnd = n => Math.floor(Math.random() * (n + 1));
const pFile = id => path.join(PLAYERS_DIR, id + ".json");

function newProfile(user) {
  const p = {
    id: String(user.id), name: user.first_name || "Игрок",
    coins: START_COINS, supplies: SUPPLY_MAX, supplyTs: Date.now(), tickTs: Date.now(),
    units: [], owned: [], buildings: {}, cases: 0
  };
  // стартовый юнит из случайного сервера
  const names = Object.keys(CARDS).filter(s => CARDS[s].length);
  if (names.length) {
    const c = CARDS[names[0]][rnd(CARDS[names[0]].length - 1)];
    p.units.push(mkUnit(c, names[0]));
  }
  return p;
}
function mkUnit(c, server) {
  return {
    uid: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    name: c.name, server, file: c.file,
    air: c.air, ground: c.ground, protection: c.protection, hp: 100
  };
}
function getProfile(id, user) {
  if (P[id]) return P[id];
  try { P[id] = JSON.parse(fs.readFileSync(pFile(id), "utf8")); }
  catch { P[id] = newProfile(user || { id, first_name: "Игрок" }); }
  return P[id];
}
const saveProfile = p => fs.writeFileSync(pFile(p.id), JSON.stringify(p));
// подгружаем всех игроков в память (нужно для PvP и общего оверлея)
if (fs.existsSync(PLAYERS_DIR))
  for (const f of fs.readdirSync(PLAYERS_DIR))
    if (f.endsWith(".json")) getProfile(f.slice(0, -5));

// ===== ЭКОНОМИКА (ленивый расчёт по времени) =====
const incomeOf = p => Object.values(p.buildings).reduce((s, b) => s + (BUILDINGS[b].income || 0), 0);
function healOf(p) {
  let h = Object.values(p.buildings).reduce((s, b) => s + (BUILDINGS[b].heal || 0), 0);
  h += p.owned.filter(id => typeOf(world, id) === "field").length * 2; // фермы пассивно лечат
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
function publicProfile(p) {
  return {
    id: p.id, name: p.name, coins: p.coins,
    supplies: p.supplies, supplyMax: SUPPLY_MAX,
    supplyNextIn: p.supplies >= SUPPLY_MAX ? 0 : Math.max(0, Math.ceil((p.supplyTs + SUPPLY_REGEN_MS - Date.now()) / 1000)),
    income: incomeOf(p), heal: healOf(p),
    units: p.units, owned: p.owned, buildings: p.buildings
  };
}
function overlay(meId) {
  const owners = {}, buildings = {};
  for (const p of Object.values(P)) {
    const who = p.id === meId ? "me" : "p" + p.id;
    for (const t of p.owned) owners[t] = who;
    for (const [t, b] of Object.entries(p.buildings)) buildings[t] = { b, own: who };
  }
  return { owners, buildings };
}
const ownerOf = tileId => {
  for (const p of Object.values(P)) if (p.owned.includes(tileId)) return p.id;
  return null;
};
const unitPower = u => Math.max(u.air, u.ground);

// ===== AUTH (проверка initData Telegram) =====
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
  if (!user && process.env.NODE_ENV !== "production") user = { id: 1, first_name: "Dev" }; // локальная отладка
  if (!user || !user.id) return res.status(403).json({ ok: false, error: "Нет доступа" });
  req.profile = getProfile(String(user.id), user);
  next();
}

// ===== EXPRESS =====
const app = express();
app.use(express.json({ limit: "2mb" }));
app.use("/files", express.static(SERVERS_DIR, { maxAge: "7d" }));       // PNG карточек
app.use(express.static(path.join(__dirname, "..", "miniapp", "build"))); // собранный мини-апп

app.get("/api/init", auth, (req, res) => {
  const p = req.profile; settle(p); saveProfile(p);
  res.json({
    ok: true, profile: publicProfile(p), ...overlay(p.id),
    servers: Object.keys(CARDS).map(s => ({ name: s, count: CARDS[s].length })),
    caseCost: CASE_COST, maxOwn: MAX_OWN, buildings: { ...overlay(p.id).buildings }, catalog: BUILDINGS
  });
});
app.get("/api/state", auth, (req, res) => {
  const p = req.profile; settle(p); saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p), ...overlay(p.id) });
});

app.post("/api/case/open", auth, (req, res) => {
  const p = req.profile; settle(p);
  const pool = CARDS[req.body.server];
  if (!pool || !pool.length) return res.json({ ok: false, error: "На сервере нет карточек" });
  if (p.coins < CASE_COST) return res.json({ ok: false, error: "Не хватает койнов" });
  p.coins -= CASE_COST; p.cases++;
  const c = pool[rnd(pool.length - 1)];
  const unit = mkUnit(c, req.body.server);
  p.units.push(unit); saveProfile(p);
  res.json({ ok: true, unit, profile: publicProfile(p) });
});

app.post("/api/build", auth, (req, res) => {
  const p = req.profile; settle(p);
  const { tileId, building } = req.body;
  const B = BUILDINGS[building];
  if (!B) return res.json({ ok: false, error: "Нет такого здания" });
  if (!p.owned.includes(tileId)) return res.json({ ok: false, error: "Клетка не ваша" });
  if (p.buildings[tileId]) return res.json({ ok: false, error: "Здесь уже есть постройка" });
  if (!B.terrain.includes(typeOf(world, tileId))) return res.json({ ok: false, error: "Здесь нельзя строить" });
  if (p.coins < B.cost) return res.json({ ok: false, error: "Не хватает койнов" });
  p.coins -= B.cost; p.buildings[tileId] = building; saveProfile(p);
  res.json({ ok: true, profile: publicProfile(p), building: { tileId, b: building } });
});

app.post("/api/attack", auth, (req, res) => {
  const p = req.profile; settle(p);
  const { tileId, unitId } = req.body;
  const unit = p.units.find(u => u.uid === unitId);
  const type = typeOf(world, tileId);
  if (!unit) return res.json({ ok: false, error: "Выбери юнита" });
  if (unit.hp <= 0) return res.json({ ok: false, error: "Юнит ранен — вылечи его" });
  if (p.supplies < 1) return res.json({ ok: false, error: "Нет припасов ⚡" });
  if (!type || type === "mountain") return res.json({ ok: false, error: "Нельзя атаковать горы" });
  if (ownerOf(tileId) === p.id) return res.json({ ok: false, error: "Уже ваша" });
  if (p.owned.length >= MAX_OWN) return res.json({ ok: false, error: `Максимум ${MAX_OWN} территорий` });

  const defMult = (TERRAIN_DEF[type] || 1) * (overlay(p.id).buildings[tileId]?.b === "fort" ? 1.35 : 1);
  const defId = ownerOf(tileId);
  let dp, defStat;
  if (!defId) { dp = (10 + rnd(20)) * defMult; defStat = "defense"; }
  else {
    const o = getProfile(defId); settle(o);
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
      const o = getProfile(defId);
      o.owned = o.owned.filter(t => t !== tileId);
      delete o.buildings[tileId];
      saveProfile(o);
    }
    p.owned.push(tileId);
  }
  saveProfile(p);
  res.json({
    ok: true,
    result: { win, ap: Math.round(ap), dp: Math.round(dp), dmg, atkStat, defStat, enemy: !!defId },
    owners: { [tileId]: win ? "me" : (defId ? "p" + defId : null) },
    profile: publicProfile(p)
  });
});

// ===== БОТ =====
if (BOT_TOKEN) {
  const bot = new TelegramBot(BOT_TOKEN, { polling: true });
  bot.setMyCommands([
    { command: "start", description: "Начать игру" },
    { command: "rescan", description: "Пересканировать карточки серверов" }
  ]);
  bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, "🏔️ Добро пожаловать в мир!\nЗахватывай территории, открывай кейсы серверов, строй здания.", {
      reply_markup: { inline_keyboard: [[{ text: "🎮 Открыть карту", web_app: { url: APP_URL } }]] }
    });
  });
  bot.onText(/\/rescan/, msg => {
    CARDS = scanServers();
    bot.sendMessage(msg.chat.id, "✅ Карточки серверов пересканированы.");
  });
}

app.listen(PORT, () => console.log(`🚀 Сервер запущен: http://localhost:${PORT}`));