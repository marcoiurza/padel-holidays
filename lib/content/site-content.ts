import type { AddOn, BookingSummary, Giveaway, Review, Retreat, SEOFields } from "@/types/domain";

export const sharedSeo: Record<string, SEOFields> = {
  home: {
    title: "Padel Holidays | Premium padel retreats, private groups and travel experiences",
    description:
      "Book premium padel-led retreats in Watamu, Kenya with Oscar Marhuenda, curated accommodation, safari, social experiences and founder-led service.",
    image: "/images/retreats/watamu-sunset-nets.jpg"
  },
  privateGroups: {
    title: "Private Groups | Padel Holidays",
    description:
      "Founder-led corporate retreats, milestone trips and private padel-led group escapes with premium planning and beautiful delivery.",
    image: "/images/retreats/watamu-dhow.jpg"
  }
};

export const addOns: AddOn[] = [
  {
    id: "baseline-racket",
    name: "Bas3line performance racket",
    description: "A premium Bas3line racket ready in your room on arrival.",
    pricePence: 18000,
    currency: "GBP"
  },
  {
    id: "airport-fast-track",
    name: "Airport fast-track",
    description: "Arrival assistance for a smoother transfer through Mombasa.",
    pricePence: 6000,
    currency: "GBP"
  },
  {
    id: "extra-safari-night",
    name: "Extra safari night",
    description: "Extend your inland stay with an additional lodge night and drive.",
    pricePence: 24000,
    currency: "GBP"
  }
];

export const watamuRetreat: Retreat = {
  id: "ret_watamu_2026",
  slug: "watamu-kenya",
  title: "Watamu, Kenya Retreat",
  location: "Watamu, Kenya",
  teaser: "Padel, safari, Indian Ocean calm, and founder-level hospitality.",
  description:
    "A premium group retreat built around daily padel, thoughtful coaching, ocean rhythm, safari contrast and genuinely good people.",
  status: "published",
  depositPercent: 30,
  balanceDueDays: 60,
  startDate: "2026-12-04",
  endDate: "2026-12-13",
  heroImage: "/images/retreats/watamu-sunset-nets.jpg",
  heroVideoPoster: "/images/retreats/watamu-padel-night.jpg",
  ogImage: "/images/retreats/watamu-sunset-nets.jpg",
  priceFromPence: 245000,
  currency: "GBP",
  included: [
    "Daily padel coaching and social play at Watamu Padel House",
    "Coaching led by Oscar Marhuenda, ex-World Padel Tour coach",
    "Premium accommodation close to the beach",
    "Safari segment with private vehicles and lodge stay",
    "Airport transfers, hosted dinners, and social experiences"
  ],
  itinerary: [
    {
      day: "Day 1",
      title: "Arrive and exhale",
      summary: "Private transfer to Watamu, villa check-in, sunset aperitivo and a soft landing dinner."
    },
    {
      day: "Day 2",
      title: "Padel and coast rhythm",
      summary: "Morning coaching, ocean lunch, free afternoon and a hosted dinner with the group."
    },
    {
      day: "Day 3",
      title: "Safari contrast",
      summary: "Head inland for game drives, lodge dinner and the shift of pace that makes Watamu even better."
    },
    {
      day: "Day 4",
      title: "Return to the ocean",
      summary: "Back to the coast, recovery session, social matches and a long table dinner."
    },
    {
      day: "Day 5",
      title: "Boat day and celebration",
      summary: "Dhow experience, snorkelling, sunset drinks and the kind of evening people talk about later."
    }
  ],
  faq: [
    {
      question: "Do I need to be an advanced player?",
      answer:
        "No. The format is serious about quality, not intensity. Coaching groups are shaped by level and the atmosphere stays social."
    },
    {
      question: "Can I come solo?",
      answer:
        "Yes. You can book a single room or ask to be paired with another solo traveller in a double setup that we manage carefully."
    },
    {
      question: "When do I need to book flights?",
      answer:
        "Not immediately. Your room is secured with the deposit, and we help you align flights afterwards."
    },
    {
      question: "What happens if the room I want sells out?",
      answer:
        "We show alternatives immediately and offer a waitlist with manual follow-up from the team."
    }
  ],
  dates: [
    {
      id: "date_watamu_dec_2026",
      startDate: "2026-12-04",
      endDate: "2026-12-13",
      maxCapacity: 16,
      availableRooms: 5,
      pricingPhases: [
        {
          id: "phase_early",
          name: "Early Bird",
          label: "Best value",
          startsAt: "2026-01-01T00:00:00.000Z",
          endsAt: "2026-06-30T23:59:59.000Z",
          pricePence: 245000
        },
        {
          id: "phase_priority",
          name: "Priority",
          label: "Current",
          startsAt: "2026-07-01T00:00:00.000Z",
          endsAt: "2026-09-30T23:59:59.000Z",
          pricePence: 269000
        },
        {
          id: "phase_full",
          name: "Full Price",
          label: "Late booking",
          startsAt: "2026-10-01T00:00:00.000Z",
          endsAt: "2026-12-03T23:59:59.000Z",
          pricePence: 289000
        }
      ],
      roomTypes: [
        {
          id: "ocean-single",
          name: "Ocean Single",
          description: "A private room for guests who want their own space from the moment they land.",
          occupancyMax: 1,
          basePricePence: 295000,
          currency: "GBP",
          occupancyOptions: ["single"],
          image: "/images/retreats/watamu-villa.webp",
          perks: ["Private ensuite", "Hosted airport transfer", "Daily breakfast"]
        },
        {
          id: "coastal-double",
          name: "Coastal Double",
          description: "Our most popular option for friends travelling together or paired solo travellers.",
          occupancyMax: 2,
          basePricePence: 245000,
          currency: "GBP",
          occupancyOptions: ["double", "double_shared"],
          image: "/images/retreats/watamu-padel-club.jpg",
          perks: ["Twin or king setup", "Paired traveller support", "Shared villa lounge"]
        },
        {
          id: "villa-triple",
          name: "Villa Triple",
          description: "A high-value group room for relaxed friends who care more about the trip than the square footage.",
          occupancyMax: 3,
          basePricePence: 219000,
          currency: "GBP",
          occupancyOptions: ["triple"],
          image: "/images/retreats/watamu-dhow.jpg",
          perks: ["Ideal for clubs", "Shared ensuite", "Hosted group dinner included"]
        }
      ]
    }
  ]
};

