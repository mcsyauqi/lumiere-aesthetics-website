export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  duration: string;
  recovery: string;
  sessions: string;
  price: number;
  priceRange?: string;
  image: string;
  beforeAfterImages?: { before: string; after: string }[];
  featured?: boolean;
}

export interface TreatmentCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  treatments: string[];
}

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "facial-rejuvenation",
    name: "Facial Rejuvenation",
    description:
      "Turn back time with our advanced facial treatments that restore youthful radiance and vitality.",
    icon: "sparkles",
    treatments: ["hydrafacial", "microneedling", "chemical-peel", "prp-therapy"],
  },
  {
    id: "body-contouring",
    name: "Body Contouring",
    description:
      "Sculpt and define your silhouette with non-invasive body shaping technologies.",
    icon: "body",
    treatments: ["coolsculpting", "emtone", "velashape"],
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    description:
      "Address specific skin concerns with targeted treatments for lasting results.",
    icon: "droplet",
    treatments: ["acne-treatment", "pigmentation", "rosacea-treatment"],
  },
  {
    id: "injectables",
    name: "Injectables",
    description:
      "Enhance your natural beauty with expertly administered dermal fillers and neuromodulators.",
    icon: "syringe",
    treatments: ["botox", "dermal-fillers", "lip-enhancement", "kybella"],
  },
  {
    id: "laser-therapy",
    name: "Laser Therapy",
    description:
      "Harness the power of light for skin resurfacing, hair removal, and more.",
    icon: "zap",
    treatments: ["laser-resurfacing", "laser-hair-removal", "ipl-treatment"],
  },
];

