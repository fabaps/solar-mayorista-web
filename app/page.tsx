import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Mayorista Solar Guatemala",
  description:
    "Productos y apoyo de ingeniería para el instalador solar. Todo lo que necesitas para desarrollar tu proyecto de energía solar en Guatemala. Paneles solares, inversores, capacitación técnica y soporte especializado.",
  keywords: [
    "mayorista solar guatemala",
    "productos solares guatemala",
    "instalador solar",
    "paneles solares guatemala",
    "ingeniería solar",
    "capacitación solar ADEP",
    "Canadian Solar Guatemala",
    "inversores solares",
    "proyectos solares guatemala",
    "energía renovable",
  ],
  openGraph: {
    title: "Mayorista Solar Guatemala",
    description:
      "Productos y apoyo de ingeniería para el instalador solar. Todo lo que necesitas para desarrollar tu proyecto de energía solar en Guatemala.",
    url: "https://www.mayoristasolar.com",
    siteName: "Mayorista Solar Guatemala",
    images: [
      {
        url: "/images/mayorista-solar-opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "Mayorista Solar Guatemala - Instaladores trabajando en paneles solares con vista a montañas guatemaltecas",
        type: "image/jpeg",
      },
    ],
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mayoristasolar",
    creator: "@mayoristasolar",
    title: "Mayorista Solar Guatemala",
    description:
      "Productos y apoyo de ingeniería para el instalador solar. Todo lo que necesitas para desarrollar tu proyecto de energía solar en Guatemala.",
    images: [
      {
        url: "/images/mayorista-solar-opengraph.jpeg",
        alt: "Mayorista Solar Guatemala - Instaladores trabajando en paneles solares con vista a montañas guatemaltecas",
      },
    ],
  },
  alternates: {
    canonical: "https://www.mayoristasolar.com",
  },
}

export default function HomePage() {
  return <ClientPage />
}
