"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import DoctorCard from "@/components/ui/DoctorCard";
import Button from "@/components/ui/Button";
import { getFeaturedDoctors } from "@/data/doctors";

export default function DoctorsSection() {
  const featuredDoctors = getFeaturedDoctors();

  return (
    <section className="section-padding bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Expert Care"
          title="Meet Our Specialists"
          description="Our board-certified dermatologists and aesthetic specialists bring decades of combined experience to help you achieve your beauty goals."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredDoctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/doctors">
            <Button variant="outline" size="lg">
              View All Doctors
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
