import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { api, unitImg } from "./api";
import { playClick, playBuild, startAmbience, setAmbience, getVolumes, setVolumes } from "./sounds";

const COLS = 800, ROWS = 600;
const MAX_OWN = 300;
const COLONY_COST = 2000;
const PAL = { bg: "#071018", surf: "#0b1216", border: "rgba(255,255,255,.14)", accent: "#8b5cf6", red: "#ef4444", gold: "#f5c451", green: "#7fd18a", muted: "#6f8277", text: "#e6eee8", textD: "#a9b8ae" };
const TYPES = {
  meadow:   { n: "Луг",  e: "🌿", bonus: null,      m: 1.00, impassable: false, top: 0x6fae4e, side: 0x47772f },
  forest:   { n: "Лес",  e: "🌲", bonus: "defense", m: 1.22, impassable: false, top: 0x55923d, side: 0x38622a },
  hills:    { n: "Холмы", e: "⛰️", bonus: "defense", m: 1.34, impassable: false, top: 0x79a44b, side: 0x527034 },
  field:    { n: "Поля", e: "🌾", bonus: null,      m: 1.00, impassable: false, top: 0xcdb94a, side: 0x93822e },
  swamp:    { n: "Болота", e: "🪷", bonus: "air",   m: 1.18, impassable: false, top: 0x67935a, side: 0x44653b },
  mountain: { n: "Высокие горы", e: "🏔️", bonus: "defense", m: 1.60, impassable: true, top: 0x8d928a, side: 0x565c57 },
  water:    { n: "Море", e: "🌊", bonus: null,      m: 1.00, impassable: true,  top: 0x0e3d55, side: 0x0e3d55 }
};
const SNAME = { attack: "Атака", defense: "Защита", air: "Воздух" };
const SICON = { attack: "⚔️", defense: "🛡️", air: "🌪️" };
const TILE = 3.4;
const MAP_W = COLS * TILE, MAP_D = ROWS * TILE;
const MCX = MAP_W / 2, MCZ = MAP_D / 2;
const BASE_H = 0.16, TOP_THICK = 0.06, SURFACE_EPS = 0.035;
const CHUNK_TILES = 24, FAR_TILES = 64;
const MIN_D = 45, MAX_D = 320, START_D = 240;
const FOV = 50, TAN = Math.tan((FOV / 2) * Math.PI / 180);
const autoPitch = d => 1.48 - clamp((d - MIN_D) / (MAX_D - MIN_D), 0, 1) * 0.53;
const PAN_MARGIN = 260;
const FOG_COLOR = 0x0c1f27, FOG_NEAR = 220, FOG_FAR = 2100;
const BUILDINGS_UI = {
  barn:   { n: "Амбар", i: "🏚️", cost: 140, d: "+2 🪙/мин" },
  medbay: { n: "Медотсек", i: "⛑️", cost: 160, d: "+8 HP юнитам/мин" },
  fort:   { n: "Укрепления", i: "🛡️", cost: 90, d: "+35% защиты клетки" },
  mine:   { n: "Шахта", i: "⛏️", cost: 200, d: "+4 🪙/мин" }
};
const BUILD_SLOTS = { field: ["barn", "medbay"], meadow: ["fort"], hills: ["mine"] };
const pretty = n => n ? n.charAt(0).toUpperCase() + n.slice(1) : n;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ownerHue = o => { let h = 0; for (let i = 0; i < o.length; i++) h = (h * 31 + o.charCodeAt(i)) >>> 0; return (h % 360) / 360; };
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
const farSideGeo = new THREE.BoxGeometry(TILE - 0.34, 1, TILE - 0.34);
// дальние чанки: плитки ЧУТЬ шире (без щелей → нет муара/ряби на отдалении)
const farTopGeo = new THREE.BoxGeometry(TILE + 0.06, 1, TILE + 0.06);
const farMat = new THREE.MeshLambertMaterial({ color: 0xffffff, flatShading: true, polygonOffset: true, polygonOffsetFactor: 2, polygonOffsetUnits: 2 });
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
  water: new THREE.MeshLambertMaterial({ color: 0x0d3a52 })
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
function createInstancedSet(scene, arr, allTiles) {
  const buckets = {};
  for (const t of arr) (buckets[t.type] ||= []).push(t);
  const dummy = new THREE.Object3D();
  const byId = {}, groups = {};
  for (const [type, items] of Object.entries(buckets)) {
    const n = items.length;
    const top = new THREE.InstancedMesh(tileGeo, MATS[type], n);
    top.frustumCulled = false;
    const sideItems = items.filter(t => needsSides(t, allTiles));
    const side = new THREE.InstancedMesh(sideGeo, MATS[type + "Side"], Math.max(1, sideItems.length));
    side.frustumCulled = false;
    const sideIdx = new Map();
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
    for (let i = 0; i < n; i++) {
      const t = items[i], p = toXZ(t.col, t.row);
      // вода — ровной плоскостью ВЫШЕ волн
      dummy.position.set(p.x, t.type === "water" ? -0.05 : BASE_H + t.elev + TOP_THICK / 2, p.z);
      dummy.scale.set(1, TOP_THICK, 1); dummy.updateMatrix();
      top.setMatrixAt(i, dummy.matrix);
      byId[t.id] = { idx: i, top, side, sideIdx: sideIdx.get(t.id) };
    }
    top.instanceMatrix.needsUpdate = true;
    scene.add(side); scene.add(top);
    groups[type] = { top, side, arr: items };
  }
  return { groups, byId };
}
function createFarChunk(scene, tilesAll, cr, cc) {
  const ts = FAR_TILES;
  const r0 = Math.max(0, cr * ts), r1 = Math.min(ROWS, (cr + 1) * ts);
  const c0 = Math.max(0, cc * ts), c1 = Math.min(COLS, (cc + 1) * ts);
  const arr = [];
  for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) arr.push(tilesAll[r * COLS + c]);
  const dummy = new THREE.Object3D();
  const top = new THREE.InstancedMesh(farTopGeo, farMat, arr.length);
  top.frustumCulled = false;
  arr.forEach((t, i) => {
    const p = toXZ(t.col, t.row);
    // вода выше волн + шахматное смещение, чтобы соседние плитки не были в одной плоскости (анти z-fight)
    const base = t.type === "water" ? -0.05 : BASE_H + t.elev + TOP_THICK / 2 - 0.045;
    dummy.position.set(p.x, base + (((t.row + t.col) & 1) * 0.006), p.z);
    dummy.scale.set(1, TOP_THICK, 1); dummy.updateMatrix();
    top.setMatrixAt(i, dummy.matrix);
  });
  top.instanceMatrix.needsUpdate = true;
  const sideItems = arr.filter(t => needsSides(t, tilesAll));
  const side = new THREE.InstancedMesh(farSideGeo, farMat, Math.max(1, sideItems.length));
  side.frustumCulled = false;
  sideItems.forEach((t, i) => {
    const p = toXZ(t.col, t.row);
    const bh = BASE_H + t.elev, h = bh + 1.3;
    dummy.position.set(p.x, (bh - 1.3) / 2, p.z);
    dummy.scale.set(1, h, 1); dummy.updateMatrix();
    side.setMatrixAt(i, dummy.matrix);
  });
  side.count = sideItems.length;
  side.instanceMatrix.needsUpdate = true;
  scene.add(top); scene.add(side);
  return { far: true, arr, sideArr: sideItems, top, side };
}
function recolorFar(chunk, reachable, selectedId) {
  const c = new THREE.Color();
  chunk.arr.forEach((t, i) => {
    if (t.id === selectedId) c.setHex(0xffffff);
    else if (t.owner === "me") c.setHex(0x9d63ff).multiplyScalar(t.shade || 1);
    else if (t.owner) c.setHex(0xd9564a).multiplyScalar(t.shade || 1);
    else if (reachable.has(t.id)) c.setHex(TYPES[t.type].top).multiplyScalar((t.shade || 1) * 1.35);
    else c.setHex(TYPES[t.type].top).multiplyScalar(t.shade || 1);
    chunk.top.setColorAt(i, c);
  });
  chunk.sideArr.forEach((t, i) => { c.setHex(TYPES[t.type].side); chunk.side.setColorAt(i, c); });
  if (chunk.top.instanceColor) chunk.top.instanceColor.needsUpdate = true;
  if (chunk.side.instanceColor) chunk.side.instanceColor.needsUpdate = true;
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
    mesh.frustumCulled = false;
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
function createWorldChunk(scene, tilesAll, cr, cc) {
  const ts = CHUNK_TILES;
  const r0 = Math.max(0, cr * ts), r1 = Math.min(ROWS, (cr + 1) * ts);
  const c0 = Math.max(0, cc * ts), c1 = Math.min(COLS, (cc + 1) * ts);
  const arr = [];
  for (let r = r0; r < r1; r++) for (let c = c0; c < c1; c++) arr.push(tilesAll[r * COLS + c]);
  const inst = createInstancedSet(scene, arr, tilesAll);
  const decor = createDecor(scene, arr);
  return { far: false, territories: arr, inst, decor };
}
function removeWorldChunk(scene, chunk) {
  if (chunk.far) { scene.remove(chunk.top); chunk.top.dispose(); scene.remove(chunk.side); chunk.side.dispose(); return; }
  for (const g of Object.values(chunk.inst.groups)) { scene.remove(g.top); g.top.dispose(); scene.remove(g.side); g.side.dispose(); }
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
    ref.top.setColorAt(ref.idx, color);
  }
  for (const g of Object.values(inst.groups)) if (g.top.instanceColor) g.top.instanceColor.needsUpdate = true;
}
function createAnimatedOcean() {
  const geo = new THREE.PlaneGeometry(MAP_W + 7000, MAP_D + 7000, 140, 140);
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 }, uColor: { value: new THREE.Color(0x0e3d55) }, uDeep: { value: new THREE.Color(0x092a3c) },
      uFogColor: { value: new THREE.Color(FOG_COLOR) }, uFogNear: { value: FOG_NEAR }, uFogFar: { value: FOG_FAR }
    },
    vertexShader: `uniform float uTime; varying float vWave; varying float vDepth; void main(){ vec3 p=position; float w=sin(p.x*0.020+uTime*0.60)*0.22+cos(p.y*0.026-uTime*0.42)*0.18+sin((p.x+p.y)*0.011+uTime*0.30)*0.10; p.z+=w; vWave=w; vec4 mv=modelViewMatrix*vec4(p,1.0); vDepth=-mv.z; gl_Position=projectionMatrix*mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar; varying float vWave; varying float vDepth; void main(){ float k=clamp((vWave+0.70)/1.40,0.0,1.0); vec3 c=mix(uDeep,uColor,k); c+=vec3(0.05,0.08,0.09)*pow(k,3.0); float f=smoothstep(uFogNear,uFogFar,vDepth); c=mix(c,uFogColor,f); gl_FragColor=vec4(c,1.0); }`
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = -0.95;
  return mesh;
}

