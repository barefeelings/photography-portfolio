import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-serif font-bold tracking-tighter text-accent">
            ETERNAL<span className="text-foreground">MOMENTS</span>
          </Link>
          <p className="text-foreground/60 text-sm leading-relaxed">
            Capturing the essence of your love story with timeless elegance. Based in Colombo, available worldwide.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-foreground font-serif text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {["Home", "About Us", "Albums", "Videos", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="text-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-foreground font-serif text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-foreground/60">
            <li>Wedding Photography</li>
            <li>Cinematic Videography</li>
            <li>Engagement Session</li>
            <li>Destination Weddings</li>
            <li>Event Coverage</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-foreground font-serif text-lg mb-6">Get in Touch</h4>
          <div className="flex items-center space-x-3 text-sm text-foreground/60">
            <Phone size={16} className="text-accent" />
            <span>+94 77 123 4567</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-foreground/60">
            <Mail size={16} className="text-accent" />
            <span>hello@eternalmoments.com</span>
          </div>
          <div className="flex items-center space-x-3 text-sm text-foreground/60">
            <MapPin size={16} className="text-accent" />
            <span>123 Art Gallery Rd, Colombo, Sri Lanka</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-foreground/40">
        <p>© {new Date().getFullYear()} Eternal Moments Photography. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
