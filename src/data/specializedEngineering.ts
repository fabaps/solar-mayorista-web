import SolarPanelImg from "@imgs/home/productos/panel-solar.png";
import InversorImg from "@imgs/home/productos/inversor.png";
import BoxImg from "@imgs/home/productos/caja-sobreponer.webp";

export const SPECIALIZED_ENGINEERING = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en AC",
    description: "Sistemas de bombeo solar con bombas centrífugas alimentadas por paneles AC. Ideal para irrigation y reservas de agua.",
    products: [
      {
        img: InversorImg,
        title: "Inversor para Bomba",
        description: "Inversor especial para bombas solares AC, permite variar la velocidad según necesidad de caudal.",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description: "Panel monocristalino de alta eficiencia para alimentar sistemas de bombeo.",
      },
      {
        img: BoxImg,
        title: "Caja de Conexión",
        description: "Caja de proteccion y conexion IP65 para instalacion exterior.",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema aislado a la red",
    description: "Sistemas independientes para zonas sin red eléctrica. Incluyen baterías para almacenamiento nocturno.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description: "Panel monocristalino de alta eficiencia para maxima generacion en espacios reducidos.",
      },
      {
        img: InversorImg,
        title: "Inversor Off-Grid",
        description: "Inversor-cargador hibrido con capacidad de gestion de bateria y generador auxiliar.",
      },
      {
        img: BoxImg,
        title: "Batería Lithium",
        description: "Bateria LiFePO4 de 48V, ciclo profundo, con BMS integrado.",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema híbrido",
    description: "Combina energía solar, red eléctrica y baterías. Máxima eficiencia con respaldo continuo.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description: "Panel de alta potencia compatible con inversores híbridos.",
      },
      {
        img: InversorImg,
        title: "Inversor Híbrido",
        description: "Inversor bidireccional que gestiona solar, red y baterías automaticamente.",
      },
      {
        img: BoxImg,
        title: "Batería Lithium",
        description: "Bateria de alta capacidad con comunicación para gestion inteligente.",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Atado a red industrial o comercial",
    description: "Sistemas conectados a la red con net metering.Ideal para reducir costos eléctricos masivos.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description: "Panel de grado comercial con 25 años de garantía de rendimiento.",
      },
      {
        img: InversorImg,
        title: "Inversor String",
        description: "Inversor central de string para grandes instalaciones comerciales.",
      },
      {
        img: BoxImg,
        title: "Medidor Bidireccional",
        description: "Medidor inteligente para net metering y monitoreo de energia.",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en DC",
    description: "Sistemas de bombeo solar con bombas DC directas. Máximo rendimiento sin inversor.",
    products: [
      {
        img: InversorImg,
        title: "Bomba Sumergible DC",
        description: "Bomba centrífuga sumergible de alta calidad para pozos profundos.",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar 550W",
        description: "Panel de voltaje compatible con bombas DC de 24V-48V.",
      },
      {
        img: BoxImg,
        title: "Controlador MPPT",
        description: "Controlador de máxima potencia para optimizacion del bombeo.",
      },
    ],
  },
] as const;

export type SpecializedEngineering = (typeof SPECIALIZED_ENGINEERING)[number];
