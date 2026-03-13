"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Instagram, ChevronRight, Award, Camera, Clock } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stats = [
  { label: "Weddings", value: "500+", icon: Camera },
  { label: "Years Experience", value: "8", icon: Clock },
  { label: "Star Rated", value: "5", icon: Star },
];

const featuredPhotos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519225495810-75178319a11b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
];

const testimonials = [
  { name: "Sarah & David", review: "The most incredible experience. They captured every emotion perfectly.", stars: 5 },
  { name: "Emma & James", review: "Professional, creative, and such a joy to work with on our big day.", stars: 5 },
  { name: "Chloe & Mark", review: "The photos are like something out of a dream. We couldn't be happier.", stars: 5 },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
          alt="Wedding Hero"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif mb-6 leading-tight"
          >
            Capturing Your <br /> 
            <span className="text-accent italic">Love Story</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link 
              href="/albums" 
              className="inline-flex items-center bg-accent text-background px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform"
            >
              View Our Work <ChevronRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white/5 border-y border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <stat.icon size={32} className="text-accent mb-4" />
              <h3 className="text-4xl font-serif font-bold mb-1">{stat.value}</h3>
              <p className="text-foreground/60 text-sm uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Featured Gallery</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhotos.map((photo, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
            >
              <Image
                src={photo}
                alt={`Wedding moment ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="border border-white px-6 py-2 text-sm uppercase tracking-widest">View Moment</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Teaser */}
      <section className="bg-white/5 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1550005810-35040f7f3292?auto=format&fit=crop&q=80&w=800"
              alt="Photographer"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 -z-10"></div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">We capture timeless <br /> memories for couples</h2>
            <p className="text-foreground/70 mb-10 leading-relaxed text-lg">
              We believe every love story is unique and deserves to be told through a lens and cinematic eye that values authenticity over perfection. Our approach is to blend seamlessly into your celebration, capturing the raw emotions and quiet moments that define your journey.
            </p>
            <Link href="/about" className="text-accent flex items-center group font-bold text-lg">
              Learn More About Us <ChevronRight className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Couple Reviews</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              className="bg-white/5 p-10 border border-white/10 relative"
            >
              <div className="flex text-accent mb-6">
                {[...Array(t.stars)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg italic mb-8 leading-relaxed">"{t.review}"</p>
              <h4 className="font-serif text-xl">— {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <Instagram size={40} className="mx-auto text-accent mb-6" />
          <h2 className="text-4xl font-serif">Follow Our Journey</h2>
          <p className="text-foreground/50 mt-2">@eternalmoments_photography</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 px-1">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="aspect-square relative overflow-hidden"
            >
              <Image
                src={`https://images.unsplash.com/photo-${1500000000000 + i * 1000000}?auto=format&fit=crop&q=80&w=400`}
                alt="Instagram post"
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
