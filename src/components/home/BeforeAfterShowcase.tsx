"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Button from "@/components/ui/Button";

const transformations = [
  {
    id: 1,
    treatmentName: "Botox & Fillers",
    sessions: "3",
    description: "Forehead lines and volume restoration",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    treatmentName: "HydraFacial Series",
    sessions: "6",
    description: "Skin texture and hydration improvement",
    beforeImage: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    treatmentName: "Laser Resurfacing",
    sessions: "2",
    description: "Acne scars and skin tone correction",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80",
  },
];

export default function BeforeAfterShowcase() {
  return (
    <section className="section-padding bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Real Results"
          title="Transformations That Speak"
          description="See the remarkable transformations achieved by our patients. Every result is unique, natural-looking, and confidence-boosting."
          light
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <BeforeAfterSlider
                treatmentName={item.treatmentName}
                sessions={item.sessions}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
              <p className="text-gray-400 text-sm mt-4 text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/before-after">
            <Button variant="primary" size="lg">
              View Full Gallery
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
