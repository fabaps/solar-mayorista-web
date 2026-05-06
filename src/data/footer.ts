import { Icon } from "astro-icon/components";

export const FOOTER_SECTIONS = [
  {
    title: "Enlaces Rápidos",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Productos Solares", href: "/productos-solares" },
      { label: "Proyectos Solares", href: "/proyectos" },
    ],
  },
  {
    title: "Productos",
    items: [
      { label: "Paneles Solares", href: "/productos-solares?category=paneles" },
      { label: "Inversores", href: "/productos-solares?category=inversores" },
      { label: "Baterías", href: "/productos-solares?category=baterias" },
      {
        label: "Estructuras de Montaje",
        href: "/productos-solares?category=estructuras",
      },
      {
        label: "Kits Solares",
        href: "/productos-solares?category=estructuras",
      },
    ],
  },
  {
    title: "Contacto",
    items: [
      {
        label: "WhatsApp: +502 1234 5678",
        href: "https://wa.me/50212345678",
        icon: "mdi:whatsapp",
      },
      {
        label: "info@mayoristasolar.com",
        href: "mailto:info@mayoristasolar.com",
        icon: "mdi:email",
      },
      {
        label: "Ciudad de Guatemala",
        href: "#",
        icon: "mdi:map-marker",
      },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT =
  "© 2026 Mayorista Solar. Todos los derechos reservados.";

