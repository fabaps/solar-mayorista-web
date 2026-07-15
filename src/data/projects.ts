import type { ImageMetadata } from "astro";

interface ProjectImage {
  src: ImageMetadata;
  alt: string;
}

interface Project {
  name: string;
  title: string;
  images: ProjectImage[];
}

import GaryCanoImg1 from "@imgs/home/proyectos/gary-cano/img-1.webp";
import GaryCanoImg2 from "@imgs/home/proyectos/gary-cano/img-2.webp";
import GaryCanoImg3 from "@imgs/home/proyectos/gary-cano/img-3.webp";

import ManuelMendezImg1 from "@imgs/home/proyectos/manuel-mendez/img-1.webp";
import ManuelMendezImg2 from "@imgs/home/proyectos/manuel-mendez/img-2.webp";
import ManuelMendezImg3 from "@imgs/home/proyectos/manuel-mendez/img-3.webp";

export const PROJECTS: Project[] = [
  {
    name: "Gary Cano",
    title: "Proyecto de Bombeo Solar",
    images: [
      { src: GaryCanoImg1, alt: "Gary Cano proyecto imagen 1" },
      { src: GaryCanoImg2, alt: "Gary Cano proyecto imagen 2" },
      { src: GaryCanoImg3, alt: "Gary Cano proyecto imagen 3" },
    ],
  },
  {
    name: "Manuel Mendez",
    title: "Proyecto Residencial Atado a Red",
    images: [
      { src: ManuelMendezImg1, alt: "Manuel Méndez proyecto imagen 1" },
      { src: ManuelMendezImg2, alt: "Manuel Méndez proyecto imagen 2" },
      { src: ManuelMendezImg3, alt: "Manuel Méndez proyecto imagen 3" },
    ],
  },
  {
    name: "Gary Cano",
    title: "Proyecto de Bombeo Solar",
    images: [
      { src: GaryCanoImg1, alt: "Gary Cano proyecto imagen 1" },
      { src: GaryCanoImg2, alt: "Gary Cano proyecto imagen 2" },
      { src: GaryCanoImg3, alt: "Gary Cano proyecto imagen 3" },
    ],
  },
];
