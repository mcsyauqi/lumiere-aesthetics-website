"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Sari Wulandari",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "HydraFacial & Botox",
    text: "Hasilnya melebihi ekspektasi saya. Dr. Laurent meluangkan waktu untuk memahami kekhawatiran saya dan membuat rencana perawatan yang personal. Kulit saya belum pernah terlihat sebaik ini, dan saya merasa jauh lebih percaya diri!",
  },
  {
    id: 2,
    name: "Jennifer Susanto",
    role: "Pengusaha",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Dermal Fillers",
    text: "Saya awalnya gugup untuk melakukan filler, tapi tim di Lumière membuat saya merasa sangat nyaman. Hasilnya sangat natural - orang-orang terus bertanya apakah saya habis liburan karena terlihat sangat segar!",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Pengacara",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Laser Skin Resurfacing",
    text: "Setelah bertahun-tahun berjuang dengan bekas jerawat, akhirnya saya menemukan solusinya. Perawatan laser telah mengubah tekstur kulit saya sepenuhnya. Stafnya profesional, dan kliniknya sangat indah.",
  },
  {
    id: 4,
    name: "Amanda Putri",
    role: "Calon Pengantin",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Paket Bridal Glow",
    text: "Saya ingin tampil terbaik untuk pernikahan saya, dan Lumière memberikan hasil melebihi impian saya. Rencana perawatan yang disesuaikan memberi saya bridal glow yang sempurna. Sangat worth it!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-[#D4A5A5]/10 to-[#B76E79]/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Cerita Klien"
          title="Apa Kata Klien Kami"
          description="Pengalaman nyata dari klien yang telah mentransformasi kepercayaan diri mereka dengan perawatan kami."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-8 left-0 w-16 h-16 text-[#D4A5A5]/30" />

          {/* Testimonial Slider */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C9B037] text-[#C9B037]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl md:text-2xl text-[#2C2C2C] font-accent italic leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C2C2C]">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-[#2C2C2C]/60">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-sm text-[#B76E79]">
                      {testimonials[currentIndex].treatment}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2C2C2C] hover:bg-[#B76E79] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#B76E79] w-8"
                      : "bg-[#D4A5A5]/40 hover:bg-[#D4A5A5]"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#2C2C2C] hover:bg-[#B76E79] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
