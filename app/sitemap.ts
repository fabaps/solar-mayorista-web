import type { MetadataRoute } from "next"
import productsData from "../data/products.json"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mayoristasolar.com"
  const currentDate = new Date()

  // URLs estáticas principales
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/productos-solares`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/proyectos-solares`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // URLs dinámicas de productos
  const productUrls: MetadataRoute.Sitemap = Array.isArray(productsData)
    ? productsData.map((product: any) => ({
        url: `${baseUrl}/productos-solares/${product.id}`,
        lastModified: currentDate,
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }))
    : []

  return [...staticUrls, ...productUrls]
}
