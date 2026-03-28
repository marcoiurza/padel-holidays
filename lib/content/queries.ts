import { giveaways, journalEntries, retreats, watamuRetreat } from "@/lib/content/site-content";

export function getRetreatBySlug(slug: string) {
  return retreats.find((retreat) => retreat.slug === slug);
}

export function getGiveawayBySlug(slug: string) {
  return giveaways.find((giveaway) => giveaway.slug === slug);
}

export function getJournalEntryBySlug(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export function getLaunchRetreat() {
  return watamuRetreat;
}
