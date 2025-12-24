"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  Heart,
  Shield,
  Users,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const milestones = [
  { year: "2009", title: "Foundation", description: "Lumière Aesthetics founded by Dr. Sophia Laurent" },
  { year: "2012", title: "Expansion", description: "Opened state-of-the-art treatment center" },
  { year: "2015", title: "Innovation", description: "Introduced advanced laser technologies" },
  { year: "2018", title: "Recognition", description: "Named Top Aesthetic Clinic in the region" },
  { year: "2021", title: "Growth", description: "Expanded team with world-class specialists" },
  { year: "2024", title: "Today", description: "Celebrating 15 years of transformations" },
];

const values = [
  {
    icon: Heart,
    title: "Patient-First Care",
    description:
      "Every treatment plan is tailored to your unique needs, goals, and comfort level.",
  },
  {
    icon: Shield,
    title: "Safety & Expertise",
    description:
      "Board-certified physicians using only FDA-approved treatments and protocols.",
  },
  {
    icon: Sparkles,
    title: "Natural Results",
    description:
      "We enhance your natural beauty, never aiming for an overdone look.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Continuous training and investment in the latest technologies and techniques.",
  },
];

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "10,000+", label: "Happy Patients" },
  { number: "50+", label: "Treatments Offered" },
  { number: "98%", label: "Satisfaction Rate" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
                Where Science Meets Beauty
              </h1>
              <p className="text-lg text-[#2C2C2C]/70 mb-8">
                Founded in 2009, Lumière Aesthetics has been at the forefront of
                aesthetic medicine, combining cutting-edge technology with
                artistic expertise to help our patients look and feel their best.
              </p>
              <p className="text-[#2C2C2C]/70 mb-8">
                Our name, Lumière—French for &ldquo;light&rdquo;—reflects our mission to
                illuminate your natural beauty and help your inner radiance shine
                through. We believe everyone deserves to feel confident in their
                own skin.
              </p>
              <Link href="/booking">
                <Button size="lg">Schedule a Consultation</Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#D4A5A5]/40 to-[#B76E79]/40 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white/80">
                  <Sparkles className="w-20 h-20 mx-auto mb-4" />
                  <p className="text-xl font-display">Our Clinic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Philosophy"
            title="What We Stand For"
            description="Our core values guide every interaction and treatment we provide."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
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
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Journey"
            title="15 Years of Excellence"
            description="A timeline of our growth and commitment to aesthetic medicine."
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
                  <div className="bg-white rounded-2xl p-6 shadow-md">
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#B76E79] rounded-full border-4 border-[#FFFFF0]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Our Space"
            title="State-of-the-Art Facility"
            description="Experience luxury and comfort in our modern, welcoming clinic."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Treatment Suites",
                description:
                  "Private, spa-like treatment rooms equipped with the latest technology.",
              },
              {
                title: "Consultation Rooms",
                description:
                  "Comfortable spaces for in-depth discussions about your goals.",
              },
              {
                title: "Recovery Lounge",
                description:
                  "Peaceful post-treatment relaxation area with refreshments.",
              },
              {
                title: "Laser Center",
                description:
                  "Dedicated suite housing our advanced laser technologies.",
              },
              {
                title: "Skincare Boutique",
                description:
                  "Curated selection of medical-grade skincare products.",
              },
              {
                title: "Virtual Suite",
                description:
                  "High-tech room for virtual consultations and telemedicine.",
              },
            ].map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-2xl p-6"
              >
                <div className="aspect-video rounded-xl bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/20 flex items-center justify-center mb-4">
                  <Sparkles className="w-10 h-10 text-[#B76E79]/40" />
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
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Credentials"
            title="Trusted & Certified"
            description="Our commitment to safety and excellence is reflected in our certifications."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "AAAHC Accredited",
              "HIPAA Compliant",
              "FDA Registered",
              "AAD Member",
            ].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <CheckCircle className="w-12 h-12 text-[#9DC183] mx-auto mb-3" />
                <p className="font-semibold text-[#2C2C2C]">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Begin Your Journey With Us
          </h2>
          <p className="text-white/90 mb-8">
            Experience the Lumière difference. Schedule your complimentary
            consultation today.
          </p>
          <Link href="/booking">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-[#B76E79] hover:bg-[#FFFFF0]"
            >
              Book Your Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
