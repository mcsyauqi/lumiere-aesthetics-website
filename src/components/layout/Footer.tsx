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
    { href: "/about", label: "Tentang Kami" },
    { href: "/doctors", label: "Dokter Kami" },
    { href: "/before-after", label: "Galeri Hasil" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Kontak" },
  ],
  support: [
    { href: "/booking", label: "Reservasi" },
    { href: "/pricing", label: "Harga" },
    { href: "/faq", label: "FAQ" },
    { href: "/financing", label: "Opsi Cicilan" },
    { href: "/privacy", label: "Kebijakan Privasi" },
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
              Perpaduan sains dan kecantikan. Perawatan estetika canggih oleh
              dokter kulit tersertifikasi untuk hasil transformatif dan natural.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="https://maps.google.com"
                className="flex items-start gap-3 text-gray-400 hover:text-[#D4A5A5] transition-colors"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Jl. Kemang Raya No. 123
                  <br />
                  Jakarta Selatan, 12730
                </span>
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 text-gray-400 hover:text-[#D4A5A5] transition-colors"
              >
                <Phone size={18} />
                <span>+62 812-3456-7890</span>
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
                <span>Sen - Sab: 09:00 - 19:00</span>
              </div>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#D4A5A5]">
              Perawatan
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
              Perusahaan
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
              Layanan
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
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Lumière Aesthetics. Hak Cipta Dilindungi.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Created by{" "}
                <a
                  href="https://creativism.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4A5A5] hover:text-[#B76E79] transition-colors"
                >
                  Creativism Digital Marketing
                </a>
              </p>
            </div>

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
                <span className="text-[#9DC183]">✓</span> Tersertifikasi
              </span>
              <span className="flex items-center gap-1">
                <span className="text-[#9DC183]">✓</span> Terpercaya
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
