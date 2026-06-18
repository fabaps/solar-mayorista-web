import AcBombImg from "@imgs/home/ingenieria-especializada/bombeo-en-ac.webp";
import AislateSystemImg from "@imgs/home/ingenieria-especializada/sistema-aislado-de-la-red.webp";
import HibridSystemImg from "@imgs/home/ingenieria-especializada/sistema-hibrido-solar.jpg";
import BindSystemImg from "@imgs/home/ingenieria-especializada/sistema-atado-a-red.webp";
import DcBombImg from "@imgs/home/ingenieria-especializada/bombeo-en-dc.webp";

// products
import SolarPanelImg from "@imgs/home/productos/panel-solar.png";
import InversorImg from "@imgs/home/productos/inversor.png";
import BoxImg from "@imgs/home/productos/caja-sobreponer.webp";

export const SPECIALIZED_ENGINEERING = [
  {
    img: AcBombImg,
    title: "Diseño y Cuantificación de Productos",
    description:
      "Diseño y cuantificación de productos Ponemos a tu disposición nuestra herramienta de precotización; a partir de tus datos, nuestro equipo de ingeniería audita el diseño y selecciona los componentes óptimos para garantizar la máxima eficiencia en tu propuesta final.",
    products: [
      {
        img: InversorImg,
        title: "Inversor para Bomba",
        description:
          "Inversor especial para bombas solares AC, permite variar la velocidad según necesidad de caudal.",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description:
          "Panel monocristalino de alta eficiencia para alimentar sistemas de bombeo.",
      },
      {
        img: BoxImg,
        title: "Caja de Conexión",
        description:
          "Caja de proteccion y conexion IP65 para instalacion exterior.",
      },
    ],
  },
  {
    img: AislateSystemImg,
    title: "Análisis Técnico",
    description:
      "Sistemas independientes para zonas sin red eléctrica. Incluyen baterías para almacenamiento nocturno.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description:
          "Panel monocristalino de alta eficiencia para maxima generacion en espacios reducidos.",
      },
      {
        img: InversorImg,
        title: "Inversor Off-Grid",
        description:
          "Inversor-cargador hibrido con capacidad de gestion de bateria y generador auxiliar.",
      },
      {
        img: BoxImg,
        title: "Batería Lithium",
        description:
          "Bateria LiFePO4 de 48V, ciclo profundo, con BMS integrado.",
      },
    ],
  },
  {
    img: HibridSystemImg,
    title: "Visita Técnica (aplican criterios de selección)",
    description:
      "Combina energía solar, red eléctrica y baterías. Máxima eficiencia con respaldo continuo.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description:
          "Panel de alta potencia compatible con inversores híbridos.",
      },
      {
        img: InversorImg,
        title: "Inversor Híbrido",
        description:
          "Inversor bidireccional que gestiona solar, red y baterías automaticamente.",
      },
      {
        img: BoxImg,
        title: "Batería Lithium",
        description:
          "Bateria de alta capacidad con comunicación para gestion inteligente.",
      },
    ],
  },
  {
    img: BindSystemImg,
    title: "Software Especializado",
    description:
      "Sistemas conectados a la red con net metering.Ideal para reducir costos eléctricos masivos.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description:
          "Panel de grado comercial con 25 años de garantía de rendimiento.",
      },
      {
        img: InversorImg,
        title: "Inversor String",
        description:
          "Inversor central de string para grandes instalaciones comerciales.",
      },
      {
        img: BoxImg,
        title: "Medidor Bidireccional",
        description:
          "Medidor inteligente para net metering y monitoreo de energia.",
      },
    ],
  },
] as const;

export type SpecializedEngineering = (typeof SPECIALIZED_ENGINEERING)[number];
