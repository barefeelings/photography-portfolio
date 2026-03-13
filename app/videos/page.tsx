"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Clock, Film } from "lucide-react";

type Video = {
  id: string;
  couple: string;
  duration: string;
  category: string;
  thumbnail: string;
};

const categories = ["All", "Wedding Films", "Pre-Shoot Films", "Highlights"];

const dummyVideos: Video[] = [
  { id: "dQw4w9WgXcQ", couple: "Sarah & David", duration: "05:24", category: "Wedding Films", thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { id: "jNQXAC9IVRw", couple: "Emma & James", duration: "03:45", category: "Pre-Shoot Films", thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
  { id: "dQw4w9WgXcQ", couple: "Chloe & Mark", duration: "04:12", category: "Highlights", thumbnail: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
  { id: "jNQXAC9IVRw", couple: "Maya & Ravi", duration: "06:10", category: "Wedding Films", thumbnail: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" },
  { id: "dQw4w9WgXcQ", couple: "Emily & Jack", duration: "02:30", category: "Highlights", thumbnail: "https://images.unsplash.com/photo-1519225495810-75178319a11b?auto=format&fit=crop&q=80&w=800" },
  { id: "jNQXAC9IVRw", couple: "Isabel & Tom", duration: "04:55", category: "Pre-Shoot Films", thumbnail: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800" },
];

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredVideos = dummyVideos.filter(
    (video) => activeCategory === "All" || video.category === activeCategory
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1920"
          alt="Videos Hero"
          fill
          className="object-cover brightness-[0.3]"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-serif">WEDDING FILMS</h1>
          <p className="text-accent mt-2 tracking-widest uppercase text-sm">Cinematic storytelling in motion</p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-background scale-105"
                  : "bg-white/5 text-foreground/60 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, i) => (
              <motion.div
                key={video.id + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group cursor-pointer relative"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="aspect-video relative overflow-hidden bg-white/5 ring-1 ring-white/10 group-hover:ring-accent/40 transition-all">
                  <Image
                    src={video.thumbnail}
                    alt={video.couple}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold flex items-center">
                    <Clock size={12} className="mr-1 text-accent" /> {video.duration}
                  </div>
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-1 group-hover:bg-accent/20 transition-all">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xl">
                      <Play size={24} fill="currentColor" className="ml-1 text-background" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-serif">{video.couple}</h3>
                    <p className="text-accent/60 text-xs uppercase tracking-widest mt-1 flex items-center">
                      <Film size={12} className="mr-1.5" /> {video.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-foreground hover:text-accent transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={32} />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Wedding Film"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
