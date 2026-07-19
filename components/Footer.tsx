"use client";

import { MapPin } from "lucide-react";
import { brand } from "@/lib/config";
import { waLink, waMessages } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./ui";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink px-5 md:px-8 pt-16 pb-28 md:pb-16">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-8 text-center">
        <div>
          <p className="font-display text-3xl tracking-widest text-cream">{brand.name}</p>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mt-1">{brand.tagline}</p>
        </div>

        <div className="gold-line w-40" />

        <div className="flex items-center gap-4">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-stone-muted hover:text-gold hover:border-gold/50 transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href={brand.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-stone-muted hover:text-gold hover:border-gold/50 transition-colors duration-300"
          >
            <TikTokIcon />
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-line flex items-center justify-center text-stone-muted hover:text-whatsapp hover:border-whatsapp/50 transition-colors duration-300"
          >
            <WhatsAppIcon />
          </a>
        </div>

        <p className="flex items-center gap-2 text-xs text-stone-muted">
          <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
          {brand.address}
        </p>

        <p className="text-xs text-stone-muted/60">
          © {new Date().getFullYear()} {brand.name} {brand.tagline}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
