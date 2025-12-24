"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Clock,
  RefreshCw,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowLeft,
  Phone,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { Treatment, getTreatmentsByCategory } from "@/data/treatments";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { formatPrice } from "@/lib/utils";

interface TreatmentDetailProps {
  treatment: Treatment;
}

export default function TreatmentDetail({ treatment }: TreatmentDetailProps) {
  const relatedTreatments = getTreatmentsByCategory(treatment.category)
    .filter((t) => t.id !== treatment.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#D4A5A5]/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/treatments"
            className="inline-flex items-center text-[#B76E79] hover:text-[#9C4A5B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Treatments
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {treatment.featured && (
                <span className="inline-block bg-[#C9B037] text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Popular Treatment
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-display font-bold text-[#2C2C2C] mb-6">
                {treatment.name}
              </h1>
              <p className="text-lg text-[#2C2C2C]/70 mb-8">
                {treatment.fullDescription}
              </p>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Clock className="w-6 h-6 text-[#B76E79] mb-2" />
                  <p className="text-sm text-[#2C2C2C]/60">Duration</p>
                  <p className="font-semibold text-[#2C2C2C]">
                    {treatment.duration}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <RefreshCw className="w-6 h-6 text-[#B76E79] mb-2" />
                  <p className="text-sm text-[#2C2C2C]/60">Recovery</p>
                  <p className="font-semibold text-[#2C2C2C]">
                    {treatment.recovery}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Calendar className="w-6 h-6 text-[#B76E79] mb-2" />
                  <p className="text-sm text-[#2C2C2C]/60">Sessions</p>
                  <p className="font-semibold text-[#2C2C2C]">
                    {treatment.sessions}
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <DollarSign className="w-6 h-6 text-[#B76E79] mb-2" />
                  <p className="text-sm text-[#2C2C2C]/60">Starting From</p>
                  <p className="font-semibold text-[#2C2C2C]">
                    {treatment.priceRange || formatPrice(treatment.price)}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link href="/booking">
                  <Button size="lg">Book This Treatment</Button>
                </Link>
                <a href="tel:+1234567890">
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Info
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#D4A5A5]/40 to-[#B76E79]/40 flex items-center justify-center shadow-2xl">
                <div className="text-center text-white/80">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-xl font-display">{treatment.name}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-8">
            Treatment Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatment.benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-[#FFFFF0] rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-[#9DC183] flex-shrink-0 mt-0.5" />
                <span className="text-[#2C2C2C]">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#FFFFF0]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: `Is ${treatment.name} painful?`,
                a: "Most patients experience minimal discomfort. We use topical numbing and gentle techniques to ensure your comfort throughout the procedure.",
              },
              {
                q: "How soon will I see results?",
                a: "Results vary by treatment. Some patients see immediate improvement, while others notice gradual enhancement over several weeks as healing occurs.",
              },
              {
                q: "Are there any side effects?",
                a: "Common side effects are typically mild and temporary, including slight redness or swelling. Our team will discuss all potential effects during your consultation.",
              },
              {
                q: "How do I prepare for the treatment?",
                a: "We'll provide specific pre-treatment instructions during your consultation. Generally, we recommend avoiding blood thinners and alcohol before your appointment.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{faq.q}</h3>
                <p className="text-[#2C2C2C]/70">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-8">
              Related Treatments
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTreatments.map((t, index) => (
                <TreatmentCard key={t.id} treatment={t} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Transform?
          </h2>
          <p className="text-white/90 mb-8">
            Book your consultation today and take the first step towards
            revealing your natural radiance.
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
