const TG = window.Telegram?.WebApp;
try { TG?.ready(); TG?.expand(); } catch {}
const initData = TG?.initData || "";

async function req(path, body) {
  const isGet = !body;
  const url = isGet ? `${path}?initData=${encodeURIComponent(initData)}` : path;
  const res = await fetch(url, {
    method: isGet ? "GET" : "POST",
    headers: { "Content-Type": "application/json" },
    body: isGet ? undefined : JSON.stringify({ ...body, initData })
  });
  const j = await res.json().catch(() => ({ ok: false, error: "Сеть" }));
  if (!res.ok || j.ok === false) throw new Error(j.error || "Ошибка сервера");
  return j;
}

export const api = {
  init:     () => req("/api/init"),                          // профиль + кто чем владеет + список серверов
  state:    () => req("/api/state"),                         // обновление (доход, хил, припасы)
  attack:   (tileId, unitId) => req("/api/attack", { tileId, unitId }),
  build:    (tileId, building) => req("/api/build", { tileId, building }),
  openCase: (server) => req("/api/case/open", { server })
};

// ссылка на PNG юнита (карточки лежат в репозитории: server/servers/<имя>/<файл>)
export const unitImg = u => `/files/${encodeURIComponent(u.server)}/${encodeURIComponent(u.file)}`;