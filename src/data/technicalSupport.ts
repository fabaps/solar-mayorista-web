export const TECHNICAL_SUPPORT_ITEMS = [
  {
    icon: "lucide:circle-check",
    title: "100% tickets resueltos",
    description: "Solución garantizada para cada consulta.",
  },
  {
    icon: "lucide:wrench",
    title: "Acompañamiento continuo",
    description: "Seguimiento post-venta para buen funcionamiento.",
  },
  {
    icon: "lucide:zap",
    title: "Resolución rápida",
    description: "Eficiente solución a inconvenientes técnicos.",
  },
  {
    icon: "lucide:handshake",
    title: "Confianza y fidelización",
    description: "Soporte constante que mejora la experiencia.",
  },
] as const;

export type TechnicalSupportItem = (typeof TECHNICAL_SUPPORT_ITEMS)[number];
