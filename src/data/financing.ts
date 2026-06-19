import type { ImageMetadata } from "astro";

import BacLogo from "@imgs/logos/bac-credomatic.png";
import VisaLogo from "@imgs/logos/visa.png";
import CredomaticLogo from "@imgs/logos/credomatic.png";
import MastercardLogo from "@imgs/logos/mastercard.png";

export interface FinancingCard {
  title: string;
  subtitle: string;
  logo: { src: ImageMetadata; alt: string };
}

export const FINANCING_CARDS: FinancingCard[] = [
  {
    title: "Proveedores Certificados",
    subtitle: "Crédito Sostenible y Leasing",
    logo: { src: BacLogo, alt: "BAC Credomatic" },
  },
  {
    title: "Credomatic",
    subtitle: "Hasta 48",
    logo: { src: CredomaticLogo, alt: "BAC Credomatic" },
  },
  {
    title: "Visacuotas",
    subtitle: "Hasta 48",
    logo: { src: VisaLogo, alt: "Visa" },
  },
  {
    title: "Mastercuotas",
    subtitle: "Hasta 48",
    logo: { src: MastercardLogo, alt: "Mastercard logo" },
  },
];
