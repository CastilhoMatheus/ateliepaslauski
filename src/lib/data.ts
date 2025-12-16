export type Artwork = {
  id: string;
  title: string;
  series: string;
  description: string;
  price: number;
  medium: string;
  size: string;
  tag: "Original" | "Edition" | "Miniature";
  accent: string;
  image: string;
  featured?: boolean;
};

export const artworks: Artwork[] = [
  {
    id: "solstice-lake",
    title: "Solstice Lake",
    series: "Atlantic Nocturnes",
    description:
      "Refractions of light over ink-dark water, layered with charcoal dust.",
    price: 4200,
    medium: "Oil & charcoal on canvas",
    size: "90 x 110 cm",
    tag: "Original",
    accent: "#335c67",
    image:
      "https://images.unsplash.com/photo-1515468381879-40d0ded81000?auto=format&fit=crop&w=1400&q=80",
    featured: true,
  },
  {
    id: "sunlit-arch",
    title: "Sunlit Arch",
    series: "Structures",
    description: "Textured archways with warm pigment washes.",
    price: 1600,
    medium: "Oil, pastel, graphite",
    size: "60 x 70 cm",
    tag: "Original",
    accent: "#9c4221",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "vapor-study",
    title: "Vapor Study",
    series: "Atmos",
    description: "Limited risograph of soft vapor layers.",
    price: 240,
    medium: "2-color risograph on cotton paper",
    size: "40 x 50 cm",
    tag: "Edition",
    accent: "#5f6f52",
    image:
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rust-wings",
    title: "Rust Wings",
    series: "Kinetic Forms",
    description: "Gestural marks tracing imagined flight paths.",
    price: 980,
    medium: "Acrylic & ink on raw canvas",
    size: "50 x 60 cm",
    tag: "Original",
    accent: "#b46335",
    image:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "quiet-dune",
    title: "Quiet Dune",
    series: "Sediment",
    description: "Layered monochrome landscape with mineral pigments.",
    price: 320,
    medium: "Giclée on bamboo paper",
    size: "45 x 55 cm",
    tag: "Edition",
    accent: "#4c5c68",
    image:
      "https://images.unsplash.com/photo-1523461811963-7f1023caeddd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ember-note",
    title: "Ember Note",
    series: "Small Works",
    description: "Pocket-sized painting with raw umber and sienna inks.",
    price: 140,
    medium: "Ink & pastel on cotton board",
    size: "20 x 25 cm",
    tag: "Miniature",
    accent: "#925521",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "tidal-lines",
    title: "Tidal Lines",
    series: "Atlantic Nocturnes",
    description: "Graphite tracing over deep indigo washes.",
    price: 2600,
    medium: "Oil, graphite on canvas",
    size: "80 x 100 cm",
    tag: "Original",
    accent: "#2f4f6f",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "linen-fragment",
    title: "Linen Fragment",
    series: "Small Works",
    description: "Loose gestures captured on raw linen.",
    price: 180,
    medium: "Oil stick on linen",
    size: "18 x 24 cm",
    tag: "Miniature",
    accent: "#7c532a",
    image:
      "https://images.unsplash.com/photo-1523419400525-4cfa0001f1a0?auto=format&fit=crop&w=1200&q=80",
  },
];

export const journalEntries = [
  {
    title: "Glass and Salt",
    summary:
      "How coastal light informed the Refractions series and the pigments chosen.",
  },
  {
    title: "Edition Paper Tests",
    summary:
      "Comparing bamboo and cotton stocks for the Atmos risograph run, with swatch notes.",
  },
  {
    title: "Studio Tempo",
    summary:
      "On pacing glazing sessions and why silence matters more than music.",
  },
];