export const retreats = [watamuRetreat];

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Anastasia",
    body: "The trip felt premium without ever becoming stiff. Oscar was brilliant, the hosting was sharp, and Watamu was magic.",
    rating: 5,
    padelLevel: "Intermediate",
    retreatDateLabel: "December 2025",
    image: "/images/retreats/watamu-sunset-nets.jpg"
  },
  {
    id: "review-2",
    name: "Ben",
    body: "It nailed the mix: serious enough padel to feel worthwhile, but still a holiday with great people and no chaos.",
    rating: 5,
    padelLevel: "Advanced",
    retreatDateLabel: "December 2025"
  },
  {
    id: "review-3",
    name: "Jeanette",
    body: "The safari, dinners and attention to detail made it feel nothing like a standard sports trip. It was beautifully run.",
    rating: 5,
    padelLevel: "Beginner+",
    retreatDateLabel: "December 2025"
  }
];

export const giveaways: Giveaway[] = [
  {
    id: "giveaway-bas3line",
    slug: "baseline-launch",
    title: "Win a Bas3line x Padel Holidays setup",
    prizeDescription:
      "One Bas3line racket, premium retreat merchandise and a room-upgrade credit for the next Watamu retreat.",
    deadline: "2026-05-30T18:00:00.000Z",
    status: "active",
    heroImage: "/images/social/giveaway-bas3line.png",
    instructions: [
      "Follow @padel.holidays",
      "Follow @bas3line",
      "Like the giveaway post",
      "Tag a friend for each unique entry"
    ],
    terms: [
      "Winner drawn live on Instagram.",
      "Travel is not included.",
      "Entrants must be 18+."
    ]
  }
];

export const journalEntries = [
  {
    slug: "why-watamu-works-for-padel-groups",
    title: "Why Watamu works so well for a premium padel group",
    description:
      "A journal-led look at the blend of climate, courts, coastline and social pace that makes Watamu unusually strong for group travel."
  }
];

export const sampleBookings: BookingSummary[] = [
  {
    id: "bk_1001",
    publicId: "ph-kenya-1001",
    leadName: "Benedict Stone",
    email: "ben@example.com",
    retreatTitle: "Watamu, Kenya Retreat",
    roomType: "Coastal Double",
    occupancy: "double",
    status: "deposit_paid",
    totalPence: 490000,
    depositPence: 147000,
    balancePence: 343000,
    createdAt: "2026-02-12T10:30:00.000Z",
    notes: "Travelling with Alexander. Asked for later airport transfer."
  },
  {
    id: "bk_1002",
    publicId: "ph-kenya-1002",
    leadName: "Chris Walters",
    email: "chris@example.com",
    retreatTitle: "Watamu, Kenya Retreat",
    roomType: "Ocean Single",
    occupancy: "single",
    status: "deposit_pending",
    totalPence: 295000,
    depositPence: 88500,
    balancePence: 206500,
    createdAt: "2026-03-18T14:15:00.000Z",
    notes: "Warm lead from Instagram. Wants to confirm flights next week."
  }
];
