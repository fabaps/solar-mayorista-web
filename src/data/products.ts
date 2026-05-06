import SolarPanelImg from "@imgs/home/productos/panel-solar.png";

export const PRODUCTS = [
  {
    img: SolarPanelImg,
    title: "Paneles Solares",
    url: "/productos-solares?category=paneles",
  },
  {
    img: SolarPanelImg,
    title: "Inversores",
    url: "/productos-solares?category=inversores",
  },
  {
    img: SolarPanelImg,
    title: "Baterías",
    url: "/productos-solares?category=baterias",
  },
  {
    img: SolarPanelImg,
    title: "Estructuras",
    url: "/productos-solares?category=estructuras",
  },
  {
    img: SolarPanelImg,
    title: "Interruptores",
    url: "/productos-solares?category=interruptores",
  },
  {
    img: SolarPanelImg,
    title: "Kits Solares",
    url: "/productos-solares?category=kits",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];
