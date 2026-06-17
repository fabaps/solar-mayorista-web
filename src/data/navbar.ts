export const NAVBAR_ITEMS = [
  {
    name: "Ingeniería",
    url: "/#ingenieria-especializada",
  },
  {
    name: "Capacitación",
    url: "/#capacitacion",
  },
  {
    name: "Soluciones",
    url: "/#soluciones-solares",
  },
  {
    name: "Financiamiento",
    url: "/#financiamiento",
  },
  {
    name: "Soporte",
    url: "/#soporte-tecnico",
  },
] as const;

export type NavbarItem = (typeof NAVBAR_ITEMS)[number];
