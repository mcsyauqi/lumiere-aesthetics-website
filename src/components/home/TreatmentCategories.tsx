"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Droplet, Zap, Syringe, Activity, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  {
    id: "facial-rejuvenation",
    name: "Peremajaan Wajah",
    description:
      "Kembalikan waktu dengan perawatan canggih yang mengembalikan kecemerlangan awet muda.",
    icon: Sparkles,
    color: "from-[#D4A5A5] to-[#B76E79]",
    treatments: ["HydraFacial", "Microneedling", "Chemical Peels"],
  },
  {
    id: "body-contouring",
    name: "Pembentukan Tubuh",
    description:
      "Bentuk siluet tubuh Anda dengan teknologi pembentukan non-invasif.",
    icon: Activity,
    color: "from-[#9DC183] to-[#7BA35A]",
    treatments: ["CoolSculpting", "EMSculpt", "VelaShape"],
  },
  {
    id: "skin-treatments",
    name: "Perawatan Kulit",
    description:
      "Atasi masalah kulit spesifik dengan perawatan yang tepat sasaran.",
    icon: Droplet,
    color: "from-[#87CEEB] to-[#5F9EA0]",
    treatments: ["Perawatan Jerawat", "Pigmentasi", "Perawatan Rosacea"],
  },
  {
    id: "injectables",
    name: "Suntik Estetika",
    description:
      "Tingkatkan kecantikan alami Anda dengan perawatan yang dilakukan ahli.",
    icon: Syringe,
    color: "from-[#B76E79] to-[#9C4A5B]",
    treatments: ["Botox", "Dermal Fillers", "Lip Enhancement"],
  },
  {
    id: "laser-therapy",
    name: "Terapi Laser",
    description:
      "Manfaatkan teknologi cahaya untuk peremajaan kulit, hair removal, dan lainnya.",
    icon: Zap,
    color: "from-[#C9B037] to-[#A69028]",
    treatments: ["Laser Resurfacing", "Hair Removal", "IPL"],
  },
];

export default function TreatmentCategories() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Layanan Kami"
          title="Kategori Perawatan"
          description="Temukan berbagai perawatan estetika lengkap yang disesuaikan dengan tujuan kecantikan unik Anda."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/treatments#${category.id}`}>
                <div className="group relative bg-[#FFFFF0] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 card-hover overflow-hidden h-full">
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="relative text-xl font-display font-semibold text-[#2C2C2C] mb-3">
                    {category.name}
                  </h3>
                  <p className="relative text-[#2C2C2C]/70 text-sm mb-4">
                    {category.description}
                  </p>

                  {/* Treatment Tags */}
                  <div className="relative flex flex-wrap gap-2 mb-4">
                    {category.treatments.map((treatment) => (
                      <span
                        key={treatment}
                        className="text-xs bg-[#D4A5A5]/20 text-[#B76E79] px-3 py-1 rounded-full"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <span className="relative flex items-center gap-2 text-sm font-medium text-[#B76E79] group-hover:gap-3 transition-all">
                    Lihat Perawatan
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
