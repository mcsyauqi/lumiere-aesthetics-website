"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  ChevronRight,
  Shield,
  Star,
  Gift,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];

const consultationTypes = [
  {
    id: "in-person",
    name: "Konsultasi Langsung",
    description: "Kunjungi klinik kami untuk konsultasi komprehensif",
    duration: "45 menit",
    price: "Gratis",
  },
  {
    id: "virtual",
    name: "Konsultasi Virtual",
    description: "Terhubung dengan spesialis kami via video call",
    duration: "30 menit",
    price: "Gratis",
  },
  {
    id: "treatment",
    name: "Jadwal Perawatan",
    description: "Reservasi sesi perawatan terjadwal Anda",
    duration: "Bervariasi",
    price: "Sesuai perawatan",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Konsultasi Gratis",
    description: "Tanpa biaya untuk konsultasi awal",
  },
  {
    icon: Star,
    title: "Dokter Tersertifikasi",
    description: "Ditangani oleh spesialis berpengalaman",
  },
  {
    icon: Gift,
    title: "Penawaran Khusus",
    description: "Dapatkan promo untuk kunjungan pertama",
  },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    consultationType: "",
    treatment: "",
    doctor: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const stepLabels = ["Pilih Tipe", "Pilih Tanggal & Waktu", "Data Diri", "Konfirmasi"];

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Reservasi Online
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2C2C2C] mb-6">
              Jadwalkan Kunjungan Anda
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Reservasi konsultasi atau perawatan dalam beberapa langkah mudah.
              Tim kami akan mengkonfirmasi janji temu Anda dalam 24 jam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-white border-b border-[#D4A5A5]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-3 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-center gap-3 justify-center">
                <benefit.icon className="w-5 h-5 text-[#B76E79]" />
                <div className="hidden sm:block">
                  <p className="font-medium text-sm text-[#2C2C2C]">{benefit.title}</p>
                  <p className="text-xs text-[#2C2C2C]/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-[#D4A5A5]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            {stepLabels.map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step > index + 1
                      ? "bg-[#9DC183] text-white"
                      : step === index + 1
                      ? "bg-[#B76E79] text-white"
                      : "bg-[#D4A5A5]/20 text-[#2C2C2C]/40"
                  }`}
                >
                  {step > index + 1 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span
                  className={`hidden md:block ml-2 text-sm ${
                    step >= index + 1 ? "text-[#2C2C2C]" : "text-[#2C2C2C]/40"
                  }`}
                >
                  {label}
                </span>
                {index < 3 && (
                  <ChevronRight className="w-5 h-5 mx-4 text-[#D4A5A5]/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                  Apa yang ingin Anda reservasi?
                </h2>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {consultationTypes.map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          consultationType: type.id,
                        }));
                      }}
                      className={`p-6 rounded-2xl text-left transition-all ${
                        formData.consultationType === type.id
                          ? "bg-[#B76E79] text-white ring-2 ring-[#B76E79]"
                          : "bg-white hover:bg-[#D4A5A5]/10"
                      }`}
                    >
                      <h3 className="font-semibold mb-2">{type.name}</h3>
                      <p
                        className={`text-sm mb-3 ${
                          formData.consultationType === type.id
                            ? "text-white/80"
                            : "text-[#2C2C2C]/60"
                        }`}
                      >
                        {type.description}
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>{type.duration}</span>
                        <span>{type.price}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {formData.consultationType === "treatment" && (
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Pilih Perawatan
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    >
                      <option value="">Pilih perawatan...</option>
                      {treatments.map((t) => (
                        <option key={t.id} value={t.slug}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    Pilih Dokter (Opsional)
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                  >
                    <option value="">Tidak ada preferensi</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.slug}>
                        {d.name} - {d.specialization}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!formData.consultationType}
                  className="w-full md:w-auto"
                >
                  Lanjutkan
                </Button>
              </motion.div>
            )}

            {/* Step 2: Choose Date & Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                  Pilih Tanggal & Waktu
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Pilih Tanggal
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Pilih Waktu
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, time: slot }))
                          }
                          className={`py-2 px-4 rounded-lg text-sm transition-colors ${
                            formData.time === slot
                              ? "bg-[#B76E79] text-white"
                              : "bg-white hover:bg-[#D4A5A5]/10"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                  >
                    Kembali
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                  >
                    Lanjutkan
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Your Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                  Informasi Anda
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nama Depan
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Nama depan Anda"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Nama Belakang
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Nama belakang Anda"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      No. Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="0812-3456-7890"
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    placeholder="Keluhan atau pertanyaan khusus..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Kembali
                  </Button>
                  <Button type="submit">Konfirmasi Reservasi</Button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#9DC183] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-4">
                  Reservasi Berhasil!
                </h2>
                <p className="text-[#2C2C2C]/70 mb-8 max-w-md mx-auto">
                  Terima kasih, {formData.firstName}! Kami telah menerima permintaan
                  reservasi Anda. Email konfirmasi akan dikirim ke {formData.email}.
                </p>

                <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-8">
                  <h3 className="font-semibold text-[#2C2C2C] mb-4">
                    Detail Jadwal
                  </h3>
                  <div className="space-y-2 text-left">
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Tipe:</span>
                      <span>
                        {
                          consultationTypes.find(
                            (t) => t.id === formData.consultationType
                          )?.name
                        }
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Tanggal:</span>
                      <span>{formData.date}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Waktu:</span>
                      <span>{formData.time}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => (window.location.href = "/")}>
                    Kembali ke Beranda
                  </Button>
                  <a href="https://wa.me/6281234567890">
                    <Button variant="outline">
                      Hubungi via WhatsApp
                    </Button>
                  </a>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#2C2C2C]/60">
            Perlu berbicara dengan seseorang?{" "}
            <a href="tel:+6281234567890" className="text-[#B76E79] font-medium">
              Hubungi +62 812-3456-7890
            </a>{" "}
            atau{" "}
            <a
              href="mailto:info@lumiere-aesthetics.com"
              className="text-[#B76E79] font-medium"
            >
              email kami
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
