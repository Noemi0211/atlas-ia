import { spawn, execSync } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import os from "node:os";

const CHROME = process.env.ATLAS_CHROME || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE_URL = process.env.ATLAS_BASE_URL || "http://localhost:3000";
const PORT = process.env.ATLAS_CDP_PORT || 9333;
const OUT = join(process.cwd(), "public", "screenshots");
const USER_DATA = join(os.tmpdir(), "atlas-chrome-screenshots");

mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  "--no-first-run",
  "--no-default-browser-check",
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

async function capture(send, { width, height, mobile, path, url, waitMs = 2500 }) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile,
    screenWidth: width,
    screenHeight: height,
  });
  await send("Emulation.setEmulatedMedia", {
    media: "screen",
    features: [{ name: "prefers-color-scheme", value: "light" }],
  });
  await send("Page.enable");
  await send("Page.navigate", { url });
  await sleep(waitMs);
  const shot = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(path, Buffer.from(shot.data, "base64"));
  console.log(`✓ ${path} (${width}x${height})`);
}

async function main() {
  await waitForCdp();
  const { ws, send } = await connect();
  try {
    await capture(send, {
      width: 750,
      height: 1334,
      mobile: true,
      path: join(OUT, "home-narrow.png"),
      url: `${BASE_URL}/`,
    });
    await capture(send, {
      width: 1200,
      height: 675,
      mobile: false,
      path: join(OUT, "home-wide.png"),
      url: `${BASE_URL}/`,
    });
    await capture(send, {
      width: 750,
      height: 1334,
      mobile: true,
      path: join(OUT, "leccion-narrow.png"),
      url: `${BASE_URL}/bloques/fundamentos/01-que-es-ia`,
    });
    await capture(send, {
      width: 1200,
      height: 675,
      mobile: false,
      path: join(OUT, "leccion-wide.png"),
      url: `${BASE_URL}/bloques/fundamentos/01-que-es-ia`,
    });
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
