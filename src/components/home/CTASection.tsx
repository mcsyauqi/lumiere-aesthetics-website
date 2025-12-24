"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Phone, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-[20%] text-white/20"
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-20 right-[20%] text-white/20"
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Book your complimentary consultation today and discover the
            personalized treatment plan that will help you achieve your beauty
            goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-[#B76E79] hover:bg-[#FFFFF0]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Glow
              </Button>
            </Link>
            <a href="tel:+1234567890">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                <Phone className="w-5 h-5 mr-2" />
                (123) 456-7890
              </Button>
            </a>
          </div>

          {/* Trust Note */}
          <p className="mt-8 text-sm text-white/70">
            Free consultation &bull; No obligation &bull; Virtual options
            available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
