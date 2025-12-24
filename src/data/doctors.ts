export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialization: string;
  credentials: string[];
  bio: string;
  shortBio: string;
  image: string;
  expertise: string[];
  education: string[];
  languages: string[];
  featured?: boolean;
}

export const doctors: Doctor[] = [
  {
    id: "1",
    slug: "dr-sophia-laurent",
    name: "Dr. Sophia Laurent",
    title: "Medical Director & Lead Dermatologist",
    specialization: "Cosmetic Dermatology & Anti-Aging",
    credentials: [
      "MD, Board Certified Dermatologist",
      "Fellow, American Academy of Dermatology",
      "Member, American Society for Dermatologic Surgery",
    ],
    bio: "Dr. Sophia Laurent is a board-certified dermatologist with over 15 years of experience in cosmetic and medical dermatology. As the founder and Medical Director of Lumière Aesthetics, she brings her passion for combining artistry with medical expertise to help patients achieve their aesthetic goals. Dr. Laurent completed her dermatology residency at Stanford University and has trained extensively in the latest non-surgical cosmetic procedures in Paris and New York.",
    shortBio:
      "Board-certified dermatologist with 15+ years of experience in cosmetic and medical dermatology.",
    image: "/images/doctors/dr-laurent.jpg",
    expertise: [
      "Injectable Treatments",
      "Laser Therapy",
      "Anti-Aging Protocols",
      "Skin Cancer Screening",
    ],
    education: [
      "MD - Harvard Medical School",
      "Dermatology Residency - Stanford University",
      "Fellowship - American Academy of Dermatology",
    ],
    languages: ["English", "French", "Spanish"],
    featured: true,
  },
  {
    id: "2",
    slug: "dr-james-chen",
    name: "Dr. James Chen",
    title: "Facial Aesthetics Specialist",
    specialization: "Facial Contouring & Injectables",
    credentials: [
      "MD, Board Certified Plastic Surgeon",
      "Fellow, American College of Surgeons",
      "Certified Injector Trainer",
    ],
    bio: "Dr. James Chen is a double board-certified plastic surgeon specializing in non-surgical facial rejuvenation. Known for his artistic eye and precision technique, Dr. Chen has performed over 10,000 injectable procedures. He regularly trains other physicians in advanced injection techniques and speaks at international aesthetic medicine conferences.",
    shortBio:
      "Double board-certified plastic surgeon specializing in non-surgical facial rejuvenation.",
    image: "/images/doctors/dr-chen.jpg",
    expertise: [
      "Dermal Fillers",
      "Botox & Neuromodulators",
      "Facial Contouring",
      "Lip Enhancement",
    ],
    education: [
      "MD - Johns Hopkins University",
      "Plastic Surgery Residency - UCLA",
      "Facial Aesthetics Fellowship - Beverly Hills",
    ],
    languages: ["English", "Mandarin"],
    featured: true,
  },
  {
    id: "3",
    slug: "dr-elena-rodriguez",
    name: "Dr. Elena Rodriguez",
    title: "Laser & Skin Health Specialist",
    specialization: "Laser Medicine & Skin Rejuvenation",
    credentials: [
      "MD, Board Certified Dermatologist",
      "Certified Laser Safety Officer",
      "Member, American Society for Laser Medicine",
    ],
    bio: "Dr. Elena Rodriguez is a board-certified dermatologist with expertise in laser medicine and skin rejuvenation. She has pioneered several combination protocols that maximize results while minimizing downtime. Dr. Rodriguez is passionate about treating all skin types and has developed specialized approaches for patients with diverse skin tones.",
    shortBio:
      "Board-certified dermatologist with expertise in laser medicine and skin rejuvenation.",
    image: "/images/doctors/dr-rodriguez.jpg",
    expertise: [
      "Laser Skin Resurfacing",
      "Pigmentation Treatment",
      "Acne & Scar Treatment",
      "Skin of Color",
    ],
    education: [
      "MD - Columbia University",
      "Dermatology Residency - NYU Langone",
      "Laser Medicine Fellowship - Miami Dermatology",
    ],
    languages: ["English", "Spanish", "Portuguese"],
    featured: true,
  },
  {
    id: "4",
    slug: "dr-michael-brooks",
    name: "Dr. Michael Brooks",
    title: "Body Contouring Specialist",
    specialization: "Non-Invasive Body Sculpting",
    credentials: [
      "MD, Board Certified in Internal Medicine",
      "Certified CoolSculpting Specialist",
      "Member, American Med Spa Association",
    ],
    bio: "Dr. Michael Brooks specializes in non-invasive body contouring and weight management. With a background in internal medicine, he takes a holistic approach to body aesthetics, combining cutting-edge technology with lifestyle optimization. Dr. Brooks has helped hundreds of patients achieve their body goals without surgery.",
    shortBio:
      "Specialist in non-invasive body contouring with a holistic approach to aesthetics.",
    image: "/images/doctors/dr-brooks.jpg",
    expertise: [
      "CoolSculpting",
      "EMSculpt",
      "Body Contouring",
      "Weight Management",
    ],
    education: [
      "MD - Duke University",
      "Internal Medicine Residency - Mayo Clinic",
      "Body Contouring Certification - CoolSculpting University",
    ],
    languages: ["English"],
    featured: false,
  },
];

export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((d) => d.slug === slug);
}

export function getFeaturedDoctors(): Doctor[] {
  return doctors.filter((d) => d.featured);
}
