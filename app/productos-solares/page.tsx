import type { Metadata } from "next"
import ProductosSolaresClientPage from "./ProductosSolaresClientPage"

export const metadata: Metadata = {
  title: "Productos Solares Guatemala | Paneles, Inversores, Baterías | Mayorista Solar",
  description:
    "✅ Catálogo completo de productos solares en Guatemala ✅ Paneles Canadian Solar, Huawei, Growatt ✅ Inversores, baterías, estructuras ✅ Precios mayorista ✅ Asesoría técnica especializada ✅ Entrega en todo el país",
  keywords: [
    "productos solares guatemala",
    "paneles solares guatemala",
    "inversores solares guatemala",
    "baterias solares guatemala",
    "canadian solar guatemala",
    "huawei solar guatemala",
    "growatt guatemala",
    "mayorista solar guatemala",
    "equipos solares guatemala",
    "energia renovable guatemala",
    "instalacion solar guatemala",
    "precios paneles solares guatemala",
    "distribuidor solar guatemala",
    "estructuras montaje solar",
    "accesorios solares guatemala",
  ],
  authors: [{ name: "Mayorista Solar Guatemala" }],
  creator: "Mayorista Solar Guatemala",
  publisher: "Mayorista Solar Guatemala",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "https://www.mayoristasolar.com/productos-solares",
    siteName: "Mayorista Solar Guatemala",
    title: "Productos Solares Guatemala | Catálogo Completo | Mayorista Solar",
    description:
      "Catálogo completo de productos solares en Guatemala. Paneles Canadian Solar, inversores Huawei, baterías, estructuras y accesorios. Precios mayorista y asesoría técnica especializada.",
    images: [
      {
        url: "/images/productos-solares-guatemala-opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "Catálogo de productos solares en Guatemala - Mayorista Solar",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mayoristasolar",
    creator: "@mayoristasolar",
    title: "Productos Solares Guatemala | Catálogo Completo | Mayorista Solar",
    description:
      "Catálogo completo de productos solares en Guatemala. Paneles, inversores, baterías y más con precios mayorista.",
    images: [
      {
        url: "/images/productos-solares-guatemala-opengraph.jpeg",
        alt: "Catálogo de productos solares en Guatemala - Mayorista Solar",
      },
    ],
  },
  alternates: {
    canonical: "https://www.mayoristasolar.com/productos-solares",
  },
}

export default function ProductosSolaresPage() {
  return <ProductosSolaresClientPage />
}
