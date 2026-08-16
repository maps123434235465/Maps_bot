import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { api, unitImg } from "./api";
import { playClick, playBuild, startAmbience, setAmbience, getVolumes, setVolumes } from "./sounds";

const COLS = 800, ROWS = 600;
const MAX_OWN = 300;
const PAL = { bg: "#071018", surf: "#0e1b16", border: "#2b4232", accent: "#8b5cf6", accentL: "#c4b5fd", red: "#ef4444", gold: "#f5c451", muted: "#6f8277", text: "#e6eee8", textD: "#a9b8ae" };
const TYPES = {
  meadow:   { n: "Луг",          e: "🌿", bonus: null,      m: 1.00, impassable: false, top: 0x79c04f, side: 0x4d8a32 },
  forest:   { n: "Лес",          e: "🌲", bonus: "defense", m: 1.22, impassable: false, top: 0x4e9440, side: 0x35692b },
  hills:    { n: "Холмы",        e: "⛰️", bonus: "defense", m: 1.34, impassable: false, captureMult: 0.88, top: 0x86a852, side: 0x5a7a38 },
  field:    { n: "Поля",         e: "🌾", bonus: null,      m: 1.00, impassable: false, top: 0xd8c04c, side: 0x9a872d },
  swamp:    { n: "Болота",       e: "🪷", bonus: "air",     m: 1.18, impassable: false, captureMult: 0.92, top: 0x5f9b62, side: 0x40714a },
  mountain: { n: "Высокие горы", e: "🏔️", bonus: "defense", m: 1.60, impassable: true,  top: 0x8d928a, side: 0x565c57 },
  water:    { n: "Море",         e: "🌊", bonus: null,      m: 1.00, impassable: true,  top: 0x1170aa, side: 0x1170aa }
};
const SNAME = { attack: "Атака", defense: "Защита", air: "Воздух" };
const SICON = { attack: "⚔️", defense: "🛡️", air: "🌪️" };
const TILE = 3.4;
const MAP_W = COLS * TILE, MAP_D = ROWS * TILE;
const MCX = MAP_W / 2, MCZ = MAP_D / 2;
const BASE_H = 0.16, TOP_THICK = 0.06, SURFACE_EPS = 0.035;
const CHUNK_TILES = 24, FAR_TILES = 48;
const MIN_D = 45, MAX_D = 320, START_D = 240;
const FOV = 50, TAN = Math.tan((FOV / 2) * Math.PI / 180);
const autoPitch = d => 1.48 - clamp((d - MIN_D) / (MAX_D - MIN_D), 0, 1) * 0.53;
const PAN_MARGIN = 260;
const FOG_COLOR = 0x0d2438, FOG_NEAR = 240, FOG_FAR = 2300;
const ROCK_C = new THREE.Color(0x8d928a), SNOW_C = new THREE.Color(0xeef3f5);
const BUILDINGS_UI = {
  barn:   { n: "Амбар",      i: "🏚️", cost: 140, d: "+2 🪙/мин" },
  medbay: { n: "Медотсек",   i: "⛑️", cost: 160, d: "+8 HP юнитам/мин" },
  fort:   { n: "Укрепления", i: "🛡️", cost: 90,  d: "+35% защиты клетки" },
  mine:   { n: "Шахта",      i: "⛏️", cost: 200, d: "+4 🪙/мин" }
};
const BUILD_SLOTS = { field: ["barn", "medbay"], meadow: ["fort"], hills: ["mine"] };
const pretty = n => n ? n.charAt(0).toUpperCase() + n.slice(1) : n;
const ownerHue = o => { let h = 0; for (let i = 0; i < o.length; i++) h = (h * 31 + o.charCodeAt(i)) >>> 0; return (h % 360) / 360; };
const hueHex = o => new THREE.Color().setHSL(ownerHue(o), 0.8, 0.55).getHex();
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hash2 = (r, c, salt = 0) => { let x = (r * 374761393 + c * 668265263 + salt * 69069) | 0; x = (x ^ (x >>> 13)) * 1274126177; return (x ^ (x >>> 16)) >>> 0; };
const h01 = (r, c, s = 0) => (hash2(r, c, s) % 10000) / 10000;
const vnoise = (r, c, scale, salt) => {
  const x = r / scale, z = c / scale;
  const r0 = Math.floor(x), c0 = Math.floor(z);
  const fr = x - r0, fc = z - c0;
  const sr = fr * fr * (3 - 2 * fr), sc = fc * fc * (3 - 2 * fc);
  const h = (a, b) => h01(a, b, salt);
  return h(r0, c0) * (1 - sr) * (1 - sc) + h(r0 + 1, c0) * sr * (1 - sc) + h(r0, c0 + 1) * (1 - sr) * sc + h(r0 + 1, c0 + 1) * sr * sc;
};
const isLand = (row, col) => {
  const nx = (col - COLS / 2) / (COLS / 2), nz = (row - ROWS / 2) / (ROWS / 2);
  const d = Math.sqrt(nx * nx + nz * nz);
  const n = (vnoise(row, col, 64, 777) - 0.5) * 0.55 + (vnoise(row, col, 23, 778) - 0.5) * 0.25;
  return d + n < 0.92;
};
const tileTop = t => BASE_H + t.elev + TOP_THICK + SURFACE_EPS;
const toXZ = (col, row) => ({ x: (col + 0.5) * TILE - MCX, z: (row + 0.5) * TILE - MCZ });

const baseType = (row, col) => {
  const a = h01(row, col, 10), b = h01(row, col, 22);
  if (a < 0.11) return "forest";
  if (a < 0.18) return "field";
  if (a < 0.24) return "swamp";
  if (a < 0.34 && b > 0.42) return "hills";
  return "meadow";
};
const baseElev = (type, row, col) => {
  const n1 = vnoise(row, col, 9, 31), n2 = vnoise(row, col, 23, 77);
  switch (type) {
    case "forest": return 0.14 + n1 * 0.18;
    case "field":  return 0.08 + n1 * 0.10;
    case "swamp":  return 0.04 + n1 * 0.05;
    case "hills":  return 0.34 + n1 * 0.42 + n2 * 0.12;
    default:       return 0.10 + n1 * 0.16 + n2 * 0.06;
  }
};
function buildMasses() {
  const arr = [];
  for (let i = 0; i < 30; i++) {
    const ridge = i < 16;
    arr.push({
      sr: 18 + (hash2(i, 3, 900) % (ROWS - 36)), sc: 18 + (hash2(i, 7, 901) % (COLS - 36)),
      ang: ((hash2(i, 11, 902) % 1000) / 1000) * Math.PI,
      rAlong: ridge ? 28 + (hash2(i, 13, 903) % 48) : 13 + (hash2(i, 13, 903) % 15),
      rAcross: ridge ? 7 + (hash2(i, 17, 904) % 8) : 11 + (hash2(i, 17, 904) % 16),
      peak: (ridge ? 1.9 : 1.6) + ((hash2(i, 19, 905) % 100) / 100) * (ridge ? 1.6 : 1.4),
      lobes: 2 + (hash2(i, 23, 906) % 4), phase: ((hash2(i, 29, 907) % 1000) / 1000) * Math.PI * 2
    });
  }
  return arr;
}
function paintMassInto(tiles, m) {
  const R = Math.max(m.rAlong, m.rAcross) * 1.35 + 4;
  const r0 = Math.max(1, Math.floor(m.sr - R)), r1 = Math.min(ROWS - 2, Math.ceil(m.sr + R));
  const c0 = Math.max(1, Math.floor(m.sc - R)), c1 = Math.min(COLS - 2, Math.ceil(m.sc + R));
  const cosA = Math.cos(m.ang), sinA = Math.sin(m.ang);
  const salt = 500 + Math.round(m.phase * 10);
  for (let r = r0; r <= r1; r++) {
    const dr = r - m.sr;
    for (let c = c0; c <= c1; c++) {
      const t = tiles[r * COLS + c];
      if (t.type === "water") continue;
      const dc = c - m.sc;
      const u = dr * cosA - dc * sinA, v = dr * sinA + dc * cosA;
      const ang = Math.atan2(v, u);
      const wob = 1 + 0.20 * Math.sin(ang * m.lobes + m.phase) + 0.10 * Math.sin(ang * (m.lobes * 2 + 1) + m.phase * 1.7);
      const du = u / (m.rAlong * wob), dv = v / (m.rAcross * wob);
      const d2 = du * du + dv * dv;
      if (d2 >= 1) continue;
      const e = m.peak * Math.pow(1 - d2, 0.68) * (0.82 + 0.30 * vnoise(r, c, 7, salt));
      if (e <= 0.04) continue;
      if (e > t.elev) { t.elev = e; t.type = e >= 0.42 ? "mountain" : "hills"; }
    }
  }
}
async function genMapProgressive(onProgress = () => {}) {
  const total = ROWS * COLS, tiles = new Array(total), batch = 8000;
  for (let start = 0; start < total; start += batch) {
    const end = Math.min(total, start + batch);
    for (let idx = start; idx < end; idx++) {
      const row = Math.floor(idx / COLS), col = idx % COLS;
      if (!isLand(row, col)) { tiles[idx] = { id: `${row}_${col}`, row, col, type: "water", owner: null, level: 1, elev: -0.5, shade: 1 }; continue; }
      const type = baseType(row, col);
      tiles[idx] = { id: `${row}_${col}`, row, col, type, owner: null, level: 1, elev: baseElev(type, row, col), shade: 0.90 + h01(row, col, 303) * 0.16 };
    }
    onProgress(Math.round((end / total) * 55));
    await new Promise(requestAnimationFrame);
  }
  const masses = buildMasses();
  for (let i = 0; i < masses.length; i++) {
    paintMassInto(tiles, masses[i]);
    onProgress(55 + Math.round(((i + 1) / masses.length) * 43));
    await new Promise(requestAnimationFrame);
  }
  onProgress(100);
  return tiles;
}

