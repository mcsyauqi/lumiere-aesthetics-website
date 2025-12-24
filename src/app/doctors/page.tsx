"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Globe,
  CheckCircle,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Expert Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Our Medical Team
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Meet our board-certified specialists who combine artistry with
              medical expertise to help you achieve your aesthetic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
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
                      <p className="text-sm text-[#2C2C2C]/60">Experience</p>
                      <p className="font-bold text-[#2C2C2C]">15+ Years</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center gap-2 bg-[#9DC183]/20 rounded-full px-4 py-2 mb-4">
                    <CheckCircle className="w-4 h-4 text-[#9DC183]" />
                    <span className="text-sm font-medium text-[#9DC183]">
                      Board Certified
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
                      Credentials
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
                      Education
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
                      Areas of Expertise
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
                    <span>Languages: {doctor.languages.join(", ")}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-white/90 mb-8">
            Meet with our specialists and discuss your personalized treatment
            plan.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-[#B76E79] px-8 py-4 rounded-full font-semibold hover:bg-[#FFFFF0] transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
