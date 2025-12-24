"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-8">
                Visit Our Clinic
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">
                      Address
                    </h3>
                    <p className="text-[#2C2C2C]/70">
                      123 Aesthetic Avenue, Suite 500
                      <br />
                      Beverly Hills, CA 90210
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B76E79] text-sm font-medium mt-2 inline-block hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-[#2C2C2C]/70 hover:text-[#B76E79] transition-colors"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Email</h3>
                    <a
                      href="mailto:info@lumiere-aesthetics.com"
                      className="text-[#2C2C2C]/70 hover:text-[#B76E79] transition-colors"
                    >
                      info@lumiere-aesthetics.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D4A5A5]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[#B76E79]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C] mb-1">Hours</h3>
                    <div className="text-[#2C2C2C]/70 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#D4A5A5]/20 to-[#9DC183]/20 flex items-center justify-center overflow-hidden shadow-lg">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#B76E79]/40 mx-auto mb-2" />
                  <p className="text-[#2C2C2C]/60">Interactive Map</p>
                  <p className="text-sm text-[#2C2C2C]/40">
                    Beverly Hills, CA 90210
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-8 p-6 bg-[#25D366]/10 rounded-2xl">
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-10 h-10 text-[#25D366]" />
                  <div>
                    <h3 className="font-semibold text-[#2C2C2C]">
                      WhatsApp Chat
                    </h3>
                    <p className="text-sm text-[#2C2C2C]/70 mb-2">
                      Get instant answers to your questions
                    </p>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-medium text-sm hover:underline"
                    >
                      Start Chat →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#9DC183] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#2C2C2C] mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-[#2C2C2C]/70 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="jane@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                            Subject
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                          >
                            <option value="">Select a topic...</option>
                            <option value="consultation">
                              Book a Consultation
                            </option>
                            <option value="treatment">Treatment Inquiry</option>
                            <option value="pricing">Pricing Question</option>
                            <option value="feedback">Feedback</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79]"
                          placeholder="How can we help you?"
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-[#2C2C2C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#2C2C2C]/70">
              Quick answers to common questions about visiting our clinic.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Is parking available at your clinic?",
                a: "Yes, we offer complimentary valet parking for all patients. Self-parking is also available in our building's underground garage.",
              },
              {
                q: "Do you accept insurance?",
                a: "Most aesthetic treatments are considered elective and not covered by insurance. However, we offer flexible financing options and accept all major credit cards.",
              },
              {
                q: "What should I bring to my first appointment?",
                a: "Please bring a valid ID, any relevant medical records, a list of current medications, and photos of your desired results if applicable.",
              },
              {
                q: "Can I bring a friend or family member?",
                a: "Absolutely! We welcome you to bring a support person to your consultation. However, for treatment appointments, we ask that companions wait in our reception area.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFF0] rounded-xl p-6"
              >
                <h3 className="font-semibold text-[#2C2C2C] mb-2">{faq.q}</h3>
                <p className="text-[#2C2C2C]/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
