"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  "All",
  "Skincare Tips",
  "Treatment Guides",
  "Anti-Aging",
  "Lifestyle",
  "News",
];

const blogPosts = [
  {
    id: 1,
    slug: "ultimate-guide-to-hydrafacial",
    title: "The Ultimate Guide to HydraFacial: Everything You Need to Know",
    excerpt:
      "Discover why HydraFacial has become the most popular facial treatment worldwide and what makes it so effective for all skin types.",
    category: "Treatment Guides",
    author: "Dr. Sophia Laurent",
    date: "December 20, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    slug: "winter-skincare-routine",
    title: "Your Winter Skincare Routine: Protect Your Glow",
    excerpt:
      "Cold weather can wreak havoc on your skin. Learn how to adjust your skincare routine to maintain radiant, hydrated skin all winter long.",
    category: "Skincare Tips",
    author: "Dr. Elena Rodriguez",
    date: "December 15, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    slug: "botox-myths-debunked",
    title: "Botox Myths Debunked: Separating Fact from Fiction",
    excerpt:
      "There are many misconceptions about Botox. We're breaking down the most common myths and sharing the science behind this popular treatment.",
    category: "Treatment Guides",
    author: "Dr. James Chen",
    date: "December 10, 2024",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 4,
    slug: "anti-aging-in-your-30s",
    title: "Anti-Aging in Your 30s: Preventative Treatments That Work",
    excerpt:
      "Your 30s are the perfect time to start preventative anti-aging treatments. Here's what our dermatologists recommend.",
    category: "Anti-Aging",
    author: "Dr. Sophia Laurent",
    date: "December 5, 2024",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 5,
    slug: "ingredients-to-look-for",
    title: "5 Skincare Ingredients Every Woman Should Know About",
    excerpt:
      "From retinol to hyaluronic acid, learn about the powerhouse ingredients that can transform your skincare routine.",
    category: "Skincare Tips",
    author: "Dr. Elena Rodriguez",
    date: "November 28, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 6,
    slug: "bridal-glow-prep",
    title: "Bridal Beauty: Your 6-Month Glow-Up Timeline",
    excerpt:
      "Planning your wedding? Here's the perfect treatment timeline to ensure you're glowing on your big day.",
    category: "Lifestyle",
    author: "Dr. Sophia Laurent",
    date: "November 20, 2024",
    readTime: "9 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
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
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[#B76E79] mb-4">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#2C2C2C] mb-6">
              Beauty & Wellness Insights
            </h1>
            <p className="text-lg text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Expert advice, skincare tips, and the latest in aesthetic medicine
              from our board-certified specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="sticky top-20 z-40 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C2C]/40" />
              <input
                type="text"
                placeholder="Search articles..."
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
      {activeCategory === "All" && searchQuery === "" && (
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-8">
              Featured Articles
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
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-[#2C2C2C] mb-8">
            {activeCategory === "All" ? "Latest Articles" : activeCategory}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#2C2C2C]/60">
                No articles found matching your criteria.
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
                          Read More
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
      <section className="py-16 bg-gradient-to-r from-[#B76E79] to-[#D4A5A5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 mb-8">
            Get the latest skincare tips, exclusive offers, and beauty insights
            delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-[#2C2C2C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#404040] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
