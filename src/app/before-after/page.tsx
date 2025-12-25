"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Grid, List, Star, Shield, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Button from "@/components/ui/Button";

const categories = [
  "Semua",
  "Peremajaan Wajah",
  "Suntik Estetika",
  "Terapi Laser",
  "Pembentukan Tubuh",
  "Perawatan Kulit",
];

const results = [
  {
    id: 1,
    category: "Peremajaan Wajah",
    treatment: "HydraFacial Series",
    sessions: "6 sesi",
    description: "Perbaikan dramatis pada tekstur, warna, dan hidrasi kulit.",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 2,
    category: "Suntik Estetika",
    treatment: "Botox & Fillers",
    sessions: "3 sesi",
    description: "Pengurangan garis halus dan restorasi volume yang natural.",
    beforeImage: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 3,
    category: "Terapi Laser",
    treatment: "Laser Resurfacing",
    sessions: "2 sesi",
    description: "Pengurangan signifikan bekas jerawat dan warna kulit tidak merata.",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 4,
    category: "Suntik Estetika",
    treatment: "Lip Enhancement",
    sessions: "1 sesi",
    description: "Volume dan definisi bibir yang natural.",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 5,
    category: "Pembentukan Tubuh",
    treatment: "CoolSculpting",
    sessions: "2 sesi",
    description: "Pengurangan lemak yang terlihat di area membandel.",
    beforeImage: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 6,
    category: "Perawatan Kulit",
    treatment: "Perawatan Jerawat",
    sessions: "4 sesi",
    description: "Kulit bersih dan sehat dengan breakout yang berkurang.",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 7,
    category: "Peremajaan Wajah",
    treatment: "Microneedling + PRP",
    sessions: "4 sesi",
    description: "Perbaikan tekstur kulit dan pengurangan garis halus.",
    beforeImage: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 8,
    category: "Terapi Laser",
    treatment: "IPL Treatment",
    sessions: "3 sesi",
    description: "Pengurangan pigmentasi dan kerusakan akibat sinar matahari.",
    beforeImage: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80",
  },
  {
    id: 9,
    category: "Suntik Estetika",
    treatment: "Kybella",
    sessions: "2 sesi",
    description: "Garis rahang yang tegas dengan pengurangan lemak dagu.",
    beforeImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=800&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=800&fit=crop&q=80",
  },
];

const stats = [
  { icon: Star, value: "98%", label: "Kepuasan Klien" },
  { icon: Shield, value: "10.000+", label: "Perawatan Sukses" },
  { icon: Award, value: "15+", label: "Tahun Pengalaman" },
];

export default function BeforeAfterPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredResults =
    activeCategory === "Semua"
      ? results
      : results.filter((r) => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#2C2C2C] to-[#404040]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#D4A5A5] mb-4">
              Hasil Nyata
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Galeri Sebelum & Sesudah
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Lihat hasil transformasi luar biasa yang dicapai klien kami. Setiap
              transformasi unik dan mencerminkan komitmen kami untuk hasil yang natural.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-8 h-8 text-[#D4A5A5] mx-auto mb-2" />
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
                aria-label="Tampilan grid"
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
                aria-label="Tampilan list"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    beforeImage={result.beforeImage}
                    afterImage={result.afterImage}
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
                Tidak ada hasil ditemukan untuk kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Komitmen Kami"
            title="Hasil yang Dapat Dipercaya"
            description="Semua foto adalah hasil nyata dari klien kami dengan persetujuan mereka."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Foto Asli",
                description: "Semua foto adalah hasil nyata tanpa manipulasi digital yang berlebihan.",
              },
              {
                title: "Dengan Persetujuan",
                description: "Setiap foto ditampilkan dengan izin tertulis dari klien kami.",
              },
              {
                title: "Hasil Bervariasi",
                description: "Hasil individual dapat berbeda tergantung kondisi dan respons tubuh.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-[#FFFFF0] rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#9DC183] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#2C2C2C]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-[#2C2C2C]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-[#2C2C2C]/60">
            <strong>Disclaimer:</strong> Hasil individual dapat bervariasi. Gambar yang
            ditampilkan adalah representasi hasil tipikal namun bukan jaminan.
            Konsultasi dengan tim medis kami diperlukan untuk menentukan rencana
            perawatan terbaik untuk kebutuhan unik Anda.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Mulai Transformasi Anda Hari Ini
          </h2>
          <p className="text-white/90 mb-8">
            Reservasi konsultasi untuk mendiskusikan bagaimana kami dapat membantu
            Anda mencapai tujuan estetika Anda.
          </p>
          <Link href="/booking">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-[#B76E79] hover:!bg-[#FFFFF0]"
            >
              Reservasi Konsultasi
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
