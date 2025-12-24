"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import { Doctor } from "@/data/doctors";

interface DoctorCardProps {
  doctor: Doctor;
  index?: number;
}

export default function DoctorCard({ doctor, index = 0 }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/doctors#${doctor.slug}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
          {/* Image Container */}
          <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/20">
            <Image
              src={doctor.image}
              alt={doctor.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 to-transparent" />

            {/* Credentials Badge */}
            <div className="absolute top-4 right-4 bg-[#9DC183] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
              <Award size={12} />
              Board Certified
            </div>

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-display font-semibold mb-1">
                {doctor.name}
              </h3>
              <p className="text-white/80 text-sm">{doctor.title}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-[#2C2C2C]/70 text-sm mb-4 line-clamp-2">
              {doctor.shortBio}
            </p>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {doctor.expertise.slice(0, 2).map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-[#D4A5A5]/20 text-[#B76E79] px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* View Profile Link */}
            <span className="flex items-center gap-1 text-sm text-[#B76E79] font-medium group-hover:gap-2 transition-all">
              View Full Profile
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
