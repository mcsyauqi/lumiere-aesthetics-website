"use client";

import { motion } from "framer-motion";
import { Sparkles, Droplet, Zap, Syringe, Activity } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { treatments, treatmentCategories } from "@/data/treatments";

const categoryIcons: Record<string, React.ElementType> = {
  "facial-rejuvenation": Sparkles,
  "body-contouring": Activity,
  "skin-treatments": Droplet,
  injectables: Syringe,
  "laser-therapy": Zap,
};

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Aesthetic Treatments
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Discover our comprehensive range of FDA-approved treatments
              designed to enhance your natural beauty and restore your
              confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Categories */}
      {treatmentCategories.map((category, catIndex) => {
        const Icon = categoryIcons[category.id] || Sparkles;
        const categoryTreatments = treatments.filter(
          (t) => t.category === category.id
        );

        return (
          <section
            key={category.id}
            id={category.id}
            className={`section-padding ${
              catIndex % 2 === 0 ? "bg-white" : "bg-[#FFFFF0]"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-[#2C2C2C]">
                    {category.name}
                  </h2>
                  <p className="text-[#2C2C2C]/60">{category.description}</p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryTreatments.map((treatment, index) => (
                  <TreatmentCard
                    key={treatment.id}
                    treatment={treatment}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
