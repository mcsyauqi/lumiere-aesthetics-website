"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Crown,
  Calculator,
  ChevronDown,
  ChevronUp,
  Gift,
  CreditCard,
  Shield,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { treatments } from "@/data/treatments";

const packages = [
  {
    id: "essential",
    name: "Essential Glow",
    description: "Pengenalan sempurna untuk perawatan estetika",
    price: 2500000,
    originalPrice: 3500000,
    includes: [
      "Konsultasi Awal",
      "2 Sesi HydraFacial",
      "1 Chemical Peel",
      "Rencana Skincare Personal",
      "Diskon 10% perawatan selanjutnya",
    ],
    popular: false,
    color: "from-[#D4A5A5] to-[#B76E79]",
  },
  {
    id: "radiance",
    name: "Radiance Package",
    description: "Peremajaan komprehensif untuk hasil maksimal",
    price: 6500000,
    originalPrice: 8500000,
    includes: [
      "Konsultasi & Penilaian Lengkap",
      "4 Sesi HydraFacial",
      "2 Sesi Microneedling",
      "1 Area Botox",
      "Kit Skincare Premium",
      "Diskon 15% perawatan selanjutnya",
      "Booking Prioritas",
    ],
    popular: true,
    color: "from-[#C9B037] to-[#A69028]",
  },
  {
    id: "transformation",
    name: "Total Transformation",
    description: "Pengalaman kecantikan paling lengkap",
    price: 15000000,
    originalPrice: 20000000,
    includes: [
      "Konsultasi Executive",
      "6 Sesi HydraFacial",
      "4 Sesi Microneedling + PRP",
      "Botox Full Treatment",
      "Dermal Filler (1 Syringe)",
      "Laser Skin Rejuvenation",
      "Kit Skincare Luxury",
      "Diskon 20% perawatan selanjutnya",
      "VIP Concierge Service",
    ],
    popular: false,
    color: "from-[#2C2C2C] to-[#404040]",
  },
];

const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const benefits = [
  {
    icon: Gift,
    title: "Promo Spesial",
    description: "Dapatkan penawaran eksklusif untuk member baru",
  },
  {
    icon: CreditCard,
    title: "Cicilan 0%",
    description: "Bayar dengan cicilan tanpa bunga hingga 12 bulan",
  },
  {
    icon: Shield,
    title: "Garansi Hasil",
    description: "Jaminan kepuasan dengan free touch-up jika diperlukan",
  },
];

