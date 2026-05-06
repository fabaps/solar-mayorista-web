import AciAcquires from "@imgs/home/aci-metodologia/aci-adquiere.jpeg";
import AciTrainYourself from "@imgs/home/aci-metodologia/aci-capacitacion-adep.jpeg";
import AciInstalls from "@imgs/home/aci-metodologia/aci-equipo-campo.jpeg";

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
