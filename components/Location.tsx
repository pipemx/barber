"use client";

import { MapPin, Clock, Car, Phone } from "lucide-react";
import Image from "next/image";
import { brand, hours } from "@/lib/config";
import { GhostButton, Reveal, SectionHeading } from "./ui";

export function Location() {
  return (
    <section id="ubicacion" className="relative py-24 md:py-32 px-5 md:px-8 bg-ink-soft border-t border-line section-glow">
      <div className="mx-auto max-w-6xl relative z-[1]">
        <SectionHeading
          kicker="Visítanos"
          title={
            <>
              En el corazón de{" "}
              <span className="text-gold-gradient italic">{brand.neighborhood}</span>
            </>
          }
        />
        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="flex flex-col gap-4 h-full">
              {/* Google Maps embed */}
              <div className="maps-embed h-64 lg:h-full min-h-64 flex-1">
                <iframe
                  src={brand.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${brand.name} ${brand.tagline} en Google Maps`}
                />
              </div>
              {/* Link to open in Google Maps app */}
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-surface border border-line rounded-xl hover:border-gold/40 transition-colors duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold" aria-hidden="true" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-cream font-medium truncate">{brand.address}</p>
                  <p className="text-xs text-gold uppercase tracking-widest mt-0.5">
                    Abrir en Google Maps
                  </p>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-surface border border-line rounded-2xl p-6 md:p-7 flex-1">
                <h3 className="flex items-center gap-2 font-display text-lg text-cream mb-4">
                  <Clock className="w-5 h-5 text-gold" aria-hidden="true" />
                  Horarios
                </h3>
                <ul className="flex flex-col gap-3">
                  {hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex items-center justify-between text-sm md:text-base border-b border-line/50 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-stone-muted">{h.days}</span>
                      <span className="text-cream tabular-nums">
                        {h.open} — {h.close}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface border border-line rounded-2xl p-6 flex items-start gap-3">
                  <Car className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">Estacionamiento privado</p>
                    <p className="text-xs text-stone-muted mt-1">Gratis para clientes con cita</p>
                  </div>
                </div>
                <div className="bg-surface border border-line rounded-2xl p-6 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium text-cream">{brand.phone}</p>
                    <p className="text-xs text-stone-muted mt-1">Lun a Dom en horario de tienda</p>
                  </div>
                </div>
              </div>
              <GhostButton href={brand.mapsUrl} className="w-full">
                <MapPin className="w-4 h-4" />
                Cómo llegar
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
