import type { IconName } from "@/components/ui-icon";

export const links = {
  cal: "https://cal.com/martin-matos-vtzql5/consulta-matosdev",
  matosdevMain: "https://matosdev.xyz/",
  whatsapp: "https://wa.me/50761912312",
  whatsappQuote:
    "https://wa.me/50761912312?text=Hola%20Martin%2C%20quiero%20cotizar%20un%20proyecto%20con%20MatosDev.",
  monexity: "https://www.monexity-app.com/",
};

export const projectLogos = {
  matosdev: "/assets/logos/projects/matosdev/matosdev-logo.png",
  monexity: "/assets/logos/projects/monexity/monexity-logo.png",
  vibex: "/assets/logos/projects/vibex/vibex-logo.png",
  grafik2: "/assets/logos/projects/grafik2/grafik2-logo.png",
  eureka: "/assets/logos/projects/eureka/eureka-logo.png",
  asumlex: "/assets/logos/projects/asumlex/asumlex-logo.png",
};

export const heroStats = {
  primary: ["+15 Proyectos", "Colón, Panamá 🇵🇦"],
  services: ["Webs", "SaaS", "Branding"],
};

export const featured = [
  {
    id: "matosdev-web",
    title: "Conoce MatosDev.xyz",
    eyebrow: "WEB PRINCIPAL",
    text: "Explora nuestra web principal, servicios, proyectos y la forma en que construimos identidades digitales que se ven como deben.",
    button: "Visitar MatosDev.xyz",
    href: links.matosdevMain,
    icon: "globe" as IconName,
    logo: "/favicon.png",
  },
  {
    id: "monexity",
    title: "Monexity",
    eyebrow: "SaaS mobile-first",
    text: "Controla ventas, gastos, cotizaciones, facturas PDF e inventario desde tu celular.",
    button: "Probar Monexity",
    href: links.monexity,
    icon: "chart" as IconName,
    logo: projectLogos.monexity,
  },
];

export const projects = [
  {
    name: "Grafik2",
    description: "Web completa con inspiración iOS y portafolio.",
    href: "https://grafik2.es/",
    logo: projectLogos.grafik2,
    accentColor: "#007AFF",
  },
  {
    name: "Eureka Servicios",
    description: "Landing enfocada en destacar servicios.",
    href: "https://www.eurekaservicios.com/",
    logo: projectLogos.eureka,
    accentColor: "#22C55E",
  },
  {
    name: "ASUMLEX",
    description: "Web institucional legal.",
    href: "https://asumlex.vercel.app",
    logo: projectLogos.asumlex,
    accentColor: "#C9A24A",
  },
  {
    name: "Monexity",
    description: "SaaS para pequeños negocios.",
    href: links.monexity,
    logo: projectLogos.monexity,
    accentColor: "#00E676",
    accentGradient: "linear-gradient(135deg, #00E676, #00AEEF)",
  },
  {
    name: "Teddy Barber Studio",
    description: "Web para barbería con presencia digital profesional.",
    href: "https://www.teddybarberstudio.xyz/",
    logo: "/assets/logos/projects/teddy-barber/teddy-logo.png",
    accentColor: "#111111",
  },
];

export const socials = [
  {
    label: "Instagram MatosDev",
    href: "https://www.instagram.com/_matosdev/",
    icon: "instagram" as IconName,
    accent: "linear-gradient(135deg, #ff2b2b, #f97316, #c026d3)",
  },
  {
    label: "Instagram personal",
    href: "https://www.instagram.com/ofmartiin/",
    icon: "instagram" as IconName,
    accent: "linear-gradient(135deg, #f97316, #ec4899, #8b5cf6)",
  },
  {
    label: "X",
    href: "https://x.com/_OfMartin",
    icon: "x" as IconName,
    accent: "#111111",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@ofmartiin",
    icon: "music" as IconName,
    accent: "linear-gradient(135deg, #22d3ee, #ff2b2b)",
  },
  {
    label: "GitHub",
    href: "https://github.com/matosdev25",
    icon: "github" as IconName,
    accent: "#24292f",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@martinmatostech",
    icon: "youtube" as IconName,
    accent: "#ff0000",
  },
];

export const navItems = [
  { id: "inicio", label: "Inicio", href: "#inicio", icon: "home" as IconName },
  { id: "proyectos", label: "Proyectos", href: "#proyectos", icon: "briefcase" as IconName },
  {
    id: "monexity",
    label: "Monexity",
    href: "#monexity",
    icon: "chart" as IconName,
    logo: projectLogos.monexity,
  },
  { id: "agenda", label: "Agenda", href: "#agenda", icon: "calendar" as IconName },
  { id: "contacto", label: "Contacto", href: "#contacto", icon: "send" as IconName },
];
