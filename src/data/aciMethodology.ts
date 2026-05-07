import AciAcquires from "@imgs/home/aci-metodologia/aci-adquiere-2.jpg";
import AciTrainYourself from "@imgs/home/aci-metodologia/aci-capacitacion-adep.jpg";
import AciInstalls from "@imgs/home/aci-metodologia/aci-equipo-campo.jpg";

export const ACI_METHODOLOGY_ITEMS = [
  {
    img: AciAcquires,
    title: "Adquiere",
  },
  {
    img: AciTrainYourself,
    title: "Capacitate",
  },
  {
    img: AciInstalls,
    title: "Instala",
  },
] as const;

export type AciMethodologyItem = (typeof ACI_METHODOLOGY_ITEMS)[number];
