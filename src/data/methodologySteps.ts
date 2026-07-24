export const METHODOLOGY_STEPS = [
  {
    icon: "bi:1-circle-fill",
    title: "Para instalar plantas solares a tus clientes potenciales",
    description:
      "Capacita a tu equipo técnico y ejecutua tus propios proyectos.",
  },
  {
    icon: "bi:2-circle-fill",
    title: "Para instalar una planta solar en tu empresa",
    description:
      "Capacita a tu equipo técnico, optimiza recursos y <strong> reduce un 25% </strong> tu inversión inicial.",
  },
] as const;

export type MethodologyStep = (typeof METHODOLOGY_STEPS)[number];
