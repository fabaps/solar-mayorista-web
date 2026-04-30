export const PILLARS = [
  {
    img: "https://www.solarmayorista.com/images/slider-image-1.jpeg",
    titlePreview: "Productos Solares",
    title: "Lower your electric bills for decades.",
    description:
      "Compare solar quotes and see long-term savings for your home.",
    url: "/",
  },
  {
    img: "https://www.solarmayorista.com/images/hazlo-aci-background.jpeg",
    titlePreview: "Soporte Técnico",
    title: "Lower your electric bills for decades.",
    description:
      "Compare solar quotes and see long-term savings for your home.",
    url: "/",
  },
  {
    img: "https://www.ceupe.com/images/easyblog_articles/4041/b2ap3_amp_monedas.jpg",
    titlePreview: "Financiamiento",
    title: "Lower your electric bills for decades.",
    description:
      "Compare solar quotes and see long-term savings for your home.",
    url: "/",
  },
  {
    img: "https://energybee.co.za/images/guides/solar-panel-brands-hero.png",
    titlePreview: "Proveedores Autorizados",
    title: "Lower your electric bills for decades.",
    description:
      "Compare solar quotes and see long-term savings for your home.",
    url: "/",
  },
  {
    img: "https://solarplak.es/energia/imagenes/Que-es-y-como-funciona-un-panel-solar.jpg",
    titlePreview: "Experiencia en Proyectos",
    title: "Lower your electric bills for decades.",
    description:
      "Compare solar quotes and see long-term savings for your home.",
    url: "/",
  },
] as const;

export type Pillar = (typeof PILLARS)[number];
