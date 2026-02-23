export interface Product {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  border: string;
  badge: string;
  href: string;
  tag: string | null;
}

export const products: Product[] = [
  {
    name: "Nexus Mail",
    slug: "mail",
    tagline: "Email que solo tú puedes leer",
    description:
      "Cifrado de extremo a extremo por defecto. Sin publicidad, sin rastreo, sin compromisos.",
    icon: "✉️",
    color: "from-violet-600/20 to-violet-900/10",
    border: "border-violet-500/20 hover:border-violet-500/60",
    badge: "from-violet-500 to-purple-600",
    href: "https://mail.proton.me",
    tag: "Popular",
  },
  {
    name: "Nexus Drive",
    slug: "drive",
    tagline: "Tu nube, tus archivos, tus reglas",
    description:
      "Almacena y comparte archivos con cifrado automático. Accede desde cualquier dispositivo.",
    icon: "🗂️",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20 hover:border-blue-500/60",
    badge: "from-blue-500 to-cyan-600",
    href: "https://drive.proton.me",
    tag: null,
  },
  {
    name: "Nexus Calendar",
    slug: "calendar",
    tagline: "Tu agenda no es asunto de nadie más",
    description:
      "Eventos cifrados, recordatorios inteligentes y sincronización total con tus dispositivos.",
    icon: "📅",
    color: "from-emerald-600/20 to-emerald-900/10",
    border: "border-emerald-500/20 hover:border-emerald-500/60",
    badge: "from-emerald-500 to-green-600",
    href: "https://calendar.proton.me",
    tag: null,
  },
  {
    name: "Nexus VPN",
    slug: "vpn",
    tagline: "Navega sin dejar rastro",
    description:
      "Protege tu conexión en cualquier red. Servidores en 60+ países, velocidad sin límite.",
    icon: "🛡️",
    color: "from-orange-600/20 to-orange-900/10",
    border: "border-orange-500/20 hover:border-orange-500/60",
    badge: "from-orange-500 to-red-500",
    href: "https://protonvpn.com",
    tag: "Gratis",
  },
  {
    name: "Nexus Docs",
    slug: "docs",
    tagline: "Escribe y colabora en privado",
    description:
      "Editor de documentos colaborativo donde nadie más puede leer lo que escribes.",
    icon: "📝",
    color: "from-yellow-600/20 to-yellow-900/10",
    border: "border-yellow-500/20 hover:border-yellow-500/60",
    badge: "from-yellow-500 to-orange-500",
    href: "#",
    tag: "Próximamente",
  },
  {
    name: "Nexus Meet",
    slug: "meet",
    tagline: "Videollamadas sin ojos encima",
    description:
      "Reuniones cifradas de extremo a extremo. Sin cuentas obligatorias para tus invitados.",
    icon: "🎥",
    color: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/20 hover:border-cyan-500/60",
    badge: "from-cyan-500 to-blue-500",
    href: "#",
    tag: "Beta",
  },
];
