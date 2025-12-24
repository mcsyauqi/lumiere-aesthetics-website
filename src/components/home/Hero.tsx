"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Award, Star, Users, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const trustBadges = [
  { icon: Award, label: "Board Certified", value: "Dermatologists" },
  { icon: Users, label: "10,000+", value: "Treatments" },
  { icon: Star, label: "4.9", value: "Rating" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FFFFF0]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[#D4A5A5] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#9DC183] rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#D4A5A5]/20 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#B76E79]" />
              <span className="text-sm font-medium text-[#B76E79]">
                Where Science Meets Beauty
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] leading-tight mb-6">
              Reveal Your{" "}
              <span className="text-[#B76E79]">Natural Radiance</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#2C2C2C]/70 mb-8 max-w-lg">
              Advanced aesthetic treatments by board-certified dermatologists.
              Experience transformative results with our FDA-approved procedures.
            </p>

            {/* Trust Points */}
            <div className="space-y-3 mb-8">
              {[
                "Board-certified dermatologists",
                "FDA-approved treatments",
                "Visible, natural-looking results",
              ].map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#9DC183]" />
                  <span className="text-[#2C2C2C]">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/booking">
                <Button size="lg">Book Consultation</Button>
              </Link>
              <Link href="/treatments">
                <Button variant="outline" size="lg">
                  View Treatments
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#D4A5A5]/30 rounded-full blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#9DC183]/30 rounded-full blur-xl" />

              {/* Hero Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop&q=80"
                  alt="Beautiful woman with glowing skin"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#B76E79]/20 to-transparent" />

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#9DC183]/20 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-[#9DC183]" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-[#2C2C2C]">98%</p>
                      <p className="text-sm text-[#2C2C2C]/60">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Another Floating Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute top-8 -right-8 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#C9B037]/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#C9B037]" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#2C2C2C]">15+</p>
                      <p className="text-sm text-[#2C2C2C]/60">
                        Years Experience
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0"
        >
          {trustBadges.map((badge) => (
            <div key={badge.label} className="text-center lg:text-left">
              <badge.icon className="w-8 h-8 text-[#B76E79] mx-auto lg:mx-0 mb-2" />
              <p className="text-xl font-bold text-[#2C2C2C]">{badge.label}</p>
              <p className="text-sm text-[#2C2C2C]/60">{badge.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
