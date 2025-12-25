"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  "Semua",
  "Tips Skincare",
  "Panduan Perawatan",
  "Anti-Aging",
  "Gaya Hidup",
  "Berita",
];

const blogPosts = [
  {
    id: 1,
    slug: "panduan-lengkap-hydrafacial",
    title: "Panduan Lengkap HydraFacial: Semua yang Perlu Anda Ketahui",
    excerpt:
      "Temukan mengapa HydraFacial menjadi perawatan wajah paling populer di dunia dan apa yang membuatnya efektif untuk semua jenis kulit.",
    category: "Panduan Perawatan",
    author: "Dr. Sophia Laurent",
    date: "20 Desember 2024",
    readTime: "8 menit baca",
    featured: true,
  },
  {
    id: 2,
    slug: "rutinitas-skincare-musim-hujan",
    title: "Rutinitas Skincare Musim Hujan: Lindungi Kilau Kulit Anda",
    excerpt:
      "Cuaca lembab dapat mempengaruhi kondisi kulit. Pelajari cara menyesuaikan rutinitas skincare untuk menjaga kulit tetap sehat dan bercahaya.",
    category: "Tips Skincare",
    author: "Dr. Elena Rodriguez",
    date: "15 Desember 2024",
    readTime: "6 menit baca",
    featured: false,
  },
  {
    id: 3,
    slug: "mitos-botox-terbongkar",
    title: "Mitos Botox Terbongkar: Memisahkan Fakta dari Fiksi",
    excerpt:
      "Banyak kesalahpahaman tentang Botox. Kami mengurai mitos paling umum dan membagikan ilmu di balik perawatan populer ini.",
    category: "Panduan Perawatan",
    author: "Dr. James Chen",
    date: "10 Desember 2024",
    readTime: "7 menit baca",
    featured: true,
  },
  {
    id: 4,
    slug: "anti-aging-di-usia-30an",
    title: "Anti-Aging di Usia 30-an: Perawatan Pencegahan yang Efektif",
    excerpt:
      "Usia 30-an adalah waktu yang tepat untuk memulai perawatan anti-aging preventif. Inilah rekomendasi dari dermatolog kami.",
    category: "Anti-Aging",
    author: "Dr. Sophia Laurent",
    date: "5 Desember 2024",
    readTime: "5 menit baca",
    featured: false,
  },
  {
    id: 5,
    slug: "bahan-skincare-wajib-diketahui",
    title: "5 Bahan Skincare yang Wajib Diketahui Setiap Wanita",
    excerpt:
      "Dari retinol hingga hyaluronic acid, pelajari bahan-bahan powerhouse yang dapat mengubah rutinitas skincare Anda.",
    category: "Tips Skincare",
    author: "Dr. Elena Rodriguez",
    date: "28 November 2024",
    readTime: "6 menit baca",
    featured: false,
  },
  {
    id: 6,
    slug: "persiapan-kecantikan-pengantin",
    title: "Kecantikan Pengantin: Timeline Persiapan 6 Bulan",
    excerpt:
      "Merencanakan pernikahan? Inilah timeline perawatan sempurna untuk memastikan Anda bersinar di hari besar.",
    category: "Gaya Hidup",
    author: "Dr. Sophia Laurent",
    date: "20 November 2024",
    readTime: "9 menit baca",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "Semua" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Blog Kami
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Insight Kecantikan & Kesehatan
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Saran ahli, tips skincare, dan informasi terbaru dalam kedokteran
              estetika dari spesialis bersertifikat kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C2C]/40" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-[#D4A5A5]/30 focus:outline-none focus:ring-2 focus:ring-[#B76E79] w-full md:w-64"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Tag className="w-5 h-5 text-[#2C2C2C]/60 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category
                      ? "bg-[#B76E79] text-white"
                      : "bg-[#FFFFF0] text-[#2C2C2C] hover:bg-[#D4A5A5]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "Semua" && searchQuery === "" && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-8">
              Artikel Pilihan
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-gradient-to-br from-[#D4A5A5]/30 to-[#B76E79]/30 rounded-3xl overflow-hidden h-full">
                      <div className="aspect-video bg-gradient-to-br from-[#D4A5A5]/40 to-[#B76E79]/40 flex items-center justify-center">
                        <span className="text-6xl">✨</span>
                      </div>
                      <div className="p-6">
                        <span className="text-sm text-[#B76E79] font-medium">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-display font-semibold text-[#2C2C2C] mt-2 mb-3 group-hover:text-[#B76E79] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-[#2C2C2C]/70 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-[#2C2C2C]/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-8">
            {activeCategory === "Semua" ? "Artikel Terbaru" : activeCategory}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#2C2C2C]/60">
                Tidak ada artikel ditemukan sesuai kriteria Anda.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all card-hover h-full">
                      <div className="aspect-video bg-gradient-to-br from-[#D4A5A5]/20 to-[#B76E79]/20 flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                      <div className="p-6">
                        <span className="text-xs text-[#B76E79] font-medium uppercase tracking-wider">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-display font-semibold text-[#2C2C2C] mt-2 mb-3 group-hover:text-[#B76E79] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[#2C2C2C]/70 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-[#2C2C2C]/60">
                          <span>{post.author}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="mt-4 flex items-center gap-1 text-sm text-[#B76E79] font-medium group-hover:gap-2 transition-all">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Berlangganan Newsletter Kami
          </h2>
          <p className="text-white/90 mb-8">
            Dapatkan tips skincare terbaru, penawaran eksklusif, dan insight
            kecantikan langsung ke inbox Anda.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#404040] transition-colors"
            >
              Berlangganan
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
