// Genera la imagen Open Graph (1200x630) con la marca Atlas IA usando Chrome headless vía CDP.
// Parámetros por env: ATLAS_CHROME, ATLAS_OUT, ATLAS_CDP_PORT.
// Uso: node scripts/generate-og-image.mjs

import { spawn, execSync } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const CHROME = process.env.ATLAS_CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUT = process.env.ATLAS_OUT || join(process.cwd(), "public", "og.png");
const PORT = process.env.ATLAS_CDP_PORT || 9334;
const USER_DATA = join(tmpdir(), "atlas-chrome-og");

const WIDTH = 1200;
const HEIGHT = 630;

const HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${WIDTH}px; height: ${HEIGHT}px; overflow: hidden; }
  body {
    font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    background: linear-gradient(160deg, #2563eb 0%, #1e56dd 48%, #1d4ed8 100%);
    position: relative;
    color: #fff;
  }
  .deco { position: absolute; inset: 0; }
  .content {
    position: absolute;
    inset: 0;
    padding: 0 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 44px;
  }
  .logo {
    position: relative;
    width: 190px;
    height: 190px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #3b82f6 0%, #2563eb 60%, #1d4ed8 100%);
    border-radius: 46px;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);
  }
  .logo .glyph {
    font-size: 150px;
    font-weight: 900;
    line-height: 1;
    color: #fff;
    transform: translateY(-8px);
  }
  .logo .dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 76%;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
  }
  .title { font-size: 112px; font-weight: 800; letter-spacing: -2px; line-height: 1.05; }
  .sub {
    font-size: 40px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.92);
    letter-spacing: 0.2px;
  }
  .rule { width: 560px; height: 3px; border-radius: 2px; background: rgba(255, 255, 255, 0.35); margin: 18px 0 26px; }
  .url {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 30px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
    letter-spacing: 0.3px;
  }
  .url .dot { width: 13px; height: 13px; border-radius: 50%; background: #7dd3fc; }
</style>
</head>
<body>
  <svg class="deco" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <g fill="rgba(255,255,255,0.10)">
      <circle cx="930" cy="120" r="9"/>
      <circle cx="1010" cy="210" r="16"/>
      <circle cx="1090" cy="150" r="7"/>
      <circle cx="880" cy="300" r="20"/>
      <circle cx="1120" cy="330" r="12"/>
      <circle cx="960" cy="420" r="8"/>
      <circle cx="1070" cy="500" r="15"/>
      <circle cx="900" cy="520" r="11"/>
      <circle cx="1150" cy="540" r="6"/>
    </g>
    <g stroke="rgba(255,255,255,0.14)" stroke-width="2" fill="none">
      <path d="M930 120 L1010 210"/>
      <path d="M1010 210 L1090 150"/>
      <path d="M1010 210 L880 300"/>
      <path d="M880 300 L1120 330"/>
      <path d="M880 300 L960 420"/>
      <path d="M1120 330 L1070 500"/>
      <path d="M960 420 L1070 500"/>
      <path d="M1070 500 L900 520"/>
      <path d="M1070 500 L1150 540"/>
    </g>
  </svg>

  <div class="content">
    <div class="brand">
      <div class="logo">
        <span class="glyph">A</span>
        <span class="dot"></span>
      </div>
      <div>
        <h1 class="title">Atlas IA</h1>
        <p class="sub">Aprende Inteligencia Artificial</p>
      </div>
    </div>
    <div class="rule"></div>
    <div class="url"><span class="dot"></span>atlas-ia.dev</div>
  </div>
</body>
</html>`;

const dir = mkdtempSync(join(tmpdir(), "atlas-og-"));
const htmlPath = join(dir, "og.html");
writeFileSync(htmlPath, HTML);

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
  "--allow-file-access-from-files",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${USER_DATA}`,
  "about:blank",
], { stdio: "ignore", windowsHide: true });

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForCdp() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error("Chrome CDP no disponible");
}

async function connect() {
  const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: "PUT" });
  const tab = await res.json();
  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    ws.onopen = resolve;
    ws.onerror = reject;
  });
  let id = 0;
  const pending = new Map();
  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  return { ws, send };
}

async function main() {
  await waitForCdp();
  const { ws, send } = await connect();
  try {
    await send("Emulation.setDeviceMetricsOverride", {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: WIDTH,
      screenHeight: HEIGHT,
    });
    await send("Page.enable");
    await send("Page.navigate", { url: "file:///" + htmlPath.replace(/\\/g, "/") });
    await sleep(1200);
    const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    writeFileSync(OUT, Buffer.from(shot.data, "base64"));
    console.log(`✓ ${OUT} (${WIDTH}x${HEIGHT}, ${Math.round(shot.data.length / 1024)} KB)`);
  } finally {
    ws.close();
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => {
    try {
      execSync(`taskkill /PID ${chrome.pid} /T /F`, { stdio: "ignore" });
    } catch {}
  });
