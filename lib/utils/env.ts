export function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function isConfigured(...names: string[]) {
  return names.every((name) => Boolean(process.env[name]));
}
