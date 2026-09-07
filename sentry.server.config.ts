import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,

  enabled:
    process.env.NODE_ENV === "production" && !!process.env.SENTRY_DSN,

  tracesSampleRate: 0.1,

  beforeSend(event) {
    if (event.request?.cookies) {
      delete (event.request as Record<string, unknown>).cookies;
    }
    return event;
  },
});