export default function PricingPage() {
  const [emiAmount, setEmiAmount] = useState(6500000);
  const [emiMonths, setEmiMonths] = useState(12);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const treatmentsByCategory = treatments.reduce((acc, treatment) => {
    if (!acc[treatment.category]) {
      acc[treatment.category] = [];
    }
    acc[treatment.category].push(treatment);
    return acc;
  }, {} as Record<string, typeof treatments>);

  const categoryNames: Record<string, string> = {
    "facial-rejuvenation": "Peremajaan Wajah",
    "body-contouring": "Pembentukan Tubuh",
    "skin-treatments": "Perawatan Kulit",
    injectables: "Suntik Estetika",
    "laser-therapy": "Terapi Laser",
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#C9B037]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Harga Transparan
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Investasi untuk Kecantikan Anda
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Jelajahi paket perawatan dan layanan individual kami. Tersedia
              opsi cicilan untuk mewujudkan transformasi impian Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-[#FFFFF0] rounded-2xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2C2C2C]">{benefit.title}</h3>
                  <p className="text-sm text-[#2C2C2C]/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Paket Hemat"
            title="Paket Perawatan Signature"
            description="Hemat lebih banyak dengan paket pilihan yang dirancang untuk hasil komprehensif."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden ${
                  pkg.popular ? "ring-2 ring-[#C9B037]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#C9B037] text-white px-4 py-1 text-sm font-semibold rounded-bl-xl flex items-center gap-1 z-10">
                    <Crown className="w-4 h-4" />
                    Paling Populer
                  </div>
                )}

                <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white`}>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">
                      {formatRupiah(pkg.price)}
                    </span>
                  </div>
                  <p className="text-white/60 line-through text-sm">
                    {formatRupiah(pkg.originalPrice)}
                  </p>
                  <p className="text-sm text-white/80 mt-1">
                    Hemat {formatRupiah(pkg.originalPrice - pkg.price)}
                  </p>
                </div>

                <div className="bg-white p-6">
                  <h4 className="font-semibold text-[#2C2C2C] mb-4">
                    Termasuk:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#2C2C2C]/70"
                      >
                        <CheckCircle className="w-5 h-5 text-[#9DC183] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking">
                    <Button className="w-full">Pilih Paket</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-[#D4A5A5] mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Kalkulator Cicilan
            </h2>
            <p className="text-white/70">
              Wujudkan transformasi impian dengan cicilan 0% tanpa bunga.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Jumlah Perawatan
                </label>
                <input
                  type="range"
                  min="1000000"
                  max="25000000"
                  step="500000"
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value))}
                  className="w-full accent-[#B76E79]"
                />
                <div className="flex justify-between text-sm text-[#2C2C2C]/60 mt-1">
                  <span>Rp 1 Jt</span>
                  <span className="font-bold text-[#B76E79] text-lg">
                    {formatRupiah(emiAmount)}
                  </span>
                  <span>Rp 25 Jt</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Durasi Cicilan
                </label>
                <div className="flex gap-2">
                  {[3, 6, 12].map((months) => (
                    <button
                      key={months}
                      onClick={() => setEmiMonths(months)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        emiMonths === months
                          ? "bg-[#B76E79] text-white"
                          : "bg-[#FFFFF0] text-[#2C2C2C] hover:bg-[#D4A5A5]/20"
                      }`}
                    >
                      {months} bulan
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#FFFFF0] rounded-2xl text-center">
              <p className="text-sm text-[#2C2C2C]/60 mb-2">
                Estimasi Cicilan Bulanan Anda
              </p>
              <p className="text-5xl font-bold text-[#B76E79]">
                {formatRupiah(Math.round(emiAmount / emiMonths))}
                <span className="text-lg text-[#2C2C2C]/60">/bulan</span>
              </p>
              <p className="text-sm text-[#9DC183] mt-2">
                Bunga 0% &bull; Tanpa Biaya Tersembunyi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Treatments */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="A La Carte"
            title="Harga Perawatan Individual"
            description="Lihat harga untuk perawatan satuan. Harga dapat bervariasi berdasarkan area perawatan dan kebutuhan individual."
          />

          <div className="space-y-4">
            {Object.entries(treatmentsByCategory).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#FFFFF0] rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#D4A5A5]/10 transition-colors"
                >
                  <h3 className="text-xl font-display font-semibold text-[#2C2C2C]">
                    {categoryNames[category]}
                  </h3>
                  {expandedCategories.includes(category) ? (
                    <ChevronUp className="w-6 h-6 text-[#B76E79]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#B76E79]" />
                  )}
                </button>

                {expandedCategories.includes(category) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-[#D4A5A5]/20 pt-4">
                      {items.map((treatment) => (
                        <div
                          key={treatment.id}
                          className="flex justify-between items-center py-3 border-b border-[#D4A5A5]/10 last:border-0"
                        >
                          <div>
                            <p className="font-medium text-[#2C2C2C]">
                              {treatment.name}
                            </p>
                            <p className="text-sm text-[#2C2C2C]/60">
                              {treatment.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#B76E79]">
                              {treatment.priceRange ||
                                `Mulai ${formatRupiah(treatment.price * 15000)}`}
                            </p>
                            <p className="text-xs text-[#2C2C2C]/60">
                              per sesi
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ada Pertanyaan Tentang Harga?
          </h2>
          <p className="text-white/90 mb-8">
            Jadwalkan konsultasi gratis untuk mendiskusikan rencana perawatan
            dan opsi pembayaran yang sesuai untuk Anda.
          </p>
          <Link href="/booking">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-[#B76E79] hover:!bg-[#FFFFF0]"
            >
              Reservasi Konsultasi Gratis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