// ================= 3D-ЭКРАН =================
function MapScreen3D({ territories, onSelect, selectedId, reachable, onReady, onProgress, controlsRef, rev, borders, reach, highlightOwner, active, settlements }) {
  const mountRef = useRef(null), R = useRef({});
  const dataRef = useRef({ territories, onSelect, selectedId, reachable, onReady, onProgress, active });
  useEffect(() => { dataRef.current = { territories, onSelect, selectedId, reachable, onReady, onProgress, active }; });

  useEffect(() => {
    const mount = mountRef.current, r = R.current;
    const W = Math.max(2, mount.clientWidth || 800), H = Math.max(2, mount.clientHeight || 600);
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(FOG_COLOR);
    scene.fog = new THREE.Fog(FOG_COLOR, FOG_NEAR, FOG_FAR);
    r.scene = scene;
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
    mount.appendChild(renderer.domElement);
    r.renderer = renderer;
    const onLost = e => e.preventDefault();
    const onRestored = () => { renderer.setSize(Math.max(2, mount.clientWidth), Math.max(2, mount.clientHeight)); r.updateProjection(); r.refreshChunks(); };
    renderer.domElement.addEventListener("webglcontextlost", onLost, false);
    renderer.domElement.addEventListener("webglcontextrestored", onRestored, false);
    scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x2a3b2a, 0.9));
    const sun = new THREE.DirectionalLight(0xfff3c8, 1.5);
    sun.position.set(-60, 120, 40); scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.25);
    fill.position.set(80, 60, -90); scene.add(fill);
    const ocean = createAnimatedOcean(); scene.add(ocean); r.ocean = ocean;
    const sel = new THREE.Mesh(new THREE.PlaneGeometry(TILE - 0.09, TILE - 0.09), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide }));
    sel.rotation.x = -Math.PI / 2; sel.visible = false; scene.add(sel); r.selection = sel;
    r.chunks = new Map(); r.farChunks = new Map();
    r.chunkQueue = []; r.farQueue = [];
    r.chunkWanted = new Set(); r.farWanted = new Set();
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
    const desiredKeys = far => {
      const cw = Math.max(2, mount.clientWidth), ch = Math.max(2, mount.clientHeight);
      const a = cw / ch, hh = r.dist * TAN, hw = hh * a;
      if (!isFinite(hh) || !isFinite(hw) || hh <= 0 || hw <= 0) return far ? r.farWanted : r.chunkWanted;
      const ts = far ? FAR_TILES : CHUNK_TILES;
      const radius = Math.max(hw, hh) * (far ? 1.6 : 1.4) + ts * TILE;
      const minCol = Math.max(0, Math.floor((r.targetX + MCX - radius) / TILE));
      const maxCol = Math.min(COLS - 1, Math.floor((r.targetX + MCX + radius) / TILE));
      const minRow = Math.max(0, Math.floor((r.targetZ + MCZ - radius) / TILE));
      const maxRow = Math.min(ROWS - 1, Math.floor((r.targetZ + MCZ + radius) / TILE));
      const perRow = Math.ceil(COLS / ts), perCol = Math.ceil(ROWS / ts);
      let wanted = new Set();
      for (let cr = clamp(Math.floor(minRow / ts) - 1, 0, perCol - 1); cr <= clamp(Math.floor(maxRow / ts) + 1, 0, perCol - 1); cr++)
        for (let cc = clamp(Math.floor(minCol / ts) - 1, 0, perRow - 1); cc <= clamp(Math.floor(maxCol / ts) + 1, 0, perRow - 1); cc++)
          wanted.add(chunkKey(cr, cc, far));
      const cap = far ? 140 : 240;
      if (wanted.size > cap) {
        const sorted = [...wanted].map(k => ({ k, d: chunkDist(k) })).sort((x, y) => x.d - y.d);
        wanted = new Set(sorted.slice(0, cap).map(o => o.k));
      }
      return wanted;
    };
    r.refreshChunks = () => {
      const wantedFar = desiredKeys(true);
      r.farWanted = wantedFar;
      for (const key of wantedFar) if (!r.farChunks.has(key) && !r.farQueue.includes(key)) r.farQueue.push(key);
      for (const [key, chunk] of r.farChunks) if (!wantedFar.has(key)) { removeWorldChunk(scene, chunk); r.farChunks.delete(key); }
      if (!r.farMode) {
        const wanted = desiredKeys(false);
        r.chunkWanted = wanted;
        for (const key of wanted) if (!r.chunks.has(key) && !r.chunkQueue.includes(key)) r.chunkQueue.push(key);
        for (const [key, chunk] of r.chunks) if (!wanted.has(key)) { removeWorldChunk(scene, chunk); r.chunks.delete(key); }
      } else if (r.chunks.size) {
        for (const [key, chunk] of r.chunks) { removeWorldChunk(scene, chunk); r.chunks.delete(key); }
        r.chunkQueue = [];
      }
    };
    const applyLoadedColors = () => {
      const d = dataRef.current;
      for (const chunk of r.chunks.values()) applyInstanceColors(chunk.inst, chunk.territories, d.reachable, d.selectedId);
      for (const chunk of r.farChunks.values()) recolorFar(chunk, d.reachable, d.selectedId);
    };
    const processChunkQueue = () => {
      const burst = r.farBurst; r.farBurst = false;
      r.farQueue.sort((a, b) => chunkDist(a) - chunkDist(b));
      let bf = burst ? 90 : 6;
      while (bf-- && r.farQueue.length) {
        const key = r.farQueue.shift();
        if (!r.farWanted.has(key) || r.farChunks.has(key)) continue;
        const [cr, cc] = key.slice(1).split(":").map(Number);
        r.farChunks.set(key, createFarChunk(scene, dataRef.current.territories, cr, cc));
      }
      if (!r.farMode) {
        r.chunkQueue.sort((a, b) => chunkDist(a) - chunkDist(b));
        let bd = burst ? 40 : 3;
        while (bd-- && r.chunkQueue.length) {
          const key = r.chunkQueue.shift();
          if (!r.chunkWanted.has(key) || r.chunks.has(key)) continue;
          const [cr, cc] = key.split(":").map(Number);
          r.chunks.set(key, createWorldChunk(scene, dataRef.current.territories, cr, cc));
        }
      }
      if (r.farQueue.length || r.chunkQueue.length) applyLoadedColors();
      let loadedF = 0; for (const k of r.farWanted) if (r.farChunks.has(k)) loadedF++;
      let loadedD = 0; for (const k of r.chunkWanted) if (r.chunks.has(k)) loadedD++;
      const needD = !r.farMode ? r.chunkWanted.size : 0;
      const total = r.farWanted.size + needD;
      const done = loadedF + (r.farMode ? 0 : loadedD);
      dataRef.current.onProgress?.(60 + Math.round((done / Math.max(1, total)) * 40));
      if (!r.initialReady && done === total) { r.initialReady = true; applyLoadedColors(); dataRef.current.onReady?.(); }
    };
    r.refreshChunks();
    let raf = 0, frames = 0, lastX = r.targetX, lastZ = r.targetZ, lastDist = r.dist;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      if (!dataRef.current.active) return;
      r.targetX += (r.panTargetX - r.targetX) * 0.18;
      r.targetZ += (r.panTargetZ - r.targetZ) * 0.18;
      r.dist += (r.distTarget - r.dist) * 0.15;
      r.pitch = clamp(autoPitch(r.dist) + (r.pitchOff || 0), 0.92, 1.55);
      updateCameraPose();
      if (!r.farMode && r.dist > 280) { r.farMode = true; r.farBurst = true; r.refreshChunks(); }
      else if (r.farMode && r.dist < 240) { r.farMode = false; r.farBurst = true; r.refreshChunks(); }
      if (Math.abs(r.dist - lastDist) > 0.5 || Math.abs(r.targetX - lastX) > CHUNK_TILES * TILE * 0.2 || Math.abs(r.targetZ - lastZ) > CHUNK_TILES * TILE * 0.2) {
        lastX = r.targetX; lastZ = r.targetZ; lastDist = r.dist;
        r.refreshChunks();
      }
      processChunkQueue();
      if (r.ocean?.material?.uniforms?.uTime) r.ocean.material.uniforms.uTime.value = performance.now() * 0.001;
      if (r.selection.visible) r.selection.material.opacity = 0.10 + 0.07 * Math.sin(performance.now() * 0.004);
      if (r.reachMesh) r.reachMesh.material.opacity = 0.14 + 0.12 * Math.sin(performance.now() * 0.0035);
      if (r.hlMesh) r.hlMesh.material.opacity = 0.45 + 0.35 * Math.sin(performance.now() * 0.005);
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
          const close = clamp(1 - (r.dist - MIN_D) / (MAX_D - MIN_D), 0, 1);
          const g = 0.15 + 0.85 * close;
          setAmbience({ forest: (f / tot) * g, mountain: (m / tot) * g, sea: (s / tot) * g });
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
      for (const chunk of r.farChunks.values()) removeWorldChunk(scene, chunk);
      r.chunks.clear(); r.farChunks.clear();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    const r = R.current;
    if (!r.chunks) return;
    for (const chunk of r.chunks.values()) applyInstanceColors(chunk.inst, chunk.territories, reachable, selectedId);
    for (const chunk of r.farChunks.values()) recolorFar(chunk, reachable, selectedId);
    const t = territories.find(x => x.id === selectedId);
    if (t) { const p = toXZ(t.col, t.row); r.selection.position.set(p.x, tileTop(t) + 0.02, p.z); r.selection.visible = true; }
    else r.selection.visible = false;
  }, [territories, reachable, selectedId, rev]);

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
      if (b.owner === "me") c.setHex(0xffd75e);
      else c.setHSL(ownerHue(b.owner), 0.85, 0.6);
      m.setColorAt(i, c);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    r.scene.add(m); r.borderMesh = m;
  }, [borders]);

  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.hlMesh) { r.scene.remove(r.hlMesh); r.hlMesh.dispose(); r.hlMesh = null; }
    if (!highlightOwner || !borders) return;
    const list = borders.filter(b => b.owner === highlightOwner);
    if (!list.length) return;
    if (!r.hlGeo) r.hlGeo = new THREE.BoxGeometry(1, 1, 1);
    const m = new THREE.InstancedMesh(r.hlGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false }), list.length);
    const d = new THREE.Object3D();
    list.forEach((b, i) => {
      d.position.set(b.x, b.y + 0.05, b.z);
      d.rotation.y = b.vert ? Math.PI / 2 : 0;
      d.scale.set(TILE + 0.3, 0.16, 0.4);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
    r.scene.add(m); r.hlMesh = m;
  }, [highlightOwner, borders]);

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
      m.frustumCulled = false;
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
    const findTile = (cx, cy) => {
      const rect = mount.getBoundingClientRect();
      r.mouse2D.x = ((cx - rect.left) / rect.width) * 2 - 1;
      r.mouse2D.y = -((cy - rect.top) / rect.height) * 2 + 1;
      r.raycaster.setFromCamera(r.mouse2D, r.camera);
      const targets = [];
      for (const chunk of r.chunks.values()) for (const g of Object.values(chunk.inst.groups)) targets.push(g.top);
      for (const chunk of r.farChunks.values()) targets.push(chunk.top);
      const hits = r.raycaster.intersectObjects(targets, false);
      if (!hits.length || hits[0].instanceId == null) return null;
      const obj = hits[0].object, idx = hits[0].instanceId;
      for (const chunk of r.chunks.values()) for (const g of Object.values(chunk.inst.groups)) if (g.top === obj) return g.arr[idx];
      for (const chunk of r.farChunks.values()) if (chunk.top === obj) return chunk.arr[idx];
      return null;
    };
    const doClick = (cx, cy) => {
      const t = findTile(cx, cy);
      if (t) dataRef.current.onSelect(t);
    };
    let down = false, moved = false, movedDist = 0, downTime = 0, lastX = 0, lastY = 0, rotating = false;
    const downFn = e => {
      if (e.button !== undefined && e.button === 2) { rotating = true; moved = false; lastX = e.clientX; lastY = e.clientY; mount.style.cursor = "ew-resize"; return; }
      if (e.button !== undefined && e.button !== 0) return;
      down = true; moved = false; movedDist = 0; downTime = performance.now(); lastX = e.clientX; lastY = e.clientY; mount.style.cursor = "grabbing";
    };
    const moveFn = e => {
      const dx = e.clientX - lastX, dy = e.clientY - lastY;
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
      if (rotating) { rotating = false; mount.style.cursor = "grab"; return; }
      if (!down) return;
      if (!moved && performance.now() - downTime < 700) doClick(e.clientX, e.clientY);
      down = false; mount.style.cursor = "grab";
    };
    const wheelFn = e => { e.preventDefault(); zoomBy(Math.exp(-e.deltaY * 0.0012)); };
    const dblFn = () => zoomBy(1.5);
    const touchStart = e => {
      if (e.touches.length === 1) r.touch = { x: e.touches[0].clientX, y: e.touches[0].clientY, m: false, d: 0, t: Date.now() };
      else if (e.touches.length >= 2) {
        r.touch = null;
        const dx = e.touches[0].clientX - e.touches[1].clientX, dy = e.touches[0].clientY - e.touches[1].clientY;
        r.pinch = Math.hypot(dx, dy);
        r.twoFinger = { dx, dy, cy: (e.touches[0].clientY + e.touches[1].clientY) / 2 };
      }
    };
    const touchMove = e => {
      e.preventDefault();
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
      if (r.touch && !r.touch.m && r.touch.d < 14 && Date.now() - r.touch.t < 700) doClick(r.touch.x, r.touch.y);
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
    </div>
  );
}