export const treatments: Treatment[] = [
  {
    id: "1",
    slug: "hydrafacial",
    name: "HydraFacial",
    category: "facial-rejuvenation",
    shortDescription:
      "Deep cleansing facial that hydrates and rejuvenates your skin.",
    fullDescription:
      "The HydraFacial is a patented treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection simultaneously. This multi-step treatment creates instantly noticeable results with no downtime or irritation.",
    benefits: [
      "Deep cleansing and exfoliation",
      "Painless extractions",
      "Intense hydration",
      "Antioxidant infusion",
      "Visible glow after first session",
    ],
    duration: "45-60 minutes",
    recovery: "None",
    sessions: "Monthly maintenance recommended",
    price: 250,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "2",
    slug: "botox",
    name: "Botox & Dysport",
    category: "injectables",
    shortDescription:
      "Smooth away fine lines and wrinkles for a refreshed, youthful look.",
    fullDescription:
      "Botox and Dysport are FDA-approved neuromodulators that temporarily relax facial muscles to reduce the appearance of fine lines and wrinkles. Our expert injectors use precise techniques to achieve natural-looking results while maintaining your expressiveness.",
    benefits: [
      "Reduces forehead lines",
      "Smooths crow's feet",
      "Softens frown lines",
      "Prevents new wrinkle formation",
      "Quick, minimal discomfort",
    ],
    duration: "15-30 minutes",
    recovery: "Minimal",
    sessions: "Every 3-4 months",
    price: 400,
    priceRange: "$400 - $800",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "3",
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    category: "injectables",
    shortDescription:
      "Restore volume and contour for naturally beautiful enhancement.",
    fullDescription:
      "Dermal fillers use hyaluronic acid to restore lost volume, enhance facial contours, and smooth deep wrinkles. From subtle lip enhancement to cheek augmentation, our skilled providers create balanced, natural-looking results tailored to your unique facial structure.",
    benefits: [
      "Restores facial volume",
      "Enhances lips and cheeks",
      "Smooths deep lines",
      "Immediate results",
      "Long-lasting (12-18 months)",
    ],
    duration: "30-60 minutes",
    recovery: "1-2 days of mild swelling",
    sessions: "Annual touch-ups",
    price: 700,
    priceRange: "$700 - $2,000",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "4",
    slug: "laser-resurfacing",
    name: "Laser Skin Resurfacing",
    category: "laser-therapy",
    shortDescription:
      "Reveal smoother, younger-looking skin with advanced laser technology.",
    fullDescription:
      "Our fractional laser resurfacing treatments stimulate collagen production and address fine lines, wrinkles, scars, and uneven skin tone. We offer various laser options to match your skin type and desired outcomes.",
    benefits: [
      "Reduces fine lines",
      "Improves skin texture",
      "Fades scars and spots",
      "Stimulates collagen",
      "Long-lasting results",
    ],
    duration: "30-90 minutes",
    recovery: "5-7 days",
    sessions: "1-3 treatments",
    price: 1500,
    priceRange: "$1,500 - $4,000",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&q=80",
    featured: true,
  },
  {
    id: "5",
    slug: "microneedling",
    name: "Microneedling with PRP",
    category: "facial-rejuvenation",
    shortDescription:
      "Natural skin rejuvenation using your body's own healing power.",
    fullDescription:
      "Microneedling creates controlled micro-injuries to stimulate collagen production, while PRP (Platelet-Rich Plasma) from your own blood accelerates healing and enhances results. This powerful combination treats fine lines, scars, and improves overall skin texture.",
    benefits: [
      "Boosts collagen naturally",
      "Reduces acne scars",
      "Minimizes pore size",
      "Improves skin texture",
      "Uses your own growth factors",
    ],
    duration: "60-90 minutes",
    recovery: "2-3 days redness",
    sessions: "3-6 treatments",
    price: 500,
    image: "https://images.unsplash.com/photo-1598524374912-6b0b0bfe9c40?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "6",
    slug: "coolsculpting",
    name: "CoolSculpting",
    category: "body-contouring",
    shortDescription:
      "Freeze away stubborn fat without surgery or downtime.",
    fullDescription:
      "CoolSculpting is an FDA-cleared non-invasive fat reduction treatment that uses controlled cooling to eliminate stubborn fat cells. Results are visible within weeks as your body naturally processes and eliminates the treated fat cells.",
    benefits: [
      "Non-surgical fat reduction",
      "No downtime required",
      "Targets stubborn areas",
      "Permanent fat cell elimination",
      "Natural-looking results",
    ],
    duration: "35-60 minutes per area",
    recovery: "None",
    sessions: "1-2 treatments per area",
    price: 750,
    priceRange: "$750 - $1,500 per area",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "7",
    slug: "chemical-peel",
    name: "Chemical Peels",
    category: "facial-rejuvenation",
    shortDescription:
      "Reveal fresh, glowing skin with customized chemical exfoliation.",
    fullDescription:
      "Our medical-grade chemical peels are customized to your skin type and concerns. From light peels for a quick refresh to deeper treatments for significant results, we offer various options to address pigmentation, acne, and signs of aging.",
    benefits: [
      "Improves skin tone",
      "Reduces hyperpigmentation",
      "Treats acne",
      "Smooths fine lines",
      "Reveals radiant skin",
    ],
    duration: "30-45 minutes",
    recovery: "3-7 days depending on depth",
    sessions: "Series of 3-6",
    price: 200,
    priceRange: "$200 - $600",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "8",
    slug: "lip-enhancement",
    name: "Lip Enhancement",
    category: "injectables",
    shortDescription:
      "Achieve naturally fuller, beautifully defined lips.",
    fullDescription:
      "Our lip enhancement treatments use premium hyaluronic acid fillers to add volume, define borders, and correct asymmetry. Our expert injectors focus on creating natural-looking results that complement your facial features.",
    benefits: [
      "Adds natural volume",
      "Defines lip borders",
      "Corrects asymmetry",
      "Smooths lip lines",
      "Immediate results",
    ],
    duration: "30 minutes",
    recovery: "1-2 days swelling",
    sessions: "Touch-ups every 6-12 months",
    price: 600,
    image: "https://images.unsplash.com/photo-1588528402605-4e73af397a09?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "9",
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "laser-therapy",
    shortDescription:
      "Permanent hair reduction for silky smooth skin.",
    fullDescription:
      "Our advanced laser hair removal technology safely and effectively reduces unwanted hair on virtually any area of the body. Suitable for all skin types, treatments are quick, comfortable, and provide long-lasting results.",
    benefits: [
      "Permanent hair reduction",
      "Fast treatment sessions",
      "Suitable for all skin types",
      "Precise targeting",
      "Smooth, hair-free skin",
    ],
    duration: "15-60 minutes",
    recovery: "None",
    sessions: "6-8 treatments",
    price: 200,
    priceRange: "$200 - $500 per session",
    image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "10",
    slug: "prp-therapy",
    name: "PRP Therapy",
    category: "facial-rejuvenation",
    shortDescription:
      "Harness your body's healing power for natural rejuvenation.",
    fullDescription:
      "Platelet-Rich Plasma therapy uses concentrated growth factors from your own blood to stimulate cellular regeneration. This natural treatment promotes collagen production, improves skin texture, and can even help with hair restoration.",
    benefits: [
      "100% natural treatment",
      "Stimulates collagen",
      "Improves skin quality",
      "Promotes hair growth",
      "Minimal downtime",
    ],
    duration: "60 minutes",
    recovery: "1-2 days",
    sessions: "3-4 treatments",
    price: 800,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "11",
    slug: "acne-treatment",
    name: "Advanced Acne Treatment",
    category: "skin-treatments",
    shortDescription:
      "Clear, healthy skin with our comprehensive acne solutions.",
    fullDescription:
      "Our multi-modality approach to acne combines medical-grade skincare, targeted treatments, and lifestyle guidance. From active acne to stubborn scars, we create customized treatment plans for lasting clarity.",
    benefits: [
      "Clears active acne",
      "Reduces acne scars",
      "Prevents future breakouts",
      "Balances oil production",
      "Improves skin health",
    ],
    duration: "45-60 minutes",
    recovery: "Varies by treatment",
    sessions: "Monthly sessions",
    price: 300,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&q=80",
  },
  {
    id: "12",
    slug: "kybella",
    name: "Kybella",
    category: "injectables",
    shortDescription:
      "Eliminate double chin without surgery.",
    fullDescription:
      "Kybella is an FDA-approved injectable treatment that destroys fat cells under the chin. Once destroyed, these cells can no longer store or accumulate fat, providing permanent results for a more defined jawline.",
    benefits: [
      "Non-surgical fat reduction",
      "Permanent results",
      "Defined jawline",
      "Quick treatment",
      "No anesthesia needed",
    ],
    duration: "15-20 minutes",
    recovery: "1-2 weeks swelling",
    sessions: "2-4 treatments",
    price: 1200,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop&q=80",
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}

export function getTreatmentsByCategory(categoryId: string): Treatment[] {
  return treatments.filter((t) => t.category === categoryId);
}

export function getFeaturedTreatments(): Treatment[] {
  return treatments.filter((t) => t.featured);
}
