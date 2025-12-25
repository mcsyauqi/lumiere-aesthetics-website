"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Droplet, Zap, Syringe, Activity, CheckCircle, Clock, Shield, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import TreatmentCard from "@/components/ui/TreatmentCard";
import Button from "@/components/ui/Button";
import { treatments, treatmentCategories } from "@/data/treatments";

const categoryIcons: Record<string, React.ElementType> = {
  "facial-rejuvenation": Sparkles,
  "body-contouring": Activity,
  "skin-treatments": Droplet,
  injectables: Syringe,
  "laser-therapy": Zap,
};

const categoryNamesID: Record<string, string> = {
  "facial-rejuvenation": "Peremajaan Wajah",
  "body-contouring": "Pembentukan Tubuh",
  "skin-treatments": "Perawatan Kulit",
  injectables: "Suntik Estetika",
  "laser-therapy": "Terapi Laser",
};

const categoryDescID: Record<string, string> = {
  "facial-rejuvenation": "Kembalikan kecemerlangan wajah muda Anda dengan perawatan canggih",
  "body-contouring": "Bentuk tubuh ideal dengan teknologi non-invasif terkini",
  "skin-treatments": "Atasi masalah kulit dengan perawatan tepat sasaran",
  injectables: "Tingkatkan kecantikan alami dengan suntik estetika profesional",
  "laser-therapy": "Manfaatkan teknologi laser untuk hasil maksimal",
};

const whyChooseUs = [
  {
    icon: Shield,
    title: "Aman & Tersertifikasi",
    description: "Semua perawatan dilakukan oleh dokter tersertifikasi dengan standar keamanan tinggi",
  },
  {
    icon: Award,
    title: "Teknologi Terbaru",
    description: "Menggunakan peralatan dan teknologi estetika terkini dari brand ternama",
  },
  {
    icon: Clock,
    title: "Hasil Cepat & Nyata",
    description: "Lihat perubahan signifikan dalam waktu singkat dengan hasil yang tahan lama",
  },
  {
    icon: CheckCircle,
    title: "Konsultasi Personal",
    description: "Setiap klien mendapat rencana perawatan yang disesuaikan dengan kebutuhan",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Layanan Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Perawatan Estetika
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto mb-8">
              Temukan berbagai perawatan berstandar internasional yang dirancang untuk
              meningkatkan kecantikan alami dan mengembalikan kepercayaan diri Anda.
            </p>
            <Link href="/booking">
              <Button size="lg">Reservasi Konsultasi Gratis</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Mengapa Memilih Kami"
            title="Perawatan Berkualitas Premium"
            description="Kami berkomitmen memberikan hasil terbaik dengan standar keamanan tertinggi"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-[#FFFFF0] rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-[#2C2C2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#2C2C2C]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              catIndex % 2 === 0 ? "bg-[#FFFFF0]" : "bg-white"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    {categoryNamesID[category.id] || category.name}
                  </h2>
                  <p className="text-[#2C2C2C]/60">{categoryDescID[category.id] || category.description}</p>
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Bingung Memilih Perawatan?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Konsultasikan dengan dokter spesialis kami untuk mendapatkan rekomendasi
            perawatan yang paling sesuai dengan kebutuhan kulit Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button
                variant="secondary"
                size="lg"
                className="!bg-white !text-[#B76E79] hover:!bg-[#FFFFF0]"
              >
                Reservasi Konsultasi
              </Button>
            </Link>
            <a href="https://wa.me/6281234567890">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/20"
              >
                Chat WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
