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
    title: "48 Credomatic",
    subtitle: "Texto",
    logo: { src: CredomaticLogo, alt: "BAC Credomatic" },
  },
  {
    title: "48 Visacuotas",
    subtitle: "Texto",
    logo: { src: VisaLogo, alt: "Visa" },
  },
  {
    title: "48 Mastercuotas",
    subtitle: "Texto",
    logo: { src: MastercardLogo, alt: "Mastercard logo" },
  },
];
