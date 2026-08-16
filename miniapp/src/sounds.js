let volumes = { master: 0.8, ui: 1, amb: 0.8 };
try { const s = JSON.parse(localStorage.getItem("snd") || "null"); if (s) volumes = { ...volumes, ...s }; } catch {}
const save = () => localStorage.setItem("snd", JSON.stringify(volumes));
const cache = {};
function get(name) {
  if (!cache[name]) { const a = new Audio(`/sounds/${name}.mp3`); a.preload = "auto"; cache[name] = a; }
  return cache[name];
}
function play(name, gain) {
  const a = get(name);
  a.volume = Math.max(0, Math.min(1, volumes.master * gain));
  a.currentTime = 0;
  a.play().catch(() => {});
}
export const playClick = () => play("click", volumes.ui);
export const playBuild = () => play("build", volumes.ui);
const AMB = ["forest", "mountain", "sea"];
const amb = {};
for (const n of AMB) { const a = get(n); a.loop = true; amb[n] = { el: a, vol: 0 }; }
let started = false;
export function startAmbience() {
  if (started) return;
  started = true;
  for (const n of AMB) amb[n].el.play().catch(() => {});
}
export function setAmbience(levels) {
  for (const n of AMB) {
    const target = Math.max(0, Math.min(1, (levels[n] || 0) * volumes.master * volumes.amb));
    const o = amb[n];
    o.vol += (target - o.vol) * 0.25;
    o.el.volume = Math.max(0, Math.min(1, o.vol));
  }
}
export const getVolumes = () => ({ ...volumes });
export function setVolumes(v) { volumes = { ...volumes, ...v }; save(); }