"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Sparkles,
  CheckCircle,
  Users,
  Clock,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const milestones = [
  { year: "2009", title: "Berdiri", description: "Lumière Aesthetics didirikan oleh Dr. Sophia Laurent" },
  { year: "2012", title: "Ekspansi", description: "Membuka pusat perawatan berteknologi tinggi" },
  { year: "2015", title: "Inovasi", description: "Memperkenalkan teknologi laser terkini" },
  { year: "2018", title: "Pengakuan", description: "Dinobatkan sebagai Klinik Estetika Terbaik di wilayah" },
  { year: "2021", title: "Pertumbuhan", description: "Memperluas tim dengan spesialis kelas dunia" },
  { year: "2024", title: "Hari Ini", description: "Merayakan 15 tahun transformasi" },
];

const values = [
  {
    icon: Heart,
    title: "Mengutamakan Pasien",
    description:
      "Setiap rencana perawatan disesuaikan dengan kebutuhan, tujuan, dan kenyamanan Anda.",
  },
  {
    icon: Shield,
    title: "Keamanan & Keahlian",
    description:
      "Dokter bersertifikat menggunakan perawatan dan protokol yang disetujui BPOM.",
  },
  {
    icon: Sparkles,
    title: "Hasil Natural",
    description:
      "Kami meningkatkan kecantikan alami Anda, bukan tampilan yang berlebihan.",
  },
  {
    icon: Award,
    title: "Keunggulan",
    description:
      "Pelatihan berkelanjutan dan investasi pada teknologi serta teknik terbaru.",
  },
];

const stats = [
  { number: "15+", label: "Tahun Pengalaman" },
  { number: "10.000+", label: "Pasien Puas" },
  { number: "50+", label: "Perawatan Tersedia" },
  { number: "98%", label: "Tingkat Kepuasan" },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Tim Ahli Berpengalaman",
    description: "Dokter dan terapis kami memiliki sertifikasi internasional dengan pengalaman lebih dari 10 tahun.",
  },
  {
    icon: Shield,
    title: "Peralatan Modern",
    description: "Menggunakan teknologi terbaru dari brand ternama dunia untuk hasil optimal.",
  },
  {
    icon: Clock,
    title: "Layanan Personal",
    description: "Konsultasi mendalam untuk memahami kebutuhan unik setiap pasien.",
  },
  {
    icon: Star,
    title: "Hasil Terbukti",
    description: "Ribuan pasien telah merasakan transformasi dengan hasil yang memuaskan.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
                Cerita Kami
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
                Dimana Sains Bertemu Kecantikan
              </h1>
              <p className="text-lg text-[#2C2C2C]/70 mb-8">
                Didirikan pada tahun 2009, Lumière Aesthetics telah menjadi pionir
                dalam kedokteran estetika, menggabungkan teknologi mutakhir dengan
                keahlian artistik untuk membantu pasien kami tampil dan merasa percaya diri.
              </p>
              <p className="text-[#2C2C2C]/70 mb-8">
                Nama kami, Lumière—bahasa Prancis untuk &ldquo;cahaya&rdquo;—mencerminkan misi
                kami untuk menerangi kecantikan alami Anda dan membiarkan cahaya
                batin Anda bersinar. Kami percaya setiap orang layak merasa percaya diri
                dengan kulit mereka sendiri.
              </p>
              <Link href="/booking">
                <Button size="lg">Jadwalkan Konsultasi</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#D4A5A5]/40 to-[#B76E79]/40 shadow-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=750&fit=crop&q=80"
                  alt="Interior Klinik Lumière Aesthetics"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#D4A5A5] mb-2">
                  {stat.number}
                </p>
                <p className="text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Mengapa Lumière"
            title="Mengapa Memilih Kami"
            description="Kepercayaan ribuan pasien adalah bukti komitmen kami terhadap kualitas."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-display font-semibold text-[#2C2C2C] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Filosofi Kami"
            title="Nilai-Nilai yang Kami Pegang"
            description="Nilai-nilai inti kami memandu setiap interaksi dan perawatan yang kami berikan."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-[#2C2C2C] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Perjalanan Kami"
            title="15 Tahun Keunggulan"
            description="Timeline pertumbuhan dan komitmen kami dalam kedokteran estetika."
          />

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#D4A5A5]/30" />

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                  }`}
                >
                  <div className="bg-[#FFFFF0] rounded-2xl p-6 shadow-md">
                    <span className="text-[#B76E79] font-bold text-lg">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-display font-semibold text-[#2C2C2C] mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-[#2C2C2C]/70 text-sm mt-2">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#B76E79] rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Ruang Kami"
            title="Fasilitas Modern & Nyaman"
            description="Nikmati kemewahan dan kenyamanan di klinik modern kami."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ruang Perawatan",
                description:
                  "Ruang perawatan privat seperti spa dengan teknologi terbaru.",
                image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=400&h=300&fit=crop&q=80",
              },
              {
                title: "Ruang Konsultasi",
                description:
                  "Ruang nyaman untuk diskusi mendalam tentang tujuan Anda.",
                image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=300&fit=crop&q=80",
              },
              {
                title: "Ruang Pemulihan",
                description:
                  "Area relaksasi pasca perawatan yang tenang dengan refreshment.",
                image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=300&fit=crop&q=80",
              },
              {
                title: "Pusat Laser",
                description:
                  "Suite khusus dengan teknologi laser canggih kami.",
                image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop&q=80",
              },
              {
                title: "Boutique Skincare",
                description:
                  "Pilihan produk skincare medical-grade yang dikurasi.",
                image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&q=80",
              },
              {
                title: "Ruang Virtual",
                description:
                  "Ruang berteknologi tinggi untuk konsultasi virtual dan telemedicine.",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&q=80",
              },
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="aspect-video rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-display font-semibold text-[#2C2C2C] mb-2">
                  {facility.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-sm">
                  {facility.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Kredensial"
            title="Terpercaya & Tersertifikasi"
            description="Komitmen kami terhadap keamanan dan keunggulan tercermin dalam sertifikasi kami."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Terakreditasi BPOM",
              "Standar Kesehatan RI",
              "ISO Certified",
              "Anggota PERDOSKI",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-2xl p-6 text-center shadow-sm"
              >
                <CheckCircle className="w-12 h-12 text-[#9DC183] mx-auto mb-3" />
                <p className="font-semibold text-[#2C2C2C]">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Mulai Perjalanan Anda Bersama Kami
          </h2>
          <p className="text-white/90 mb-8">
            Rasakan perbedaan Lumière. Jadwalkan konsultasi gratis Anda hari ini.
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
