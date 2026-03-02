import type { Metadata } from "next"
import ProyectosPage from "./proyectos-page"

export const metadata: Metadata = {
  title: "Proyectos Solares Guatemala | Mayorista Solar",
  description:
    "Con Mayorista Solar, lleva tus proyectos solares en Guatemala al próximo nivel. Especialistas en paneles solares y capacitación en energía renovable, ofrecemos soluciones completas para instaladores y desarrolladores. Haz realidad tus iniciativas de sostenibilidad con nosotros.",
  openGraph: {
    title: "Proyectos Solares Guatemala | Mayorista Solar",
    description:
      "Con Mayorista Solar, lleva tus proyectos solares en Guatemala al próximo nivel. Especialistas en paneles solares y capacitación en energía renovable.",
    images: ["/images/ingeniera-paneles-solares.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos Solares Guatemala | Mayorista Solar",
    description:
      "Con Mayorista Solar, lleva tus proyectos solares en Guatemala al próximo nivel. Especialistas en paneles solares y capacitación en energía renovable.",
    images: ["/images/ingeniera-paneles-solares.jpeg"],
  },
}

export default function ProyectosSolaresPage() {
  return <ProyectosPage />
}
