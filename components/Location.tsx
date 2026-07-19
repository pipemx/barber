"use client";

import { MapPin, Clock, Car, Phone } from "lucide-react";
import Image from "next/image";
import { brand, hours } from "@/lib/config";
import { GhostButton, Reveal, SectionHeading } from "./ui";

export function Location() {
  return (
    <section id="ubicacion" className="relative py-24 md:py-32 px-5 md:px-8 bg-ink-soft border-t border-line">
      <div className="mx-auto max-w-6xl">
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
            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block h-72 lg:h-full min-h-72 rounded-2xl overflow-hidden border border-line hover:border-gold/40 transition-colors duration-300"
              aria-label="Ver interior del local y abrir ubicación en Google Maps"
            >
              <Image
                src="/images/shop-interior.jpg"
                alt="Interior del local"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-gold" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm text-cream font-medium">{brand.address}</p>
                  <p className="text-xs text-gold uppercase tracking-widest mt-0.5">
                    Toca para abrir en Google Maps
                  </p>
                </div>
              </div>
            </a>
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
