import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProductPageClient from "./ProductPageClient"

// Importar los productos directamente desde el archivo JSON
import productsData from "../../../data/products.json"

// Función para obtener el producto
function getProduct(id: string) {
  try {
    if (Array.isArray(productsData)) {
      return productsData.find((p: any) => p.id === id)
    }
    return null
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProduct(params.id)

  if (!product) {
    return {
      title: "Producto no encontrado | Mayorista Solar Guatemala",
      description:
        "El producto que buscas no está disponible. Explora nuestro catálogo completo de productos solares en Guatemala.",
    }
  }

  // Crear descripción SEO optimizada
  const seoDescription = `${product.Descripcion.substring(0, 150)}... ✅ Marca ${product.Marca} ✅ Categoría ${product.Categoria} ✅ Disponible en Guatemala ✅ Asesoría técnica especializada`

  // Keywords específicas del producto
  const keywords = [
    product.Nombre,
    product.Marca,
    product.Categoria,
    "Guatemala",
    "solar",
    "mayorista solar",
    "paneles solares Guatemala",
    "inversores solares",
    "energía renovable",
    "instalación solar",
    product.Marca + " Guatemala",
    product.Categoria.toLowerCase() + " Guatemala",
  ]

  return {
    title: product.Nombre,
    description: seoDescription,
    keywords: keywords,
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
      url: `https://mayoristasolar.com/productos-solares/${product.id}`,
      siteName: "Mayorista Solar Guatemala",
      title: product.Nombre,
      description: seoDescription,
      images: [
        {
          url: product.Imagen || "/images/mayorista-solar-opengraph.jpeg",
          width: 1200,
          height: 630,
          alt: `${product.Nombre} - ${product.Marca} disponible en Mayorista Solar Guatemala`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mayoristasolar",
      creator: "@mayoristasolar",
      title: product.Nombre,
      description: seoDescription,
      images: [
        {
          url: product.Imagen || "/images/mayorista-solar-opengraph.jpeg",
          alt: `${product.Nombre} - ${product.Marca} disponible en Mayorista Solar Guatemala`,
        },
      ],
    },
    alternates: {
      canonical: `https://www.mayoristasolar.com/productos-solares/${product.id}`,
    },
    other: {
      "product:brand": product.Marca,
      "product:category": product.Categoria,
      "product:availability": "in_stock",
      "product:condition": "new",
    },
  }
}

// Generar rutas estáticas para todos los productos
export async function generateStaticParams() {
  try {
    if (Array.isArray(productsData)) {
      return productsData.map((product: any) => ({
        id: product.id,
      }))
    }
    return []
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

// Actualizar el tipo para coincidir con la estructura JSON
type Product = {
  id: string
  Nombre: string
  Imagen: string
  Categoria: string
  Marca: string
  Descripcion: string
  FichaTecnica: string
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    notFound()
  }

  return <ProductPageClient product={product} />
}
