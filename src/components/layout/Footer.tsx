"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const footerLinks = {
  treatments: [
    { href: "/treatments/hydrafacial", label: "HydraFacial" },
    { href: "/treatments/botox", label: "Botox & Dysport" },
    { href: "/treatments/dermal-fillers", label: "Dermal Fillers" },
    { href: "/treatments/laser-resurfacing", label: "Laser Resurfacing" },
    { href: "/treatments/coolsculpting", label: "CoolSculpting" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/doctors", label: "Our Doctors" },
    { href: "/before-after", label: "Results Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  support: [
    { href: "/booking", label: "Book Appointment" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQs" },
    { href: "/financing", label: "Financing Options" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display">
                <span className="font-bold">Lumière</span>
                <span className="font-light text-[#D4A5A5]"> Aesthetics</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Where science meets beauty. Advanced aesthetic treatments by
              board-certified dermatologists for transformative, natural-looking
              results.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                className="flex items-start gap-3 text-gray-400 hover:text-[#D4A5A5] transition-colors"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  123 Aesthetic Avenue, Suite 500
                  <br />
                  Beverly Hills, CA 90210
                </span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4A5A5] transition-colors"
              >
                <Phone size={18} />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@lumiere-aesthetics.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4A5A5] transition-colors"
              >
                <Mail size={18} />
                <span>info@lumiere-aesthetics.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={18} />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4A5A5]">
              Treatments
            </h3>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4A5A5]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4A5A5]">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Lumière Aesthetics. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#B76E79] hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <span className="text-[#9DC183]">✓</span> HIPAA Compliant
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#9DC183]">✓</span> Board Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
