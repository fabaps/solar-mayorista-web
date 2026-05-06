import SolarPanelImg from "@imgs/home/productos/panel-solar.png";
import InversorImg from "@imgs/home/productos/inversor.png";
import BoxImg from "@imgs/home/productos/caja-sobreponer.webp";

export const SPECIALIZED_ENGINEERING = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en AC",
    description: "Generación de energía limpia y eficiente.",
    products: [
      {
        img: InversorImg,
        title: "Inversor Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: BoxImg,
        title: "Caja Sobreponer",
        description: "Panel solar",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema aislado a la red",
    description: "Generación de energía limpia y eficiente.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema híbrido",
    description: "Generación de energía limpia y eficiente.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Atado a red industrial o comercial",
    description: "Generación de energía limpia y eficiente.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
    ],
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en DC",
    description: "Generación de energía limpia y eficiente.",
    products: [
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
      {
        img: SolarPanelImg,
        title: "Panel Solar",
        description: "Panel solar",
      },
    ],
  },
] as const;

export type SpecializedEngineering = (typeof SPECIALIZED_ENGINEERING)[number];
