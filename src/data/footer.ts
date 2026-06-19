import { Icon } from "astro-icon/components";

export const FOOTER_SECTIONS = [
  {
    title: "Enlaces Rápidos",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Aplica con tu proyecto", href: "/aplica" },
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
        href: "https://wa.me/50230916300",
        icon: "mdi:phone",
      },
      {
        label: "javier@adepenlinea.com",
        href: "mailto:info@mayoristasolar.com",
        icon: "mdi:email",
      },
    ],
  },
] as const;

export const FOOTER_COPYRIGHT =
  "© 2026 Mayorista Solar. Todos los derechos reservados.";