// ================= МИНИКАРТА =================
function Minimap({ territories, overlay, onPick }) {
  const ref = useRef(null), baseRef = useRef(null);
  useEffect(() => {
    if (!territories || baseRef.current) return;
    const c = document.createElement("canvas");
    c.width = 200; c.height = 150;
    const g = c.getContext("2d");
    const sx = 200 / COLS, sy = 150 / ROWS;
    for (const t of territories) {
      g.fillStyle = "#" + TYPES[t.type].top.toString(16).padStart(6, "0");
      g.fillRect(t.col * sx, t.row * sy, Math.ceil(sx), Math.ceil(sy));
    }
    baseRef.current = c;
  }, [territories]);
  useEffect(() => {
    const cv = ref.current;
    if (!cv || !baseRef.current) return;
    const g = cv.getContext("2d");
    g.clearRect(0, 0, 200, 150);
    g.drawImage(baseRef.current, 0, 0);
    const sx = 200 / COLS, sy = 150 / ROWS;
    for (const [id, who] of Object.entries(overlay.owners || {})) {
      const [r, c] = id.split("_").map(Number);
      g.fillStyle = who === "me" ? "#ffd75e" : `hsl(${Math.round(ownerHue(who) * 360)},80%,55%)`;
      g.fillRect(c * sx, r * sy, Math.ceil(sx), Math.ceil(sy));
    }
  }, [overlay, territories]);
  return (
    <canvas ref={ref} width={200} height={150}
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        const c = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
        const r = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
        const p = toXZ(c, r);
        onPick(p.x, p.z);
      }}
      style={{ width: "100%", border: "1px solid " + PAL.border, background: "#0a1410", cursor: "pointer", imageRendering: "pixelated", display: "block" }} />
  );
}

