"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Treatment } from "@/data/treatments";
import { formatPrice } from "@/lib/utils";

interface TreatmentCardProps {
  treatment: Treatment;
  index?: number;
}

export default function TreatmentCard({
  treatment,
  index = 0,
}: TreatmentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/treatments/${treatment.slug}`}>
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={treatment.image}
              alt={treatment.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Featured Badge */}
            {treatment.featured && (
              <div className="absolute top-4 left-4 bg-[#C9B037] text-white text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </div>
            )}

            {/* Price Tag */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-[#B76E79] font-bold">
                {treatment.priceRange || `From ${formatPrice(treatment.price)}`}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-display font-semibold text-[#2C2C2C] mb-2 group-hover:text-[#B76E79] transition-colors">
              {treatment.name}
            </h3>
            <p className="text-[#2C2C2C]/70 text-sm mb-4 line-clamp-2">
              {treatment.shortDescription}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-sm text-[#2C2C2C]/60">
              <span className="flex items-center gap-1">
                <Clock size={14} />
                {treatment.duration}
              </span>
              <span className="flex items-center gap-1 text-[#B76E79] font-medium group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
