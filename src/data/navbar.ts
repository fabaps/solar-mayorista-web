export const NAVBAR_ITEMS = [
  {
    name: "Ingeniería",
    url: "/#ingenieria-especializada",
  },
  {
    name: "Aplica",
    url: "/aplica",
  },
  {
    name: "Productos",
    url: "/#productos-solares",
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
