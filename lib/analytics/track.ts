"use client";

import type { AnalyticsEventName, AnalyticsPayload } from "@/lib/analytics/events";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  payload: AnalyticsPayload = {},
  consent = { analytics: false, marketing: false }
) {
  const event = { event: eventName, ...payload };

  if (typeof window === "undefined") {
    return event;
  }

  if (consent.analytics) {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push(event);
  }

  if (consent.marketing && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, payload);
  }

  return event;
}
