import SolarPanelImg from "@imgs/home/productos/panel-solar-topcon.png";
import InversorImg from "@imgs/home/productos/inversor-canadian.png";
import BatteryImg from "@imgs/home/productos/baterias.png";
import StructuresImg from "@imgs/home/productos/estructuras.png";
import SwitchesImg from "@imgs/home/productos/interruptores.png";
import KitsImg from "@imgs/home/productos/kits.png";

export const PRODUCTS = [
  {
    img: SolarPanelImg,
    title: "Paneles Solares",
    url: "/productos-solares?category=paneles",
  },
  {
    img: InversorImg,
    title: "Inversores",
    url: "/productos-solares?category=inversores",
  },
  {
    img: BatteryImg,
    title: "Baterías",
    url: "/productos-solares?category=baterias",
  },
  {
    img: StructuresImg,
    title: "Estructuras",
    url: "/productos-solares?category=estructuras",
  },
  {
    img: SwitchesImg,
    title: "Interruptores",
    url: "/productos-solares?category=interruptores",
  },
  {
    img: KitsImg,
    title: "Kits Solares",
    url: "/productos-solares?category=kits",
  },
] as const;

export type Product = (typeof PRODUCTS)[number];
