import SolarPanelImg from "@imgs/hero/solar-panel.png";
import TechnicalSupportImg from "@imgs/hero/technical-support.png";
import FinancingImg from "@imgs/hero/financing.webp";
import AuthorizatedProviderImg from "@imgs/hero/authorizated-provider.png";
import ProjectExperienceImg from "@imgs/hero/project-experience.png";

export const PILLARS = [
  {
    img: AuthorizatedProviderImg,
    titlePreview: "Ingeniería Especializada",
    title: "Calidad certificada en cada producto.",
    description:
      "Trabajamos solo con fabricantes verificados y certificados. Equipos originales con garantía oficial.",
    url: "#ingenieria-especializada",
  },
  {
    img: TechnicalSupportImg,
    titlePreview: "Capacitación",
    title: "Asesoría profesional en cada etapa.",
    description:
      "Ingenieros especializados te ayudan a diseñar la mejor solución para tu hogar, con seguimiento post-instalación.",
    url: "#capacitacion",
  },
  {
    img: ProjectExperienceImg,
    titlePreview: "Soluciones Solares",
    title: "Instalaciones probadas en todo el país.",
    description:
      "Más de 500 proyectos residenciales completados. Conocimiento local y estándares de calidad internacionales.",
    url: "#soluciones-solares",
  },
  {
    img: FinancingImg,
    titlePreview: "Financiamiento",
    title: "Facilidades de pago a tu medida.",
    description:
      "Planes de financiamiento competitivos sin historial crediticio complejo. Tu primera instalación solar accesible.",
    url: "#financiamiento",
  },
  {
    img: SolarPanelImg,
    titlePreview: "Soporte Post Venta",
    title: "Equipos de última generación para tu hogar.",
    description:
      "Paneles, inversores y componentes de las mejores marcas internacionales, garantía directa y rendimiento probado.",
    url: "#soporte-tecnico",
  },
] as const;

export type Pillar = (typeof PILLARS)[number];
