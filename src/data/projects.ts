import KevynGarciaProject from "@imgs/home/proyectos/kevyn-garcia.jpeg";
import ErickVillatoroProject from "@imgs/home/proyectos/erick-villatoro.jpeg";
import BodegaSatProject from "@imgs/home/proyectos/bodega-sat.jpeg";
import AutoHotelProject from "@imgs/home/proyectos/autohotel.jpeg";

export const PROJECTS = [
  {
    img: KevynGarciaProject,
    place: "Jutiapa",
    title: "Proyecto Kevyn García - Sistema Atado a Red",
    description: "Ahorro anual Q10,000",
  },
  {
    img: ErickVillatoroProject,
    place: "Jutiapa",
    title: "Proyecto Erick Villatoro - Sistema Atado a Red",
    description: "Ahorro anual Q10,000",
  },
  {
    img: BodegaSatProject,
    place: "Jutiapa",
    title: "Proyecto Bodega SAT",
    description: "Ahorro anual Q10,000",
  },
  {
    img: AutoHotelProject,
    place: "Jutiapa",
    title: "Proyecto AutoHotel",
    description: "Ahorro anual Q10,000",
  },
  {
    img: KevynGarciaProject,
    place: "Jutiapa",
    title: "Proyecto Kevyn García - Sistema Atado a Red",
    description: "Ahorro anual Q10,000",
  },
  {
    img: ErickVillatoroProject,
    place: "Jutiapa",
    title: "Proyecto Erick Villatoro - Sistema Atado a Red",
    description: "Ahorro anual Q10,000",
  },
  {
    img: BodegaSatProject,
    place: "Jutiapa",
    title: "Proyecto Bodega SAT",
    description: "Ahorro anual Q10,000",
  },
  {
    img: AutoHotelProject,
    place: "Jutiapa",
    title: "Proyecto AutoHotel",
    description: "Ahorro anual Q10,000",
  },
  {
    img: KevynGarciaProject,
    place: "Guatemala City",
    title: "Proyecto Residencial Villa Nueva",
    description: "Ahorro anual Q15,000",
  },
  {
    img: ErickVillatoroProject,
    place: "Antigua Guatemala",
    title: "Proyecto Hotel Boutique",
    description: "Ahorro anual Q25,000",
  },
] as const;

export type Project = (typeof PROJECTS)[number];
