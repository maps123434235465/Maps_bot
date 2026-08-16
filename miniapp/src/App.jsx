import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { api, unitImg } from "./api";

const COLS = 800, ROWS = 600;
const MAX_OWN = 300;
const PAL = {
  bg: "#071018", surf: "#0e1b16", border: "#2b4232", accent: "#8b5cf6", accentL: "#c4b5fd",
  red: "#ef4444", gold: "#f5c451", muted: "#6f8277", text: "#e6eee8", textD: "#a9b8ae"
};
const TYPES = {
  meadow:   { n: "Луг",          e: "🌿", bonus: null,      m: 1.00, impassable: false, top: 0x6fae4e, side: 0x47772f },
  forest:   { n: "Лес",          e: "🌲", bonus: "defense", m: 1.22, impassable: false, top: 0x55923d, side: 0x38622a },
  hills:    { n: "Холмы",        e: "⛰️", bonus: "defense", m: 1.34, impassable: false, captureMult: 0.88, top: 0x79a44b, side: 0x527034 },
  field:    { n: "Поля",         e: "🌾", bonus: null,      m: 1.00, impassable: false, top: 0xcdb94a, side: 0x93822e },
  swamp:    { n: "Болота",       e: "🪷", bonus: "air",     m: 1.18, impassable: false, captureMult: 0.92, top: 0x67935a, side: 0x44653b },
  mountain: { n: "Высокие горы", e: "🏔️", bonus: "defense", m: 1.60, impassable: true,  top: 0x8d928a, side: 0x565c57 },
  water:    { n: "Море",         e: "🌊", bonus: null,      m: 1.00, impassable: true,  top: 0x0e3d55, side: 0x0e3d55 }
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
const FOG_COLOR = 0x0c1f27, FOG_NEAR = 220, FOG_FAR = 2100;

const BUILDINGS_UI = {
  barn:   { n: "Амбар",      i: "🏚️", cost: 140, d: "+2 🪙/мин" },
  medbay: { n: "Медотсек",   i: "⛑️", cost: 160, d: "+8 HP юнитам/мин" },
  fort:   { n: "Укрепления", i: "🛡️", cost: 90,  d: "+35% защиты клетки" },
  mine:   { n: "Шахта",      i: "⛏️", cost: 200, d: "+4 🪙/мин" }
};
const BUILD_SLOTS = { field: ["barn", "medbay"], meadow: ["fort"], hills: ["mine"] };
const pretty = n => n ? n.charAt(0).toUpperCase() + n.slice(1) : n;

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const hash2 = (r, c, salt = 0) => {
  let x = (r * 374761393 + c * 668265263 + salt * 69069) | 0;
  x = (x ^ (x >>> 13)) * 1274126177;
  return (x ^ (x >>> 16)) >>> 0;
};
const h01 = (r, c, s = 0) => (hash2(r, c, s) % 10000) / 10000;
const vnoise = (r, c, scale, salt) => {
  const x = r / scale, z = c / scale;
  const r0 = Math.floor(x), c0 = Math.floor(z);
  const fr = x - r0, fc = z - c0;
  const sr = fr * fr * (3 - 2 * fr), sc = fc * fc * (3 - 2 * fc);
  const h = (a, b) => h01(a, b, salt);
  return h(r0, c0) * (1 - sr) * (1 - sc) + h(r0 + 1, c0) * sr * (1 - sc)
       + h(r0, c0 + 1) * (1 - sr) * sc + h(r0 + 1, c0 + 1) * sr * sc;
};
const isLand = (row, col) => {
  const nx = (col - COLS / 2) / (COLS / 2);
  const nz = (row - ROWS / 2) / (ROWS / 2);
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
      sr: 18 + (hash2(i, 3, 900) % (ROWS - 36)),
      sc: 18 + (hash2(i, 7, 901) % (COLS - 36)),
      ang: ((hash2(i, 11, 902) % 1000) / 1000) * Math.PI,
      rAlong:  ridge ? 28 + (hash2(i, 13, 903) % 48) : 13 + (hash2(i, 13, 903) % 15),
      rAcross: ridge ? 7 + (hash2(i, 17, 904) % 8)   : 11 + (hash2(i, 17, 904) % 16),
      peak: (ridge ? 1.9 : 1.6) + ((hash2(i, 19, 905) % 100) / 100) * (ridge ? 1.6 : 1.4),
      lobes: 2 + (hash2(i, 23, 906) % 4),
      phase: ((hash2(i, 29, 907) % 1000) / 1000) * Math.PI * 2
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
  const total = ROWS * COLS;
  const tiles = new Array(total);
  const batch = 8000;
  for (let start = 0; start < total; start += batch) {
    const end = Math.min(total, start + batch);
    for (let idx = start; idx < end; idx++) {
      const row = Math.floor(idx / COLS), col = idx % COLS;
      if (!isLand(row, col)) {
        tiles[idx] = { id: `${row}_${col}`, row, col, type: "water", owner: null, level: 1, elev: -0.5, shade: 1 };
        continue;
      }
      const type = baseType(row, col);
      tiles[idx] = {
        id: `${row}_${col}`, row, col, type, owner: null, level: 1,
        elev: baseElev(type, row, col), shade: 0.90 + h01(row, col, 303) * 0.16
      };
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

const nbIds = (row, col) => [
  [row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]
].filter(([r, c]) => r >= 0 && r < ROWS && c >= 0 && c < COLS).map(([r, c]) => `${r}_${c}`);

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
const decorGeo = {
  treeTrunk: new THREE.CylinderGeometry(0.065, 0.09, 0.38, 5),
  treeCrown: new THREE.ConeGeometry(0.26, 0.58, 6),
  rock: new THREE.DodecahedronGeometry(0.24, 0),
  rockSmall: new THREE.DodecahedronGeometry(0.13, 0),
  crop: new THREE.BoxGeometry(0.06, 0.14, 0.52),
  bush: new THREE.IcosahedronGeometry(0.22, 0),
  reed: new THREE.CylinderGeometry(0.025, 0.035, 0.34, 4),
  flower: new THREE.CylinderGeometry(0.025, 0.025, 0.12, 4),
  ridge: new THREE.BoxGeometry(0.68, 0.18, 0.22),
  peak: new THREE.ConeGeometry(0.58, 1.15, 5),
  peakSmall: new THREE.ConeGeometry(0.34, 0.62, 5),
  houseBase: new THREE.BoxGeometry(0.9, 0.7, 0.9),
  houseRoof: new THREE.ConeGeometry(0.75, 0.6, 4)
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
  houseBase: mat(0x8a6a44),
  water: new THREE.MeshLambertMaterial({ color: 0x0d3a52 })
};

function needsSides(t, all) {
  const e = t.elev;
  const nbs = [[t.row - 1, t.col], [t.row + 1, t.col], [t.row, t.col - 1], [t.row, t.col + 1]];
  for (const [r, c] of nbs) {
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) return true;
    if (all[r * COLS + c].elev < e - 0.02) return true;
  }
  return false;
}
function createInstancedSet(scene, arr, detail, allTiles) {
  const buckets = {};
  for (const t of arr) { (buckets[t.type] ||= []).push(t); }
  const dummy = new THREE.Object3D();
  const byId = {};
  const groups = {};
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
        const bh = BASE_H + t.elev;
        const h = bh + 1.3;
        dummy.position.set(p.x, (bh - 1.3) / 2, p.z);
        dummy.scale.set(1, h, 1);
        dummy.updateMatrix();
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
      dummy.scale.set(1, TOP_THICK, 1);
      dummy.updateMatrix();
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
    const p = toXZ(t.col, t.row);
    const top = tileTop(t);
    if (t.type === "forest") { if (s < 42) defs.trees.push([p.x, p.z, top]); }
    else if (t.type === "mountain") {
      const ps = 0.62 + Math.min(2.4, t.elev) * 0.5;
      const ox = (hash2(t.row, t.col, 610) % 1000 / 1000 - 0.5) * 0.6;
      const oz = (hash2(t.row, t.col, 611) % 1000 / 1000 - 0.5) * 0.6;
      defs.peaks.push([p.x + ox, p.z + oz, top + 0.575 * ps, ps]);
      if (t.elev > 1.7) {
        const ss = ps * 0.46;
        defs.snows.push([p.x + ox, p.z + oz, top + 1.15 * ps - 0.31 * ss + 0.02, ss]);
      }
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
  const geoOffset = g => {
    if (g === decorGeo.treeTrunk) return 0.19;
    if (g === decorGeo.treeCrown) return 0.29;
    if (g === decorGeo.rock) return 0.22;
    if (g === decorGeo.rockSmall) return 0.13;
    if (g === decorGeo.crop) return 0.07;
    if (g === decorGeo.bush) return 0.14;
    if (g === decorGeo.reed) return 0.17;
    if (g === decorGeo.flower) return 0.06;
    if (g === decorGeo.ridge) return 0.09;
    return 0.3;
  };
  const make = (geo, material, items, per = 1, spread = 1.7) => {
    const mesh = new THREE.InstancedMesh(geo, material, Math.max(1, items.length * per));
    mesh.frustumCulled = true;
    const d = new THREE.Object3D();
    let k = 0;
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      const final = it.length === 4;
      for (let j = 0; j < per; j++) {
        const ox = final ? 0 : (hash2(i, j, 501 + per) % 1000 / 1000 - 0.5) * spread;
        const oz = final ? 0 : (hash2(i, j, 502 + per) % 1000 / 1000 - 0.5) * spread;
        const s = final ? it[3] : 0.78 + (hash2(i, j, 503 + per) % 40) / 100;
        const y = final ? it[2] : it[2] + geoOffset(geo) * s + SURFACE_EPS;
        d.position.set(it[0] + ox, y, it[1] + oz);
        if (geo === decorGeo.treeTrunk) d.scale.set(1, 1, 1);
        else d.scale.setScalar(s);
        d.rotation.y = (geo === decorGeo.peak || geo === decorGeo.peakSmall || geo === decorGeo.houseRoof)
          ? ((hash2(i, j, 540 + per) % 1000) / 1000) * Math.PI * 2 : 0;
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
  for (let r = r0; r < r1; r++)
    for (let c = c0; c < c1; c++)
      arr.push(tilesAll[r * COLS + c]);
  const inst = createInstancedSet(scene, arr, !far, tilesAll);
  const decor = far ? null : createDecor(scene, arr);
  return { cr, cc, far, territories: arr, inst, decor };
}
function removeWorldChunk(scene, chunk) {
  for (const g of Object.values(chunk.inst.groups)) {
    scene.remove(g.top); g.top.dispose();
    if (g.side) { scene.remove(g.side); g.side.dispose(); }
  }
  if (chunk.decor) for (const m of Object.values(chunk.decor))
    if (m) { scene.remove(m); m.dispose(); }
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
  for (const g of Object.values(inst.groups))
    if (g.top.instanceColor) g.top.instanceColor.needsUpdate = true;
}
function createAnimatedOcean() {
  const geo = new THREE.PlaneGeometry(MAP_W + 7000, MAP_D + 7000, 140, 140);
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0x0e3d55) },
      uDeep: { value: new THREE.Color(0x092a3c) },
      uFogColor: { value: new THREE.Color(FOG_COLOR) },
      uFogNear: { value: FOG_NEAR },
      uFogFar: { value: FOG_FAR }
    },
    vertexShader: `
      uniform float uTime;
      varying float vWave; varying float vDepth;
      void main(){
        vec3 p = position;
        float w = sin(p.x*0.020+uTime*0.60)*0.30
                + cos(p.y*0.026-uTime*0.42)*0.24
                + sin((p.x+p.y)*0.011+uTime*0.30)*0.16;
        p.z += w; vWave = w;
        vec4 mv = modelViewMatrix*vec4(p,1.0);
        vDepth = -mv.z;
        gl_Position = projectionMatrix*mv;
      }`,
    fragmentShader: `
      uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFogColor;
      uniform float uFogNear; uniform float uFogFar;
      varying float vWave; varying float vDepth;
      void main(){
        float k = clamp((vWave+0.70)/1.40, 0.0, 1.0);
        vec3 c = mix(uDeep, uColor, k);
        c += vec3(0.05,0.08,0.09)*pow(k,3.0);
        float f = smoothstep(uFogNear, uFogFar, vDepth);
        c = mix(c, uFogColor, f);
        gl_FragColor = vec4(c,1.0);
      }`
  });
  const mesh = new THREE.Mesh(geo, m);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -0.75;
  return mesh;
}

// ================= 3D-ЭКРАН =================
function MapScreen3D({ territories, onSelect, selectedId, reachable, onReady, onProgress, controlsRef, rev, borders, reach, pins, houses }) {
  const mountRef = useRef(null), R = useRef({});
  const dataRef = useRef({ territories, onSelect, selectedId, reachable, onReady, onProgress });
  useEffect(() => { dataRef.current = { territories, onSelect, selectedId, reachable, onReady, onProgress }; });

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
      camera.position.set(
        r.targetX + Math.sin(r.yaw) * cp * r.dist,
        Math.sin(r.pitch) * r.dist,
        r.targetZ + Math.cos(r.yaw) * cp * r.dist
      );
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
    const onRestored = () => {
      renderer.setSize(Math.max(2, mount.clientWidth), Math.max(2, mount.clientHeight));
      r.updateProjection(); r.refreshChunks();
    };
    renderer.domElement.addEventListener("webglcontextlost", onLost, false);
    renderer.domElement.addEventListener("webglcontextrestored", onRestored, false);

    scene.add(new THREE.HemisphereLight(0xcfe8ff, 0x2a3b2a, 0.9));
    const sun = new THREE.DirectionalLight(0xfff3c8, 1.5);
    sun.position.set(-60, 120, 40); scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.25);
    fill.position.set(80, 60, -90); scene.add(fill);

    const ocean = createAnimatedOcean(); scene.add(ocean); r.ocean = ocean;

    const sel = new THREE.Mesh(
      new THREE.PlaneGeometry(TILE - 0.09, TILE - 0.09),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.12, depthWrite: false, side: THREE.DoubleSide })
    );
    sel.rotation.x = -Math.PI / 2; sel.visible = false; scene.add(sel); r.selection = sel;

    r.chunks = new Map();
    r.chunkQueue = [];
    r.chunkWanted = new Set();
    r.farMode = false;
    r.initialReady = false;
    r.raycaster = new THREE.Raycaster();
    r.mouse2D = new THREE.Vector2();

    r.updateProjection = () => {
      camera.aspect = Math.max(2, mount.clientWidth) / Math.max(2, mount.clientHeight);
      camera.updateProjectionMatrix();
    };

    const chunkCenter = key => {
      const far = key[0] === "F";
      const ts = far ? FAR_TILES : CHUNK_TILES;
      const [cr, cc] = key.slice(far ? 1 : 0).split(":").map(Number);
      return { x: (cr + 0.5) * ts * TILE - MCX, z: (cc + 0.5) * ts * TILE - MCZ };
    };
    const chunkDist = key => {
      const c = chunkCenter(key);
      const dx = c.x - r.targetX, dz = c.z - r.targetZ;
      return dx * dx + dz * dz;
    };

    const desiredChunkKeys = () => {
      const cw = Math.max(2, mount.clientWidth), ch = Math.max(2, mount.clientHeight);
      const a = cw / ch;
      const hh = r.dist * TAN, hw = hh * a;
      if (!isFinite(hh) || !isFinite(hw) || hh <= 0 || hw <= 0) return r.chunkWanted;
      const ts = r.farMode ? FAR_TILES : CHUNK_TILES;
      const radius = Math.max(hw, hh) * 1.4 + ts * TILE;
      const minCol = Math.max(0, Math.floor((r.targetX + MCX - radius) / TILE));
      const maxCol = Math.min(COLS - 1, Math.floor((r.targetX + MCX + radius) / TILE));
      const minRow = Math.max(0, Math.floor((r.targetZ + MCZ - radius) / TILE));
      const maxRow = Math.min(ROWS - 1, Math.floor((r.targetZ + MCZ + radius) / TILE));
      const perRow = Math.ceil(COLS / ts), perCol = Math.ceil(ROWS / ts);
      const minCC = clamp(Math.floor(minCol / ts) - 1, 0, perRow - 1);
      const maxCC = clamp(Math.floor(maxCol / ts) + 1, 0, perRow - 1);
      const minCR = clamp(Math.floor(minRow / ts) - 1, 0, perCol - 1);
      const maxCR = clamp(Math.floor(maxRow / ts) + 1, 0, perCol - 1);
      let wanted = new Set();
      for (let cr = minCR; cr <= maxCR; cr++)
        for (let cc = minCC; cc <= maxCC; cc++)
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
      for (const key of wanted)
        if (!r.chunks.has(key) && !r.chunkQueue.includes(key)) r.chunkQueue.push(key);
      for (const [key, chunk] of r.chunks) {
        if (!wanted.has(key) || chunk.far !== r.farMode) {
          removeWorldChunk(scene, chunk);
          r.chunks.delete(key);
        }
      }
    };

    const applyLoadedColors = () => {
      const d = dataRef.current;
      for (const chunk of r.chunks.values())
        applyInstanceColors(chunk.inst, chunk.territories, d.reachable, d.selectedId);
    };

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
      if (!r.initialReady && loaded === wantedCount) {
        r.initialReady = true;
        dataRef.current.onReady?.();
      }
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

      if (Math.abs(r.dist - lastDist) > 0.5 ||
          Math.abs(r.targetX - lastX) > CHUNK_TILES * TILE * 0.2 ||
          Math.abs(r.targetZ - lastZ) > CHUNK_TILES * TILE * 0.2) {
        lastX = r.targetX; lastZ = r.targetZ; lastDist = r.dist;
        r.refreshChunks();
      }
      processChunkQueue();

      if (r.ocean?.material?.uniforms?.uTime)
        r.ocean.material.uniforms.uTime.value = performance.now() * 0.001;
      if (r.selection.visible)
        r.selection.material.opacity = 0.10 + 0.07 * Math.sin(performance.now() * 0.004);
      if (r.reachMesh)
        r.reachMesh.material.opacity = 0.14 + 0.12 * Math.sin(performance.now() * 0.0035);

      frames++;
      if (frames % 30 === 0) {
        const details = r.dist < 170;
        const sides = r.dist < 320;
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
      renderer.setSize(w, h);
      r.updateProjection();
      r.refreshChunks();
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

  // цвета + маркер выделения
  useEffect(() => {
    const r = R.current;
    if (!r.chunks) return;
    for (const chunk of r.chunks.values())
      applyInstanceColors(chunk.inst, chunk.territories, reachable, selectedId);
    const t = territories.find(x => x.id === selectedId);
    if (t) {
      const p = toXZ(t.col, t.row);
      r.selection.position.set(p.x, tileTop(t) + 0.02, p.z);
      r.selection.visible = true;
    } else r.selection.visible = false;
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
    const d = new THREE.Object3D();
    const c = new THREE.Color();
    borders.forEach((b, i) => {
      d.position.set(b.x, b.y, b.z);
      d.rotation.y = b.vert ? Math.PI / 2 : 0;
      d.scale.set(TILE + 0.10, 0.10, 0.26);
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
      if (b.owner === "me") c.setHex(0xffd75e);
      else { let h = 0; for (let k = 0; k < b.owner.length; k++) h = (h * 31 + b.owner.charCodeAt(k)) >>> 0; c.setHSL((h % 360) / 360, 0.85, 0.6); }
      m.setColorAt(i, c);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    r.scene.add(m);
    r.borderMesh = m;
  }, [borders]);

  // подсветка доступных клеток / клеток перемещения
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.reachMesh) { r.scene.remove(r.reachMesh); r.reachMesh.dispose(); r.reachMesh = null; }
    if (!reach || !reach.length) return;
    if (!r.reachGeo) r.reachGeo = new THREE.PlaneGeometry(TILE - 0.25, TILE - 0.25);
    if (!r.reachMat) r.reachMat = new THREE.MeshBasicMaterial({
      color: 0xaef7a0, transparent: true, opacity: 0.2,
      depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending
    });
    const m = new THREE.InstancedMesh(r.reachGeo, r.reachMat, reach.length);
    const d = new THREE.Object3D();
    reach.forEach((q, i) => {
      d.position.set(q.x, q.y, q.z);
      d.rotation.x = -Math.PI / 2;
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
    });
    m.instanceMatrix.needsUpdate = true;
    r.scene.add(m);
    r.reachMesh = m;
  }, [reach]);

  // пины юнитов на карте
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.pinMesh) { r.scene.remove(r.pinMesh); r.pinMesh.dispose(); r.pinMesh = null; }
    if (!pins || !pins.length) return;
    if (!r.pinGeo) r.pinGeo = new THREE.ConeGeometry(0.45, 1.6, 4);
    if (!r.pinMat) r.pinMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95 });
    const m = new THREE.InstancedMesh(r.pinGeo, r.pinMat, pins.length);
    const d = new THREE.Object3D();
    const c = new THREE.Color();
    pins.forEach((q, i) => {
      d.position.set(q.x, q.y + 0.8, q.z);
      d.rotation.y = Math.PI / 4;
      d.updateMatrix();
      m.setMatrixAt(i, d.matrix);
      if (q.mine) c.setHex(0xc4b5fd);
      else { let h = 0; for (let k = 0; k < q.owner.length; k++) h = (h * 31 + q.owner.charCodeAt(k)) >>> 0; c.setHSL((h % 360) / 360, 0.85, 0.65); }
      m.setColorAt(i, c);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    r.scene.add(m);
    r.pinMesh = m;
  }, [pins]);

  // поселения: домики на своих клетках
  useEffect(() => {
    const r = R.current;
    if (!r.scene) return;
    if (r.houseBaseMesh) { r.scene.remove(r.houseBaseMesh); r.houseBaseMesh.dispose(); r.houseBaseMesh = null; }
    if (r.houseRoofMesh) { r.scene.remove(r.houseRoofMesh); r.houseRoofMesh.dispose(); r.houseRoofMesh = null; }
    if (!houses || !houses.length) return;
    const mb = new THREE.InstancedMesh(decorGeo.houseBase, MATS.houseBase, houses.length);
    if (!r.roofMat) r.roofMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1 });
    const mr = new THREE.InstancedMesh(decorGeo.houseRoof, r.roofMat, houses.length);
    const d = new THREE.Object3D();
    const c = new THREE.Color();
    houses.forEach((q, i) => {
      const rot = ((hash2(Math.round(q.x * 7), Math.round(q.z * 7), 555) % 1000) / 1000) * Math.PI * 2;
      d.position.set(q.x, q.y + 0.35, q.z);
      d.rotation.set(0, rot, 0);
      d.scale.setScalar(1);
      d.updateMatrix();
      mb.setMatrixAt(i, d.matrix);
      d.position.set(q.x, q.y + 0.95, q.z);
      d.updateMatrix();
      mr.setMatrixAt(i, d.matrix);
      if (q.mine) c.setHex(0xffd75e);
      else { let h = 0; for (let k = 0; k < q.owner.length; k++) h = (h * 31 + q.owner.charCodeAt(k)) >>> 0; c.setHSL((h % 360) / 360, 0.8, 0.55); }
      mr.setColorAt(i, c);
    });
    mb.instanceMatrix.needsUpdate = true;
    mr.instanceMatrix.needsUpdate = true;
    if (mr.instanceColor) mr.instanceColor.needsUpdate = true;
    r.scene.add(mb); r.scene.add(mr);
    r.houseBaseMesh = mb; r.houseRoofMesh = mr;
  }, [houses]);

  // управление
  useEffect(() => {
    const mount = mountRef.current, r = R.current;
    if (!mount) return;

    const clampTarget = () => {
      const a = Math.max(2, mount.clientWidth) / Math.max(2, mount.clientHeight);
      const hh = r.distTarget * TAN, hw = hh * a;
      const lx = Math.max(MAP_W / 2 + PAN_MARGIN - hw, 0);
      const lz = Math.max(MAP_D / 2 + PAN_MARGIN - hh, 0);
      r.panTargetX = clamp(r.panTargetX, -lx, lx);
      r.panTargetZ = clamp(r.panTargetZ, -lz, lz);
    };
    const panBy = (dx, dy) => {
      const scale = (2 * r.dist * TAN) / Math.max(1, mount.clientHeight);
      const rx = Math.cos(r.yaw), rz = -Math.sin(r.yaw);
      const ux = -Math.sin(r.yaw), uz = -Math.cos(r.yaw);
      r.panTargetX += (-rx * dx + ux * dy) * scale;
      r.panTargetZ += (-rz * dx + uz * dy) * scale;
      clampTarget();
    };
    const zoomBy = f => { r.distTarget = clamp(r.distTarget / f, MIN_D, MAX_D); clampTarget(); };

    if (controlsRef) {
      controlsRef.current = {
        zoomBy,
        focus: (x, z) => { r.panTargetX = x; r.panTargetZ = z; },
        resetView: () => {
          r.panTargetX = 0; r.panTargetZ = 0; r.distTarget = START_D;
          r.yaw = 0.32; r.pitchOff = 0; r.updateCameraPose();
        }
      };
    }

    const doClick = (cx, cy) => {
      const rect = mount.getBoundingClientRect();
      r.mouse2D.x = ((cx - rect.left) / rect.width) * 2 - 1;
      r.mouse2D.y = -((cy - rect.top) / rect.height) * 2 + 1;
      r.raycaster.setFromCamera(r.mouse2D, r.camera);
      const targets = [];
      for (const chunk of r.chunks.values())
        for (const g of Object.values(chunk.inst.groups)) targets.push(g.top);
      const hits = r.raycaster.intersectObjects(targets, false);
      if (!hits.length || hits[0].instanceId == null) return;
      const obj = hits[0].object, idx = hits[0].instanceId;
      let found = null;
      for (const chunk of r.chunks.values()) {
        for (const g of Object.values(chunk.inst.groups)) {
          if (g.top === obj) { found = g.arr[idx]; break; }
        }
        if (found) break;
      }
      if (found) dataRef.current.onSelect(found);
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

    mount.style.touchAction = "none";
    mount.style.cursor = "grab";
    mount.addEventListener("mousedown", downFn);
    mount.addEventListener("mousemove", moveFn);
    mount.addEventListener("mouseup", upFn);
    mount.addEventListener("mouseleave", leaveFn);
    mount.addEventListener("wheel", wheelFn, { passive: false });
    mount.addEventListener("dblclick", dblFn);
    mount.addEventListener("contextmenu", contextFn);
    mount.addEventListener("touchstart", touchStart, { passive: true });
    mount.addEventListener("touchmove", touchMove, { passive: false });
    mount.addEventListener("touchend", touchEnd);

    return () => {
      if (controlsRef) controlsRef.current = null;
      mount.removeEventListener("mousedown", downFn);
      mount.removeEventListener("mousemove", moveFn);
      mount.removeEventListener("mouseup", upFn);
      mount.removeEventListener("mouseleave", leaveFn);
      mount.removeEventListener("wheel", wheelFn);
      mount.removeEventListener("dblclick", dblFn);
      mount.removeEventListener("contextmenu", contextFn);
      mount.removeEventListener("touchstart", touchStart);
      mount.removeEventListener("touchmove", touchMove);
      mount.removeEventListener("touchend", touchEnd);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#0a1620" }}>
      <div ref={mountRef} style={{ width: "100%", height: "100%" }} />
      <div style={{ position: "absolute", right: 12, top: 12, background: "rgba(8,16,10,.74)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 11, padding: "8px 10px", fontSize: 10, lineHeight: 1.65, pointerEvents: "none", backdropFilter: "blur(4px)" }}>
        <div style={{ fontWeight: 800, marginBottom: 3 }}>Биомы</div>
        <div>🌿 Луг</div>
        <div>🌲 Лес · защита</div>
        <div>⛰️ Холмы · защита</div>
        <div>🌾 Поля</div>
        <div>🪷 Болота · воздух</div>
        <div>🏔️ Горы · непроходимы</div>
      </div>
      <div style={{ position: "absolute", left: 12, bottom: 64, fontSize: 10, color: "#ffffff66", pointerEvents: "none" }}>
        Тяни — панорама · ПКМ — поворот · Колесо/пинч/кнопки — зум
      </div>
    </div>
  );
}

// ================= UI =================
function Btn({ onClick, disabled, variant = "primary", children, style }) {
  const bg = disabled ? PAL.border : variant === "success" ? "#087f3f" : variant === "danger" ? "#b93838" : variant === "ghost" ? "transparent" : PAL.accent;
  return (
    <button onClick={disabled ? undefined : onClick} style={{ width: "100%", padding: "12px 0", border: variant === "ghost" ? `1px solid ${PAL.border}` : "none", borderRadius: 11, fontWeight: 800, fontSize: 14, cursor: disabled ? "not-allowed" : "pointer", background: bg, color: disabled ? PAL.muted : "#fff", ...style }}>
      {children}
    </button>
  );
}
function ZoomBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{ width: 42, height: 42, borderRadius: 12, border: "1px solid rgba(255,255,255,.14)", background: "rgba(8,16,16,.82)", color: "#e6eee8", fontSize: 20, fontWeight: 800, cursor: "pointer", lineHeight: 1 }}>
      {children}
    </button>
  );
}
const hudBtn = { width: 40, height: 40, borderRadius: 12, border: "1px solid rgba(255,255,255,.12)", background: "rgba(8,16,16,.85)", fontSize: 18, cursor: "pointer", flexShrink: 0 };

function Hud({ profile, supplyEta, now }) {
  let timer = "";
  if (profile.supplies < profile.supplyMax && supplyEta) {
    const s = Math.max(0, Math.ceil((supplyEta - now) / 1000));
    timer = ` (${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")})`;
  }
  return (
    <div style={{ position: "absolute", left: 12, top: 12, padding: "7px 12px", borderRadius: 10, background: "rgba(8,16,16,.82)", border: "1px solid rgba(255,255,255,.08)", fontSize: 12, fontWeight: 800, pointerEvents: "none" }}>
      🪙 {profile.coins}{profile.income > 0 && <span style={{ color: "#7fd18a", fontWeight: 600 }}> +{profile.income}/м</span>}
      <span style={{ marginLeft: 12 }}>⚡ {profile.supplies}/{profile.supplyMax}<span style={{ color: PAL.muted, fontWeight: 600 }}>{timer}</span></span>
      <span style={{ marginLeft: 12 }}>🏔️ {profile.owned.length}/{MAX_OWN}</span>
    </div>
  );
}

// нижний бар: инвентарь, кейсы серверов, топы
function BottomBar({ servers, onInv, onCase, onTops }) {
  return (
    <div style={{ position: "absolute", left: 0, right: 0, bottom: 10, display: "flex", gap: 8, justifyContent: "center", alignItems: "center", padding: "0 12px", overflowX: "auto", overflowY: "hidden" }}>
      <button onClick={onInv} style={hudBtn}>🎒</button>
      {servers.map(s => (
        <button key={s.name} onClick={() => onCase(s.name)} style={{ ...hudBtn, width: "auto", padding: "0 14px", fontSize: 13, fontWeight: 800, color: PAL.text, whiteSpace: "nowrap" }}>
          📦 {pretty(s.name)}
        </button>
      ))}
      <button onClick={onTops} style={hudBtn}>🏆</button>
    </div>
  );
}

function UnitChip({ u, sel, onClick }) {
  const dead = u.hp <= 0;
  return (
    <div onClick={dead ? undefined : onClick} style={{ minWidth: 86, borderRadius: 12, padding: 8, cursor: dead ? "not-allowed" : "pointer", border: sel ? "2px solid " + PAL.accent : "1px solid " + PAL.border, background: dead ? "#1a1212" : PAL.bg, opacity: dead ? 0.5 : 1, textAlign: "center" }}>
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

function TerritoryModal({ t, building, profile, selUnit, setSelUnit, onAttack, onBuild, onClose, result, canInteract, busy, freePlace, stationed, idle, onPlace, onMoveStart }) {
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

        {isOwn && (stationed.length > 0 || idle.length > 0) && (
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Юниты (📍 поставить / ➡️ переместить ⚡1):</div>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6 }}>
              {stationed.map(u => (
                <div key={u.uid} style={{ position: "relative" }}>
                  <UnitChip u={u} sel={false} onClick={() => {}} />
                  <button onClick={() => onMoveStart(u.uid)} style={{ position: "absolute", right: 2, top: 2, width: 26, height: 26, borderRadius: 8, border: "none", background: PAL.accent, color: "#fff", fontWeight: 800, cursor: "pointer" }}>➡️</button>
                </div>
              ))}
              {idle.map(u => (
                <div key={u.uid} style={{ position: "relative" }}>
                  <UnitChip u={u} sel={false} onClick={() => {}} />
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
            {!canInteract && <div style={{ fontSize: 12, color: PAL.muted, marginBottom: 8 }}>Можно атаковать только соседние со своими клетки.</div>}
            {canInteract && freePlace && <div style={{ fontSize: 12, color: PAL.gold, marginBottom: 8 }}>🎁 Первая клетка — куда угодно!</div>}
            {canInteract && (
              <>
                <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>Юнит в атаку (⚡−1):</div>
                <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 6, marginBottom: 8 }}>
                  {profile.units.length === 0 && <div style={{ fontSize: 12, color: PAL.muted }}>Нет юнитов — открой кейс 📦</div>}
                  {profile.units.filter(u => u.hp > 0).map(u => <UnitChip key={u.uid} u={u} sel={selUnit === u.uid} onClick={() => setSelUnit(u.uid)} />)}
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
            <div style={{ fontSize: 9, color: PAL.textD, marginTop: 2 }}>{u.pos ? "️ на карте" : "💤 в резерве"}</div>
          </div>
        ))}
      </div>
    </Modal>
  );
}

function CaseModal({ servers, caseCost, coins, initSrv, onOpen, onClose }) {
  const [srv, setSrv] = useState(initSrv || null);
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
      <style>{`
        @keyframes caseShake{0%,100%{transform:rotate(0)}20%{transform:rotate(-7deg)}40%{transform:rotate(7deg)}60%{transform:rotate(-5deg)}80%{transform:rotate(5deg)}}
        @keyframes cardPop{0%{transform:scale(.3) rotateY(90deg);opacity:0}60%{transform:scale(1.12) rotateY(0deg);opacity:1}100%{transform:scale(1)}}
      `}</style>
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
      <Btn disabled={phase === "rolling" || !cur || coins < caseCost} onClick={open}>
        {phase === "rolling" ? "Открываем…" : `Открыть кейс «${pretty(cur)}» — ${caseCost} 🪙`}
      </Btn>
    </Modal>
  );
}

function TopsModal({ onClose }) {
  const [tab, setTab] = useState("power");
  const [data, setData] = useState(null);
  useEffect(() => {
    api.tops().then(setData).catch(() => setData({ coins: [], cards: [], power: [] }));
  }, []);
  const list = data ? (tab === "coins" ? data.coins : tab === "cards" ? data.cards : data.power) : [];
  const medal = i => i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `${i + 1}.`;
  const unit = tab === "coins" ? "🪙" : tab === "cards" ? "" : "💪";
  return (
    <Modal title="🏆 Топы игроков" onClose={onClose}>
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {[["power", "🏰 Сила"], ["coins", "🪙 Монеты"], ["cards", "🃏 Карты"]].map(([k, n]) => (
          <button key={k} onClick={() => setTab(k)} style={{ padding: "6px 12px", borderRadius: 9, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "1px solid " + (tab === k ? PAL.accent : PAL.border), background: tab === k ? "#2a1d4d" : "transparent", color: PAL.text }}>
            {n}
          </button>
        ))}
      </div>
      {list.length === 0 && <div style={{ color: PAL.muted, fontSize: 13 }}>Пока пусто.</div>}
      {list.map((row, i) => (
        <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 10px", borderRadius: 9, background: i % 2 ? "transparent" : PAL.bg, border: "1px solid " + PAL.border, marginBottom: 4, fontSize: 13 }}>
          <span style={{ fontWeight: 700 }}>{medal(i)} {row.n}</span>
          <span style={{ color: PAL.gold, fontWeight: 800 }}>{row.v} {unit}</span>
        </div>
      ))}
    </Modal>
  );
}

function BootScreen({ progress, text }) {
  const p = clamp(progress, 0, 100);
  return (
    <div style={{ position: "fixed", inset: 0, background: "radial-gradient(circle at 50% 35%,#10283a 0%,#071018 72%)", color: "#e6eee8", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system,system-ui,sans-serif" }}>
      <div style={{ width: "min(440px,84vw)", textAlign: "center" }}>
        <div style={{ fontSize: 42, marginBottom: 12 }}>🏔️</div>
        <div style={{ fontSize: 25, fontWeight: 900, letterSpacing: -0.5 }}>Загрузка мира</div>
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
const MOCK_PROFILE = {
  id: "dev", name: "Dev", coins: 1000, supplies: 12, supplyMax: 12, supplyNextIn: 0,
  income: 0, heal: 0, units: [{ uid: "u1", name: "Тест", server: "dev", file: "test.png", air: 5, ground: 6, protection: 4, hp: 100, pos: null }],
  owned: [], buildings: {}
};

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
  const [caseSrv, setCaseSrv] = useState(null);
  const [busy, setBusy] = useState(false);
  const [now, setNow] = useState(Date.now());
  const [note, setNote] = useState("");
  const [moveMode, setMoveMode] = useState(null);
  const controlsRef = useRef(null);

  const flash = msg => { setNote(msg); setTimeout(() => setNote(""), 2600); };

  useEffect(() => {
    let alive = true;
    genMapProgressive(p => { if (alive) setLoad(p); }).then(map => { if (alive) setTerritories(map); });
    return () => { alive = false; };
  }, []);

  const syncProfile = p => {
    setProfile(p);
    setSupplyEta(Date.now() + (p.supplyNextIn || 0) * 1000);
  };
  const setOv = d => setOverlay({ owners: d.owners || {}, buildings: d.buildings || {}, units: d.units || [] });

  useEffect(() => {
    api.init().then(d => {
      syncProfile(d.profile); setOv(d);
      setServers(d.servers); setCaseCost(d.caseCost || 120);
      const first = d.profile.units.find(u => u.hp > 0);
      if (first) setSelUnit(first.uid);
    }).catch(e => {
      console.warn("Сервер недоступен, оффлайн-режим:", e.message);
      syncProfile(MOCK_PROFILE);
    });
  }, []);

  useEffect(() => {
    if (!territories) return;
    applyOverlay(territories, overlay.owners);
    setRev(r => r + 1);
  }, [territories, overlay]);

  useEffect(() => {
    if (!profile) return;
    const id = setInterval(() => {
      api.state().then(d => { syncProfile(d.profile); setOv(d); }).catch(() => {});
    }, 20000);
    return () => clearInterval(id);
  }, [!!profile]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500);
    return () => clearInterval(id);
  }, []);

  const reachable = useMemo(() => territories ? getReachable(territories) : new Set(), [territories, rev]);

  const borders = useMemo(() => {
    if (!territories) return [];
    const out = [];
    const get = (r2, c2) => (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) ? null : territories[r2 * COLS + c2];
    for (const t of territories) {
      if (!t.owner) continue;
      const p = toXZ(t.col, t.row);
      const y = tileTop(t) + 0.06;
      const nN = get(t.row - 1, t.col), nS = get(t.row + 1, t.col), nW = get(t.row, t.col - 1), nE = get(t.row, t.col + 1);
      if (!nN || nN.owner !== t.owner) out.push({ x: p.x, z: p.z - TILE / 2, y, vert: false, owner: t.owner });
      if (!nS || nS.owner !== t.owner) out.push({ x: p.x, z: p.z + TILE / 2, y, vert: false, owner: t.owner });
      if (!nW || nW.owner !== t.owner) out.push({ x: p.x - TILE / 2, z: p.z, y, vert: true, owner: t.owner });
      if (!nE || nE.owner !== t.owner) out.push({ x: p.x + TILE / 2, z: p.z, y, vert: true, owner: t.owner });
    }
    return out;
  }, [territories, rev]);

  // поселения: домик на каждой своей клетке (с детерминированным смещением)
  const houses = useMemo(() => {
    if (!territories) return [];
    const out = [];
    for (const t of territories) {
      if (!t.owner || t.type === "water") continue;
      const p = toXZ(t.col, t.row);
      const ox = (hash2(t.row, t.col, 660) % 1000 / 1000 - 0.5) * 1.2;
      const oz = (hash2(t.row, t.col, 661) % 1000 / 1000 - 0.5) * 1.2;
      out.push({ x: p.x + ox, z: p.z + oz, y: tileTop(t), mine: t.owner === "me", owner: t.owner });
    }
    return out;
  }, [territories, rev]);

  // пины юнитов всех игроков
  const pins = useMemo(() => {
    if (!territories) return [];
    const out = [];
    for (const u of (overlay.units || [])) {
      const [r, c] = u.tileId.split("_").map(Number);
      if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
      const t = territories[r * COLS + c];
      if (!t) continue;
      const p = toXZ(t.col, t.row);
      out.push({ x: p.x, z: p.z, y: tileTop(t), mine: u.own === "me", owner: u.own, name: u.name });
    }
    return out;
  }, [territories, overlay, rev]);

  // клетки для перемещения юнита (соседние свои)
  const moveTargets = useMemo(() => {
    if (!moveMode || !territories) return new Set();
    const [r, c] = moveMode.from.split("_").map(Number);
    const s = new Set();
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const r2 = r + dr, c2 = c + dc;
      if (r2 < 0 || r2 >= ROWS || c2 < 0 || c2 >= COLS) continue;
      const t = territories[r2 * COLS + c2];
      if (t && t.owner === "me") s.add(t.id);
    }
    return s;
  }, [moveMode, territories, rev]);

  const reachList = useMemo(() => {
    if (!territories) return [];
    const out = [];
    for (const t of territories) {
      const hit = moveMode ? moveTargets.has(t.id) : reachable.has(t.id);
      if (!hit) continue;
      const p = toXZ(t.col, t.row);
      out.push({ x: p.x, z: p.z, y: tileTop(t) + 0.05 });
    }
    return out;
  }, [territories, reachable, rev, moveMode, moveTargets]);

  const freePlace = !!profile && profile.owned.length === 0;

  const doAttack = async unitId => {
    if (!selected || busy) return;
    setBusy(true); setResult(null);
    try {
      const d = await api.attack(selected.id, unitId);
      setResult(d.result);
      syncProfile(d.profile);
      const t = territories.find(x => x.id === selected.id);
      if (d.owners[selected.id] === "me" && t) t.owner = "me";
      setRev(r => r + 1);
      setSelected(t ? { ...t } : null);
      if (d.result.win) flash("🏆 Клетка захвачена, юнит встал на неё");
    } catch (e) { setResult({ error: e.message }); }
    setBusy(false);
  };

  const doBuild = async b => {
    if (!selected || busy) return;
    setBusy(true);
    try {
      const d = await api.build(selected.id, b);
      syncProfile(d.profile);
      setOverlay(o => ({ ...o, buildings: { ...o.buildings, [d.building.tileId]: { b: d.building.b, own: "me" } } }));
      flash("🏗️ Построено: " + BUILDINGS_UI[b].n);
    } catch (e) { setResult({ error: e.message }); }
    setBusy(false);
  };

  const doPlace = async (uid, tileId) => {
    try {
      const d = await api.place(uid, tileId);
      syncProfile(d.profile);
      flash("📍 Юнит размещён на карте");
    } catch (e) { flash("⚠️ " + e.message); }
  };

  const doMove = async (uid, tileId) => {
    try {
      const d = await api.move(uid, tileId);
      syncProfile(d.profile);
      flash("➡️ Юнит переместился (⚡−1)");
    } catch (e) { flash("⚠️ " + e.message); }
  };

  if (!territories) return <BootScreen progress={load} text={load < 55 ? "Создаём карту…" : "Возводим горные хребты…"} />;

  const canInteractNow = selected
    ? (freePlace ? (!selected.owner && !TYPES[selected.type].impassable) : reachable.has(selected.id))
    : false;

  const goHome = () => {
    const firstId = profile?.owned?.[0];
    const t = firstId ? territories.find(x => x.id === firstId) : null;
    if (t) { const p = toXZ(t.col, t.row); controlsRef.current?.focus(p.x, p.z); }
    else controlsRef.current?.resetView();
  };

  const handleSelect = t => {
    if (moveMode) {
      if (moveTargets.has(t.id)) doMove(moveMode.unitId, t.id);
      else flash("❌ Только соседняя своя клетка");
      setMoveMode(null);
      return;
    }
    setSelected(t); setResult(null);
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: PAL.bg, color: PAL.text, fontFamily: "-apple-system,system-ui,sans-serif", overflow: "hidden" }}>
      <MapScreen3D territories={territories} reachable={reachable} selectedId={selected?.id} rev={rev}
        borders={borders} reach={reachList} pins={pins} houses={houses}
        onProgress={setVisibleLoad} onReady={() => { setVisibleLoad(100); setGameReady(true); }}
        onSelect={handleSelect} controlsRef={controlsRef} />
      {!gameReady && <BootScreen progress={visibleLoad} text="Подготавливаем видимую область…" />}

      {profile && <Hud profile={profile} supplyEta={supplyEta} now={now} />}

      {note && (
        <div style={{ position: "absolute", top: 56, left: "50%", transform: "translateX(-50%)", background: "rgba(8,16,16,.92)", border: "1px solid " + PAL.border, borderRadius: 10, padding: "6px 14px", fontSize: 12, zIndex: 60, pointerEvents: "none", whiteSpace: "nowrap" }}>
          {note}
        </div>
      )}
      {moveMode && (
        <div style={{ position: "absolute", top: 92, left: "50%", transform: "translateX(-50%)", background: "rgba(42,29,77,.95)", border: "1px solid " + PAL.accent, borderRadius: 10, padding: "6px 14px", fontSize: 12, zIndex: 60, display: "flex", gap: 10, alignItems: "center" }}>
          ➡️ Выбери соседнюю свою клетку (⚡1)
          <button onClick={() => setMoveMode(null)} style={{ border: "none", background: PAL.red, color: "#fff", borderRadius: 7, padding: "2px 8px", fontWeight: 700, cursor: "pointer" }}>✕</button>
        </div>
      )}

      <div style={{ position: "absolute", right: 12, bottom: 64, display: "flex", flexDirection: "column", gap: 8 }}>
        <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1.35)}>＋</ZoomBtn>
        <ZoomBtn onClick={() => controlsRef.current?.zoomBy(1 / 1.35)}>－</ZoomBtn>
        <ZoomBtn onClick={goHome}>⌂</ZoomBtn>
      </div>

      {profile && (
        <BottomBar servers={servers}
          onInv={() => setScreen("inv")}
          onCase={srv => { setCaseSrv(srv); setScreen("case"); }}
          onTops={() => setScreen("tops")} />
      )}

      {selected && profile && !moveMode && (
        <TerritoryModal t={selected} building={overlay.buildings[selected.id]} profile={profile}
          selUnit={selUnit} setSelUnit={setSelUnit} onAttack={doAttack} onBuild={doBuild} busy={busy}
          onClose={() => { setSelected(null); setResult(null); }}
          result={result} canInteract={canInteractNow} freePlace={freePlace}
          stationed={profile.units.filter(u => u.pos === selected.id)}
          idle={profile.units.filter(u => !u.pos)}
          onPlace={uid => doPlace(uid, selected.id)}
          onMoveStart={uid => { setMoveMode({ unitId: uid, from: selected.id }); setSelected(null); }} />
      )}
      {screen === "inv" && profile && <InventoryModal profile={profile} onClose={() => setScreen(null)} />}
      {screen === "tops" && <TopsModal onClose={() => setScreen(null)} />}
      {screen === "case" && profile && (
        <CaseModal servers={servers} caseCost={caseCost} coins={profile.coins} initSrv={caseSrv} onClose={() => setScreen(null)}
          onOpen={async srv => { const d = await api.openCase(srv); syncProfile(d.profile); return d; }} />
      )}
    </div>
  );
}