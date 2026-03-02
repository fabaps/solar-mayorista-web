"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Menu, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "../footer"

// Componente personalizado para el icono de WhatsApp
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.23 1.1 1.124-4.11a7.908 7.908 0 0 1-1.064-3.955c0-4.367 3.582-7.938 8.006-7.938 2.127 0 4.125.825 5.634 2.324 1.51 1.51 2.333 3.507 2.332 5.633 0 4.365-3.58 7.938-8.006 7.938z" />
  </svg>
)

const featuredProjects = [
  {
    id: 1,
    title: "Proyecto Kevyn García - Sistema Atado a Red",
    location: "Ciudad de Guatemala",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proyecto%201%20kevyn%20garcia%203%20-sN9wsw6iXrNEiMhBEwetA4rHe1L2iu.jpeg",
  },
  {
    id: 2,
    title: "Proyecto Erick Villatoro - Sistema Atado a Red",
    location: "Ciudad de Guatemala",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Proyecto%20Erick%20Villatoro%202%20%20.JPG-kNL3tc29GdcKRE3Xumz5GoXcCfpEh4.jpeg",
  },
  {
    id: 3,
    title: "Proyecto Bodega SAT",
    location: "Guatemala",
    image: "/images/proyecto-bodega-sat.jpeg",
  },
  {
    id: 4,
    title: "Proyecto Residencial CAES",
    location: "CAES Guatemala",
    image: "/images/proyecto-residencial-caes.jpeg",
  },
  {
    id: 5,
    title: "Proyecto Residencial Jutiapa",
    location: "Agua Blanca, Jutiapa",
    image: "/images/proyecto-residencial-jutiapa.jpeg",
  },
  {
    id: 6,
    title: "Proyecto Bodega",
    location: "Guatemala",
    image: "/images/proyecto-bodega.jpeg",
  },
  {
    id: 7,
    title: "Proyecto Aldea Las Mananitas",
    location: "Monterrico, Guatemala",
    image: "/images/ingeniera-paneles-solares.jpeg",
  },
  {
    id: 8,
    title: "Proyecto Bombeo Solar",
    location: "Guatemala",
    image: "/images/proyecto-bombeo-solar.jpeg",
  },
  {
    id: 9,
    title: "Proyecto Atado a Red",
    location: "Guatemala",
    image: "/images/proyecto-atado-red.jpeg",
  },
  {
    id: 10,
    title: "Proyecto AutoHotel",
    location: "Mita, Jutiapa",
    image: "/images/proyecto-autohotel.jpeg",
  },
  {
    id: 11,
    title: "Proyecto de Bombeo",
    location: "Guatemala",
    image: "/images/proyecto-bombeo.jpeg",
  },
]

function ProyectosPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [showAllProjects, setShowAllProjects] = useState(false)
  const featuredSectionRef = useRef(null)

  useEffect(() => {
    setIsLoaded(true)
    // Mostrar solo los primeros 3 proyectos inicialmente
    setDisplayedProjects(featuredProjects.slice(0, 3))
  }, [])

  const handleShowAllProjects = () => {
    setShowAllProjects(true)
    setDisplayedProjects(featuredProjects)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header móvil con logo a la izquierda y menú a la derecha */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-sm z-50 md:hidden">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
              alt="Mayorista Solar Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
          </Link>
        </div>

        {/* Botones a la derecha: WhatsApp y Menú */}
        <div className="flex items-center space-x-2">
          {/* Botón de WhatsApp */}
          <Link href="https://api.whatsapp.com/send?phone=50230916300" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full bg-green-50 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </Button>
          </Link>

          {/* Botón de menú hamburguesa */}
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
                  className="flex items-center space-x-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">Productos Solares</div>
                    <div className="text-sm text-gray-500">Catálogo de equipos solares</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </Link>

                <Link
                  href="/proyectos-solares"
                  className="flex items-center space-x-3 rounded-lg p-3 bg-blue-50 text-[#004AAD] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#004AAD] text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Proyectos Destacados</div>
                    <div className="text-sm text-blue-600">Nuestros casos de éxito</div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#004AAD]" />
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

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <div className="fixed left-0 top-0 hidden h-screen w-[80px] flex-col items-center border-r border-gray-200 bg-white py-8 z-50 md:flex">
          <Link
            href="/"
            className="mb-8 flex h-16 w-16 items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
              alt="Mayorista Solar Logo"
              width={64}
              height={64}
              className="h-auto w-auto object-contain"
            />
          </Link>
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
              className="flex w-full flex-col items-center text-center text-xs font-medium text-gray-500 hover:text-[#004AAD] transition-all duration-300"
            >
              <span className="mb-1 text-center">Productos Solares</span>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
            </Link>
            <Link
              href="/proyectos-solares"
              className="flex w-full flex-col items-center text-center text-xs font-medium text-[#004AAD] hover:text-[#004AAD] transition-all duration-300"
            >
              <span className="mb-1 text-center">Proyectos Solares</span>
              <div className="h-1 w-1 rounded-full bg-[#004AAD]"></div>
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
          <div className="mt-auto">
            <Link
              href="#"
              className="flex w-full flex-col items-center text-center text-xs font-medium text-gray-500 hover:text-[#004AAD] transition-all duration-300"
            >
              <span className="mb-1 text-center">Contacto</span>
              <div className="h-1 w-1 rounded-full bg-gray-300"></div>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-0 flex-1 md:ml-[80px]">
          {/* Header */}
          <div className="bg-[#004AAD] py-16 mt-16 md:mt-0">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-black tracking-tighter text-white md:text-5xl lg:text-6xl">
                  PROYECTOS SOLARES
                </h1>
                <p className="mt-4 text-lg text-white/80">Soluciones energéticas a medida para cada necesidad</p>
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Link href="/" className="hover:text-[#004AAD] hover:underline">
                  Inicio
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span className="font-medium text-gray-900">Proyectos Solares</span>
              </div>
            </div>
          </div>

          {/* Proyectos Destacados */}
          <div ref={featuredSectionRef} className="py-12 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black tracking-tighter text-[#333333] md:text-4xl">
                  PROYECTOS DESTACADOS
                </h2>
                <p className="mt-4 text-gray-600">Algunos de nuestros proyectos más recientes</p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayedProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 hover-glow"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-[#333333]">{project.title}</h3>
                      </div>

                      <div className="flex items-center text-xs text-gray-500">
                        <MapPin className="mr-1 h-3 w-3 text-[#004AAD]" />
                        {project.location}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {!showAllProjects && (
                <div className="mt-10 text-center">
                  <Button
                    className="rounded-full bg-[#004AAD] px-6 py-2 text-white hover:bg-[#004AAD]/90"
                    onClick={handleShowAllProjects}
                  >
                    Ver todos los proyectos
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Sección de Contacto */}
          <div className="py-12 bg-[#004AAD]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-black tracking-tighter text-white md:text-4xl">
                    ¿TIENES UN PROYECTO EN MENTE?
                  </h2>
                  <p className="mt-4 text-white/80">
                    Contacta con nuestro equipo de expertos para recibir asesoramiento personalizado y un presupuesto
                    detallado para tu proyecto solar.
                  </p>
                  <div className="mt-6">
                    <Button className="bg-white text-[#004AAD] hover:bg-white/90">Contactar un asesor</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ProyectosPage
