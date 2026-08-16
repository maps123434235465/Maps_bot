const COLS = 800, ROWS = 600;
const TYPE_CH = { meadow: "m", forest: "f", hills: "h", field: "p", swamp: "w", mountain: "x", water: "o" };
const CH_TYPE = Object.fromEntries(Object.entries(TYPE_CH).map(([k, v]) => [v, k]));
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
function generateWorld() {
  const n = COLS * ROWS;
  const types = new Array(n), elev = new Array(n);
  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / COLS), col = i % COLS;
    if (!isLand(row, col)) { types[i] = "o"; elev[i] = -0.5; continue; }
    const t = baseType(row, col);
    types[i] = TYPE_CH[t];
    elev[i] = Math.round(baseElev(t, row, col) * 100) / 100;
  }
  for (const m of buildMasses()) {
    const R = Math.max(m.rAlong, m.rAcross) * 1.35 + 4;
    const r0 = Math.max(1, Math.floor(m.sr - R)), r1 = Math.min(ROWS - 2, Math.ceil(m.sr + R));
    const c0 = Math.max(1, Math.floor(m.sc - R)), c1 = Math.min(COLS - 2, Math.ceil(m.sc + R));
    const cosA = Math.cos(m.ang), sinA = Math.sin(m.ang);
    const salt = 500 + Math.round(m.phase * 10);
    for (let r = r0; r <= r1; r++) {
      const dr = r - m.sr;
      for (let c = c0; c <= c1; c++) {
        const i = r * COLS + c;
        if (types[i] === "o") continue;
        const dc = c - m.sc;
        const u = dr * cosA - dc * sinA, v = dr * sinA + dc * cosA;
        const ang = Math.atan2(v, u);
        const wob = 1 + 0.20 * Math.sin(ang * m.lobes + m.phase) + 0.10 * Math.sin(ang * (m.lobes * 2 + 1) + m.phase * 1.7);
        const du = u / (m.rAlong * wob), dv = v / (m.rAcross * wob);
        const d2 = du * du + dv * dv;
        if (d2 >= 1) continue;
        const e = Math.round(m.peak * Math.pow(1 - d2, 0.68) * (0.82 + 0.30 * vnoise(r, c, 7, salt)) * 100) / 100;
        if (e <= 0.04) continue;
        if (e > elev[i]) { elev[i] = e; types[i] = e >= 0.42 ? "x" : "h"; }
      }
    }
  }
  return { v: 1, cols: COLS, rows: ROWS, createdAt: Date.now(), types: types.join(""), elev };
}
const typeOf = (world, tileId) => {
  const [r, c] = tileId.split("_").map(Number);
  if (r < 0 || r >= world.rows || c < 0 || c >= world.cols) return null;
  return CH_TYPE[world.types[r * world.cols + c]];
};
module.exports = { generateWorld, typeOf, isLand, COLS, ROWS };