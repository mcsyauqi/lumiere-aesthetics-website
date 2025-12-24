"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", centered && "text-center")}
    >
      {subtitle && (
        <span
          className={cn(
            "inline-block text-sm font-semibold tracking-wider uppercase mb-3",
            light ? "text-[#D4A5A5]" : "text-[#B76E79]"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4",
          light ? "text-white" : "text-[#2C2C2C]"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            centered && "mx-auto",
            light ? "text-gray-300" : "text-[#2C2C2C]/70"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "w-20 h-1 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5] mt-6",
          centered && "mx-auto"
        )}
      />
    </motion.div>
  );
}
