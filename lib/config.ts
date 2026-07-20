// ============================================================
// CONFIGURACIÓN WHITE-LABEL — BarberOS
// Cambia este archivo para adaptar el sistema a cualquier barbería.
// ============================================================

export const brand = {
  name: "IMPERIAL",
  tagline: "Barber Club",
  city: "Guadalajara",
  neighborhood: "Providencia",
  // TODO: reemplazar con el número real de WhatsApp (formato internacional sin +)
  whatsapp: "5213300000000",
  phone: "+52 33 0000 0000",
  address: "Av. Providencia 1234, Col. Providencia, Guadalajara, Jal.",
  mapsUrl: "https://maps.google.com/?q=Av.+Providencia+1234+Guadalajara",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.!2d-103.39!3d20.67!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sProvidencia%2C+Guadalajara!5e0!3m2!1ses!2smx!4v1",
  instagram: "https://instagram.com/imperialbarberclub",
  tiktok: "https://tiktok.com/@imperialbarberclub",
  rating: 4.9,
  reviewCount: 487,
  yearsOpen: 8,
  clientsServed: 12400,
};

export const hours = [
  { days: "Lunes a Viernes", open: "10:00", close: "21:00" },
  { days: "Sábado", open: "9:00", close: "20:00" },
  { days: "Domingo", open: "10:00", close: "16:00" },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number; // minutos
  featured?: boolean;
  badge?: string;
};

export const services: Service[] = [
  {
    id: "corte-clasico",
    name: "Corte Clásico",
    description: "Corte de precisión con tijera y máquina, lavado y styling final.",
    price: 250,
    duration: 45,
  },
  {
    id: "corte-barba",
    name: "Corte + Barba Imperial",
    description:
      "La experiencia completa: corte de precisión, perfilado de barba con navaja, toalla caliente y masaje facial.",
    price: 420,
    duration: 75,
    featured: true,
    badge: "El más reservado",
  },
  {
    id: "barba-ritual",
    name: "Ritual de Barba",
    description:
      "Perfilado con navaja, toalla caliente, aceites premium y tratamiento hidratante.",
    price: 220,
    duration: 40,
  },
  {
    id: "fade-premium",
    name: "Fade Premium",
    description: "Degradado de autor con detallado a navaja y diseño personalizado.",
    price: 300,
    duration: 50,
  },
  {
    id: "experiencia-vip",
    name: "Experiencia VIP",
    description:
      "Corte + barba + facial + bebida premium + masaje capilar. 2 horas dedicadas a ti.",
    price: 690,
    duration: 120,
    badge: "Exclusivo",
  },
  {
    id: "corte-nino",
    name: "Corte Junior",
    description: "Para caballeros menores de 12 años. Misma precisión, trato especial.",
    price: 180,
    duration: 30,
  },
];

export type Barber = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  initials: string;
  photo?: string;
};

export const barbers: Barber[] = [
  {
    id: "cualquiera",
    name: "Sin preferencia",
    role: "El primero disponible",
    specialty: "Te asignamos al mejor barbero disponible",
    experience: "",
    initials: "IM",
  },
  {
    id: "marco",
    name: "Marco Delgado",
    role: "Master Barber · Fundador",
    specialty: "Cortes clásicos y fades de autor",
    experience: "14 años",
    initials: "MD",
    photo: "/images/barber-marco.jpg",
  },
  {
    id: "andres",
    name: "Andrés Rivera",
    role: "Senior Barber",
    specialty: "Barbas esculpidas y navaja tradicional",
    experience: "9 años",
    initials: "AR",
    photo: "/images/barber-andres.jpg",
  },
  {
    id: "leon",
    name: "León Vázquez",
    role: "Style Specialist",
    specialty: "Tendencias, texturas y color",
    experience: "7 años",
    initials: "LV",
    photo: "/images/barber-leon.jpg",
  },
];

export const testimonials = [
  {
    name: "Ricardo M.",
    text: "Llevo 3 años viniendo cada dos semanas. No es un corte, es un ritual. Marco es un artista y el ambiente no lo encuentras en ningún otro lado de la ciudad.",
    service: "Corte + Barba Imperial",
    rating: 5,
  },
  {
    name: "Fernando G.",
    text: "Reservé por WhatsApp en 30 segundos. Llegué, cero espera, toalla caliente, whisky en la mano. Salí sintiéndome otro. Vale cada peso.",
    service: "Experiencia VIP",
    rating: 5,
  },
  {
    name: "Alejandro T.",
    text: "Probé 6 barberías antes de encontrar esta. El fade más limpio que me han hecho en la vida. Ya no busco más.",
    service: "Fade Premium",
    rating: 5,
  },
  {
    name: "Daniel R.",
    text: "La membresía es la mejor inversión que he hecho. Prioridad para agendar, siempre impecable, y el precio por corte sale mejor que cualquier barbería promedio.",
    service: "Membresía Black",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "¿Necesito agendar cita o puedo llegar directo?",
    a: "Trabajamos 100% con cita para garantizar cero espera y atención dedicada. Reservar toma menos de 1 minuto por WhatsApp y tu horario queda bloqueado solo para ti.",
  },
  {
    q: "¿Qué pasa si necesito cancelar o mover mi cita?",
    a: "Puedes reprogramar sin costo hasta 3 horas antes por el mismo WhatsApp. Tu lugar se libera para la lista de espera y tú eliges nuevo horario.",
  },
  {
    q: "¿Cuánto dura una sesión?",
    a: "Un corte clásico toma 45 minutos. La experiencia completa de corte + barba, 75 minutos. Nunca trabajamos con prisa: tu horario es tuyo.",
  },
  {
    q: "¿Aceptan tarjeta?",
    a: "Aceptamos efectivo, todas las tarjetas y transferencia. La membresía se puede domiciliar.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con estacionamiento privado gratuito para clientes con cita.",
  },
  {
    q: "¿Cómo funciona la Membresía Black?",
    a: "Por una cuota mensual tienes 2 servicios premium al mes, prioridad absoluta en agenda, 15% en productos y acceso a eventos exclusivos del club. Sin plazos forzosos.",
  },
];

export const membership = {
  name: "Membresía Black",
  price: 649,
  regularValue: 840,
  perks: [
    "2 servicios Corte + Barba Imperial al mes",
    "Prioridad absoluta en la agenda",
    "15% de descuento en productos",
    "Bebida premium de cortesía en cada visita",
    "Regalo de cumpleaños del club",
    "Acceso a eventos exclusivos para miembros",
  ],
};

// Horarios disponibles que muestra el reservador (demo).
export const timeSlots = [
  "10:00", "10:45", "11:30", "12:15", "13:00", "13:45",
  "16:00", "16:45", "17:30", "18:15", "19:00", "19:45", "20:30",
];
