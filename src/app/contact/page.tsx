"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  Instagram,
  Facebook,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
              Hubungi Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Kontak
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Ada pertanyaan? Kami senang mendengar dari Anda. Kirim pesan dan
              kami akan merespons secepat mungkin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-8">
                Kunjungi Klinik Kami
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">
                      Alamat
                    </h3>
                    <p className="text-[#2C2C2C]/70">
                      Jl. Kemang Raya No. 123
                      <br />
                      Jakarta Selatan, 12730
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B76E79] text-sm font-medium mt-2 inline-block hover:underline"
                    >
                      Lihat di Maps →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Telepon</h3>
                    <a
                      href="tel:+6281234567890"
                      className="text-[#2C2C2C]/70 hover:text-[#B76E79] transition-colors"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Email</h3>
                    <a
                      href="mailto:info@lumiere-aesthetics.com"
                      className="text-[#2C2C2C]/70 hover:text-[#B76E79] transition-colors"
                    >
                      info@lumiere-aesthetics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Jam Operasional</h3>
                    <div className="text-[#2C2C2C]/70 space-y-1">
                      <p>Senin - Jumat: 09:00 - 19:00</p>
                      <p>Sabtu: 09:00 - 17:00</p>
                      <p>Minggu: Tutup</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop&q=80"
                  alt="Lokasi Lumière Aesthetics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 to-transparent flex items-end justify-center pb-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#B76E79] px-6 py-3 rounded-full font-semibold hover:bg-[#FFFFF0] transition-colors"
                  >
                    Buka di Google Maps
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-[#2C2C2C]/70">Ikuti kami:</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#D4A5A5]/20 rounded-full flex items-center justify-center text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>

              {/* WhatsApp */}
              <div className="mt-8 p-6 bg-[#25D366]/10 rounded-2xl">
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-10 h-10 text-[#25D366]" />
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">
                      Chat WhatsApp
                    </h3>
                    <p className="text-sm text-[#2C2C2C]/70 mb-2">
                      Dapatkan jawaban instan untuk pertanyaan Anda
                    </p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-medium text-sm hover:underline"
                    >
                      Mulai Chat →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#9DC183] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#2C2C2C] mb-4">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-[#2C2C2C]/70 mb-6">
                      Terima kasih telah menghubungi kami. Kami akan membalas dalam
                      24 jam.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Kirim Pesan Lain
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                      Kirim Pesan
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Nama Lengkap
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="Nama Anda"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="email@contoh.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            No. Telepon
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="0812-3456-7890"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Subjek
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                          >
                            <option value="">Pilih topik...</option>
                            <option value="consultation">
                              Reservasi Konsultasi
                            </option>
                            <option value="treatment">Tanya Perawatan</option>
                            <option value="pricing">Tanya Harga</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Lainnya</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Pesan Anda
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                          placeholder="Apa yang bisa kami bantu?"
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-[#2C2C2C]/70">
              Jawaban cepat untuk pertanyaan umum tentang kunjungan ke klinik kami.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Apakah tersedia parkir di klinik?",
                a: "Ya, kami menyediakan area parkir gratis untuk semua klien. Parkir valet juga tersedia untuk kenyamanan Anda.",
              },
              {
                q: "Apakah menerima BPJS atau asuransi?",
                a: "Perawatan estetika umumnya tidak ditanggung asuransi. Namun, kami menawarkan opsi cicilan 0% dan menerima semua kartu kredit utama.",
              },
              {
                q: "Apa yang harus dibawa saat kunjungan pertama?",
                a: "Silakan bawa KTP, riwayat medis jika ada, daftar obat yang sedang dikonsumsi, dan foto hasil yang diinginkan jika memungkinkan.",
              },
              {
                q: "Bolehkah membawa teman atau keluarga?",
                a: "Tentu! Kami menyambut Anda untuk membawa pendamping ke konsultasi. Namun untuk perawatan, pendamping diminta menunggu di ruang resepsi.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-xl p-6"
              >
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{faq.q}</h3>
                <p className="text-[#2C2C2C]/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Siap Memulai Perjalanan Kecantikan Anda?
          </h2>
          <p className="text-white/90 mb-8">
            Jadwalkan konsultasi gratis dengan dokter spesialis kami hari ini.
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
