import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { ServiceWorkerRegistrar } from "./ServiceWorkerRegistrar";

let swDescriptor: PropertyDescriptor | undefined;
let readyStateDescriptor: PropertyDescriptor | undefined;

function setReadyState(value: DocumentReadyState) {
  Object.defineProperty(document, "readyState", {
    value,
    configurable: true,
  });
}

function installServiceWorker(
  options: { controller?: unknown; ready?: Promise<unknown> } = {}
) {
  const register = vi.fn().mockResolvedValue({});
  Object.defineProperty(navigator, "serviceWorker", {
    value: {
      register,
      controller: options.controller ?? null,
      ready: options.ready ?? Promise.resolve(),
    },
    configurable: true,
  });
  return { register };
}

describe("ServiceWorkerRegistrar", () => {
  beforeEach(() => {
    swDescriptor = Object.getOwnPropertyDescriptor(navigator, "serviceWorker");
    readyStateDescriptor = Object.getOwnPropertyDescriptor(
      document,
      "readyState"
    );
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    if (swDescriptor) {
      Object.defineProperty(navigator, "serviceWorker", swDescriptor);
    }
    if (readyStateDescriptor) {
      Object.defineProperty(document, "readyState", readyStateDescriptor);
    }
  });

  it("no registra el service worker fuera de producción", () => {
    const { register } = installServiceWorker();

    render(<ServiceWorkerRegistrar />);

    expect(register).not.toHaveBeenCalled();
  });

  it("registra con los parámetros correctos si el documento ya cargó", () => {
    vi.stubEnv("NODE_ENV", "production");
    setReadyState("complete");
    const { register } = installServiceWorker();

    render(<ServiceWorkerRegistrar />);

    expect(register).toHaveBeenCalledTimes(1);
    expect(register).toHaveBeenCalledWith("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
  });

  it("registra al dispararse el evento load si el documento aún carga", () => {
    vi.stubEnv("NODE_ENV", "production");
    setReadyState("loading");
    const { register } = installServiceWorker();

    render(<ServiceWorkerRegistrar />);
    expect(register).not.toHaveBeenCalled();

    fireEvent(window, new Event("load"));

    expect(register).toHaveBeenCalledTimes(1);
  });

  it("espera a navigator.serviceWorker.ready si ya hay un controlador", async () => {
    vi.stubEnv("NODE_ENV", "production");
    setReadyState("complete");
    const { register } = installServiceWorker({
      controller: {},
      ready: Promise.resolve(),
    });

    render(<ServiceWorkerRegistrar />);

    await vi.waitFor(() => expect(register).toHaveBeenCalledTimes(1));
  });
});