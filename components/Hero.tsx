"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Star, Scissors, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { brand } from "@/lib/config";
import { waLink, waMessages } from "@/lib/whatsapp";
import { GoldButton, GhostButton, WhatsAppIcon } from "./ui";

const luxe = [0.16, 1, 0.3, 1] as const;

export function Hero({ onBook }: { onBook: () => void }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: luxe },
        };

  return (
    <section
      ref={ref}
      className="grain relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-5"
    >
      {/* Foto de fondo cinematográfica */}
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Luz ambiental cinematográfica */}
      <div className="ambient-glow w-[500px] h-[500px] bg-gold/15 -top-40 -left-40" />
      <div
        className="ambient-glow w-[400px] h-[400px] bg-gold-deep/20 bottom-0 -right-32"
        style={{ animationDelay: "-9s" }}
      />
      {/* Viñeta oscura para legibilidad del texto sobre la foto */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,10,9,0.55)_0%,rgba(12,10,9,0.92)_100%)]" />

      <motion.div
        style={reduce ? undefined : { y, opacity }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl pt-24 pb-32"
      >
        <motion.div
          {...enter(0.1)}
          className="glass rounded-full px-5 py-2 flex items-center gap-2 mb-8"
        >
          <span className="flex" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </span>
          <span className="text-xs md:text-sm text-stone-muted">
            {brand.rating} · {brand.reviewCount} reseñas en Google
          </span>
        </motion.div>

        <motion.h1
          {...enter(0.25)}
          className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-cream"
        >
          No es un corte.
          <br />
          <span className="text-gold-gradient italic">Es tu firma.</span>
        </motion.h1>

        <motion.p
          {...enter(0.45)}
          className="mt-6 md:mt-8 text-base md:text-xl text-stone-muted max-w-2xl leading-relaxed"
        >
          La experiencia de barbería más exclusiva de {brand.city}. Precisión de
          navaja, toalla caliente y un ritual diseñado para que salgas siendo tu
          mejor versión.
        </motion.p>

        <motion.div
          {...enter(0.65)}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <GoldButton onClick={onBook} className="w-full sm:w-auto">
            <CalendarCheck className="w-4 h-4" />
            Reservar mi cita
          </GoldButton>
          <GhostButton href={waLink(waMessages.general)} className="w-full sm:w-auto">
            <WhatsAppIcon className="w-4 h-4 text-whatsapp" />
            WhatsApp directo
          </GhostButton>
        </motion.div>

        <motion.div
          {...enter(0.85)}
          className="mt-8 flex items-center gap-2 text-xs md:text-sm text-stone-muted"
        >
          <Scissors className="w-3.5 h-3.5 text-gold" />
          Agenda en menos de 1 minuto · Cero espera al llegar
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border border-line flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-gold"
            animate={reduce ? {} : { y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
