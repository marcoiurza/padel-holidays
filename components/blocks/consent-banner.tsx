"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CONSENT_STORAGE_KEY, defaultConsent, type StoredConsent } from "@/lib/analytics/consent";

export function ConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setMounted(true);
    const existing = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    setHidden(Boolean(existing));
  }, []);

  if (!mounted || hidden) {
    return null;
  }

  const saveConsent = (consent: StoredConsent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    setHidden(true);
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-brand-dark/10 bg-white/95 p-5 shadow-lg backdrop-blur md:inset-x-auto md:right-4 md:w-[420px]">
      <p className="font-display text-2xl text-brand-dark">Cookie choices, handled simply</p>
      <p className="mt-2 text-sm leading-6 text-brand-dark/70">
        We keep analytics in limited mode until you say yes, and marketing scripts stay off until
        you explicitly allow them.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button
          variant="secondary"
          onClick={() =>
            saveConsent({ ...defaultConsent, analytics: true, updatedAt: new Date().toISOString() })
          }
        >
          Analytics only
        </Button>
        <Button
          onClick={() =>
            saveConsent({
              analytics: true,
              marketing: true,
              updatedAt: new Date().toISOString()
            })
          }
        >
          Accept all
        </Button>
      </div>
    </div>
  );
}
