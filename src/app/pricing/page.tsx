"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Sparkles,
  Crown,
  Calculator,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { treatments } from "@/data/treatments";
import { formatPrice, calculateEMI } from "@/lib/utils";

const packages = [
  {
    id: "essential",
    name: "Essential Glow",
    description: "Perfect introduction to aesthetic treatments",
    price: 999,
    originalPrice: 1200,
    includes: [
      "Initial Consultation",
      "2 HydraFacial Sessions",
      "1 Chemical Peel",
      "Personalized Skincare Plan",
      "10% off future treatments",
    ],
    popular: false,
    color: "from-[#D4A5A5] to-[#B76E79]",
  },
  {
    id: "radiance",
    name: "Radiance Package",
    description: "Comprehensive rejuvenation for lasting results",
    price: 2499,
    originalPrice: 3200,
    includes: [
      "Full Consultation & Assessment",
      "4 HydraFacial Sessions",
      "2 Microneedling Sessions",
      "1 Botox Treatment Area",
      "Premium Skincare Kit",
      "15% off future treatments",
      "Priority Booking",
    ],
    popular: true,
    color: "from-[#C9B037] to-[#A69028]",
  },
  {
    id: "transformation",
    name: "Total Transformation",
    description: "Our most comprehensive beauty experience",
    price: 4999,
    originalPrice: 6500,
    includes: [
      "Executive Consultation",
      "6 HydraFacial Sessions",
      "4 Microneedling + PRP Sessions",
      "Full Botox Treatment",
      "Dermal Filler (1 Syringe)",
      "Laser Skin Rejuvenation",
      "Luxury Skincare Kit",
      "20% off future treatments",
      "VIP Concierge Service",
    ],
    popular: false,
    color: "from-[#2C2C2C] to-[#404040]",
  },
];

export default function PricingPage() {
  const [showEMI, setShowEMI] = useState(false);
  const [emiAmount, setEmiAmount] = useState(2499);
  const [emiMonths, setEmiMonths] = useState(12);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const interestRate = 0; // 0% interest for promotional financing
  const monthlyEMI = calculateEMI(emiAmount, interestRate, emiMonths);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const treatmentsByCategory = treatments.reduce((acc, treatment) => {
    if (!acc[treatment.category]) {
      acc[treatment.category] = [];
    }
    acc[treatment.category].push(treatment);
    return acc;
  }, {} as Record<string, typeof treatments>);

  const categoryNames: Record<string, string> = {
    "facial-rejuvenation": "Facial Rejuvenation",
    "body-contouring": "Body Contouring",
    "skin-treatments": "Skin Treatments",
    injectables: "Injectables",
    "laser-therapy": "Laser Therapy",
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#C9B037]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Investment in You
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Explore our treatment packages and individual services. Financing
              options available to make your transformation accessible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="Value Packages"
            title="Signature Treatment Packages"
            description="Save with our curated packages designed for comprehensive results."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-3xl overflow-hidden ${
                  pkg.popular ? "ring-2 ring-[#C9B037]" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-[#C9B037] text-white px-4 py-1 text-sm font-semibold rounded-bl-xl flex items-center gap-1">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className={`bg-gradient-to-br ${pkg.color} p-6 text-white`}>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">
                      {formatPrice(pkg.price)}
                    </span>
                    <span className="text-white/60 line-through">
                      {formatPrice(pkg.originalPrice)}
                    </span>
                  </div>
                  <p className="text-sm text-white/80 mt-1">
                    Save {formatPrice(pkg.originalPrice - pkg.price)}
                  </p>
                </div>

                <div className="bg-white p-6">
                  <h4 className="font-semibold text-[#2C2C2C] mb-4">
                    Package Includes:
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-[#2C2C2C]/70"
                      >
                        <CheckCircle className="w-5 h-5 text-[#9DC183] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose Package</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="section-padding bg-[#2C2C2C]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-[#D4A5A5] mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Payment Calculator
            </h2>
            <p className="text-white/70">
              Make your transformation affordable with our 0% interest financing
              options.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Treatment Amount
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="100"
                  value={emiAmount}
                  onChange={(e) => setEmiAmount(Number(e.target.value))}
                  className="w-full accent-[#B76E79]"
                />
                <div className="flex justify-between text-sm text-[#2C2C2C]/60 mt-1">
                  <span>$500</span>
                  <span className="font-bold text-[#B76E79] text-lg">
                    {formatPrice(emiAmount)}
                  </span>
                  <span>$10,000</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                  Payment Duration
                </label>
                <div className="flex gap-2">
                  {[3, 6, 12, 24].map((months) => (
                    <button
                      key={months}
                      onClick={() => setEmiMonths(months)}
                      className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                        emiMonths === months
                          ? "bg-[#B76E79] text-white"
                          : "bg-[#FFFFF0] text-[#2C2C2C] hover:bg-[#D4A5A5]/20"
                      }`}
                    >
                      {months} mo
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#FFFFF0] rounded-2xl text-center">
              <p className="text-sm text-[#2C2C2C]/60 mb-2">
                Your Estimated Monthly Payment
              </p>
              <p className="text-5xl font-bold text-[#B76E79]">
                {formatPrice(Math.round(emiAmount / emiMonths))}
                <span className="text-lg text-[#2C2C2C]/60">/month</span>
              </p>
              <p className="text-sm text-[#9DC183] mt-2">
                0% Interest &bull; No Hidden Fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Treatments */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            subtitle="A La Carte"
            title="Individual Treatment Pricing"
            description="View pricing for individual treatments. Prices may vary based on treatment area and individual needs."
          />

          <div className="space-y-4">
            {Object.entries(treatmentsByCategory).map(([category, items]) => (
              <div
                key={category}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#FFFFF0] transition-colors"
                >
                  <h3 className="text-xl font-display font-semibold text-[#2C2C2C]">
                    {categoryNames[category]}
                  </h3>
                  {expandedCategories.includes(category) ? (
                    <ChevronUp className="w-6 h-6 text-[#B76E79]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#B76E79]" />
                  )}
                </button>

                {expandedCategories.includes(category) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-[#D4A5A5]/20 pt-4">
                      {items.map((treatment) => (
                        <div
                          key={treatment.id}
                          className="flex justify-between items-center py-3 border-b border-[#D4A5A5]/10 last:border-0"
                        >
                          <div>
                            <p className="font-medium text-[#2C2C2C]">
                              {treatment.name}
                            </p>
                            <p className="text-sm text-[#2C2C2C]/60">
                              {treatment.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-[#B76E79]">
                              {treatment.priceRange ||
                                `From ${formatPrice(treatment.price)}`}
                            </p>
                            <p className="text-xs text-[#2C2C2C]/60">
                              per session
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Questions About Pricing?
          </h2>
          <p className="text-white/90 mb-8">
            Schedule a complimentary consultation to discuss your treatment plan
            and payment options.
          </p>
          <a
            href="/booking"
            className="inline-block bg-white text-[#B76E79] px-8 py-4 rounded-full font-semibold hover:bg-[#FFFFF0] transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
