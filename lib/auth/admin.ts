export function isAllowedAdminEmail(email: string) {
  const allowlist = process.env.ADMIN_ALLOWLIST_EMAILS?.split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);

  if (!allowlist?.length) {
    return false;
  }

  return allowlist.includes(email.toLowerCase());
}