// ================= UI =================
function Btn({ onClick, disabled, variant = "primary", children, style }) {
  const cls = variant === "success" ? "btnx green" : variant === "danger" ? "btnx red" : variant === "ghost" ? "btnx" : "btnx gold";
  return <button className={cls} disabled={disabled} onClick={onClick} style={{ width: "100%", padding: "12px 0", ...style }}>{children}</button>;
}
function ZoomBtn({ onClick, children }) {
  return <button className="btnx" onClick={onClick} style={{ width: 40, height: 40, padding: 0, fontSize: 16 }}>{children}</button>;
}
function Hud({ profile, supplyEta, now, onInv, onSound, onColony, colonyMode }) {
  let timer = "";
  if (profile.supplies < profile.supplyMax && supplyEta) {
    const s = Math.max(0, Math.ceil((supplyEta - now) / 1000));
    timer = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  }
  return (
    <div className="panelx" style={{ position: "absolute", left: 12, top: 12, display: "flex", gap: 10, alignItems: "center", padding: "8px 12px", fontSize: 11, letterSpacing: ".08em", animation: "fadeIn .4s ease" }}>
      <span>МОНЕТЫ <b style={{ color: PAL.gold }}>{profile.coins}</b>{profile.income > 0 && <b style={{ color: PAL.green }}> +{profile.income}/М</b>}</span>
      <span>ЭНЕРГИЯ <b>{profile.supplies}/{profile.supplyMax}</b><span style={{ color: PAL.muted }}>{timer}</span></span>
      <span>ЗЕМЛИ <b>{profile.owned.length}/{MAX_OWN}</b></span>
      <button className="btnx" onClick={onInv} style={{ padding: "4px 8px" }}>ЮНИТЫ</button>
      <button className={"btnx" + (colonyMode ? " gold" : "")} onClick={onColony} style={{ padding: "4px 8px" }}>КОЛОНИЯ {COLONY_COST}</button>
      <button className="btnx" onClick={onSound} style={{ padding: "4px 8px" }}>ЗВУК</button>
    </div>
  );
}
function UnitChip({ u, sel, onClick }) {
  const dead = u.hp <= 0;
  return (
    <div onClick={dead ? undefined : onClick} style={{ minWidth: 88, border: sel ? "1px solid " + PAL.gold : "1px solid " + PAL.border, background: dead ? "#1a1212" : "#0b1216", opacity: dead ? 0.5 : 1, textAlign: "center", cursor: dead ? "not-allowed" : "pointer", flexShrink: 0, transition: "border-color .15s", padding: 8 }}>
      <img src={unitImg(u)} onError={e => e.target.style.display = "none"} style={{ width: 44, height: 44, objectFit: "cover", display: "block", margin: "0 auto 4px", border: "1px solid " + PAL.border }} />
      <div style={{ fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", overflow: "hidden" }}>{u.name}</div>
      <div style={{ fontSize: 9, color: PAL.textD }}>ATK {Math.max(u.air, u.ground)} · DEF {u.protection}</div>
      <div style={{ height: 4, background: "#1c2c23", marginTop: 4 }}>
        <div style={{ height: "100%", width: u.hp + "%", background: u.hp > 50 ? PAL.green : u.hp > 25 ? PAL.gold : PAL.red }} />
      </div>
      {dead && <div style={{ fontSize: 9, color: PAL.red, marginTop: 2 }}>РАНЕН</div>}
    </div>
  );
}
function Modal({ title, onClose, children }) {
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.7)", zIndex: 50, display: "flex", alignItems: "flex-end", animation: "fadeIn .2s ease" }} onClick={onClose}>
      <div className="panelx" style={{ padding: 18, width: "100%", maxHeight: "80dvh", overflowY: "auto", animation: "sheetUp .3s cubic-bezier(.22,.9,.3,1)", background: "rgba(9,14,18,.92)" }} onClick={e => e.stopPropagation()}>
        <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: ".18em", marginBottom: 14, textTransform: "uppercase" }}>{title}</div>
        {children}
        <Btn variant="ghost" onClick={onClose} style={{ marginTop: 12 }}>Закрыть</Btn>
      </div>
    </div>
  );
}
function TerritoryModal(props) {
  const { t, building, profile, selUnit, setSelUnit, onAttack, onBuild, onClose, result, canInteract, busy, freePlace, ownerName } = props;
  const ti = TYPES[t.type], isOwn = t.owner === "me";
  const slots = BUILD_SLOTS[t.type] || [];
  const usable = profile.units.filter(u => u.hp > 0);
  return (
    <Modal title={`${ti.n}${ownerName && !isOwn ? " · " + ownerName : ""}`} onClose={onClose}>
      <div style={{ fontSize: 11, color: PAL.textD, letterSpacing: ".06em", margin: "-6px 0 12px" }}>
        {building ? `${BUILDINGS_UI[building.b].n} — ${BUILDINGS_UI[building.b].d}` :
          ti.bonus ? `+${Math.round((ti.m - 1) * 100)}% ${SNAME[ti.bonus]}` : ti.impassable ? "НЕПРОХОДИМО" : "ОБЫЧНАЯ МЕСТНОСТЬ"}
        {(t.type === "field" || t.type === "hills") && <span style={{ color: PAL.green }}> · +1 МОН/МИН</span>}
      </div>
      {result && !result.error && (
        <div style={{ padding: 12, marginBottom: 10, border: `1px solid ${result.win ? PAL.green : PAL.red}`, background: result.win ? "rgba(127,209,138,.08)" : "rgba(239,68,68,.08)", animation: "fadeIn .3s ease" }}>
          <b style={{ letterSpacing: ".1em" }}>{result.win ? "ЗАХВАЧЕНО" : "НЕУДАЧА"}</b>
          <div style={{ fontSize: 11, color: PAL.textD, marginTop: 4 }}>{SICON[result.atkStat]} {result.ap} против {SICON[result.defStat]} {result.dp} · урон {result.dmg}</div>
        </div>
      )}
      {result?.error && <div style={{ fontSize: 11, color: PAL.red, marginBottom: 10 }}>! {result.error}</div>}
      {isOwn && !building && slots.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <div className="lblx" style={{ marginBottom: 6 }}>Строительство</div>
          {slots.map(b => (
            <Btn key={b} disabled={profile.coins < BUILDINGS_UI[b].cost || busy} onClick={() => onBuild(b)} style={{ marginBottom: 6 }}>
              {BUILDINGS_UI[b].n} — {BUILDINGS_UI[b].cost} мон · {BUILDINGS_UI[b].d}
            </Btn>
          ))}
        </div>
      )}
      {!isOwn && !ti.impassable && (
        <>
          {!canInteract && <div style={{ fontSize: 11, color: PAL.muted, marginBottom: 8 }}>Клетка не граничит с твоими территориями.</div>}
          {canInteract && freePlace && <div style={{ fontSize: 11, color: PAL.gold, marginBottom: 8 }}>ПЕРВАЯ КЛЕТКА — КУДА УГОДНО</div>}
          {canInteract && (
            <>
              <div className="lblx" style={{ marginBottom: 6 }}>Юнит в атаку (−1 энергии)</div>
              <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 8 }}>
                {usable.length === 0 && <div style={{ fontSize: 11, color: PAL.muted }}>Нет юнитов — открой кейс в меню</div>}
                {usable.map(u => <UnitChip key={u.uid} u={u} sel={selUnit === u.uid} onClick={() => setSelUnit(u.uid)} />)}
              </div>
              <Btn variant="success" disabled={busy || !selUnit || usable.length === 0 || profile.supplies < 1} onClick={() => onAttack(selUnit)}>
                {busy ? "АТАКА…" : "АТАКОВАТЬ КЛЕТКУ"}
              </Btn>
              {profile.supplies < 1 && <div style={{ fontSize: 10, color: PAL.gold, marginTop: 6 }}>НЕТ ЭНЕРГИИ — ЖДИ ВОССТАНОВЛЕНИЯ</div>}
            </>
          )}
        </>
      )}
    </Modal>
  );
}
function InventoryModal({ profile, onClose }) {
  return (
    <Modal title="Юниты" onClose={onClose}>
      {profile.units.length === 0 && <div style={{ color: PAL.muted, fontSize: 12 }}>Пусто. Открой кейс в меню.</div>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(96px,1fr))", gap: 8 }}>
        {profile.units.map(u => (
          <div key={u.uid} style={{ background: "#0b1216", border: "1px solid " + PAL.border, padding: 8, textAlign: "center" }}>
            <img src={unitImg(u)} onError={e => e.target.style.display = "none"} style={{ width: "100%", aspectRatio: "1", objectFit: "cover", border: "1px solid " + PAL.border }} />
            <div style={{ fontSize: 11, fontWeight: 800, marginTop: 4 }}>{u.name}</div>
            <div style={{ fontSize: 9, color: PAL.muted }}>{u.server}</div>
            <div style={{ fontSize: 10, marginTop: 2 }}>ATK {Math.max(u.air, u.ground)} · DEF {u.protection}</div>
            <div style={{ fontSize: 10, color: u.hp > 0 ? PAL.green : PAL.red }}>HP {u.hp}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
}
function SettingsModal({ onClose }) {
  const [v, setV] = useState(getVolumes());
  const upd = (k, val) => { const nv = { ...v, [k]: val }; setV(nv); setVolumes(nv); };
  const Row = ({ name, k }) => (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", marginBottom: 6 }}>{name} — {Math.round(v[k] * 100)}%</div>
      <input type="range" min="0" max="100" value={Math.round(v[k] * 100)} onChange={e => upd(k, Number(e.target.value) / 100)} onPointerUp={() => playClick()} style={{ width: "100%" }} />
    </div>
  );
  return (
    <Modal title="Звук" onClose={onClose}>
      <Row name="ОБЩАЯ ГРОМКОСТЬ" k="master" />
      <Row name="ИНТЕРФЕЙС" k="ui" />
      <Row name="БИОМЫ" k="amb" />
      <div style={{ fontSize: 10, color: PAL.textD }}>Сохраняется на устройстве.</div>
    </Modal>
  );
}
function Roulette({ pool, winner, onDone }) {
  const boxRef = useRef(null);
  const [off, setOff] = useState(0);
  const [run, setRun] = useState(false);
  const ITEM = 108;
  const items = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 50; i++) arr.push(pool[Math.floor(Math.random() * pool.length)] || winner);
    arr[44] = winner;
    return arr;
  }, [pool, winner]);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const target = 44 * ITEM + ITEM / 2 - el.clientWidth / 2 + (Math.random() * 50 - 25);
    const t1 = requestAnimationFrame(() => requestAnimationFrame(() => { setOff(-target); setRun(true); }));
    const t2 = setTimeout(onDone, 5300);
    return () => { cancelAnimationFrame(t1); clearTimeout(t2); };
  }, []);
  return (
    <div ref={boxRef} style={{ position: "relative", overflow: "hidden", border: "1px solid " + PAL.border, background: "#0a1410", height: 132, marginBottom: 12 }}>
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: 2, background: PAL.gold, zIndex: 2, boxShadow: "0 0 12px " + PAL.gold }} />
      <div style={{ display: "flex", gap: 12, padding: "12px 0", willChange: "transform", transform: `translateX(${off}px)`, transition: run ? "transform 5s cubic-bezier(0.1,0.7,0.15,1)" : "none" }}>
        {items.map((it, i) => (
          <div key={i} style={{ width: 96, flexShrink: 0, background: "#0b1216", border: "1px solid " + PAL.border, padding: 6, textAlign: "center" }}>
            <img src={`/files/${encodeURIComponent(it.server || winner.server)}/${encodeURIComponent(it.file)}`} onError={e => e.target.style.display = "none"} style={{ width: "100%", height: 64, objectFit: "cover", border: "1px solid " + PAL.border }} />
            <div style={{ fontSize: 10, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden" }}>{it.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function MenuScreen({ profile, servers, pools, caseCost, onSync, territories, overlay, onPick }) {
  const [sub, setSub] = useState("cases");
  const [tops, setTops] = useState(null);
  const [tab, setTab] = useState("power");
  const [caseView, setCaseView] = useState(null);
  useEffect(() => {
    if (!tops) api.tops().then(setTops).catch(() => setTops({ coins: [], cards: [], power: [] }));
  }, []);
  const open = async () => {
    playClick();
    setCaseView(v => ({ ...v, rolling: true, win: null, err: "" }));
    try {
      const d = await api.openCase(caseView.server);
      onSync(d.profile);
      setCaseView(v => ({ ...v, win: d.unit }));
    } catch (e) {
      setCaseView(v => ({ ...v, rolling: false, err: e.message }));
    }
  };
  const pool = pools?.[caseView?.server] || [];
  return (
    <div style={{ position: "absolute", inset: 0, background: "rgba(7,12,16,.96)", color: PAL.text, overflowY: "auto", padding: "16px 14px 90px", fontFamily: "-apple-system,system-ui,sans-serif" }}>
      <div style={{ fontSize: 15, fontWeight: 900, letterSpacing: ".22em", marginBottom: 14 }}>МИР</div>
      <div className="lblx" style={{ marginBottom: 6 }}>Обзор территории</div>
      <Minimap territories={territories} overlay={overlay} onPick={onPick} />
      <div style={{ display: "flex", gap: 6, margin: "14px 0" }}>
        {[["cases", "КЕЙСЫ"], ["tops", "ТОПЫ"]].map(([k, n]) => (
          <button key={k} className={"btnx" + (sub === k ? " gold" : "")} onClick={() => { playClick(); setSub(k); }}>{n}</button>
        ))}
      </div>
      {sub === "cases" && (
        <>
          <div style={{ fontSize: 11, color: PAL.textD, marginBottom: 10, letterSpacing: ".08em" }}>МОНЕТЫ {profile.coins} · ЦЕНА {caseCost}</div>
          {servers.length === 0 && <div style={{ color: PAL.muted, fontSize: 12 }}>На сервере нет папок с карточками.</div>}
          {servers.map(s => (
            <button key={s.name} className="btnx" onClick={() => { playClick(); setCaseView({ server: s.name }); }} style={{ width: "100%", marginBottom: 8, padding: "12px 14px", textAlign: "left", display: "flex", justifyContent: "space-between" }}>
              <span>{pretty(s.name)}</span><span style={{ color: PAL.muted }}>{s.count} карт</span>
            </button>
          ))}
        </>
      )}
      {sub === "tops" && (
        <>
          <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
            {[["power", "СИЛА"], ["coins", "МОНЕТЫ"], ["cards", "КАРТЫ"]].map(([k, n]) => (
              <button key={k} className={"btnx" + (tab === k ? " gold" : "")} onClick={() => setTab(k)}>{n}</button>
            ))}
          </div>
          {!tops && <div style={{ color: PAL.muted, fontSize: 12 }}>Загрузка…</div>}
          {tops && (tops[tab] || []).map((row, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", border: "1px solid " + PAL.border, marginBottom: 4, fontSize: 12, background: i % 2 ? "transparent" : "#0b1216", animation: "fadeIn .3s ease" }}>
              <span style={{ fontWeight: 700 }}>{i + 1}. {row.n}</span>
              <span style={{ color: PAL.gold, fontWeight: 800 }}>{row.v}</span>
            </div>
          ))}
        </>
      )}
      {caseView && (
        <div onClick={caseView.win ? () => { playClick(); setCaseView(null); } : undefined}
          style={{ position: "fixed", inset: 0, backdropFilter: "blur(10px)", background: "rgba(4,8,12,.55)", zIndex: 40, display: "flex", alignItems: "center", justifyContent: "center", padding: 16, animation: "fadeIn .25s ease" }}>
          <div className="panelx" style={{ width: "100%", maxWidth: 460, animation: "caseIn .35s cubic-bezier(.22,.9,.3,1)", background: "rgba(9,14,18,.94)", padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: ".16em", marginBottom: 10 }}>КЕЙС «{pretty(caseView.server).toUpperCase()}»</div>
            {caseView.rolling && caseView.win && <Roulette pool={pool} winner={caseView.win} onDone={() => {}} />}
            {caseView.rolling && !caseView.win && (
              <div style={{ textAlign: "center", padding: 20 }}>
                <div style={{ fontSize: 46, animation: "caseIn .4s ease" }}>▣</div>
                <div style={{ fontSize: 11, color: PAL.gold, marginTop: 8, letterSpacing: ".14em" }}>ОТКРЫТИЕ…</div>
              </div>
            )}
            {caseView.win && (
              <div style={{ textAlign: "center", padding: 12, border: "1px solid " + PAL.gold, animation: "cardPop .45s ease", background: "rgba(245,196,81,.06)" }}>
                <img src={unitImg(caseView.win)} onError={e => e.target.style.display = "none"} style={{ width: 96, height: 96, objectFit: "cover", border: "1px solid " + PAL.border }} />
                <div style={{ fontSize: 15, fontWeight: 900, marginTop: 6 }}>{caseView.win.name}</div>
                <div style={{ fontSize: 10, color: PAL.textD, letterSpacing: ".08em" }}>ATK {caseView.win.air} · GND {caseView.win.ground}/10 · DEF {caseView.win.protection}/10</div>
                <div style={{ fontSize: 10, color: PAL.muted, marginTop: 8 }}>ТАПНИ, ЧТОБЫ ВЕРНУТЬСЯ</div>
              </div>
            )}
            {caseView.err && <div style={{ color: PAL.red, fontSize: 11, margin: "8px 0" }}>! {caseView.err}</div>}
            {!caseView.rolling && !caseView.win && (
              <>
                <div style={{ textAlign: "center", fontSize: 54, margin: "10px 0", color: PAL.gold, textShadow: "0 0 24px rgba(245,196,81,.4)" }}>▣</div>
                <Btn disabled={profile.coins < caseCost} onClick={open}>ОТКРЫТЬ ЗА {caseCost} МОН</Btn>
                <Btn variant="ghost" onClick={() => setCaseView(null)} style={{ marginTop: 8 }}>Назад</Btn>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
function BootScreen({ progress, text }) {
  const p = clamp(progress, 0, 100);
  return (
    <div style={{ position: "fixed", inset: 0, background: "radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)", color: "#e6eee8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system,system-ui,sans-serif", zIndex: 70 }}>
      <div style={{ width: "min(440px,84vw)", textAlign: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: ".3em" }}>ЗАГРУЗКА МИРА</div>
        <div style={{ fontSize: 12, color: "#a9b8ae", marginTop: 8, minHeight: 18, letterSpacing: ".08em" }}>{text}</div>
        <div style={{ height: 4, background: "#1c2c23", marginTop: 22, border: "1px solid #2b4232" }}>
          <div style={{ height: "100%", width: `${p}%`, background: "linear-gradient(90deg,#8b5cf6,#c4b5fd)", transition: "width .18s ease" }} />
        </div>
        <div style={{ fontSize: 11, color: "#6f8277", marginTop: 8 }}>{p}%</div>
      </div>
    </div>
  );
}

// ================= APP =================
const MOCK_PROFILE = { id: "dev", name: "Dev", coins: 1000, supplies: 6, supplyMax: 6, supplyNextIn: 0, income: 0, heal: 0, units: [{ uid: "u1", name: "Тест", server: "dev", file: "test.png", air: 5, ground: 6, protection: 4, hp: 100 }], owned: [], buildings: {} };

export default function App() {
  const [view, setView] = useState("map");
  const [territories, setTerritories] = useState(null);
  const [load, setLoad] = useState(0);
  const [gameReady, setGameReady] = useState(false), [visibleLoad, setVisibleLoad] = useState(60);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);
  const [rev, setRev] = useState(0);
  const [profile, setProfile] = useState(null);
  const [overlay, setOverlay] = useState({ owners: {}, buildings: {}, names: {} });
  const [servers, setServers] = useState([]), [pools, setPools] = useState({}), [caseCost, setCaseCost] = useState(120);
  const [supplyEta, setSupplyEta] = useState(0);
  const [selUnit, setSelUnit] = useState(null);
  const [screen, setScreen] = useState(null);
  const [busy, setBusy] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [infoOwner, setInfoOwner] = useState(null);
  const [note, setNote] = useState("");
  const [colonyMode, setColonyMode] = useState(false);
  const [colonyTarget, setColonyTarget] = useState(null);
  const controlsRef = useRef(null);
  const flash = m => { setNote(m); setTimeout(() => setNote(""), 2600); };

  useEffect(() => {
    let alive = true;
    genMapProgressive(p => { if (alive) setLoad(p); }).then(map => { if (alive) setTerritories(map); });
    return () => { alive = false; };
  }, []);
  const syncProfile = p => { setProfile(p); setSupplyEta(Date.now() + (p.supplyNextIn || 0) * 1000); };
  const setOv = d => setOverlay({ owners: d.owners || {}, buildings: d.buildings || {}, names: d.names || {} });
  useEffect(() => {
    api.init().then(d => {
      syncProfile(d.profile); setOv(d);
      setServers(d.servers); setPools(d.pools || {}); setCaseCost(d.caseCost || 120);
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
    const id = setInterval(() => { api.state().then(d => { syncProfile(d.profile); setOv(d); }).catch(() => {}); }, 20000);
    return () => clearInterval(id);
  }, [!!profile]);
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(id); }, []);
  useEffect(() => {
    const start = () => { startAmbience(); window.removeEventListener("pointerdown", start); window.removeEventListener("keydown", start); };
    window.addEventListener("pointerdown", start); window.addEventListener("keydown", start);
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

  // поселения по биому на своих клетках
  const settlements = useMemo(() => {
    if (!territories) return null;
    const S = { houses: [], roofs: [], barns: [], barnRoofs: [], crops: [], logs: [], stumps: [], rocks: [] };
    for (const t of territories) {
      if (!t.owner || t.type === "water") continue;
      const p = toXZ(t.col, t.row), y = tileTop(t);
      const h1 = (hash2(t.row, t.col, 660) % 1000 / 1000 - 0.5) * 0.8;
      const h2 = (hash2(t.row, t.col, 661) % 1000 / 1000 - 0.5) * 0.8;
      const rot = Math.floor(hash2(t.row, t.col, 662) % 4) * Math.PI / 2;
      const col = t.owner === "me" ? 0xffd75e : new THREE.Color().setHSL(ownerHue(t.owner), 0.8, 0.55).getHex();
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

  const freePlace = !!profile && profile.owned.length === 0;

  const colonyOk = t => {
    if (!t || TYPES[t.type].impassable || t.owner) return false;
    if (!profile || !profile.owned.length) return false;
    for (const id of profile.owned) {
      const [r, c] = id.split("_").map(Number);
      if (Math.max(Math.abs(r - t.row), Math.abs(c - t.col)) <= 30) return true;
    }
    return false;
  };

  const handleSelect = t => {
    playClick();
    if (colonyMode) {
      if (colonyOk(t)) setColonyTarget(t);
      else flash("НЕЛЬЗЯ: занята, непроходима или дальше 30 клеток");
      return;
    }
    if (t.owner && t.owner !== "me") {
      if (reachable.has(t.id)) { setInfoOwner(null); setSelected(t); setResult(null); }
      else { setInfoOwner(t.owner); setSelected(null); }
      return;
    }
    setInfoOwner(null);
    setSelected(t); setResult(null);
  };

  const doAttack = async unitId => {
    if (!selected || busy) return;
    playClick();
    setBusy(true); setResult(null);
    try {
      const d = await api.attack(selected.id, unitId);
      setResult(d.result); syncProfile(d.profile);
      const t = territories.find(x => x.id === selected.id);
      if (d.owners[selected.id] === "me" && t) t.owner = "me";
      setRev(r => r + 1);
      setSelected(t ? { ...t } : null);
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
    } catch (e) { setResult({ error: e.message }); }
    setBusy(false);
  };
  const doColony = async () => {
    if (!colonyTarget) return;
    playBuild();
    try {
      const d = await api.colony(colonyTarget.id);
      syncProfile(d.profile);
      setOverlay(o => ({ ...o, owners: { ...o.owners, [colonyTarget.id]: "me" } }));
      flash("КОЛОНИЯ ОСНОВАНА");
    } catch (e) { flash("! " + e.message); }
    setColonyTarget(null); setColonyMode(false);
  };

  if (!territories) return <BootScreen progress={load} text={load < 55 ? "СОЗДАЁМ КАРТУ" : "ВОЗВОДИМ ХРЕБТЫ"} />;

  const canInteractNow = selected ? (freePlace ? (!selected.owner && !TYPES[selected.type].impassable) : reachable.has(selected.id)) : false;
  const goHome = () => {
    const firstId = profile?.owned?.[0];
    const t = firstId ? territories.find(x => x.id === firstId) : null;
    if (t) { const p = toXZ(t.col, t.row); controlsRef.current?.focus(p.x, p.z); }
    else controlsRef.current?.resetView();
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: PAL.bg, color: PAL.text, fontFamily: "-apple-system,system-ui,sans-serif", overflow: "hidden" }}>
      <style>{`*{border-radius:0!important} .panelx{background:rgba(7,12,16,.66);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(8px)} .btnx{background:transparent;border:1px solid rgba(255,255,255,.16);color:#e6eee8;text-transform:uppercase;letter-spacing:.12em;font-size:11px;font-weight:700;padding:10px 14px;cursor:pointer;transition:background .15s,border-color .15s,transform .05s;font-family:inherit} .btnx:hover{background:rgba(255,255,255,.08)} .btnx:active{transform:translateY(1px)} .btnx:disabled{opacity:.4;cursor:not-allowed} .btnx.gold{border-color:rgba(245,196,81,.55);color:#f5c451} .btnx.green{border-color:rgba(127,209,138,.55);color:#7fd18a} .btnx.red{border-color:rgba(239,68,68,.55);color:#ef4444} .lblx{font-size:10px;letter-spacing:.16em;color:#6f8277;text-transform:uppercase;font-weight:700} @keyframes sheetUp{from{transform:translateY(48px);opacity:0}to{transform:translateY(0);opacity:1}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes caseIn{from{transform:translateX(60px) scale(.9);opacity:0}to{transform:translateX(0) scale(1);opacity:1}} @keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12);opacity:1}100%{transform:scale(1)}} input[type=range]{-webkit-appearance:none;appearance:none;height:2px;background:rgba(255,255,255,.25);outline:none} input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:12px;height:12px;background:#f5c451;cursor:pointer;border-radius:0}`}</style>

      <div style={{ position: "absolute", inset: 0, transform: view === "map" ? "translateX(0)" : "translateX(-100%)", transition: "transform .38s cubic-bezier(.22,.9,.3,1)" }}>
        <MapScreen3D territories={territories} reachable={reachable} selectedId={selected?.id} rev={rev}
          borders={borders} reach={reachList} highlightOwner={infoOwner} active={view === "map"} settlements={settlements}
          onProgress={setVisibleLoad} onReady={() => { setVisibleLoad(100); setGameReady(true); }}
          onSelect={handleSelect} controlsRef={controlsRef} />
        {!gameReady && <BootScreen progress={visibleLoad} text="ПОДГОТОВКА ОБЛАСТИ" />}
        {profile && <Hud profile={profile} supplyEta={supplyEta} now={now}
          onInv={() => { playClick(); setScreen("inv"); }}
          onSound={() => { playClick(); setScreen("sound"); }}
          onColony={() => { playClick(); setColonyMode(m => !m); }}
          colonyMode={colonyMode} />}
        {colonyMode && (
          <div className="panelx" style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", padding: "6px 14px", fontSize: 11, zIndex: 45, display: "flex", gap: 10, alignItems: "center", whiteSpace: "nowrap", animation: "fadeIn .25s ease", letterSpacing: ".08em", borderColor: "rgba(245,196,81,.5)" }}>
            РЕЖИМ КОЛОНИИ: выбери клетку в радиусе 30 от своих · {COLONY_COST} мон
            <button className="btnx red" onClick={() => setColonyMode(false)} style={{ padding: "2px 8px" }}>X</button>
          </div>
        )}
        {infoOwner && !colonyMode && (
          <div className="panelx" style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", padding: "6px 14px", fontSize: 11, zIndex: 45, display: "flex", gap: 10, alignItems: "center", whiteSpace: "nowrap", animation: "fadeIn .25s ease", letterSpacing: ".08em" }}>
            ИГРОК: {(overlay.names && overlay.names[infoOwner]) || "НЕИЗВЕСТЕН"} — ТЕРРИТОРИЯ ПОДСВЕЧЕНА
            <button className="btnx red" onClick={() => setInfoOwner(null)} style={{ padding: "2px 8px" }}>X</button>
          </div>
        )}
        {note && (
          <div className="panelx" style={{ position: "absolute", top: 92, left: "50%", transform: "translateX(-50%)", padding: "6px 14px", fontSize: 11, zIndex: 45, whiteSpace: "nowrap", animation: "fadeIn .25s ease", letterSpacing: ".08em" }}>{note}</div>
        )}
        <div style={{ position: "absolute", right: 12, bottom: 64, display: "flex", flexDirection: "column", gap: 6 }}>
          <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1.35)}>+</ZoomBtn>
          <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1 / 1.35)}>−</ZoomBtn>
          <ZoomBtn onClick={goHome}>⌂</ZoomBtn>
        </div>
        {selected && profile && (
          <TerritoryModal t={selected} building={overlay.buildings[selected.id]} profile={profile}
            selUnit={selUnit} setSelUnit={setSelUnit} onAttack={doAttack} onBuild={doBuild} busy={busy}
            onClose={() => { setSelected(null); setResult(null); }}
            result={result} canInteract={canInteractNow} freePlace={freePlace}
            ownerName={selected.owner ? (overlay.names && overlay.names[selected.owner]) || "ИГРОК" : null} />
        )}
        {colonyTarget && profile && (
          <Modal title="Основать колонию" onClose={() => setColonyTarget(null)}>
            <div style={{ fontSize: 12, color: PAL.textD, marginBottom: 12 }}>
              Клетка {colonyTarget.row}:{colonyTarget.col} станет вашей одиночной территорией в обход правила смежности. Цена {COLONY_COST} мон.
            </div>
            <Btn disabled={profile.coins < COLONY_COST} onClick={doColony}>ОСНОВАТЬ ЗА {COLONY_COST}</Btn>
          </Modal>
        )}
        {screen === "inv" && profile && <InventoryModal profile={profile} onClose={() => setScreen(null)} />}
        {screen === "sound" && <SettingsModal onClose={() => setScreen(null)} />}
      </div>

      <div style={{ position: "absolute", inset: 0, transform: view === "menu" ? "translateX(0)" : "translateX(100%)", transition: "transform .38s cubic-bezier(.22,.9,.3,1)" }}>
        {profile && <MenuScreen profile={profile} servers={servers} pools={pools} caseCost={caseCost} onSync={syncProfile}
          territories={territories} overlay={overlay}
          onPick={(x, z) => { setView("map"); controlsRef.current?.focus(x, z); }} />}
      </div>

      <div className="panelx" style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", zIndex: 65, background: "rgba(7,12,16,.6)" }}>
        <button className="btnx" onClick={() => { playClick(); setView("map"); }} style={{ border: "none", padding: "13px 30px", color: view === "map" ? PAL.gold : PAL.text, background: view === "map" ? "rgba(245,196,81,.08)" : "transparent" }}>Карта</button>
        <div style={{ width: 1, background: "rgba(255,255,255,.14)" }} />
        <button className="btnx" onClick={() => { playClick(); setView("menu"); }} style={{ border: "none", padding: "13px 30px", color: view === "menu" ? PAL.gold : PAL.text, background: view === "menu" ? "rgba(245,196,81,.08)" : "transparent" }}>Меню</button>
        <div style={{ position: "absolute", bottom: 0, height: 2, width: "50%", background: PAL.gold, left: view === "map" ? 0 : "50%", transition: "left .3s cubic-bezier(.22,.9,.3,1)" }} />
      </div>
    </div>
  );
}