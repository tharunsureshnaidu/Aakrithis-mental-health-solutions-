export type Pillar = {
  key: string;
  label: string;
  tagline: string;
  title: string;
  doctor: string;
  photo?: string;
  photoPosition?: string;
  blurb: string;
  services: string[];
};

// ponytail: photo fields left undefined until real photos are supplied — Pillars.tsx already
// falls back to an initials avatar when photo is unset.
export const PILLARS: Pillar[] = [
  {
    key: "counseling",
    label: "Individual Counseling",
    tagline: "One-on-one sessions",
    title: "Individual Counseling",
    doctor: "Aakrithi & Team",
    blurb:
      "A private hour that's entirely yours — for anxiety that won't switch off, grief that hasn't found its shape yet, or a decision you can't talk through with people who are too close to it.",
    services: [
      "Anxiety & depression support",
      "Stress & burnout management",
      "Grief & major transitions",
      "Personal growth & identity",
    ],
  },
  {
    key: "child-adolescent",
    label: "Child & Adolescent",
    tagline: "Ages 5–19",
    title: "Child & Adolescent Therapy",
    doctor: "Aakrithi & Team",
    blurb:
      "Kids rarely say “I'm anxious.” They say it in tantrums, silence, or a stomach ache before school. We help you find the actual question underneath.",
    services: [
      "Behavioural & emotional support",
      "Learning & developmental concerns",
      "Parent guidance sessions",
      "School-related stress",
    ],
  },
  {
    key: "couples-family",
    label: "Couples & Family",
    tagline: "Relationship counseling",
    title: "Couples & Family Therapy",
    doctor: "Aakrithi & Team",
    blurb:
      "For the fights that keep repeating and the silences that have gotten too comfortable. We work with what's actually being said — and what isn't.",
    services: [
      "Couples counseling",
      "Family conflict resolution",
      "Premarital counseling",
      "Communication coaching",
    ],
  },
  {
    key: "academy",
    label: "Academy",
    tagline: "Training & certification",
    title: "Aakrithi's Academy",
    doctor: "Aakrithi & Team",
    blurb:
      "Certification courses, supervised practicum and workshops for counselors who want to practice well, not just pass an exam.",
    services: [
      "Counseling certification courses",
      "Supervised practicum",
      "Workshops & CE credits",
      "Community mental health training",
    ],
  },
];

export type Testimonial = {
  quote: string;
  attribution: string;
  program: string;
};

// ponytail: illustrative quotes for this prototype — swap in real reviews before launch.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I didn't want advice. I wanted someone to actually listen first. That's what changed things for me.",
    attribution: "Individual counseling client",
    program: "Individual Counseling",
  },
  {
    quote:
      "Our son finally has language for what he's feeling instead of just shutting down. That alone was worth it.",
    attribution: "Parent of a child client",
    program: "Child & Adolescent",
  },
  {
    quote: "We came in barely talking to each other. Six sessions in, we were actually listening.",
    attribution: "Couples counseling client",
    program: "Couples & Family",
  },
  {
    quote:
      "The Academy didn't just teach me technique — it taught me how to sit with someone's pain without rushing to fix it.",
    attribution: "Academy graduate",
    program: "Academy",
  },
];

export const CONCERN_GROUPS = [
  { key: "child", label: "Child" },
  { key: "teen", label: "Teen" },
  { key: "adult", label: "Adult" },
  { key: "couple", label: "Couple" },
  { key: "family", label: "Family" },
  { key: "professional", label: "Aspiring Counselor" },
];

export const CONCERNS: Record<string, string[]> = {
  child: ["Behavioural issues", "Learning difficulties", "Anxiety in school", "Emotional regulation"],
  teen: ["Academic stress", "Anxiety & depression", "Self-esteem", "Peer relationships"],
  adult: ["Anxiety & depression", "Work stress & burnout", "Grief & loss", "Self-esteem & identity"],
  couple: ["Communication issues", "Trust & conflict", "Premarital counseling", "Intimacy concerns"],
  family: ["Parenting support", "Family conflict", "Blended family adjustment", "Communication issues"],
  professional: ["Counseling certification", "Practicum & supervision", "Workshops & CE credits", "Career guidance"],
};
