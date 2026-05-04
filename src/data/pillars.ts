import SolarPanelImg from "@imgs/hero/solar-panel.png";
import TechnicalSupportImg from "@imgs/hero/technical-support.png";
import FinancingImg from "@imgs/hero/financing.webp";
import AuthorizatedProviderImg from "@imgs/hero/authorizated-provider.png";
import ProjectExperienceImg from "@imgs/hero/project-experience.png";

export const PILLARS = [
  {
    img: SolarPanelImg,
    titlePreview: "Productos Solares",
    title: "Equipos de última generación para tu hogar.",
    description:
      "Paneles, inversores y componentes de las mejores marcas internacionales, garantía directa y rendimiento probado.",
  },
  {
    img: TechnicalSupportImg,
    titlePreview: "Soporte Técnico",
    title: "Asesoría profesional en cada etapa.",
    description:
      "Ingenieros especializados te ayudan a diseñar la mejor solución para tu hogar, con seguimiento post-instalación.",
  },
  {
    img: FinancingImg,
    titlePreview: "Financiamiento",
    title: "Facilidades de pago a tu medida.",
    description:
      "Planes de financiamiento competitivos sin historial crediticio complejo. Tu primera instalación solar accesible.",
  },
  {
    img: AuthorizatedProviderImg,
    titlePreview: "Proveedores Autorizados",
    title: "Calidad certificada en cada producto.",
    description:
      "Trabajamos solo con fabricantes verificados y certificados. Equipos originales con garantía oficial.",
  },
  {
    img: ProjectExperienceImg,
    titlePreview: "Experiencia en Proyectos",
    title: "Instalaciones probadas en todo el país.",
    description:
      "Más de 500 proyectos residenciales completados. Conocimiento local y estándares de calidad internacionales.",
  },
] as const;

export type Pillar = (typeof PILLARS)[number];
