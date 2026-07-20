"use client";

import { useCallback, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Barbers } from "@/components/Barbers";
import { Experience } from "@/components/Experience";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Testimonials } from "@/components/Testimonials";
import { Membership } from "@/components/Membership";
import { Faq } from "@/components/Faq";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FloatingCta } from "@/components/FloatingCta";
import { BackgroundEffects } from "@/components/BackgroundEffects";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [initialServiceId, setInitialServiceId] = useState<string | undefined>();
  const [initialBarberId, setInitialBarberId] = useState<string | undefined>();

  const openBooking = useCallback((serviceId?: string, barberId?: string) => {
    setInitialServiceId(serviceId);
    setInitialBarberId(barberId);
    setBookingOpen(true);
  }, []);

  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <main className="relative">
      <BackgroundEffects />
      <Navbar onBook={() => openBooking()} />
      <Hero onBook={() => openBooking()} />
      <Stats />
      <Services onBook={(serviceId) => openBooking(serviceId)} />
      <Experience />
      <Barbers onBook={(barberId) => openBooking(undefined, barberId)} />
      <BeforeAfter />
      <Testimonials />
      <Membership />
      <Faq />
      <Location />
      <Footer />
      <BookingModal
        open={bookingOpen}
        onClose={closeBooking}
        initialServiceId={initialServiceId}
        initialBarberId={initialBarberId}
      />
      <FloatingCta onBook={() => openBooking()} />
    </main>
  );
}
