"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Camera, Heart, Users, Star } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const whyChooseUs = [
  { title: "Storytellers", desc: "We don't just take photos; we capture the emotion and story of your day.", icon: Heart },
  { title: "Expert Team", desc: "Highly skilled professionals with years of wedding experience.", icon: Users },
  { title: "Quick Delivery", desc: "Receive your curated gallery and films within 30-45 days.", icon: Clock },
  { title: "Premium Quality", desc: "High-end equipment and meticulous editing for a timeless look.", icon: Star },
];

function Clock({ size, className }: { size: number, className: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const team = [
  { name: "Alex Rivera", role: "Lead Photographer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Sophia Chen", role: "Lead Videographer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
  { name: "Marcus Thorne", role: "Senior Editor", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920"
          alt="About Hero"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.05em" }}
            className="text-5xl md:text-7xl font-serif"
          >
            OUR STORY
          </motion.h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
      </section>

      {/* Photographer Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn} className="relative aspect-[4/5]">
            <Image
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=800"
              alt="Lead Photographer"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border-2 border-accent/30 translate-x-4 translate-y-4 -z-10"></div>
          </motion.div>
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl font-serif mb-8 text-accent">Defining Moments through Art</h2>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Founded in 2016, Eternal Moments was born out of a passion for authentic storytelling. We believe that your wedding isn't just an event, but a collection of whispers, glances, and heartbeats that deserve to be preserved forever.
            </p>
            <p className="text-foreground/70 mb-10 leading-relaxed">
              Our style is often described as "emotive-cinematic." We focus on natural light, genuine interactions, and the subtle details that make your day unique. Over the last 8 years, we've had the honor of documenting over 500 love stories across the globe.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 bg-white/5 border-l-2 border-accent">
                <span className="block text-2xl font-serif font-bold text-accent">500+</span>
                <span className="text-sm text-foreground/50 uppercase">Weddings</span>
              </div>
              <div className="p-4 bg-white/5 border-l-2 border-accent">
                <span className="block text-2xl font-serif font-bold text-accent">8 Yrs</span>
                <span className="text-sm text-foreground/50 uppercase">Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white/5 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 border border-white/5 hover:border-accent/30 transition-colors"
              >
                <item.icon size={32} className="text-accent mb-6" />
                <h3 className="font-serif text-xl mb-4">{item.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Meet the Team</h2>
          <p className="text-foreground/50">The creative minds behind the lens</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
                />
              </div>
              <h4 className="font-serif text-xl mb-1">{member.name}</h4>
              <p className="text-accent text-sm uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-white/5 py-24 px-6 border-y border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.div {...fadeIn} className="text-center mb-12">
            <Award size={48} className="mx-auto text-accent mb-6" />
            <h2 className="text-4xl font-serif mb-4">Awards & Recognition</h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-12 opacity-50 contrast-125">
            {/* Using text representations as logo placeholders */}
            {["WedAwards 2023", "Fearless Photographers", "MyWed Winner", "Vogue Bride"].map((award, i) => (
              <div key={i} className="text-center">
                <p className="font-serif italic text-lg tracking-widest">{award}</p>
                <div className="w-12 h-[1px] bg-accent mx-auto mt-2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
