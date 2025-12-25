"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Globe,
  CheckCircle,
  Users,
  Star,
  Shield,
  Heart,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { doctors } from "@/data/doctors";

const highlights = [
  {
    icon: Users,
    value: "4",
    label: "Dokter Spesialis",
  },
  {
    icon: Star,
    value: "10.000+",
    label: "Prosedur Sukses",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Bersertifikat",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Kepuasan Pasien",
  },
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Perawatan Ahli
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Tim Medis Kami
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Kenali spesialis bersertifikat kami yang menggabungkan seni dengan
              keahlian medis untuk membantu Anda mencapai tujuan estetika Anda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Highlights */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#D4A5A5] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-3xl font-bold text-[#2C2C2C]">{item.value}</p>
                <p className="text-sm text-[#2C2C2C]/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Spesialis Kami"
            title="Dokter Berpengalaman & Bersertifikat"
            description="Setiap dokter kami memiliki keahlian dan dedikasi tinggi untuk memberikan hasil terbaik."
          />

          <div className="space-y-24">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                id={doctor.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#D4A5A5]/40 to-[#B76E79]/40 shadow-2xl overflow-hidden relative">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#9DC183]/20 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-[#9DC183]" />
                    </div>
                    <div>
                      <p className="text-sm text-[#2C2C2C]/60">Pengalaman</p>
                      <p className="font-bold text-[#2C2C2C]">15+ Tahun</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-[#9DC183]/20 rounded-full px-4 py-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-[#9DC183]" />
                    <span className="text-sm font-medium text-[#9DC183]">
                      Bersertifikat
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-display font-bold text-[#2C2C2C] mb-2">
                    {doctor.name}
                  </h2>
                  <p className="text-[#B76E79] font-medium mb-4">
                    {doctor.title}
                  </p>
                  <p className="text-[#2C2C2C]/70 mb-6 leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Credentials */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#2C2C2C] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-[#B76E79]" />
                      Kredensial
                    </h3>
                    <ul className="space-y-2">
                      {doctor.credentials.map((credential) => (
                        <li
                          key={credential}
                          className="text-sm text-[#2C2C2C]/70 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#B76E79] rounded-full" />
                          {credential}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Education */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#2C2C2C] mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-[#B76E79]" />
                      Pendidikan
                    </h3>
                    <ul className="space-y-2">
                      {doctor.education.map((edu) => (
                        <li
                          key={edu}
                          className="text-sm text-[#2C2C2C]/70 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-[#9DC183] rounded-full" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#2C2C2C] mb-3">
                      Bidang Keahlian
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm bg-[#D4A5A5]/20 text-[#B76E79] px-4 py-2 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="flex items-center gap-3 text-sm text-[#2C2C2C]/60">
                    <Globe className="w-4 h-4" />
                    <span>Bahasa: {doctor.languages.join(", ")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Doctors */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Keunggulan Kami"
            title="Mengapa Memilih Dokter Kami"
            description="Tim medis kami memiliki standar tertinggi dalam pelayanan dan keahlian."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Pelatihan Berkelanjutan",
                description: "Dokter kami terus mengikuti pelatihan dan sertifikasi internasional untuk mengupdate teknik terbaru.",
              },
              {
                title: "Pendekatan Personal",
                description: "Setiap pasien mendapat konsultasi mendalam untuk rencana perawatan yang disesuaikan.",
              },
              {
                title: "Hasil Terbukti",
                description: "Ribuan pasien telah mempercayakan perawatan mereka kepada tim dokter kami.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#9DC183] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{item.title}</h3>
                <p className="text-sm text-[#2C2C2C]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Jadwalkan Konsultasi Anda
          </h2>
          <p className="text-white/90 mb-8">
            Bertemu dengan spesialis kami dan diskusikan rencana perawatan
            personal Anda.
          </p>
          <Link href="/booking">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-white !text-[#B76E79] hover:!bg-[#FFFFF0]"
            >
              Reservasi Sekarang
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