const nbIds = (row, col) => [[row-1,col],[row+1,col],[row,col-1],[row,col+1]].filter(([r,c]) => r>=0 && r<ROWS && c>=0 && c<COLS).map(([r,c]) => `${r}_${c}`);
function getReachable(territories) {
  const mine = territories.filter(t => t.owner === "me" && !TYPES[t.type].impassable);
  if (!mine.length) return new Set();
  const adj = new Set();
  const byId = new Map(territories.map(t => [t.id, t]));
  mine.forEach(m => nbIds(m.row, m.col).forEach(id => {
    const t = byId.get(id);
    if (t && t.owner !== "me" && !TYPES[t.type].impassable) adj.add(id);
  }));
  return adj;
}
function applyOverlay(tiles, owners) {
  for (const t of tiles) if (t.owner) t.owner = null;
  for (const [id, who] of Object.entries(owners || {})) {
    const [r, c] = id.split("_");
    const t = tiles[+r * COLS + +c];
    if (t) t.owner = who === "me" ? "me" : who;
  }
}

// ================= 3D =================
const tileGeo = new THREE.BoxGeometry(TILE - 0.03, 1, TILE - 0.03);
const sideGeo = new THREE.BoxGeometry(TILE - 0.16, 1, TILE - 0.16);
const ringGeo = new THREE.RingGeometry(0.9, 1.2, 24);
const decorGeo = {
  treeTrunk: new THREE.CylinderGeometry(0.065, 0.09, 0.38, 5), treeCrown: new THREE.ConeGeometry(0.26, 0.58, 6),
  rock: new THREE.DodecahedronGeometry(0.24, 0), rockSmall: new THREE.DodecahedronGeometry(0.13, 0),
  crop: new THREE.BoxGeometry(0.06, 0.14, 0.52), bush: new THREE.IcosahedronGeometry(0.22, 0),
  reed: new THREE.CylinderGeometry(0.025, 0.035, 0.34, 4), flower: new THREE.CylinderGeometry(0.025, 0.025, 0.12, 4),
  ridge: new THREE.BoxGeometry(0.68, 0.18, 0.22), peak: new THREE.ConeGeometry(0.58, 1.15, 5), peakSmall: new THREE.ConeGeometry(0.34, 0.62, 5),
  houseBase: new THREE.BoxGeometry(0.9, 0.7, 0.9), houseRoof: new THREE.ConeGeometry(0.75, 0.6, 4),
  barn: new THREE.BoxGeometry(1.5, 0.9, 1.1), barnRoof: new THREE.ConeGeometry(1.05, 0.7, 4),
  log: new THREE.CylinderGeometry(0.09, 0.09, 0.9, 5), stump: new THREE.CylinderGeometry(0.14, 0.18, 0.22, 6)
};
const mat = c => new THREE.MeshLambertMaterial({ color: c, flatShading: true });
const MATS = {
  meadow: mat(TYPES.meadow.top), forest: mat(TYPES.forest.top), hills: mat(TYPES.hills.top),
  field: mat(TYPES.field.top), swamp: mat(TYPES.swamp.top), mountain: mat(TYPES.mountain.top),
  meadowSide: mat(TYPES.meadow.side), forestSide: mat(TYPES.forest.side), hillsSide: mat(TYPES.hills.side),
  fieldSide: mat(TYPES.field.side), swampSide: mat(TYPES.swamp.side), mountainSide: mat(TYPES.mountain.side),
  trunk: mat(0x6b4929), leaves: mat(0x2f7d36), rock: mat(0x7c8377), rock2: mat(0x969b8d),
  crop: mat(0xb6a940), bush: mat(0x4f8e34), reed: mat(0x5e8b47), flower: mat(0xd6d15b),
  ridge: mat(0x626861), peak: mat(0x6f756e), snow: mat(0xe9f1f4),
  houseBase: mat(0x8a6a44), barn: mat(0x7a4a3a), stump: mat(0x7a5a34),
  water: new THREE.MeshLambertMaterial({ color: 0x1170aa })
};

