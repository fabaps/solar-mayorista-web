import designAndQuantificationImg from "@imgs/home/ingenieria-especializada/diseño-y-cuantificacion-de-productos.webp";
import technicalAnalysisImg from "@imgs/home/ingenieria-especializada/foto-de-factura.jpeg";
import technicalVisitImg from "@imgs/home/ingenieria-especializada/visita-tecnica.jpg";
import specializedSoftwareImg from "@imgs/home/ingenieria-especializada/software-especializado.png";

import solarPanelImg from "@imgs/home/productos/panel-solar.png";
import inverterImg from "@imgs/home/productos/inversor.png";
import junctionBoxImg from "@imgs/home/productos/caja-sobreponer.webp";

export const SPECIALIZED_ENGINEERING = [
  {
    img: designAndQuantificationImg,
    alt: "Diseño y cuantificación de productos solares",
    title: "Diseño y Cuantificación de Productos",
    description:
      "Diseño y cuantificación de productos Ponemos a tu disposición nuestra herramienta de precotización; a partir de tus datos, nuestro equipo de ingeniería audita el diseño y selecciona los componentes óptimos para garantizar la máxima eficiencia en tu propuesta final.",
  },
  {
    img: technicalAnalysisImg,
    alt: "Análisis técnico de factura eléctrica",
    title: "Análisis Técnico",
    description:
      "Te respaldamos en el análisis e interpretación de los historiales de consumo y facturas eléctricas de tus clientes, asegurando proyecciones de ahorro de alta precisión para tus propuestas.",
  },
  {
    img: technicalVisitImg,
    alt: "Visita técnica a proyecto solar",
    title: "Visita Técnica (aplican criterios de selección)",
    description:
      "Ponemos a tu disposición nuestro checklist digital de visita técnica para que realices el levantamiento en sitio con total autonomía y precisión técnica. Nuestro equipo de ingeniería te brindara acompañamiento presencial en las visitas clave. *Aplican criterios de selección",
  },
  {
    img: specializedSoftwareImg,
    alt: "Software especializado para diseño solar",
    title: "Software Especializado",
    description:
      "Ponemos a tu disposición herramientas especializadas para el diseño, simulación y análisis de sistemas fotovoltaicos, permitiéndote optimizar configuraciones, evaluar escenarios de generación y presentar propuestas técnicas respaldadas por información precisa y confiable.",
  },
] as const;

export type SpecializedEngineering = (typeof SPECIALIZED_ENGINEERING)[number];
