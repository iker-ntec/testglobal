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
    tagline: "Email que solo tu puedes leer",
    description:
      "Cifrado de extremo a extremo por defecto. Sin publicidad, sin rastreo, sin compromisos.",
    icon: "\u2709\uFE0F",
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
      "Almacena y comparte archivos con cifrado automatico. Accede desde cualquier dispositivo.",
    icon: "\uD83D\uDDC2\uFE0F",
    color: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/20 hover:border-blue-500/60",
    badge: "from-blue-500 to-cyan-600",
    href: "https://drive.proton.me",
    tag: null,
  },
  {
    name: "Nexus Calendar",
    slug: "calendar",
    tagline: "Tu agenda no es asunto de nadie mas",
    description:
      "Eventos cifrados, recordatorios inteligentes y sincronizacion total con tus dispositivos.",
    icon: "\uD83D\uDCC5",
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
      "Protege tu conexion en cualquier red. Servidores en 60+ paises, velocidad sin limite.",
    icon: "\uD83D\uDEE1\uFE0F",
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
      "Editor de documentos colaborativo donde nadie mas puede leer lo que escribes.",
    icon: "\uD83D\uDCDD",
    color: "from-yellow-600/20 to-yellow-900/10",
    border: "border-yellow-500/20 hover:border-yellow-500/60",
    badge: "from-yellow-500 to-orange-500",
    href: "#",
    tag: "Proximamente",
  },
  {
    name: "Nexus Meet",
    slug: "meet",
    tagline: "Videollamadas sin ojos encima",
    description:
      "Reuniones cifradas de extremo a extremo. Sin cuentas obligatorias para tus invitados.",
    icon: "\uD83C\uDFA5",
    color: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/20 hover:border-cyan-500/60",
    badge: "from-cyan-500 to-blue-500",
    href: "#",
    tag: "Beta",
  },
];
