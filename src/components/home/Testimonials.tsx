"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "HydraFacial & Botox",
    text: "The results exceeded my expectations. Dr. Laurent took the time to understand my concerns and created a personalized treatment plan. My skin has never looked better, and I feel so much more confident!",
  },
  {
    id: 2,
    name: "Jennifer Adams",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Dermal Fillers",
    text: "I was nervous about getting fillers, but the team at Lumière made me feel completely at ease. The results are so natural - people keep asking if I've been on vacation because I look so refreshed!",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Attorney",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Laser Skin Resurfacing",
    text: "After struggling with acne scars for years, I finally found a solution. The laser treatments have transformed my skin texture completely. The staff is professional, and the clinic is absolutely beautiful.",
  },
  {
    id: 4,
    name: "Amanda Rodriguez",
    role: "Bride-to-be",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&q=80",
    rating: 5,
    treatment: "Bridal Glow Package",
    text: "I wanted to look my absolute best for my wedding, and Lumière delivered beyond my dreams. The customized treatment plan gave me the perfect bridal glow. Worth every penny!",
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
          subtitle="Client Stories"
          title="What Our Clients Say"
          description="Real experiences from real clients who have transformed their confidence with our treatments."
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
