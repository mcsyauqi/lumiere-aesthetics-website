"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid, List } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

const categories = [
  "All",
  "Facial Rejuvenation",
  "Injectables",
  "Laser Therapy",
  "Body Contouring",
  "Skin Treatments",
];

const results = [
  {
    id: 1,
    category: "Facial Rejuvenation",
    treatment: "HydraFacial Series",
    sessions: "6 sessions",
    description: "Dramatic improvement in skin texture, tone, and hydration.",
  },
  {
    id: 2,
    category: "Injectables",
    treatment: "Botox & Fillers",
    sessions: "3 sessions",
    description: "Natural-looking reduction of fine lines and volume restoration.",
  },
  {
    id: 3,
    category: "Laser Therapy",
    treatment: "Laser Resurfacing",
    sessions: "2 sessions",
    description: "Significant reduction in acne scars and uneven skin tone.",
  },
  {
    id: 4,
    category: "Injectables",
    treatment: "Lip Enhancement",
    sessions: "1 session",
    description: "Natural-looking volume and definition enhancement.",
  },
  {
    id: 5,
    category: "Body Contouring",
    treatment: "CoolSculpting",
    sessions: "2 sessions",
    description: "Visible fat reduction in stubborn areas.",
  },
  {
    id: 6,
    category: "Skin Treatments",
    treatment: "Acne Treatment",
    sessions: "4 sessions",
    description: "Clear, healthy skin with reduced breakouts.",
  },
  {
    id: 7,
    category: "Facial Rejuvenation",
    treatment: "Microneedling with PRP",
    sessions: "4 sessions",
    description: "Improved skin texture and reduced fine lines.",
  },
  {
    id: 8,
    category: "Laser Therapy",
    treatment: "IPL Treatment",
    sessions: "3 sessions",
    description: "Reduced pigmentation and sun damage.",
  },
  {
    id: 9,
    category: "Injectables",
    treatment: "Kybella",
    sessions: "2 sessions",
    description: "Defined jawline with reduced submental fat.",
  },
];

export default function BeforeAfterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredResults =
    activeCategory === "All"
      ? results
      : results.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C2C2C] to-[#404040]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#D4A5A5] mb-4">
              Real Results
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Before & After Gallery
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              See the transformative results our patients have achieved. Every
              transformation is unique and reflects our commitment to
              natural-looking outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="w-5 h-5 text-[#2C2C2C]/60 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-[#B76E79] text-white"
                      : "bg-[#FFFFF0] text-[#2C2C2C] hover:bg-[#D4A5A5]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-[#B76E79] text-white"
                    : "bg-[#FFFFF0] text-[#2C2C2C]"
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-[#B76E79] text-white"
                    : "bg-[#FFFFF0] text-[#2C2C2C]"
                }`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={
                viewMode === "grid"
                  ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-8 max-w-4xl mx-auto"
              }
            >
              {filteredResults.map((result, index) => (
                <motion.div
                  key={result.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BeforeAfterSlider
                    treatmentName={result.treatment}
                    sessions={result.sessions}
                  />
                  <div className="mt-4">
                    <span className="text-sm text-[#B76E79] font-medium">
                      {result.category}
                    </span>
                    <p className="text-[#2C2C2C]/70 text-sm mt-1">
                      {result.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredResults.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#2C2C2C]/60">
                No results found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#2C2C2C]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-[#2C2C2C]/60">
            <strong>Disclaimer:</strong> Individual results may vary. The images
            shown are representative of typical results but are not a guarantee.
            Consultation with our medical team is required to determine the best
            treatment plan for your unique needs.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Start Your Transformation Today
          </h2>
          <p className="text-white/90 mb-8">
            Book a consultation to discuss how we can help you achieve your
            aesthetic goals.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-[#B76E79] px-8 py-4 rounded-full font-semibold hover:bg-[#FFFFF0] transition-colors"
          >
            Book Your Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
