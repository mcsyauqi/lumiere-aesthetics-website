"use client";

import { useState } from "react";
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
} from "lucide-react";
import Button from "@/components/ui/Button";
import { treatments } from "@/data/treatments";
import { doctors } from "@/data/doctors";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

const consultationTypes = [
  {
    id: "in-person",
    name: "In-Person Consultation",
    description: "Visit our clinic for a comprehensive consultation",
    duration: "45 min",
    price: "Complimentary",
  },
  {
    id: "virtual",
    name: "Virtual Consultation",
    description: "Connect with our specialists via video call",
    duration: "30 min",
    price: "Complimentary",
  },
  {
    id: "treatment",
    name: "Treatment Appointment",
    description: "Book your scheduled treatment session",
    duration: "Varies",
    price: "Per treatment",
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
    // Handle form submission
    setStep(4); // Show confirmation
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Book Online
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2C2C2C] mb-6">
              Schedule Your Visit
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Book your consultation or treatment appointment in just a few
              steps. Our team will confirm your appointment within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="bg-white border-b border-[#D4A5A5]/20">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {["Select Type", "Choose Date & Time", "Your Details", "Confirmation"].map(
              (label, index) => (
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
              )
            )}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Select Type */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                  What would you like to book?
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
                      Select Treatment
                    </label>
                    <select
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    >
                      <option value="">Choose a treatment...</option>
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
                    Preferred Specialist (Optional)
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                  >
                    <option value="">No preference</option>
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
                  Continue
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
                  Select Date & Time
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Select Date
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
                      Select Time
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
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!formData.date || !formData.time}
                  >
                    Continue
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
                  Your Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
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
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                    placeholder="Any specific concerns or questions..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                  >
                    Back
                  </Button>
                  <Button type="submit">Confirm Booking</Button>
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
                  Booking Confirmed!
                </h2>
                <p className="text-[#2C2C2C]/70 mb-8 max-w-md mx-auto">
                  Thank you, {formData.firstName}! We&apos;ve received your booking
                  request. You&apos;ll receive a confirmation email shortly at{" "}
                  {formData.email}.
                </p>

                <div className="bg-white rounded-2xl p-6 max-w-md mx-auto mb-8">
                  <h3 className="font-semibold text-[#2C2C2C] mb-4">
                    Appointment Details
                  </h3>
                  <div className="space-y-2 text-left">
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Type:</span>
                      <span>
                        {
                          consultationTypes.find(
                            (t) => t.id === formData.consultationType
                          )?.name
                        }
                      </span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Date:</span>
                      <span>{formData.date}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-[#2C2C2C]/60">Time:</span>
                      <span>{formData.time}</span>
                    </p>
                  </div>
                </div>

                <Button onClick={() => (window.location.href = "/")}>
                  Return Home
                </Button>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2C2C2C]/60">
            Need to speak with someone?{" "}
            <a href="tel:+1234567890" className="text-[#B76E79] font-medium">
              Call (123) 456-7890
            </a>{" "}
            or{" "}
            <a
              href="mailto:info@lumiere-aesthetics.com"
              className="text-[#B76E79] font-medium"
            >
              email us
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
