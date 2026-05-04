export const NAVBAR_ITEMS = [
  {
    name: "Equipo",
    url: "#formacion",
  },
  {
    name: "Ingeniería",
    url: "#ingenieria",
  },
  {
    name: "Productos",
    url: "#seleccion-productos",
  },
  {
    name: "Soporte",
    url: "#soporte-tecnico",
  },
  {
    name: "Proyectos",
    url: "#proyectos-destacados",
  },
] as const;

export type NavbarItem = (typeof NAVBAR_ITEMS)[number];
