"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <Link href={`/productos-solares/${product.id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-[#004AAD]/20">
        <CardHeader className="p-0">
          <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
            {!imageError ? (
              <Image
                src={product.Imagen || "/placeholder.svg?height=300&width=300&text=Sin+imagen"}
                alt={product.Nombre}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                onError={handleImageError}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">Sin imagen</p>
                </div>
              </div>
            )}
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-gray-700 backdrop-blur-sm">
                {product.Categoria}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 flex-1">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-[#004AAD] transition-colors">
                {product.Nombre}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{product.Marca}</p>
            </div>

            <p className="text-sm text-gray-600 line-clamp-3">{product.Descripcion}</p>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button
            variant="outline"
            className="w-full border-[#004AAD] text-[#004AAD] hover:bg-[#004AAD] hover:text-white transition-colors"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver Detalles
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
