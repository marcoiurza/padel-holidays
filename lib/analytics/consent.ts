export const CONSENT_STORAGE_KEY = "padel-holidays-consent";

export type StoredConsent = {
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const defaultConsent: StoredConsent = {
  analytics: false,
  marketing: false,
  updatedAt: new Date(0).toISOString()
};
