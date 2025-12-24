"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ClipboardCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import VirtualConsultationQuiz from "./VirtualConsultationQuiz";

export default function QuizCTA() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-[#FFFFF0] to-[#D4A5A5]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#B76E79]/10 rounded-full px-4 py-2 mb-6">
                <ClipboardCheck className="w-4 h-4 text-[#B76E79]" />
                <span className="text-sm font-medium text-[#B76E79]">
                  Penilaian Gratis
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2C2C2C] mb-6">
                Bingung Perawatan Mana yang Cocok untuk Anda?
              </h2>

              <p className="text-lg text-[#2C2C2C]/70 mb-8">
                Ikuti kuis penilaian kulit personal kami dan dapatkan rekomendasi
                perawatan yang disesuaikan dengan masalah kulit, tujuan, dan gaya
                hidup Anda.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "5 pertanyaan singkat - kurang dari 2 menit",
                  "Dapatkan rekomendasi perawatan personal",
                  "Terima penawaran eksklusif untuk perawatan yang direkomendasikan",
                ].map((point, i) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-[#9DC183] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-[#2C2C2C]">{point}</span>
                  </motion.div>
                ))}
              </div>

              <Button size="lg" onClick={() => setIsQuizOpen(true)}>
                <Sparkles className="w-5 h-5 mr-2" />
                Mulai Penilaian Kulit Anda
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#B76E79]/20 rounded-full blur-xl" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#9DC183]/20 rounded-full blur-xl" />

                {/* Quiz Preview Card */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-[#D4A5A5]/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-full flex items-center justify-center mx-auto mb-4">
                      <ClipboardCheck className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-[#2C2C2C]">
                      Kuis Penilaian Kulit
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-sm mt-2">
                      Temukan perawatan yang cocok untuk Anda
                    </p>
                  </div>

                  {/* Sample Question Preview */}
                  <div className="bg-[#FFFFF0] rounded-xl p-6">
                    <p className="text-sm text-[#2C2C2C]/60 mb-2">
                      Contoh Pertanyaan
                    </p>
                    <p className="font-semibold text-[#2C2C2C] mb-4">
                      Apa masalah kulit utama Anda?
                    </p>
                    <div className="space-y-2">
                      {[
                        "Garis halus & kerutan",
                        "Jerawat & breakout",
                        "Flek hitam",
                      ].map((option) => (
                        <div
                          key={option}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#D4A5A5]/20"
                        >
                          <div className="w-4 h-4 rounded-full border-2 border-[#B76E79]" />
                          <span className="text-sm text-[#2C2C2C]">
                            {option}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-[#D4A5A5]/20">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#B76E79]">5.000+</p>
                      <p className="text-xs text-[#2C2C2C]/60">Kuis Selesai</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-[#B76E79]">98%</p>
                      <p className="text-xs text-[#2C2C2C]/60">
                        Menemukan Cocok
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      <VirtualConsultationQuiz
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
      />
    </>
  );
}