function needsSides(t, all) {
  const e = t.elev;
  const nbs = [[t.row-1,t.col],[t.row+1,t.col],[t.row,t.col-1],[t.row,t.col+1]];
  for (const [r, c] of nbs) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return true;
    if (all[r * COLS + c].elev < e - 0.02) return true;
  }
  return false;
}
function createInstancedSet(scene, arr, detail, allTiles) {
  const buckets = {};
  for (const t of arr) (buckets[t.type] ||= []).push(t);
  const dummy = new THREE.Object3D();
  const byId = {}, groups = {};
  for (const [type, items] of Object.entries(buckets)) {
    const n = items.length;
    const top = new THREE.InstancedMesh(tileGeo, MATS[type], n);
    top.frustumCulled = true;
    let side = null, sideIdx = new Map();
    if (detail && type !== "water") {
      const sideItems = items.filter(t => needsSides(t, allTiles));
      side = new THREE.InstancedMesh(sideGeo, MATS[type + "Side"], Math.max(1, sideItems.length));
      side.frustumCulled = true;
      for (let i = 0; i < sideItems.length; i++) {
        const t = sideItems[i], p = toXZ(t.col, t.row);
        const bh = BASE_H + t.elev, h = bh + 1.3;
        dummy.position.set(p.x, (bh - 1.3) / 2, p.z);
        dummy.scale.set(1, h, 1); dummy.updateMatrix();
        side.setMatrixAt(i, dummy.matrix);
        sideIdx.set(t.id, i);
      }
      side.count = sideItems.length;
      side.instanceMatrix.needsUpdate = true;
    }
    for (let i = 0; i < n; i++) {
      const t = items[i], p = toXZ(t.col, t.row);
      const bh = BASE_H + t.elev;
      dummy.position.set(p.x, bh + TOP_THICK / 2, p.z);
      dummy.scale.set(1, TOP_THICK, 1); dummy.updateMatrix();
      top.setMatrixAt(i, dummy.matrix);
      byId[t.id] = { type, idx: i, top, side, sideIdx: sideIdx.get(t.id) };
    }
    top.instanceMatrix.needsUpdate = true;
    if (side) scene.add(side);
    scene.add(top);
    groups[type] = { top, side, arr: items };
  }
  return { groups, byId };
}
function createDecor(scene, arr) {
  const defs = { trees: [], rocks: [], smallRocks: [], fields: [], bushes: [], reeds: [], flowers: [], ridges: [], peaks: [], snows: [] };
  for (const t of arr) {
    if (t.type === "water") continue;
    const s = hash2(t.row, t.col, 777) % 100;
    const p = toXZ(t.col, t.row), top = tileTop(t);
    if (t.type === "forest") { if (s < 42) defs.trees.push([p.x, p.z, top]); }
    else if (t.type === "mountain") {
      const ps = 0.62 + Math.min(2.4, t.elev) * 0.5;
      const ox = (hash2(t.row, t.col, 610) % 1000 / 1000 - 0.5) * 0.6;
      const oz = (hash2(t.row, t.col, 611) % 1000 / 1000 - 0.5) * 0.6;
      defs.peaks.push([p.x + ox, p.z + oz, top + 0.575 * ps, ps]);
      if (t.elev > 1.7) { const ss = ps * 0.46; defs.snows.push([p.x + ox, p.z + oz, top + 1.15 * ps - 0.31 * ss + 0.02, ss]); }
      if (s < 50) defs.rocks.push([p.x, p.z, top]);
    }
    else if (t.type === "field") { if (s < 38) defs.fields.push([p.x, p.z, top]); }
    else if (t.type === "hills") {
      if (s < 30) { defs.rocks.push([p.x, p.z, top]); defs.smallRocks.push([p.x, p.z, top]); }
      else if (s < 52) defs.smallRocks.push([p.x, p.z, top]);
      if (s < 18) defs.ridges.push([p.x, p.z, top]);
    }
    else if (t.type === "swamp") { if (s < 40) defs.reeds.push([p.x, p.z, top]); }
    else if (t.type === "meadow") {
      if (s < 8) defs.bushes.push([p.x, p.z, top]);
      else if (s < 20) defs.flowers.push([p.x, p.z, top]);
    }
  }
  const geoOffset = g => g === decorGeo.treeTrunk ? 0.19 : g === decorGeo.treeCrown ? 0.29 : g === decorGeo.rock ? 0.22 : g === decorGeo.rockSmall ? 0.13 : g === decorGeo.crop ? 0.07 : g === decorGeo.bush ? 0.14 : g === decorGeo.reed ? 0.17 : g === decorGeo.flower ? 0.06 : g === decorGeo.ridge ? 0.09 : 0.3;
  const make = (geo, material, items, per = 1, spread = 1.7) => {
    const mesh = new THREE.InstancedMesh(geo, material, Math.max(1, items.length * per));
    mesh.frustumCulled = true;
    const d = new THREE.Object3D();
    let k = 0;
    for (let i = 0; i < items.length; i++) {
      const it = items[i], final = it.length === 4;
      for (let j = 0; j < per; j++) {
        const ox = final ? 0 : (hash2(i, j, 501 + per) % 1000 / 1000 - 0.5) * spread;
        const oz = final ? 0 : (hash2(i, j, 502 + per) % 1000 / 1000 - 0.5) * spread;
        const s = final ? it[3] : 0.78 + (hash2(i, j, 503 + per) % 40) / 100;
        const y = final ? it[2] : it[2] + geoOffset(geo) * s + SURFACE_EPS;
        d.position.set(it[0] + ox, y, it[1] + oz);
        if (geo === decorGeo.treeTrunk) d.scale.set(1, 1, 1); else d.scale.setScalar(s);
        d.rotation.y = (geo === decorGeo.peak || geo === decorGeo.peakSmall) ? ((hash2(i, j, 540 + per) % 1000) / 1000) * Math.PI * 2 : 0;
        d.updateMatrix();
        mesh.setMatrixAt(k++, d.matrix);
      }
    }
    mesh.count = k;
    mesh.instanceMatrix.needsUpdate = true;
    scene.add(mesh);
    return mesh;
  };
  return {
    treeTrunk: make(decorGeo.treeTrunk, MATS.trunk, defs.trees, 2, 1.5),
    treeCrown: make(decorGeo.treeCrown, MATS.leaves, defs.trees, 2, 1.5),
    rock: make(decorGeo.rock, MATS.rock, defs.rocks, 2, 1.45),
    rockSmall: make(decorGeo.rockSmall, MATS.rock2, defs.smallRocks, 2, 1.65),
    field: make(decorGeo.crop, MATS.crop, defs.fields, 5, 1.55),
    bush: make(decorGeo.bush, MATS.bush, defs.bushes, 2, 1.35),
    reed: make(decorGeo.reed, MATS.reed, defs.reeds, 4, 1.55),
    flower: make(decorGeo.flower, MATS.flower, defs.flowers, 3, 1.7),
    ridge: make(decorGeo.ridge, MATS.ridge, defs.ridges, 1, 0.9),
    peak: make(decorGeo.peak, MATS.peak, defs.peaks, 1, 0),
    snow: make(decorGeo.peakSmall, MATS.snow, defs.snows, 1, 0)
  };
}
const chunkKey = (cr, cc, far) => far ? `F${cr}:${cc}` : `${cr}:${cc}`;
function createWorldChunk(scene, tilesAll, cr, cc, far) {
  const ts = far ? FAR_TILES : CHUNK_TILES;
  const r0 = Math.max(0, cr * ts), r1 = Math.min(ROWS, (cr + 1) * ts);
  const c0 = Math.max(0, cc * ts), c1 = Math.min(COLS, (cc + 1) * ts);
  const arr = [];
  for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) arr.push(tilesAll[r * COLS + c]);
  const inst = createInstancedSet(scene, arr, !far, tilesAll);
  const decor = far ? null : createDecor(scene, arr);
  return { cr, cc, far, territories: arr, inst, decor };
}
function removeWorldChunk(scene, chunk) {
  for (const g of Object.values(chunk.inst.groups)) { scene.remove(g.top); g.top.dispose(); if (g.side) { scene.remove(g.side); g.side.dispose(); } }
  if (chunk.decor) for (const m of Object.values(chunk.decor)) if (m) { scene.remove(m); m.dispose(); }
}
function applyInstanceColors(inst, territories, reachable, selectedId) {
  const color = new THREE.Color();
  for (let i = 0; i < territories.length; i++) {
    const t = territories[i];
    const ref = inst.byId[t.id];
    if (!ref) continue;
    if (t.id === selectedId) color.setHex(0xffffff);
    else if (t.owner === "me") color.setHex(0x9d63ff).multiplyScalar(t.shade || 1);
    else if (t.owner) color.setHex(0xd9564a).multiplyScalar(t.shade || 1);
    else if (reachable.has(t.id)) color.setHex(TYPES[t.type].top).multiplyScalar((t.shade || 1) * 1.35);
    else color.setHex(TYPES[t.type].top).multiplyScalar(t.shade || 1);
    if (t.type !== "water" && t.elev > 0.45) {
      color.lerp(ROCK_C, clamp((t.elev - 0.45) / 1.2, 0, 1) * 0.8);
      if (t.elev > 1.9) color.lerp(SNOW_C, clamp((t.elev - 1.9) / 0.8, 0, 1));
    }
    ref.top.setColorAt(ref.idx, color);
  }
  for (const g of Object.values(inst.groups)) if (g.top.instanceColor) g.top.instanceColor.needsUpdate = true;
}
function createAnimatedOcean() {
  const geo = new THREE.PlaneGeometry(MAP_W + 7000, MAP_D + 7000, 140, 140);
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x2196d8) },
      uDeep: { value: new THREE.Color(0x0d5c94) },
      uFogColor: { value: new THREE.Color(FOG_COLOR) },
      uFogNear: { value: FOG_NEAR }, uFogFar: { value: FOG_FAR }
    },
    vertexShader: `uniform float uTime; varying float vWave; varying float vDepth; void main(){ vec3 p=position; float w=sin(p.x*0.020+uTime*0.60)*0.30+cos(p.y*0.026-uTime*0.42)*0.24+sin((p.x+p.y)*0.011+uTime*0.30)*0.16; p.z+=w; vWave=w; vec4 mv=modelViewMatrix*vec4(p,1.0); vDepth=-mv.z; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying float vWave; varying float vDepth; void main(){ float k=clamp((vWave+0.70)/1.40,0.0,1.0); vec3 c=mix(uDeep,uColor,k); c+=vec3(0.10,0.14,0.16)*pow(k,3.0); float f=smoothstep(uFogNear,uFogFar,vDepth); c=mix(c,uFogColor,f); gl_FragColor=vec4(c,1.0); }`
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = -0.75;
  return mesh;
}
function makeGlowTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 256;
  const g = c.getContext("2d");
  const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "rgba(255,244,214,1)"); gr.addColorStop(0.22, "rgba(255,214,130,0.55)");
  gr.addColorStop(0.6, "rgba(255,190,90,0.16)"); gr.addColorStop(1, "rgba(255,190,90,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

// ================= 3D-ЭКРАН =================
function MapScreen3D({ territories, onSelect, selectedId, reachable, onReady, onProgress, controlsRef, rev, borders, reach, pins, settlements, onDrop }) {
  const mountRef = useRef(null), R = useRef({});
  const dataRef = useRef({ territories, onSelect, selectedId, reachable, onReady, onProgress, onDrop });
  useEffect(() => { dataRef.current = { territories, onSelect, selectedId, reachable, onReady, onProgress, onDrop }; });

  useEffect(() => {
    const mount = mountRef.current, r = R.current;
    const W = Math.max(2, mount.clientWidth || 800), H = Math.max(2, mount.clientHeight || 600);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(FOG_COLOR);
    scene.fog = new THREE.Fog(FOG_COLOR, FOG_NEAR, FOG_FAR);
    r.scene = scene;
    r.flights = [];
    r.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

    const camera = new THREE.PerspectiveCamera(FOV, W / Math.max(1, H), 0.1, 4200);
    r.camera = camera;
    r.targetX = 0; r.targetZ = 0; r.panTargetX = 0; r.panTargetZ = 0;
    r.dist = START_D; r.distTarget = START_D;
    r.yaw = 0.32; r.pitchOff = 0;
    const updateCameraPose = () => {
      const cp = Math.cos(r.pitch);
      camera.position.set(r.targetX + Math.sin(r.yaw) * cp * r.dist, Math.sin(r.pitch) * r.dist, r.targetZ + Math.cos(r.yaw) * cp * r.dist);
      camera.lookAt(r.targetX, 0, r.targetZ);
    };
    r.updateCameraPose = updateCameraPose;
    updateCameraPose();

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance", stencil: false, depth: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    mount.appendChild(renderer.domElement);
    r.renderer = renderer;

    const onLost = e => e.preventDefault();
    const onRestored = () => { renderer.setSize(Math.max(2, mount.clientWidth), Math.max(2, mount.clientHeight)); r.updateProjection(); r.refreshChunks(); };
    renderer.domElement.addEventListener("webglcontextlost", onLost, false);
    renderer.domElement.addEventListener("webglcontextrestored", onRestored, false);

    scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x3a5a30, 1.0));
    const sun = new THREE.DirectionalLight(0xffe0b3, 2.2);
    sun.position.set(-60, 120, 40); scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.35);
    fill.position.set(80, 60, -90); scene.add(fill);
    const glow = makeGlowTexture();
    const sunSpr = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
    sunSpr.scale.set(1400, 1400, 1); sunSpr.position.set(-1600, 1500, -1000); scene.add(sunSpr);
    const sunCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: glow, color: 0xfff6dd, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
    sunCore.scale.set(420, 420, 1); sunCore.position.set(-1600, 1500, -1000); scene.add(sunCore);

    const ocean = createAnimatedOcean(); scene.add(ocean); r.ocean = ocean;
    const sel = new THREE.Mesh(new THREE.PlaneGeometry(TILE - 0.09, TILE - 0.09), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide }));
    sel.rotation.x = -Math.PI / 2; sel.visible = false; scene.add(sel); r.selection = sel;

    r.chunks = new Map(); r.chunkQueue = []; r.chunkWanted = new Set();
    r.farMode = false; r.initialReady = false;
    r.raycaster = new THREE.Raycaster(); r.mouse2D = new THREE.Vector2();
    r.updateProjection = () => { camera.aspect = Math.max(2, mount.clientWidth) / Math.max(2, mount.clientHeight); camera.updateProjectionMatrix(); };

    const chunkCenter = key => {
      const far = key[0] === "F";
      const ts = far ? FAR_TILES : CHUNK_TILES;
      const [cr, cc] = key.slice(far ? 1 : 0).split(":").map(Number);
      return { x: (cr + 0.5) * ts * TILE - MCX, z: (cc + 0.5) * ts * TILE - MCZ };
    };
    const chunkDist = key => { const c = chunkCenter(key); const dx = c.x - r.targetX, dz = c.z - r.targetZ; return dx * dx + dz * dz; };
    const desiredChunkKeys = () => {
      const cw = Math.max(2, mount.clientWidth), ch = Math.max(2, mount.clientHeight);
      const a = cw / ch, hh = r.dist * TAN, hw = hh * a;
      if (!isFinite(hh) || !isFinite(hw) || hh <= 0 || hw <= 0) return r.chunkWanted;
      const ts = r.farMode ? FAR_TILES : CHUNK_TILES;
      const radius = Math.max(hw, hh) * 1.4 + ts * TILE;
      const minCol = Math.max(0, Math.floor((r.targetX + MCX - radius) / TILE));
      const maxCol = Math.min(COLS - 1, Math.floor((r.targetX + MCX + radius) / TILE));
      const minRow = Math.max(0, Math.floor((r.targetZ + MCZ - radius) / TILE));
      const maxRow = Math.min(ROWS - 1, Math.floor((r.targetZ + MCZ + radius) / TILE));
      const perRow = Math.ceil(COLS / ts), perCol = Math.ceil(ROWS / ts);
      let wanted = new Set();
      for (let cr = clamp(Math.floor(minRow / ts) - 1, 0, perCol - 1); cr <= clamp(Math.floor(maxRow / ts) + 1, 0, perCol - 1); cr++)
        for (let cc = clamp(Math.floor(minCol / ts) - 1, 0, perRow - 1); cc <= clamp(Math.floor(maxCol / ts) + 1, 0, perRow - 1); cc++)
          wanted.add(chunkKey(cr, cc, r.farMode));
      const cap = r.farMode ? 700 : 240;
      if (wanted.size > cap) {
        const sorted = [...wanted].map(k => ({ k, d: chunkDist(k) })).sort((x, y) => x.d - y.d);
        wanted = new Set(sorted.slice(0, cap).map(o => o.k));
      }
      return wanted;
    };
    r.refreshChunks = () => {
      const wanted = desiredChunkKeys();
      if (!wanted.size) return;
      r.chunkWanted = wanted;
      for (const key of wanted) if (!r.chunks.has(key) && !r.chunkQueue.includes(key)) r.chunkQueue.push(key);
      for (const [key, chunk] of r.chunks) if (!wanted.has(key) || chunk.far !== r.farMode) { removeWorldChunk(scene, chunk); r.chunks.delete(key); }
    };
    const applyLoadedColors = () => { const d = dataRef.current; for (const chunk of r.chunks.values()) applyInstanceColors(chunk.inst, chunk.territories, d.reachable, d.selectedId); };
    const processChunkQueue = () => {
      if (!r.chunkQueue.length) return;
      r.chunkQueue.sort((a, b) => chunkDist(a) - chunkDist(b));
      let budget = r.farMode ? 4 : 2;
      while (budget-- && r.chunkQueue.length) {
        const key = r.chunkQueue.shift();
        if (!r.chunkWanted.has(key) || r.chunks.has(key)) continue;
        const far = key[0] === "F";
        const [cr, cc] = key.slice(far ? 1 : 0).split(":").map(Number);
        r.chunks.set(key, createWorldChunk(scene, dataRef.current.territories, cr, cc, far));
        applyLoadedColors();
      }
      const wantedCount = r.chunkWanted.size;
      let loaded = 0;
      for (const k of r.chunkWanted) if (r.chunks.has(k)) loaded++;
      dataRef.current.onProgress?.(60 + Math.round((loaded / Math.max(1, wantedCount)) * 40));
      if (!r.initialReady && loaded === wantedCount) { r.initialReady = true; dataRef.current.onReady?.(); }
    };
    r.refreshChunks();

    let raf = 0, frames = 0, lastX = r.targetX, lastZ = r.targetZ, lastDist = r.dist;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      r.targetX += (r.panTargetX - r.targetX) * 0.18;
      r.targetZ += (r.panTargetZ - r.targetZ) * 0.18;
      r.dist += (r.distTarget - r.dist) * 0.15;
      r.pitch = clamp(autoPitch(r.dist) + (r.pitchOff || 0), 0.92, 1.55);
      updateCameraPose();
      if (!r.farMode && r.dist > 280) { r.farMode = true; r.refreshChunks(); }
      else if (r.farMode && r.dist < 240) { r.farMode = false; r.refreshChunks(); }
      if (Math.abs(r.dist - lastDist) > 0.5 || Math.abs(r.targetX - lastX) > CHUNK_TILES * TILE * 0.2 || Math.abs(r.targetZ - lastZ) > CHUNK_TILES * TILE * 0.2) {
        lastX = r.targetX; lastZ = r.targetZ; lastDist = r.dist;
        r.refreshChunks();
      }
      processChunkQueue();
      if (r.ocean?.material?.uniforms?.uTime)
        r.ocean.material.uniforms.uTime.value = performance.now() * 0.001;
      if (frames % 12 === 0) {
        const tiles = dataRef.current.territories;
        if (tiles) {
          const cx = Math.round((r.targetX + MCX) / TILE), cz = Math.round((r.targetZ + MCZ) / TILE);
          let f = 0, m = 0, s = 0, tot = 0;
          for (let dr = -6; dr <= 6; dr += 2) for (let dc = -6; dc <= 6; dc += 2) {
            const r2 = cz + dr, c2 = cx + dc;
            tot++;
            if (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) { s++; continue; }
            const tt = tiles[r2 * COLS + c2];
            if (tt.type === "forest") f++;
            else if (tt.type === "mountain") m++;
            else if (tt.type === "water") s++;
          }
          const close = clamp(1 - (r.dist - MIN_D) / (MAX_D - MIN_D), 0, 1); // ближе к земле = громче
          const g = 0.15 + 0.85 * close;
          setAmbience({ forest: (f / tot) * g, mountain: (m / tot) * g, sea: (s / tot) * g });
        }
      }
      if (r.selection.visible) r.selection.material.opacity = 0.10 + 0.07 * Math.sin(performance.now() * 0.004);
      if (r.reachMesh) r.reachMesh.material.opacity = 0.14 + 0.12 * Math.sin(performance.now() * 0.0035);
      // полёты юнитов по дуге
      if (r.flights.length) {
        const now = performance.now();
        for (let i = r.flights.length - 1; i >= 0; i--) {
          const f = r.flights[i];
          const t = (now - f.t0) / f.dur;
          if (t >= 1) {
            scene.remove(f.spr); scene.remove(f.ring);
            f.spr.material.dispose();
            r.flights.splice(i, 1);
          } else {
            const e = t * t * (3 - 2 * t);
            f.spr.position.set(f.from.x + (f.to.x - f.from.x) * e, f.from.y + (f.to.y - f.from.y) * e + Math.sin(e * Math.PI) * 3, f.from.z + (f.to.z - f.from.z) * e);
            f.ring.position.set(f.spr.position.x, f.gy + 0.06, f.spr.position.z);
            f.ring.scale.setScalar(1 + Math.sin(e * Math.PI) * 0.5);
          }
        }
      }
      frames++;
      if (frames % 30 === 0) {
        const details = r.dist < 170, sides = r.dist < 320;
        for (const chunk of r.chunks.values()) {
          if (!chunk.decor) continue;
          for (const m of Object.values(chunk.decor)) if (m) m.visible = details;
          for (const g of Object.values(chunk.inst.groups)) if (g.side) g.side.visible = sides;
        }
      }
      renderer.render(scene, camera);
    };
    animate();
    r.stop = () => cancelAnimationFrame(raf);

    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      if (w < 50 || h < 50) return;
      renderer.setSize(w, h); r.updateProjection(); r.refreshChunks();
    };
    window.addEventListener("resize", onResize);
    return () => {
      r.stop();
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("webglcontextlost", onLost);
      renderer.domElement.removeEventListener("webglcontextrestored", onRestored);
      for (const chunk of r.chunks.values()) removeWorldChunk(scene, chunk);
      r.chunks.clear();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  // цвета + выделение
  useEffect(() => {
    const r = R.current;
    if (!r.chunks) return;
    for (const chunk of r.chunks.values()) applyInstanceColors(chunk.inst, chunk.territories, reachable, selectedId);
    const t = territories.find(x => x.id === selectedId);
    if (t) { const p = toXZ(t.col, t.row); r.selection.position.set(p.x, tileTop(t) + 0.02, p.z); r.selection.visible = true; }
    else r.selection.visible = false;
  }, [territories, reachable, selectedId, rev]);

  // границы территорий
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.borderMesh) { r.scene.remove(r.borderMesh); r.borderMesh.dispose(); r.borderMesh = null; }
    if (!borders || !borders.length) return;
    if (!r.borderGeo) r.borderGeo = new THREE.BoxGeometry(1, 1, 1);
    if (!r.borderMat) r.borderMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95 });
    const m = new THREE.InstancedMesh(r.borderGeo, r.borderMat, borders.length);
    const d = new THREE.Object3D(), c = new THREE.Color();
    borders.forEach((b, i) => {
      d.position.set(b.x, b.y, b.z);
      d.rotation.y = b.vert ? Math.PI / 2 : 0;
      d.scale.set(TILE + 0.10, 0.10, 0.26);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
      if (b.owner === "me") c.setHex(0xffd75e); else c.setHSL(ownerHue(b.owner), 0.85, 0.6);
      m.setColorAt(i, c);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    r.scene.add(m); r.borderMesh = m;
  }, [borders]);

  // пульс доступных клеток
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.reachMesh) { r.scene.remove(r.reachMesh); r.reachMesh.dispose(); r.reachMesh = null; }
    if (!reach || !reach.length) return;
    if (!r.reachGeo) r.reachGeo = new THREE.PlaneGeometry(TILE - 0.25, TILE - 0.25);
    if (!r.reachMat) r.reachMat = new THREE.MeshBasicMaterial({ color: 0xaef7a0, transparent: true, opacity: 0.2, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });
    const m = new THREE.InstancedMesh(r.reachGeo, r.reachMat, reach.length);
    const d = new THREE.Object3D();
    reach.forEach((q, i) => { d.position.set(q.x, q.y, q.z); d.rotation.x = -Math.PI / 2; d.updateMatrix(); m.setMatrixAt(i, d.matrix); });
    m.instanceMatrix.needsUpdate = true;
    r.scene.add(m); r.reachMesh = m;
  }, [reach]);

  // пины юнитов: кольцо + карточка; свои — перетаскиваемые
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.pinGroup) {
      r.scene.remove(r.pinGroup);
      r.pinGroup.traverse(o => { if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
      r.pinGroup = null;
    }
    r.pinSprites = new Map();
    if (!pins || !pins.length) return;
    const group = new THREE.Group();
    const loader = r.texLoader || (r.texLoader = new THREE.TextureLoader());
    for (const q of pins) {
      const col = q.mine ? 0xc4b5fd : hueHex(q.owner);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.85, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2; ring.position.set(q.x, q.y + 0.04, q.z);
      group.add(ring);
      if (q.url) {
        const tex = loader.load(q.url);
        tex.colorSpace = THREE.SRGBColorSpace;
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true }));
        sp.scale.set(q.mine ? 3.0 : 2.6, q.mine ? 3.0 : 2.6, 1);
        sp.position.set(q.x, q.y + 2.2, q.z);
        group.add(sp);
        if (q.mine) r.pinSprites.set(q.uid, { sprite: sp, uid: q.uid, x: q.x, y: q.y, z: q.z, mine: true, pos: q.pos });
      }
    }
    r.scene.add(group); r.pinGroup = group;
  }, [pins]);

  // поселения: разные постройки по биому внутри территорий
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.setlMeshes) { for (const m of r.setlMeshes) { r.scene.remove(m); m.dispose(); } r.setlMeshes = null; }
    if (!settlements) return;
    const d = new THREE.Object3D();
    const meshes = [];
    const build = (geo, material, items, withColor, yOff, lay) => {
      if (!items.length) return;
      const m = new THREE.InstancedMesh(geo, material, items.length);
      items.forEach((it, i) => {
        const [x, y, z, rot, col] = it;
        d.position.set(x, y + yOff, z);
        d.rotation.set(0, rot, lay ? Math.PI / 2 : 0);
        d.updateMatrix();
        m.setMatrixAt(i, d.matrix);
        if (withColor && col != null) m.setColorAt(i, new THREE.Color(col));
      });
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
      r.scene.add(m); meshes.push(m);
    };
    build(decorGeo.houseBase, MATS.houseBase, settlements.houses, false, 0.35);
    build(decorGeo.houseRoof, r.roofMat || (r.roofMat = new THREE.MeshLambertMaterial({ color: 0xffffff })), settlements.roofs, true, 0.95);
    build(decorGeo.barn, MATS.barn, settlements.barns, false, 0.45);
    build(decorGeo.barnRoof, r.barnRoofMat || (r.barnRoofMat = new THREE.MeshLambertMaterial({ color: 0xffffff })), settlements.barnRoofs, true, 1.15);
    build(decorGeo.crop, MATS.crop, settlements.crops, false, 0.07);
    build(decorGeo.log, MATS.trunk, settlements.logs, false, 0.09, true);
    build(decorGeo.stump, MATS.stump, settlements.stumps, false, 0.11);
    build(decorGeo.rockSmall, MATS.rock2, settlements.rocks, false, 0.13);
    r.setlMeshes = meshes;
  }, [settlements]);

  // управление + drag&drop юнитов
  useEffect(() => {
    const mount = mountRef.current, r = R.current;
    if (!mount) return;
    const clampTarget = () => {
      const a = Math.max(2, mount.clientWidth) / Math.max(2, mount.clientHeight);
      const hh = r.distTarget * TAN, hw = hh * a;
      r.panTargetX = clamp(r.panTargetX, -Math.max(MAP_W / 2 + PAN_MARGIN - hw, 0), Math.max(MAP_W / 2 + PAN_MARGIN - hw, 0));
      r.panTargetZ = clamp(r.panTargetZ, -Math.max(MAP_D / 2 + PAN_MARGIN - hh, 0), Math.max(MAP_D / 2 + PAN_MARGIN - hh, 0));
    };
    const panBy = (dx, dy) => {
      const scale = (2 * r.dist * TAN) / Math.max(1, mount.clientHeight);
      const rx = Math.cos(r.yaw), rz = -Math.sin(r.yaw), ux = -Math.sin(r.yaw), uz = -Math.cos(r.yaw);
      r.panTargetX += (-rx * dx + ux * dy) * scale;
      r.panTargetZ += (-rz * dx + uz * dy) * scale;
      clampTarget();
    };
    const zoomBy = f => { r.distTarget = clamp(r.distTarget / f, MIN_D, MAX_D); clampTarget(); };
    if (controlsRef) {
      controlsRef.current = {
        zoomBy,
        focus: (x, z) => { r.panTargetX = x; r.panTargetZ = z; },
        resetView: () => { r.panTargetX = 0; r.panTargetZ = 0; r.distTarget = START_D; r.yaw = 0.32; r.pitchOff = 0; r.updateCameraPose(); }
      };
    }
    const setMouse = (cx, cy) => {
      const rect = mount.getBoundingClientRect();
      r.mouse2D.x = ((cx - rect.left) / rect.width) * 2 - 1;
      r.mouse2D.y = -((cy - rect.top) / rect.height) * 2 + 1;
      r.raycaster.setFromCamera(r.mouse2D, r.camera);
    };
    const pickTile = (cx, cy) => {
      setMouse(cx, cy);
      const targets = [];
      for (const chunk of r.chunks.values()) for (const g of Object.values(chunk.inst.groups)) targets.push(g.top);
      const hits = r.raycaster.intersectObjects(targets, false);
      if (!hits.length || hits[0].instanceId == null) return null;
      const obj = hits[0].object, idx = hits[0].instanceId;
      for (const chunk of r.chunks.values()) for (const g of Object.values(chunk.inst.groups)) if (g.top === obj) return g.arr[idx];
      return null;
    };
    const pickSprite = (cx, cy) => {
      setMouse(cx, cy);
      const sprites = [];
      if (r.pinSprites) for (const o of r.pinSprites.values()) sprites.push(o.sprite);
      const hits = r.raycaster.intersectObjects(sprites, false);
      if (!hits.length) return null;
      for (const o of r.pinSprites.values()) if (o.sprite === hits[0].object) return o;
      return null;
    };
    const groundPoint = (cx, cy, out) => { setMouse(cx, cy); return r.raycaster.ray.intersectPlane(r.groundPlane, out); };

    const buildDragMesh = list => {
      if (r.dragMesh) { r.scene.remove(r.dragMesh); r.dragMesh.dispose(); r.dragMesh = null; }
      if (!list.length) return;
      if (!r.dragGeo) r.dragGeo = new THREE.PlaneGeometry(TILE - 0.2, TILE - 0.2);
      const m = new THREE.InstancedMesh(r.dragGeo, new THREE.MeshBasicMaterial({ color: 0xffd75e, transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }), list.length);
      const d = new THREE.Object3D();
      list.forEach((q, i) => { d.position.set(q.x, q.y + 0.05, q.z); d.rotation.x = -Math.PI / 2; d.updateMatrix(); m.setMatrixAt(i, d.matrix); });
      m.instanceMatrix.needsUpdate = true;
      r.scene.add(m); r.dragMesh = m;
    };
    const startDrag = (o, cx, cy) => {
      const valid = new Set();
      for (const id of dataRef.current.reachable) valid.add(id);
      if (o.pos) {
        const [rr, cc] = o.pos.split("_").map(Number);
        for (const [dr, dc] of [[1,0],[-1,0],[0,1],[0,-1]]) {
          const r2 = rr + dr, c2 = cc + dc;
          if (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) continue;
          const t = dataRef.current.territories[r2 * COLS + c2];
          if (t && t.owner === "me") valid.add(t.id);
        }
      }
      const list = [];
      for (const id of valid) {
        const [rr, cc] = id.split("_").map(Number);
        const t = dataRef.current.territories[rr * COLS + cc];
        if (t) { const p = toXZ(t.col, t.row); list.push({ x: p.x, z: p.z, y: tileTop(t) }); }
      }
      r.drag = { o, valid, lastX: cx, lastY: cy };
      o.sprite.visible = false;
      buildDragMesh(list);
      const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: o.sprite.material.map, transparent: true, opacity: 0.85 }));
      spr.scale.set(3, 3, 1); spr.position.set(o.x, 1.8, o.z);
      const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffd75e, transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
      ring.rotation.x = -Math.PI / 2; ring.position.set(o.x, 0.06, o.z);
      r.scene.add(spr); r.scene.add(ring);
      r.dragGhost = { spr, ring };
    };
    const moveDrag = (cx, cy) => {
      r.drag.lastX = cx; r.drag.lastY = cy;
      const pt = new THREE.Vector3();
      if (groundPoint(cx, cy, pt)) {
        r.dragGhost.spr.position.set(pt.x, 1.8, pt.z);
        r.dragGhost.ring.position.set(pt.x, 0.06, pt.z);
      }
    };
    const endDragVisual = () => {
      if (r.drag && r.drag.o) r.drag.o.sprite.visible = true;
      if (r.dragGhost) { r.scene.remove(r.dragGhost.spr); r.scene.remove(r.dragGhost.ring); r.dragGhost.spr.material.dispose(); r.dragGhost = null; }
      if (r.dragMesh) { r.scene.remove(r.dragMesh); r.dragMesh.dispose(); r.dragMesh = null; }
    };
    const finishDrag = (cx, cy) => {
      const o = r.drag.o, valid = r.drag.valid;
      const t = pickTile(cx, cy);
      const from = { x: o.x, y: o.y + 2.2, z: o.z };
      endDragVisual();
      r.drag = null;
      if (t && valid.has(t.id)) {
        const p = toXZ(t.col, t.row);
        const gy = tileTop(t);
        const to = { x: p.x, y: gy + 2.2, z: p.z };
        const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: o.sprite.material.map, transparent: true }));
        spr.scale.set(3, 3, 1); spr.position.set(from.x, from.y, from.z);
        const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: 0xffd75e, transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
        ring.rotation.x = -Math.PI / 2; ring.position.set(from.x, gy + 0.06, from.z);
        r.scene.add(spr); r.scene.add(ring);
        r.flights.push({ spr, ring, from, to, gy, t0: performance.now(), dur: 650 });
        dataRef.current.onDrop(o.uid, t.id, t.owner === "me" ? "move" : "attack");
      }
    };

    let down = false, moved = false, movedDist = 0, downTime = 0, lastX = 0, lastY = 0, rotating = false;
    const downFn = e => {
      if (e.button !== undefined && e.button === 2) { rotating = true; moved = false; lastX = e.clientX; lastY = e.clientY; mount.style.cursor = "ew-resize"; return; }
      if (e.button !== undefined && e.button !== 0) return;
      const hit = pickSprite(e.clientX, e.clientY);
      if (hit) { startDrag(hit, e.clientX, e.clientY); return; }
      down = true; moved = false; movedDist = 0; downTime = performance.now(); lastX = e.clientX; lastY = e.clientY; mount.style.cursor = "grabbing";
    };
    const moveFn = e => {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
      if (r.drag) { moveDrag(e.clientX, e.clientY); return; }
      if (rotating) {
        r.yaw -= dx * 0.008;
        r.pitchOff = clamp((r.pitchOff || 0) - dy * 0.006, -0.6, 0.6);
        r.updateCameraPose();
        lastX = e.clientX; lastY = e.clientY;
        return;
      }
      if (!down) return;
      movedDist += Math.abs(dx) + Math.abs(dy);
      if (movedDist > 6) moved = true;
      panBy(dx, dy);
      lastX = e.clientX; lastY = e.clientY;
    };
    const upFn = e => {
      if (r.drag) { finishDrag(e.clientX, e.clientY); return; }
      if (rotating) { rotating = false; mount.style.cursor = "grab"; return; }
      if (!down) return;
      if (!moved && performance.now() - downTime < 700) {
        const t = pickTile(e.clientX, e.clientY);
        if (t) dataRef.current.onSelect(t);
      }
      down = false; mount.style.cursor = "grab";
    };
    const wheelFn = e => { e.preventDefault(); zoomBy(Math.exp(-e.deltaY * 0.0012)); };
    const dblFn = () => zoomBy(1.5);
    const touchStart = e => {
      if (e.touches.length === 1) {
        const hit = pickSprite(e.touches[0].clientX, e.touches[0].clientY);
        if (hit) { startDrag(hit, e.touches[0].clientX, e.touches[0].clientY); return; }
        r.touch = { x: e.touches[0].clientX, y: e.touches[0].clientY, m: false, d: 0, t: Date.now() };
      } else if (e.touches.length >= 2) {
        r.touch = null;
        const dx = e.touches[0].clientX - e.touches[1].clientX, dy = e.touches[0].clientY - e.touches[1].clientY;
        r.pinch = Math.hypot(dx, dy);
        r.twoFinger = { dx, dy, cy: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
      }
    };
    const touchMove = e => {
      e.preventDefault();
      if (r.drag && e.touches.length === 1) { moveDrag(e.touches[0].clientX, e.touches[0].clientY); return; }
      if (e.touches.length === 1 && r.touch) {
        const dx = e.touches[0].clientX - r.touch.x, dy = e.touches[0].clientY - r.touch.y;
        r.touch.d += Math.abs(dx) + Math.abs(dy);
        if (r.touch.d > 12) r.touch.m = true;
        panBy(dx, dy);
        r.touch.x = e.touches[0].clientX; r.touch.y = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX, dy = e.touches[0].clientY - e.touches[1].clientY;
        const d = Math.hypot(dx, dy);
        if (r.pinch) zoomBy(Math.exp((d - r.pinch) * 0.002));
        if (r.twoFinger) {
          const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
          r.pitchOff = clamp((r.pitchOff || 0) - (cy - r.twoFinger.cy) * 0.002, -0.6, 0.6);
          r.yaw -= (dx - r.twoFinger.dx) * 0.002;
          r.updateCameraPose();
        }
        r.pinch = d;
        r.twoFinger = { dx, dy, cy: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
      }
    };
    const touchEnd = () => {
      if (r.drag) { finishDrag(r.drag.lastX, r.drag.lastY); return; }
      if (r.touch && !r.touch.m && r.touch.d < 14 && Date.now() - r.touch.t < 700) {
        const t = pickTile(r.touch.x, r.touch.y);
        if (t) dataRef.current.onSelect(t);
      }
      r.touch = null; r.pinch = 0; r.twoFinger = null;
    };
    const leaveFn = () => { down = false; rotating = false; mount.style.cursor = "grab"; };
    const contextFn = e => e.preventDefault();
    mount.style.touchAction = "none"; mount.style.cursor = "grab";
    mount.addEventListener("mousedown", downFn); mount.addEventListener("mousemove", moveFn);
    mount.addEventListener("mouseup", upFn); mount.addEventListener("mouseleave", leaveFn);
    mount.addEventListener("wheel", wheelFn, { passive: false }); mount.addEventListener("dblclick", dblFn);
    mount.addEventListener("contextmenu", contextFn); mount.addEventListener("touchstart", touchStart, { passive: true });
    mount.addEventListener("touchmove", touchMove, { passive: false }); mount.addEventListener("touchend", touchEnd);
    return () => {
      if (controlsRef) controlsRef.current = null;
      mount.removeEventListener("mousedown", downFn); mount.removeEventListener("mousemove", moveFn);
      mount.removeEventListener("mouseup", upFn); mount.removeEventListener("mouseleave", leaveFn);
      mount.removeEventListener("wheel", wheelFn); mount.removeEventListener("dblclick", dblFn);
      mount.removeEventListener("contextmenu", contextFn); mount.removeEventListener("touchstart", touchStart);
      mount.removeEventListener("touchmove", touchMove); mount.removeEventListener("touchend", touchEnd);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#0a1620" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", left: 12, bottom: 64, fontSize: 10, color: "#ffffff66", pointerEvents: "none" }}>
        Тяни — панорама · ПКМ — поворот · Колесо/пинч — зум · Своего юнита можно перетащить
      </div>
    </div>
  );
}

// ================= UI =================
function Btn({ onClick, disabled, variant = "primary", children, style }) {
  const bg = disabled ? PAL.border : variant === "success" ? "#087f3f" : variant === "danger" ? "#b93838" : variant === "ghost" ? "transparent" : PAL.accent;
  return <button onClick={disabled ? undefined : onClick} style={{ width: "100%", padding: "12px 0", border: variant === "ghost" ? `1px solid ${PAL.border}` : "none", borderRadius: 11, fontWeight: 800, fontSize: 14, cursor: disabled ? "not-allowed" : "pointer", background: bg, color: disabled ? PAL.muted : "#fff", ...style }}>{children}</button>;
}
function ZoomBtn({ onClick, children }) {
  return <button onClick={onClick} style={{ width: 42, height: 42, borderRadius: 12, border: "1px solid rgba(255,255,255,.14)", background: "rgba(8,16,16,.82)", color: "#e6eee8", fontSize: 20, fontWeight: 800, cursor: "pointer", lineHeight: 1 }}>{children}</button>;
}
const hudBtn = { width: 38, height: 38, borderRadius: 10, border: "1px solid rgba(255,255,255,.12)", background: "rgba(8,16,16,.82)", fontSize: 17, cursor: "pointer" };
function Hud({ profile, supplyEta, now, onInv, onCase, onSettings }) {
  let timer = "";
  if (profile.supplies < profile.supplyMax && supplyEta) {
    const s = Math.max(0, Math.ceil((supplyEta - now) / 1000));
    timer = ` (${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")})`;
  }
  return (
    <div style={{ position: "absolute", left: 12, top: 12, display: "flex", gap: 8, alignItems: "center" }}>
      <div style={{ padding: "7px 12px", borderRadius: 10, background: "rgba(8,16,16,.82)", border: "1px solid rgba(255,255,255,.08)", fontSize: 12, fontWeight: 800, pointerEvents: "none" }}>
        🪙 {profile.coins}{profile.income > 0 && <span style={{ color: "#7fd18a", fontWeight: 600 }}> +{profile.income}/м</span>}
        <span style={{ marginLeft: 12 }}>⚡ {profile.supplies}/{profile.supplyMax}<span style={{ color: PAL.muted, fontWeight: 600 }}>{timer}</span></span>
        <span style={{ marginLeft: 12 }}>🏔️ {profile.owned.length}/{MAX_OWN}</span>
      </div>
      <button onClick={onInv} style={hudBtn}>🎒</button>
      <button onClick={onCase} style={hudBtn}>📦</button>
      <button onClick={onSettings} style={hudBtn}>⚙️</button>
    </div>
  );
}
function UnitChip({ u, sel, onClick }) {
  const dead = u.hp <= 0;
  return (
    <div onClick={dead ? undefined : onClick} style={{ minWidth: 86, borderRadius: 12, padding: 8, cursor: dead ? "not-allowed" : "pointer", border: sel ? "2px solid " + PAL.accent : "1px solid " + PAL.border, background: dead ? "#1a1212" : PAL.bg, opacity: dead ? 0.5 : 1, textAlign: "center", flexShrink: 0 }}>
      <img src={unitImg(u)} onError={e => e.target.style.display = "none"} style={{ width: 44, height: 44, borderRadius: 8, objectFit: "cover", display: "block", margin: "0 auto 4px" }} />
      <div style={{ fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", overflow: "hidden" }}>{u.name}</div>
      <div style={{ fontSize: 9, color: PAL.textD }}>⚔️{Math.max(u.air, u.ground)} 🛡️{u.protection}</div>
      <div style={{ height: 5, background: "#1c2c23", borderRadius: 4, marginTop: 4 }}>
        <div style={{ height: "100%", width: u.hp + "%", borderRadius: 4, background: u.hp > 50 ? "#22c55e" : u.hp > 25 ? "#f5c451" : "#ef4444" }} />
      </div>
      {dead && <div style={{ fontSize: 9, color: PAL.red, marginTop: 2 }}>ранен</div>}
    </div>
  );
}
function Modal({ title, onClose, children }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.72)", zIndex: 50, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div style={{ background: PAL.surf, borderRadius: "20px 20px 0 0", padding: 18, width: "100%", borderTop: "1px solid " + PAL.border, maxHeight: "85dvh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>{title}</div>
        {children}
        <Btn variant="ghost" onClick={onClose} style={{ marginTop: 10 }}>Закрыть</Btn>
      </div>
    </div>
  );
}
function TerritoryModal({ t, building, profile, selUnit, setSelUnit, onAttack, onBuild, onClose, result, canInteract, busy, freePlace, idle, onPlace }) {
  const ti = TYPES[t.type], isOwn = t.owner === "me";
  const slots = BUILD_SLOTS[t.type] || [];
  const usable = profile.units.filter(u => u.hp > 0);
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.72)", zIndex: 50, display: "flex", alignItems: "flex-end" }} onClick={onClose}>
      <div style={{ background: PAL.surf, borderRadius: "20px 20px 0 0", padding: 18, width: "100%", borderTop: "1px solid " + PAL.border, maxHeight: "80dvh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 22, fontWeight: 900 }}>{ti.e} {ti.n}</div>
        <div style={{ fontSize: 12, color: PAL.textD, margin: "4px 0 12px" }}>
          {building ? `${BUILDINGS_UI[building.b].i} ${BUILDINGS_UI[building.b].n} — ${BUILDINGS_UI[building.b].d}` :
            ti.bonus ? `+${Math.round((ti.m - 1) * 100)}% ${SNAME[ti.bonus]} для защиты` : ti.impassable ? "Непроходимая зона" : "Обычная местность"}
          {(t.type === "field" || t.type === "hills") && <span style={{ color: "#7fd18a" }}> · +1 🪙/мин пассивно</span>}
        </div>
        {result && !result.error && (
          <div style={{ padding: 12, borderRadius: 11, marginBottom: 10, background: result.win ? "#092613" : "#2d0a0a", border: `1px solid ${result.win ? "#1d9b55" : "#c43838"}` }}>
            <b>{result.win ? "🏆 Захвачено" : "💀 Неудача"}</b>
            <div style={{ fontSize: 12, color: PAL.textD, marginTop: 4 }}>{SICON[result.atkStat]} {result.ap} vs {SICON[result.defStat]} {result.dp} · юнит −{result.dmg} HP</div>
          </div>
        )}
        {result?.error && <div style={{ fontSize: 12, color: PAL.red, marginBottom: 10 }}>⚠️ {result.error}</div>}
        {isOwn && (
          <div style={{ fontSize: 11, color: PAL.textD, marginBottom: 10 }}>💡 Своих юнитов на карте можно просто перетаскивать пальцем/мышью на соседние клетки.</div>
        )}
        {isOwn && idle.length > 0 && (
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Резерв — поставить сюда (📍):</div>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6 }}>
              {idle.map(u => (
                <div key={u.uid} style={{ position: "relative" }}>
                  <UnitChip u={u} />
                  <button onClick={() => onPlace(u.uid)} style={{ position: "absolute", right: 2, top: 2, width: 26, height: 26, borderRadius: 8, border: "none", background: "#087f3f", color: "#fff", fontWeight: 800, cursor: "pointer" }}>📍</button>
                </div>
              ))}
            </div>
          </div>
        )}
        {isOwn && !building && slots.length > 0 && (
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Построить ({profile.coins} 🪙):</div>
            {slots.map(b => (
              <Btn key={b} disabled={profile.coins < BUILDINGS_UI[b].cost || busy} onClick={() => onBuild(b)} style={{ marginBottom: 6 }}>
                {BUILDINGS_UI[b].i} {BUILDINGS_UI[b].n} — {BUILDINGS_UI[b].cost} 🪙
                <div style={{ fontSize: 10, fontWeight: 500, opacity: .8 }}>{BUILDINGS_UI[b].d}</div>
              </Btn>
            ))}
          </div>
        )}
        {!isOwn && !ti.impassable && (
          <>
            {!canInteract && <div style={{ fontSize: 12, color: PAL.muted, marginBottom: 8 }}>Можно атаковать только соседние со своими клетки (или перетащи юнита на клетку).</div>}
            {canInteract && freePlace && <div style={{ fontSize: 12, color: PAL.gold, marginBottom: 8 }}>🎁 Первая клетка — куда угодно!</div>}
            {canInteract && (
              <>
                <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Юнит в атаку (⚡−1):</div>
                <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 8 }}>
                  {usable.length === 0 && <div style={{ fontSize: 12, color: PAL.muted }}>Нет юнитов — открой кейс 📦</div>}
                  {usable.map(u => <UnitChip key={u.uid} u={u} sel={selUnit === u.uid} onClick={() => setSelUnit(u.uid)} />)}
                </div>
                <Btn variant="success" disabled={busy || !selUnit || usable.length === 0 || profile.supplies < 1} onClick={() => onAttack(selUnit)}>
                  {busy ? "Атака…" : "🏳️ Захватить (⚡1)"}
                </Btn>
                {profile.supplies < 1 && <div style={{ fontSize: 11, color: PAL.gold, marginTop: 6 }}>Припасы кончились — жди восстановления</div>}
              </>
            )}
          </>
        )}
        <Btn variant="ghost" onClick={onClose} style={{ marginTop: 8 }}>Закрыть</Btn>
      </div>
    </div>
  );
}
function InventoryModal({ profile, onClose }) {
  return (
    <Modal title="🎒 Инвентарь" onClose={onClose}>
      {profile.units.length === 0 && <div style={{ color: PAL.muted, fontSize: 13 }}>Пусто. Открой кейс сервера 📦</div>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))", gap: 10 }}>
        {profile.units.map(u => (
          <div key={u.uid} style={{ background: PAL.bg, borderRadius: 12, padding: 8, textAlign: "center", border: "1px solid " + PAL.border }}>
            <img src={unitImg(u)} onError={e => e.target.style.display = "none"} style={{ width: "100%", aspectRatio: "1", borderRadius: 8, objectFit: "cover" }} />
            <div style={{ fontSize: 11, fontWeight: 800, marginTop: 4 }}>{u.name}</div>
            <div style={{ fontSize: 9, color: PAL.muted }}>{u.server}</div>
            <div style={{ fontSize: 10, marginTop: 2 }}>🌪️{u.air} ⛏️{u.ground}/10 🛡️{u.protection}/10</div>
            <div style={{ fontSize: 10, color: u.hp > 0 ? "#7fd18a" : PAL.red }}>{u.hp > 0 ? `HP ${u.hp}` : "ранен"}</div>
            <div style={{ fontSize: 9, color: PAL.textD, marginTop: 2 }}>{u.pos ? "🗺️ на карте" : "💤 в резерве"}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
function CaseModal({ servers, caseCost, coins, onOpen, onClose }) {
  const [srv, setSrv] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [res, setRes] = useState(null), [err, setErr] = useState("");
  const cur = srv || servers[0]?.name;
  const open = async () => {
    setPhase("rolling"); setErr(""); setRes(null);
    try {
      const d = await onOpen(cur);
      setTimeout(() => { setRes(d); setPhase("done"); }, 900);
    } catch (e) { setErr(e.message); setPhase("idle"); }
  };
  return (
    <Modal title="📦 Кейсы серверов" onClose={onClose}>
      <style>{`@keyframes caseShake{0%,100%{transform:rotate(0)}20%{transform:rotate(-7deg)}40%{transform:rotate(7deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(5deg)}}@keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12) rotateY(0deg);opacity:1}100%{transform:scale(1)}}`}</style>
      {servers.length === 0 && <div style={{ color: PAL.muted, fontSize: 13, marginBottom: 10 }}>На сервере пока нет папок с карточками.</div>}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
        {servers.map(s => (
          <button key={s.name} onClick={() => setSrv(s.name)} style={{ padding: "6px 12px", borderRadius: 9, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1px solid " + (cur === s.name ? PAL.accent : PAL.border), background: cur === s.name ? "#2a1d4d" : "transparent", color: PAL.text }}>
            {pretty(s.name)} · {s.count} 👤
          </button>
        ))}
      </div>
      {phase === "rolling" && (
        <div style={{ textAlign: "center", padding: 18, background: PAL.bg, borderRadius: 14, border: "1px solid " + PAL.gold, marginBottom: 10 }}>
          <div style={{ fontSize: 46, display: "inline-block", animation: "caseShake .5s ease infinite" }}>📦</div>
          <div style={{ fontSize: 12, color: PAL.gold, marginTop: 6 }}>Открываем…</div>
        </div>
      )}
      {phase === "done" && res && (
        <div style={{ textAlign: "center", padding: 14, background: PAL.bg, borderRadius: 14, border: "1px solid " + PAL.accent, marginBottom: 10, animation: "cardPop .45s ease" }}>
          <img src={unitImg(res.unit)} onError={e => e.target.style.display = "none"} style={{ width: 90, height: 90, borderRadius: 12, objectFit: "cover" }} />
          <div style={{ fontSize: 16, fontWeight: 900, marginTop: 6 }}>✨ {res.unit.name}</div>
          <div style={{ fontSize: 11, color: PAL.textD }}>🌪️ {res.unit.air} · ⛏️ {res.unit.ground}/10 · 🛡️ {res.unit.protection}/10</div>
        </div>
      )}
      {err && <div style={{ color: PAL.red, fontSize: 12, marginBottom: 8 }}>⚠️ {err}</div>}
      <Btn disabled={phase === "rolling" || !cur || coins < caseCost} onClick={() => { playClick(); open(); }}>
        {phase === "rolling" ? "Открываем…" : `Открыть кейс «${pretty(cur)}» — ${caseCost} 🪙`}
      </Btn>
    </Modal>
  );
}

function SettingsModal({ onClose }) {
  const [v, setV] = useState(getVolumes());
  const upd = (k, val) => {
    const nv = { ...v, [k]: val };
    setV(nv); setVolumes(nv);
  };
  const Row = ({ name, k }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 4 }}>{name}: {Math.round(v[k] * 100)}%</div>
      <input type="range" min="0" max="100" value={Math.round(v[k] * 100)}
        onChange={e => upd(k, Number(e.target.value) / 100)}
        onPointerUp={() => playClick()}
        style={{ width: "100%" }} />
    </div>
  );
  return (
    <Modal title="⚙️ Настройки звука" onClose={onClose}>
      <Row name="🔊 Общая громкость" k="master" />
      <Row name="🖱️ Звуки интерфейса (click)" k="ui" />
      <Row name="🌍 Звуки биомов (лес/горы/море)" k="amb" />
      <div style={{ fontSize: 11, color: PAL.textD }}>Настройки сохраняются на устройстве.</div>
    </Modal>
  );
}

function BootScreen({ progress, text }) {
  const p = clamp(progress, 0, 100);
  return (
    <div style={{ position: "fixed", inset: 0, background: "radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)", color: "#e6eee8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system,system-ui,sans-serif", zIndex: 70 }}>
      <div style={{ width: "min(440px,84vw)", textAlign: "center" }}>
        <div style={{ fontSize: 42, marginBottom: 12 }}>🏔️</div>
        <div style={{ fontSize: 25, fontWeight: 900 }}>Загрузка мира</div>
        <div style={{ fontSize: 13, color: "#a9b8ae", marginTop: 8, minHeight: 20 }}>{text}</div>
        <div style={{ height: 8, background: "#1c2c23", borderRadius: 99, marginTop: 24, overflow: "hidden", border: "1px solid #2b4232" }}>
          <div style={{ height: "100%", width: `${p}%`, background: "linear-gradient(90deg,#8b5cf6,#c4b5fd)", transition: "width .18s ease" }} />
        </div>
        <div style={{ fontSize: 12, color: "#6f8277", marginTop: 9 }}>{p}%</div>
      </div>
    </div>
  );
}

// ================= APP =================
const MOCK_PROFILE = { id: "dev", name: "Dev", coins: 1000, supplies: 12, supplyMax: 12, supplyNextIn: 0, income: 0, heal: 0, units: [{ uid: "u1", name: "Тест", server: "dev", file: "test.png", air: 5, ground: 6, protection: 4, hp: 100, pos: null }], owned: [], buildings: {} };

export default function App() {
  const [territories, setTerritories] = useState(null);
  const [load, setLoad] = useState(0);
  const [gameReady, setGameReady] = useState(false), [visibleLoad, setVisibleLoad] = useState(60);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [rev, setRev] = useState(0);
  const [profile, setProfile] = useState(null);
  const [overlay, setOverlay] = useState({ owners: {}, buildings: {}, units: [] });
  const [servers, setServers] = useState([]), [caseCost, setCaseCost] = useState(120);
  const [supplyEta, setSupplyEta] = useState(0);
  const [selUnit, setSelUnit] = useState(null);
  const [screen, setScreen] = useState(null);
  const [busy, setBusy] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [note, setNote] = useState("");
  const controlsRef = useRef(null);
  const flash = msg => { setNote(msg); setTimeout(() => setNote(""), 2600); };

  useEffect(() => {
    let alive = true;
    genMapProgressive(p => { if (alive) setLoad(p); }).then(map => { if (alive) setTerritories(map); });
    return () => { alive = false; };
  }, []);

  const syncProfile = p => { setProfile(p); setSupplyEta(Date.now() + (p.supplyNextIn || 0) * 1000); };
  const setOv = d => setOverlay({ owners: d.owners || {}, buildings: d.buildings || {}, units: d.units || [] });
  const refreshState = () => api.state().then(d => { syncProfile(d.profile); setOv(d); }).catch(() => {});

  useEffect(() => {
    api.init().then(d => {
      syncProfile(d.profile); setOv(d);
      setServers(d.servers); setCaseCost(d.caseCost || 120);
      const first = d.profile.units.find(u => u.hp > 0);
      if (first) setSelUnit(first.uid);
    }).catch(e => { console.warn("Сервер недоступен:", e.message); syncProfile(MOCK_PROFILE); });
  }, []);

  useEffect(() => {
    if (!territories) return;
    applyOverlay(territories, overlay.owners);
    setRev(r => r + 1);
  }, [territories, overlay]);

  useEffect(() => {
    if (!profile) return;
    const id = setInterval(refreshState, 20000);
    return () => clearInterval(id);
  }, [!!profile]);

  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(id); }, []);

  useEffect(() => {
    const start = () => {
      startAmbience();
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", start);
    return () => { window.removeEventListener("pointerdown", start); window.removeEventListener("keydown", start); };
  }, []);

  const reachable = useMemo(() => territories ? getReachable(territories) : new Set(), [territories, rev]);

  const borders = useMemo(() => {
    if (!territories) return [];
    const out = [];
    const get = (r2, c2) => (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) ? null : territories[r2 * COLS + c2];
    for (const t of territories) {
      if (!t.owner) continue;
      const p = toXZ(t.col, t.row), y = tileTop(t) + 0.06;
      const nN = get(t.row - 1, t.col), nS = get(t.row + 1, t.col), nW = get(t.row, t.col - 1), nE = get(t.row, t.col + 1);
      if (!nN || nN.owner !== t.owner) out.push({ x: p.x, z: p.z - TILE / 2, y, vert: false, owner: t.owner });
      if (!nS || nS.owner !== t.owner) out.push({ x: p.x, z: p.z + TILE / 2, y, vert: false, owner: t.owner });
      if (!nW || nW.owner !== t.owner) out.push({ x: p.x - TILE / 2, z: p.z, y, vert: true, owner: t.owner });
      if (!nE || nE.owner !== t.owner) out.push({ x: p.x + TILE / 2, z: p.z, y, vert: true, owner: t.owner });
    }
    return out;
  }, [territories, rev]);

  // поселения по биому
  const settlements = useMemo(() => {
    if (!territories) return null;
    const S = { houses: [], roofs: [], barns: [], barnRoofs: [], crops: [], logs: [], stumps: [], rocks: [] };
    for (const t of territories) {
      if (!t.owner || t.type === "water") continue;
      const p = toXZ(t.col, t.row), y = tileTop(t);
      const h1 = (hash2(t.row, t.col, 660) % 1000 / 1000 - 0.5) * 0.8;
      const h2 = (hash2(t.row, t.col, 661) % 1000 / 1000 - 0.5) * 0.8;
      const rot = Math.floor(hash2(t.row, t.col, 662) % 4) * Math.PI / 2;
      const col = t.owner === "me" ? 0xffd75e : hueHex(t.owner);
      const cxo = Math.cos(rot), czo = Math.sin(rot);
      if (t.type === "field") {
        S.barns.push([p.x + h1 * 0.5 + cxo * 0.7, y, p.z + h2 * 0.5 + czo * 0.7, rot]);
        S.barnRoofs.push([p.x + h1 * 0.5 + cxo * 0.7, y, p.z + h2 * 0.5 + czo * 0.7, rot, col]);
        for (let i = -1; i <= 1; i++) S.crops.push([p.x - cxo * 0.7 + (-czo) * i * 0.45, y, p.z - czo * 0.7 + cxo * i * 0.45, rot]);
      } else if (t.type === "hills") {
        S.houses.push([p.x + h1 * 0.6, y, p.z + h2 * 0.6, rot]);
        S.roofs.push([p.x + h1 * 0.6, y, p.z + h2 * 0.6, rot, col]);
        S.rocks.push([p.x - 0.8, y, p.z + 0.5]); S.rocks.push([p.x + 0.7, y, p.z - 0.7]);
      } else if (t.type === "forest") {
        S.stumps.push([p.x + h1, y, p.z + h2]);
        S.logs.push([p.x - 0.6, y, p.z + 0.4, rot]);
        S.logs.push([p.x - 0.6, y + 0.16, p.z + 0.4, rot + 0.4]);
      } else {
        S.houses.push([p.x + h1, y, p.z + h2, rot]);
        S.roofs.push([p.x + h1, y, p.z + h2, rot, col]);
      }
    }
    return S;
  }, [territories, rev]);

  // пины юнитов
  const pins = useMemo(() => {
    if (!territories) return [];
    const out = [];
    for (const u of (overlay.units || [])) {
      const [r, c] = u.tileId.split("_").map(Number);
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
      const t = territories[r * COLS + c];
      if (!t) continue;
      const p = toXZ(t.col, t.row);
      out.push({ uid: u.uid, pos: u.tileId, x: p.x, z: p.z, y: tileTop(t), mine: u.own === "me", owner: u.own, url: u.file ? `/files/${encodeURIComponent(u.server)}/${encodeURIComponent(u.file)}` : null });
    }
    return out;
  }, [territories, overlay, rev]);

  const reachList = useMemo(() => {
    if (!territories) return [];
    const out = [];
    for (const t of territories) {
      if (!reachable.has(t.id)) continue;
      const p = toXZ(t.col, t.row);
      out.push({ x: p.x, z: p.z, y: tileTop(t) + 0.05 });
    }
    return out;
  }, [territories, reachable, rev]);

  const freePlace = !!profile && profile.owned.length === 0;

  const doAttack = async unitId => {
    if (!selected || busy) return;
    playClick();
    setBusy(true); setResult(null);
    try {
      const d = await api.attack(selected.id, unitId);
      setResult(d.result); syncProfile(d.profile);
      if (d.result.win) flash("🏆 Захвачено! Юнит встал на клетку");
      refreshState();
      setSelected(null);
    } catch (e) { setResult({ error: e.message }); }
    setBusy(false);
  };
  const doBuild = async b => {
    if (!selected || busy) return;
    playBuild();
    setBusy(true);
    try {
      const d = await api.build(selected.id, b);
      syncProfile(d.profile);
      setOverlay(o => ({ ...o, buildings: { ...o.buildings, [d.building.tileId]: { b: d.building.b, own: "me" } } }));
      flash("🏗️ Построено: " + BUILDINGS_UI[b].n);
    } catch (e) { setResult({ error: e.message }); }
    setBusy(false);
  };
  const doPlace = async uid => {
    if (!selected) return;
    try {
      const d = await api.place(uid, selected.id);
      syncProfile(d.profile);
      flash("📍 Юнит размещён на карте");
      refreshState();
      setSelected(null);
    } catch (e) { flash("⚠️ " + e.message); }
  };
  const onDrop = async (unitId, tileId, kind) => {
    try {
      const d = kind === "move" ? await api.move(unitId, tileId) : await api.attack(tileId, unitId);
      if (d.profile) syncProfile(d.profile);
      if (kind === "move") flash("➡️ Юнит перешёл (⚡−1)");
      else if (d.result?.win) flash("🏆 Захвачено!");
      else if (d.result) flash("💀 Неудача");
      refreshState();
    } catch (e) { flash("⚠️ " + e.message); refreshState(); }
  };

  if (!territories) return <BootScreen progress={load} text={load < 55 ? "Создаём карту…" : "Возводим горные хребты…"} />;

  const canInteractNow = selected ? (freePlace ? (!selected.owner && !TYPES[selected.type].impassable) : reachable.has(selected.id)) : false;
  const goHome = () => {
    const firstId = profile?.owned?.[0];
    const t = firstId ? territories.find(x => x.id === firstId) : null;
    if (t) { const p = toXZ(t.col, t.row); controlsRef.current?.focus(p.x, p.z); }
    else controlsRef.current?.resetView();
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: PAL.bg, color: PAL.text, fontFamily: "-apple-system,system-ui,sans-serif", overflow: "hidden" }}>
      <MapScreen3D territories={territories} reachable={reachable} selectedId={selected?.id} rev={rev}
        borders={borders} reach={reachList} pins={pins} settlements={settlements} onDrop={onDrop}
        onProgress={setVisibleLoad} onReady={() => { setVisibleLoad(100); setGameReady(true); }}
        onSelect={t => { playClick(); setSelected(t); setResult(null); }} controlsRef={controlsRef} />
      {!gameReady && <BootScreen progress={visibleLoad} text="Подготавливаем видимую область…" />}
      {profile && <Hud profile={profile} supplyEta={supplyEta} now={now}
        onInv={() => { playClick(); setScreen("inv"); }}
        onCase={() => { playClick(); setScreen("case"); }}
        onSettings={() => { playClick(); setScreen("settings"); }} />}
      {note && (
        <div style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", background: "rgba(8,16,16,.92)", border: "1px solid " + PAL.border, borderRadius: 10, padding: "6px 14px", fontSize: 12, zIndex: 60, pointerEvents: "none", whiteSpace: "nowrap" }}>{note}</div>
      )}
      <div style={{ position: "absolute", right: 12, bottom: 34, display: "flex", flexDirection: "column", gap: 8 }}>
        <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1.35)}>＋</ZoomBtn>
        <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1 / 1.35)}>－</ZoomBtn>
        <ZoomBtn onClick={goHome}>⌂</ZoomBtn>
      </div>
      {selected && profile && (
        <TerritoryModal t={selected} building={overlay.buildings[selected.id]} profile={profile}
          selUnit={selUnit} setSelUnit={setSelUnit} onAttack={doAttack} onBuild={doBuild} busy={busy}
          onClose={() => { setSelected(null); setResult(null); }}
          result={result} canInteract={canInteractNow} freePlace={freePlace}
          idle={profile.units.filter(u => !u.pos)} onPlace={doPlace} />
      )}
      {screen === "inv" && profile && <InventoryModal profile={profile} onClose={() => setScreen(null)} />}
      {screen === "settings" && <SettingsModal onClose={() => setScreen(null)} />}
      {screen === "case" && profile && (
        <CaseModal servers={servers} caseCost={caseCost} coins={profile.coins} onClose={() => setScreen(null)}
          onOpen={async srv => { const d = await api.openCase(srv); syncProfile(d.profile); return d; }} />
      )}
    </div>
  );
}