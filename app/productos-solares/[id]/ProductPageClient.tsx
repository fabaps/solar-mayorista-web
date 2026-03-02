"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, MessageCircle, ExternalLink, Menu, X, MapPin, ChevronRight } from "lucide-react"
import Footer from "../../footer"

// Componente personalizado para el icono de WhatsApp
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.23 1.1 1.124-4.11a7.908 7.908 0 0 1-1.064-3.955c0-4.367 3.582-7.938 8.006-7.938 2.127 0 4.125.825 5.634 2.324 1.51 1.51 2.333 3.507 2.332 5.633 0 4.365-3.58 7.938-8.006 7.938z" />
  </svg>
)

// Función para obtener el producto
async function getProduct(id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/products`, {
      cache: "force-cache",
    })
    const products = await response.json()

    if (Array.isArray(products)) {
      return products.find((p: any) => p.id === id)
    }
    return null
  } catch (error) {
    console.error("Error fetching product for metadata:", error)
    return null
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

export default function ProductPageClient({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const handleContactAdvisor = () => {
    const message = `Hola, estoy interesado en el producto: ${product?.Nombre}. ¿Podrían brindarme más información?`
    const whatsappUrl = `https://wa.me/50230916300?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDownloadTechnicalSheet = () => {
    if (product?.FichaTecnica) {
      window.open(product.FichaTecnica, "_blank")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header móvil */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-sm z-50 md:hidden">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
            alt="Mayorista Solar Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Link href="https://api.whatsapp.com/send?phone=50230916300" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Expandido desde arriba */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white md:hidden">
          {/* Header azul */}
          <div className="bg-[#004AAD] p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-3 h-12 w-12 overflow-hidden rounded-full bg-white p-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                    alt="Mayorista Solar Logo"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold">Mayorista Solar</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-1 text-white hover:bg-white/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Contenido del menú */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Sección NAVEGACIÓN */}
            <div className="mb-6">
              <h3 className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wide">NAVEGACIÓN</h3>
              <nav className="space-y-1">
                <Link
                  href="/"
                  className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-[#004AAD]">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Inicio</div>
                    <div className="text-sm text-gray-500">Página principal</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>

                <Link
                  href="/productos-solares"
                  className="flex items-center space-x-3 rounded-lg p-3 bg-blue-50 text-[#004AAD] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#004AAD] text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Productos Solares</div>
                    <div className="text-sm text-blue-600">Catálogo de equipos solares</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#004AAD]" />
                </Link>

                <Link
                  href="/proyectos-solares"
                  className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Proyectos Destacados</div>
                    <div className="text-sm text-gray-500">Nuestros casos de éxito</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>
              </nav>
            </div>

            {/* Sección CONTACTO */}
            <div>
              <h3 className="mb-4 text-sm font-medium text-gray-500 uppercase tracking-wide">CONTACTO</h3>
              <div className="space-y-1">
                <Link
                  href="https://api.whatsapp.com/send?phone=50230916300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 rounded-lg p-3 bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-white">
                    <WhatsAppIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-green-600">Contacto directo</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-green-600" />
                </Link>

                <Link
                  href="https://maps.google.com/?q=Ruta+4+5-58,+Ciudad+de+Guatemala,+Guatemala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 rounded-lg p-3 bg-orange-50 text-orange-600 hover:bg-orange-100 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Ubicación</div>
                    <div className="text-sm text-orange-600">Ruta 4 5-58, Ciudad de Guatemala</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-orange-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation - Desktop */}
      <div className="fixed left-0 top-0 hidden h-screen w-[80px] flex-col items-center border-r border-gray-200 bg-white py-8 z-50 md:flex">
        <div className="mb-8 flex h-16 w-16 items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
            alt="Mayorista Solar Logo"
            width={64}
            height={64}
            className="h-auto w-auto object-contain"
          />
        </div>
        <nav className="flex flex-1 flex-col items-center space-y-8">
          <Link
            href="/"
            className="flex w-full flex-col items-center text-center text-xs font-medium text-gray-500 hover:text-[#004AAD] transition-all duration-300"
          >
            <span className="mb-1 text-center">Inicio</span>
            <div className="h-1 w-1 rounded-full bg-gray-300"></div>
          </Link>
          <Link
            href="/productos-solares"
            className="flex w-full flex-col items-center text-center text-xs font-medium text-[#004AAD] hover:text-[#004AAD] transition-all duration-300"
          >
            <span className="mb-1 text-center">Productos Solares</span>
            <div className="h-1 w-1 rounded-full bg-[#004AAD]"></div>
          </Link>
          <Link
            href="/proyectos-solares"
            className="flex w-full flex-col items-center text-center text-xs font-medium text-gray-500 hover:text-[#004AAD] transition-all duration-300"
          >
            <span className="mb-1 text-center">Proyectos Solares</span>
            <div className="h-1 w-1 rounded-full bg-gray-300"></div>
          </Link>

          {/* WhatsApp Icon */}
          <Link
            href="https://api.whatsapp.com/send?phone=50230916300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-col items-center text-center text-xs font-medium text-green-500 hover:text-green-600 transition-all duration-300 hover-lift"
            aria-label="Contactar por WhatsApp"
          >
            <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300">
              <WhatsAppIcon className="h-5 w-5" />
            </div>
            <span className="text-center">WhatsApp</span>
          </Link>

          {/* Location Icon */}
          <Link
            href="https://maps.google.com/?q=Ruta+4+5-58,+Ciudad+de+Guatemala,+Guatemala"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-col items-center text-center text-xs font-medium text-orange-500 hover:text-orange-600 transition-all duration-300 hover-lift"
            aria-label="Ver ubicación"
          >
            <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
              <MapPin className="h-5 w-5" />
            </div>
            <span className="text-center">Ubicación</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-0 md:ml-[80px] pt-16 md:pt-8">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link href="/productos-solares" className="inline-flex items-center text-[#004AAD] hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Imagen del producto */}
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full">
                  {!imageError ? (
                    <Image
                      src={product.Imagen || "/placeholder.svg?height=600&width=600&text=Sin+imagen"}
                      alt={product.Nombre}
                      fill
                      className="object-cover"
                      onError={handleImageError}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center text-gray-400">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-lg">Sin imagen disponible</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {product.Categoria}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300">
                    {product.Marca}
                  </Badge>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.Nombre}</h1>

                <div className="text-lg text-gray-600 mb-6">
                  <span className="font-semibold">Marca:</span> {product.Marca}
                </div>
              </div>

              {/* Información de contacto adicional */}
              <Card className="bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">Descripción del Producto</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">{product.Descripcion}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Información adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Información del Producto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">Categoría:</span>
                  <span className="ml-2 text-gray-600">{product.Categoria}</span>
                </div>
                <Separator />
                <div>
                  <span className="font-semibold text-gray-700">Marca:</span>
                  <span className="ml-2 text-gray-600">{product.Marca}</span>
                </div>
                <Separator />
                <div>
                  <span className="font-semibold text-gray-700">ID del Producto:</span>
                  <span className="ml-2 text-gray-600 font-mono text-sm">{product.id}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">Recursos Disponibles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {product.FichaTecnica && (
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Download className="mr-3 h-5 w-5 text-gray-600" />
                      <span className="text-gray-700">Ficha Técnica (PDF)</span>
                    </div>
                    <Button
                      onClick={handleDownloadTechnicalSheet}
                      variant="ghost"
                      size="sm"
                      className="text-[#004AAD] hover:text-blue-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                )}

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <MessageCircle className="mr-3 h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Contactar Asesor</span>
                  </div>
                  <Button
                    onClick={handleContactAdvisor}
                    variant="ghost"
                    size="sm"
                    className="text-green-600 hover:text-green-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
