import HuaweiLogo from "@imgs/logos/huawei.png";
import PowerBoxLogo from "@imgs/logos/power-box.png";
import LongiLogo from "@imgs/logos/longi.png";
import GrowattLogo from "@imgs/logos/growatt.webp";
import DiffulLogo from "@imgs/logos/difful.avif";

export const BRANDS = [
  {
    img: HuaweiLogo,
    title: "Huawei",
  },
  {
    img: PowerBoxLogo,
    title: "Power Box",
  },
  {
    img: LongiLogo,
    title: "LONGi",
  },
  {
    img: GrowattLogo,
    title: "Growatt",
  },
  {
    img: DiffulLogo,
    title: "Difful",
  },
] as const;

export type Brands = (typeof BRANDS)[number];