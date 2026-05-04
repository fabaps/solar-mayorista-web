export const SPECIALIZED_ENGINEERING = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en AC",
    description: "Generación de energía limpia y eficiente.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema aislado a la red",
    description: "Generación de energía limpia y eficiente.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Sistema híbrido",
    description: "Generación de energía limpia y eficiente.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Atado a red industrial o comercial",
    description: "Generación de energía limpia y eficiente.",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
    title: "Bombeo en DC",
    description: "Generación de energía limpia y eficiente.",
  },
] as const;

export type SpecializedEngineering = (typeof SPECIALIZED_ENGINEERING)[number];
