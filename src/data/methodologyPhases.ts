type Step = {
  icon: string;
  label: string;
};

type Phase = {
  title: string;
  description: string;
  steps: Step[];
};

export const METHODOLOGY_PHASES: Phase[] = [
  {
    title: "FASE DE PRE-PROYECTO",
    description: "Te apoyamos a abrir el negocio sin ningún costo.",
    steps: [
      { icon: "bi:1-circle-fill", label: "Identifica tu proyecto" },
      {
        icon: "bi:2-circle-fill",
        label: "Identificación de tu modelo de negocio (Business / Pro)",
      },
      {
        icon: "bi:3-circle-fill",
        label: "Co-desarrollo de ingeieria y apertura comercial",
      },
    ],
  },
  {
    title: "FASE EJECUCIÓN DE PROYECTO",
    description: "Esta fase comienza una vez se confirme el proyecto.",
    steps: [
      {
        icon: "bi:3-circle-fill",
        label: "Adquiere tus productos con nosotros.",
      },
      { icon: "bi:4-circle-fill", label: "Capacitamos a tu equipo técnico." },
      { icon: "bi:5-circle-fill", label: "Instala tu proyecto." },
      {
        icon: "bi:6-circle-fill",
        label:
          "Te entregamos un checklist de pruebas de calidad para verificar tu instalación y obtener soporte post-venta premium",
      },
    ],
  },
];
