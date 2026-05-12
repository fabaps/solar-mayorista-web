export const NAVBAR_ITEMS = [
  {
    name: "Ingeniería",
    url: "#ingenieria-especializada",
  },
  {
    name: "Soporte",
    url: "#soporte-tecnico",
  },
  {
    name: "Capacitación",
    url: "#capacitacion",
  },
  {
    name: "Productos",
    url: "#productos-solares",
  },
  {
    name: "Financiamiento",
    url: "#financiamiento",
  },
] as const;

export type NavbarItem = (typeof NAVBAR_ITEMS)[number];
