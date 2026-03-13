"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Calendar, ExternalLink } from "lucide-react";

type Album = {
  id: number;
  couple: string;
  location: string;
  date: string;
  category: string;
  cover: string;
};

const categories = ["All", "Engagements", "Pre-Shoots", "Wedding Shoots", "Home Coming"];

const dummyAlbums: Album[] = [
  { id: 1, couple: "Sarah & David", location: "Negombo", date: "Jan 12, 2024", category: "Wedding Shoots", cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { id: 2, couple: "Emma & James", location: "Kandy", date: "Feb 05, 2024", category: "Pre-Shoots", cover: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" },
  { id: 3, couple: "Chloe & Mark", location: "Galle", date: "Mar 20, 2024", category: "Wedding Shoots", cover: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
  { id: 4, couple: "Maya & Ravi", location: "Colombo", date: "Apr 15, 2024", category: "Engagements", cover: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" },
  { id: 5, couple: "Emily & Jack", location: "Bentota", date: "May 10, 2024", category: "Home Coming", cover: "https://images.unsplash.com/photo-1519225495810-75178319a11b?auto=format&fit=crop&q=80&w=800" },
  { id: 6, couple: "Isabel & Tom", location: "Nuwara Eliya", date: "Jun 22, 2024", category: "Pre-Shoots", cover: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800" },
  { id: 7, couple: "Mia & Ethan", location: "Arugam Bay", date: "Jul 18, 2024", category: "Wedding Shoots", cover: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
  { id: 8, couple: "Olivia & Leo", location: "Mirissa", date: "Aug 30, 2024", category: "Engagements", cover: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=800" },
  { id: 9, couple: "Sophia & Liam", location: "Trincomalee", date: "Sep 12, 2024", category: "Wedding Shoots", cover: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=800" },
  { id: 10, couple: "Ava & Noah", location: "Jaffna", date: "Oct 25, 2024", category: "Pre-Shoots", cover: "https://images.unsplash.com/photo-1522673607200-16488321499b?auto=format&fit=crop&q=80&w=800" },
  { id: 11, couple: "Luna & Kai", location: "Dambulla", date: "Nov 08, 2024", category: "Home Coming", cover: "https://images.unsplash.com/photo-1465495910483-04104d5f97a5?auto=format&fit=crop&q=80&w=800" },
  { id: 12, couple: "Harper & Arlo", location: "Weligama", date: "Dec 15, 2024", category: "Wedding Shoots", cover: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800" },
];

export default function Albums() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAlbums = dummyAlbums.filter((album) => {
    const matchesCategory = activeCategory === "All" || album.category === activeCategory;
    const matchesSearch = album.couple.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          album.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[30vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920"
          alt="Albums Hero"
          fill
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-serif">OUR ALBUMS</h1>
          <p className="text-accent mt-2 tracking-widest uppercase text-sm">Timeless stories captured</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-background"
                    : "bg-white/5 text-foreground/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 group-focus-within:text-accent transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full py-2.5 pl-12 pr-6 w-full md:w-80 outline-none focus:border-accent/50 focus:bg-white/10 transition-all text-sm"
            />
          </div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAlbums.map((album) => (
              <motion.div
                key={album.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white/5 overflow-hidden ring-1 ring-white/10 hover:ring-accent/50 transition-all"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={album.cover}
                    alt={album.couple}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="bg-accent text-background px-8 py-3 rounded-full font-bold flex items-center scale-90 group-hover:scale-100 transition-transform duration-500">
                      View Album <ExternalLink className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs text-accent uppercase tracking-widest mb-2">{album.category}</div>
                  <h3 className="text-2xl font-serif mb-4">{album.couple}</h3>
                  <div className="flex items-center justify-between text-foreground/50 text-sm">
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1.5" />
                      {album.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1.5" />
                      {album.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAlbums.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-foreground/40 text-lg">No albums found matching your search.</p>
          </div>
        )}
      </section>
    </div>
  );
}
