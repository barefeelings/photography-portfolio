"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, ChevronDown, Send } from "lucide-react";

const faqs = [
  { q: "How far in advance should we book?", a: "We typically suggest booking 12-18 months in advance, especially for popular wedding dates in spring and autumn." },
  { q: "Do you travel for destination weddings?", a: "Yes, we love to travel! We've documented weddings across Europe, Asia, and the Americas. Travel fees apply depending on the location." },
  { q: "How many photos will we receive?", a: "On average, you'll receive 400-600 high-resolution, professionally edited images for a full-day wedding." },
  { q: "What is your turnaround time?", a: "You'll receive a 'sneak peek' within 1 week. The full online gallery and films are delivered within 4-6 weeks." },
  { q: "Can we customize our package?", a: "Absolutely. Every wedding is unique, and we're happy to tailor our services to fit your specific needs and vision." },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1920"
          alt="Contact Hero"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-serif">LET'S WORK TOGETHER</h1>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-8">Inquire Now</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-accent/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-accent/50 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-accent/50 transition-colors" placeholder="+94 77 123 4567" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground/60 uppercase tracking-widest">Wedding Date</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-accent/50 transition-colors text-foreground/40" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-foreground/60 uppercase tracking-widest">Your Message</label>
                <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 outline-none focus:border-accent/50 transition-colors resize-none" placeholder="Tell us about your story..."></textarea>
              </div>
              <button className="bg-accent text-background w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center group hover:bg-accent/90 transition-all">
                Send Inquiry <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-serif mb-8">Contact Details</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent shrink-0 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Phone</h4>
                    <p className="text-foreground/60">+94 77 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent shrink-0 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Email</h4>
                    <p className="text-foreground/60">hello@eternalmoments.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent shrink-0 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Locate Us</h4>
                    <p className="text-foreground/60">123 Art Gallery Rd, Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/10">
                <h4 className="text-lg font-serif mb-6 uppercase tracking-widest text-xs">Follow Us</h4>
                <div className="flex space-x-6">
                  {[Instagram, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="text-foreground/40 hover:text-accent transition-colors">
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 aspect-[16/6] bg-white/5 rounded-xl overflow-hidden ring-1 ring-white/10 grayscale">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58289895315!2d79.78616453912644!3d6.921350106208947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a70ad%3A0x2db429079ea9304a!2sColombo!5e0!3m2!1sen!2slk!4v1710321234567!5m2!1sen!2slk" 
                className="w-full h-full border-0" 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-white/3 py-24 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex justify-between items-center group"
                >
                  <span className={`text-lg font-serif transition-colors ${openFaq === i ? 'text-accent' : ''}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`text-accent transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-6 pb-6 text-foreground/60 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
