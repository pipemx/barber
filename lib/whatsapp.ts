import { brand } from "./config";

// Construye un enlace wa.me con mensaje pre-llenado.
export function waLink(message: string): string {
  return `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: `Hola ${brand.name} 👋 Quiero agendar una cita.`,
  booking: (service: string, barber: string, date: string, time: string, name: string) =>
    `Hola ${brand.name} 👋 Quiero confirmar mi cita:\n\n✂️ Servicio: ${service}\n💈 Barbero: ${barber}\n📅 Fecha: ${date}\n🕐 Hora: ${time}\n👤 Nombre: ${name}\n\n¿Me confirman disponibilidad?`,
  membership: `Hola ${brand.name} 👋 Me interesa la ${"Membresía Black"}. ¿Me comparten los detalles?`,
};
