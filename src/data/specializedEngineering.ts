import type { ImageMetadata } from "astro";

import designAndQuantificationImg from "@imgs/home/ingenieria-especializada/diseño-y-cuantificacion-de-productos.webp";
import technicalAnalysisImg from "@imgs/home/ingenieria-especializada/foto-de-factura.jpeg";
import technicalVisitImg from "@imgs/home/ingenieria-especializada/visita-tecnica.jpg";
import specializedSoftwareImg from "@imgs/home/ingenieria-especializada/software.jpeg";

import solarPanelImg from "@imgs/home/productos/panel-solar.png";
import inverterImg from "@imgs/home/productos/inversor.png";
import junctionBoxImg from "@imgs/home/productos/caja-sobreponer.webp";

import HomerProLogo from "@imgs/logos/homer-pro.png";
import PvSystLogo from "@imgs/logos/pvsyst.png";

export type DescriptionContent = (string | string[])[];

export const SPECIALIZED_ENGINEERING = [
  {
    img: designAndQuantificationImg,
    alt: "Diseño y cuantificación de productos solares",
    title: "Diseño y Cuantificación de Productos",
    tier: "business",
    icon: "lucide:pen-tool",
    description: [
      "Con nuestra herramienta de precotización; nuestro equipo de ingeniería hara un analisis técnico y seleccionaran los componentes óptimos para garantizar la máxima eficiencia en tu propuesta final.",
    ] as DescriptionContent,
  },
  {
    img: technicalAnalysisImg,
    alt: "Análisis técnico de factura eléctrica",
    title: "Análisis Económico",
    tier: "business",
    icon: "lucide:search",
    description: [
      "Te respaldamos en el análisis e interpretación de los historiales de consumo y facturas eléctricas de tus clientes, asegurando proyecciones de ahorro de alta precisión para tus propuestas.",
    ] as DescriptionContent,
  },
  {
    img: technicalVisitImg,
    alt: "Visita técnica a proyecto solar",
    title: "Visita Técnica",
    tier: "business",
    icon: "lucide:clipboard-check",
    description: [
      "Ponemos a tu disposición nuestro checklist digital de visita técnica para que realices el levantamiento en sitio con total autonomía y precisión técnica. Nuestro equipo de ingeniería te brindara acompañamiento presencial en las visitas clave.",
      "*Aplican restricciones",
    ] as DescriptionContent,
  },
  {
    img: specializedSoftwareImg,
    subImgs: [HomerProLogo, PvSystLogo],
    alt: "Software especializado para diseño solar",
    title: "Co-Desarrollo",
    tier: "pro",
    icon: "lucide:monitor",
    description: [
      "<p>Es un servicio de Ingeniería Avanzada para Proyectos Comerciales e Industriales. Desarrollamos tu proyecto de principio a fin.</p>",
      `<ul class="list-disc list-inside grid grid-cols-2 gap-2 my-1 *:bg-linear-to-l *:from-white/25 *:to-white/5 *:px-2">
        <li>Recolección de datos</li>
        <li>Visita técnica</li>
        <li>Diseño con software especializado</li>
        <li>Análisis eléctrico</li>
        <li>Estudio financiero</li>
        <li>Presentación ejecutiva y comercial</li>
        <li>Seguimiento y supervisión del proyecto</li>
        <li>Comisionamiento</li>
      </ul>`,
      "<p>Este servicio integral está enfocado exclusivamente en proyectos que califiquen bajo nuestros criterios de selección como proyectos de la categoría comercial - industrial.</p>",
    ] as DescriptionContent,
  },
];
