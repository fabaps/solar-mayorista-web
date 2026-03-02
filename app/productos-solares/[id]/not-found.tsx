import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Search } from "lucide-react"

export default function ProductNotFound() {
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
      </div>

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
      </div>

      <div className="ml-0 md:ml-[80px] pt-16 md:pt-8">
        <div className="container mx-auto px-4 py-8">
          <Link href="/productos-solares" className="inline-flex items-center text-[#004AAD] hover:text-blue-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a productos
          </Link>

          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Card className="max-w-md mx-auto text-center">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <Search className="w-12 h-12 text-gray-400" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900 mb-4">Producto no encontrado</h1>

                <p className="text-gray-600 mb-6">
                  El producto que buscas no existe o ha sido removido de nuestro catálogo.
                </p>

                <div className="space-y-3">
                  <Link href="/productos-solares">
                    <Button className="w-full bg-[#004AAD] hover:bg-[#004AAD]/90">Ver todos los productos</Button>
                  </Link>

                  <Link href="/">
                    <Button variant="outline" className="w-full">
                      Ir al inicio
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-3">¿Necesitas ayuda para encontrar un producto específico?</p>
                  <Link
                    href="https://api.whatsapp.com/send?phone=50230916300&text=Hola,%20necesito%20ayuda%20para%20encontrar%20un%20producto%20solar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                      Contactar por WhatsApp
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
