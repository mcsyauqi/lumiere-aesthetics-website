"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage?: string;
  afterImage?: string;
  treatmentName: string;
  sessions?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = "Sebelum",
  afterLabel = "Sesudah",
  beforeImage = "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&h=800&fit=crop&q=80",
  afterImage = "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&h=800&fit=crop&q=80",
  treatmentName,
  sessions,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current || !isDragging) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    [isDragging]
  );

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden shadow-xl bg-white"
    >
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative h-80 md:h-96 cursor-col-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt="Sebelum perawatan"
            fill
            className="object-cover"
          />
        </div>

        {/* After Image (Foreground with clip) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt="Sesudah perawatan"
            fill
            className="object-cover"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#B76E79]">
            <MoveHorizontal className="w-6 h-6 text-[#B76E79]" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-[#2C2C2C]/80 text-white px-3 py-1 rounded-full text-sm">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 bg-[#9DC183] text-white px-3 py-1 rounded-full text-sm">
          {afterLabel}
        </div>
      </div>

      {/* Info Bar */}
      <div className="p-4 bg-[#2C2C2C] text-white flex justify-between items-center">
        <div>
          <h4 className="font-semibold">{treatmentName}</h4>
          {sessions && (
            <p className="text-sm text-gray-400">{sessions} sesi</p>
          )}
        </div>
        <span className="text-[#D4A5A5] text-sm">Geser untuk bandingkan</span>
      </div>
    </motion.div>
  );
}
