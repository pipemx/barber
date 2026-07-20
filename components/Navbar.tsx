"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { brand } from "@/lib/config";
import { useTheme } from "@/lib/theme";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#barberos", label: "Barberos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#membresia", label: "Membresía" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-baseline gap-2 cursor-pointer" aria-label="Inicio">
          <span className="font-display text-xl md:text-2xl tracking-widest text-cream">
            {brand.name}
          </span>
          <span className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase">
            {brand.tagline}
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-stone-muted hover:text-gold-bright transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.span
                  key="sun"
                  initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="moon"
                  initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            onClick={onBook}
            className="hidden sm:inline-flex btn-shimmer text-ink text-xs md:text-sm font-semibold uppercase tracking-wider rounded-full px-5 md:px-6 py-2.5 md:py-3 cursor-pointer transition-shadow hover:shadow-glow-gold"
          >
            Reservar cita
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-cream cursor-pointer"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass border-t border-line overflow-hidden"
          >
            <ul className="px-6 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg text-cream hover:text-gold-bright transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <button
                  onClick={() => {
                    setOpen(false);
                    onBook();
                  }}
                  className="w-full btn-shimmer text-ink font-semibold uppercase tracking-wider rounded-full px-6 py-4 cursor-pointer"
                >
                  Reservar cita
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
