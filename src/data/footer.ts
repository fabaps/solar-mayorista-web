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
        label: "Ruta 4 5-58, Guatemala",
        href: "https://maps.app.goo.gl/AFCPKPf3eUZiXN766",
        icon: "mdi:map-marker",
      },
      {
        label: "+502 3091 6300",
        href: "https://wa.me/50212345678",
        icon: "mdi:phone",
      },
      {
        label: "janice@adepenlinea.com",
        href: "mailto:info@mayoristasolar.com",
        icon: "mdi:email",
      },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT =
  "© 2026 Mayorista Solar. Todos los derechos reservados.";
