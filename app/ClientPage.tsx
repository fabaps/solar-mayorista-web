"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import {
  MessageCircle,
  Share2,
  ThumbsUp,
  MoreHorizontal,
  Menu,
  X,
  MapPin,
  Home,
  Lightbulb,
  GraduationCap,
  Package,
  LayoutGrid,
  Phone,
  ChevronRight,
  ExternalLink,
  LifeBuoy,
} from "lucide-react"
import FeaturedProducts from "./featured-products"
import FeaturedBrands from "./featured-brands"
import ProjectsSection from "./projects-section"
import EngineeringSection from "./engineering-section"
import EducationSection from "./education-section"
import ProductSelectionSection from "./product-selection-section"
import TechnicalSupportSection from "./technical-support-section" // Importar la nueva sección
import Footer from "./footer"
import { Button } from "@/components/ui/button"
import HeroSlider from "./hero-slider"
import { motion, AnimatePresence } from "framer-motion"
import { useActiveSection } from "@/hooks/use-active-section"

// Componente personalizado para el icono de WhatsApp
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.23 1.1 1.124-4.11a7.908 7.908 0 0 1-1.064-3.955c0-4.367 3.582-7.938 8.006-7.938 2.127 0 4.125.825 5.634 2.324 1.51 1.51 2.333 3.507 2.332 5.633 0 4.365-3.58 7.938-8.006 7.938z" />
  </svg>
)

// Actualizar el componente SocialPosts con dos posts de Facebook
const SocialPosts = ({ isLoaded }) => (
  <div className="grid h-full grid-cols-1 gap-2 md:gap-4 w-full">
    {/* Primer post de Facebook - Hazlo ACI */}
    <a
      href="https://www.facebook.com/solarmayorista/posts/pfbid0qC91stjnFxQpmoq1b7nQE5pmSWhvj5mHgPWzEsbQ9HYuVZy68Tsh7Emaed3kFREil?rdid=bdY7dDDEHi6HzKhy#"
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-full max-w-[340px] transition-all duration-700 ${isLoaded ? "animate-fade-in-right stagger-1" : "opacity-0"} hover-glow`}
    >
      <Card className="overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Facebook Header */}
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 overflow-hidden rounded-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                alt="Mayorista Solar"
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold">Mayorista Solar</p>
              <div className="flex items-center space-x-1">
                <p className="text-xs text-gray-500">12 de enero</p>
                <span className="text-xs text-gray-500">•</span>
                <p className="text-xs text-gray-500">🌐</p>
              </div>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
        </div>

        {/* Facebook Content */}
        <div className="px-2 pb-0.5">
          <p className="text-xs">
            👤 Hazlo tú, HAZLO ACI.
            <br />
            Adquiere, Capacítate, Instala
            <br />✅ Capacitamos a tu equipo técnico para instalar plantas solares
            <br />💰 Ahorra 25% en inversión inicial
          </p>
        </div>

        {/* Facebook Image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/instalacion-paneles-montanas.jpeg"
            alt="Instalación de paneles solares con vista a montañas"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Facebook Stats */}
        <div className="flex items-center justify-between border-b border-t border-gray-200 px-2 py-0.5">
          <div className="flex items-center space-x-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#004AAD] text-white">
              <ThumbsUp className="h-2 w-2" />
            </div>
            <p className="text-xs text-gray-500">72</p>
          </div>
          <div className="flex space-x-2 text-xs text-gray-500">
            <p>5 comentarios</p>
            <p>2 compartidos</p>
          </div>
        </div>

        {/* Facebook Actions */}
        <div className="flex items-center justify-around border-b border-gray-200 px-2 py-0.5">
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <ThumbsUp className="h-3 w-3 text-[#004AAD]" />
            <span className="text-xs text-gray-500">Me gusta</span>
          </div>
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <MessageCircle className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Comentar</span>
          </div>
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <Share2 className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Compartir</span>
          </div>
        </div>
      </Card>
    </a>

    {/* Segundo post de Facebook - Bombeo Solar */}
    <a
      href="https://www.facebook.com/solarmayorista/posts/pfbid02GvH2aBKcQi7gav4CbUdG7ocHhdn7jfduEavQaJ9KL3zFSt4qX3FDspcC6qorR7xzl?rdid=DTdijTlxCiCvbbei#"
      target="_blank"
      rel="noopener noreferrer"
      className={`block mx-auto w-full max-w-[340px] transition-all duration-700 ${isLoaded ? "animate-fade-in-right stagger-2" : "opacity-0"} hover-glow`}
    >
      <Card className="overflow-hidden rounded-xl bg-white shadow-lg">
        {/* Facebook Header */}
        <div className="flex items-center justify-between p-1">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 overflow-hidden rounded-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                alt="Mayorista Solar"
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold">Mayorista Solar</p>
              <div className="flex items-center space-x-1">
                <p className="text-xs text-gray-500">10 de enero</p>
                <span className="text-xs text-gray-500">•</span>
                <p className="text-xs text-gray-500">🌐</p>
              </div>
            </div>
          </div>
          <MoreHorizontal className="h-4 w-4 text-gray-500" />
        </div>

        {/* Facebook Content */}
        <div className="px-2 pb-0.5">
          <p className="text-xs">
            ¿Quieres ejecutar proyectos de bombeo solar?
            <br />🌞 Proyecto desarrollado por instalador en la costa.
          </p>
        </div>

        {/* Facebook Image */}
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/paneles-solares-estructura-azul.jpeg"
            alt="Paneles solares instalados sobre estructura con columnas azules"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Facebook Stats */}
        <div className="flex items-center justify-between border-b border-t border-gray-200 px-2 py-0.5">
          <div className="flex items-center space-x-1">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#004AAD] text-white">
              <ThumbsUp className="h-2 w-2" />
            </div>
            <p className="text-xs text-gray-500">84</p>
          </div>
          <div className="flex space-x-2 text-xs text-gray-500">
            <p>8 comentarios</p>
            <p>1 compartido</p>
          </div>
        </div>

        {/* Facebook Actions */}
        <div className="flex items-center justify-around border-b border-gray-200 px-2 py-0.5">
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <ThumbsUp className="h-3 w-3 text-[#004AAD]" />
            <span className="text-xs text-gray-500">Me gusta</span>
          </div>
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <MessageCircle className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Comentar</span>
          </div>
          <div className="flex items-center space-x-1 rounded-md px-1 py-1 hover:bg-gray-100 transition-colors">
            <Share2 className="h-3 w-3 text-gray-500" />
            <span className="text-xs text-gray-500">Compartir</span>
          </div>
        </div>
      </Card>
    </a>
  </div>
)

const ClientPage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  // Función personalizada para manejar el scroll a secciones
  const handleSectionScroll = (sectionId: string) => {
    setMobileMenuOpen(false) // Cerrar el menú móvil si está abierto

    // Pequeño delay para asegurar que el menú se cierre y la página esté lista
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      } else {
        // Si el elemento no existe aún, intentar de nuevo después de un delay más largo
        setTimeout(() => {
          const retryElement = document.getElementById(sectionId)
          if (retryElement) {
            retryElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        }, 500)
      }
    }, 100)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Datos para el menú móvil mejorado
  const menuItems = [
    {
      name: "Inicio",
      href: "#",
      icon: <Home className="h-5 w-5" />,
      sectionId: "hero",
      description: "Página principal",
      onClick: () => handleSectionScroll("hero"),
    },
    {
      name: "Ingeniería Especializada",
      href: "#",
      icon: <Lightbulb className="h-5 w-5" />,
      sectionId: "ingenieria",
      description: "Soluciones técnicas avanzadas",
      onClick: () => handleSectionScroll("ingenieria"),
    },
    {
      name: "Hazlo ACI",
      href: "#",
      icon: <GraduationCap className="h-5 w-5" />,
      sectionId: "formacion",
      description: "Adquiere, Capacítate, Instala",
      onClick: () => handleSectionScroll("formacion"),
    },
    {
      name: "Productos Solares",
      href: "#",
      icon: <Package className="h-5 w-5" />,
      sectionId: "seleccion-productos",
      description: "Catálogo de equipos solares",
      onClick: () => handleSectionScroll("seleccion-productos"),
    },
    {
      name: "Soporte Técnico", // Nuevo item para el menú móvil
      href: "#",
      icon: <LifeBuoy className="h-5 w-5" />,
      sectionId: "soporte-tecnico",
      description: "Acompañamiento y resolución de problemas",
      onClick: () => handleSectionScroll("soporte-tecnico"),
    },
    {
      name: "Proyectos Destacados",
      href: "#",
      icon: <LayoutGrid className="h-5 w-5" />,
      sectionId: "proyectos-destacados",
      description: "Nuestros casos de éxito",
      onClick: () => handleSectionScroll("proyectos-destacados"),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      {/* Header móvil con logo a la izquierda y menú a la derecha */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-white shadow-sm z-50 md:hidden">
        {/* Logo a la izquierda */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
              alt="Mayorista Solar Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain cursor-pointer hover:opacity-80 transition-opacity"
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

      {/* Mobile Menu Overlay - Rediseñado */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 w-full h-full bg-white overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Encabezado del menú */}
              <div className="relative h-24 bg-gradient-to-br from-[#004AAD] to-[#0066CC] p-4">
                <div className="absolute top-2 right-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center h-full">
                  <div className="h-12 w-12 overflow-hidden rounded-full bg-white p-1 shadow-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                      alt="Mayorista Solar Logo"
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-bold text-white">Mayorista Solar</h3>
                  </div>
                </div>
              </div>

              {/* Navegación principal */}
              <div className="p-4">
                <h4 className="mb-2 text-xs font-semibold uppercase text-gray-500">Navegación</h4>
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <button
                        onClick={item.onClick}
                        className={`flex items-center space-x-3 rounded-lg p-3 transition-all w-full text-left ${
                          activeSection === item.sectionId
                            ? "bg-[#004AAD] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-md ${
                            activeSection === item.sectionId ? "bg-white/20 text-white" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <span className="block font-medium">{item.name}</span>
                          <span className="block text-xs text-gray-500">{item.description}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </button>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Contacto */}
              <div className="border-t border-gray-200 p-4">
                <h4 className="mb-2 text-xs font-semibold uppercase text-gray-500">Contacto</h4>

                {/* WhatsApp */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <Link
                    href="https://api.whatsapp.com/send?phone=50230916300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 rounded-lg p-3 transition-all bg-green-50 text-green-600 hover:bg-green-100 mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-white">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="block font-medium">WhatsApp</span>
                      <span className="block text-xs text-green-700">+502 3091 6300</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-green-500" />
                  </Link>
                </motion.div>

                {/* Ubicación */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Link
                    href="https://maps.google.com/?q=Ruta+4+5-58,+Ciudad+de+Guatemala,+Guatemala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 rounded-lg p-3 transition-all bg-orange-50 text-orange-600 hover:bg-orange-100 mb-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-500 text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="block font-medium">Ubicación</span>
                      <span className="block text-xs text-orange-700">Ruta 4 5-58, Ciudad de Guatemala</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-orange-500" />
                  </Link>
                </motion.div>

                {/* Teléfono */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <Link
                    href="tel:+50230916300"
                    className="flex items-center space-x-3 rounded-lg p-3 transition-all bg-blue-50 text-blue-600 hover:bg-blue-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-500 text-white">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <span className="block font-medium">Teléfono</span>
                      <span className="block text-xs text-blue-700">+502 3091 6300</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-blue-500" />
                  </Link>
                </motion.div>
              </div>

              {/* Footer del menú */}
              <div className="mt-auto border-t border-gray-200 p-4">
                <p className="text-center text-xs text-gray-500">© {new Date().getFullYear()} Mayorista Solar</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-1 overflow-x-hidden">
        {/* Sidebar Navigation - Desktop only */}
        <div
          className={`fixed left-0 top-0 hidden h-screen w-[80px] flex-col items-center border-r border-gray-200 bg-white py-8 z-50 md:flex transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="mb-8 flex h-16 w-16 items-center justify-center animate-float">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                alt="Mayorista Solar Logo"
                width={64}
                height={64}
                className="h-auto w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          <nav className="flex flex-1 flex-col items-center space-y-6">
            <Link
              href="/"
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "hero" || activeSection === ""
                  ? "text-[#004AAD]"
                  : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Inicio</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "hero" || activeSection === "" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </Link>

            <Link
              href="#ingenieria"
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "ingenieria" ? "text-[#004AAD]" : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Ingeniería Especializada</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "ingenieria" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </Link>

            <Link
              href="#formacion"
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "formacion" ? "text-[#004AAD]" : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Hazlo TU</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "formacion" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </Link>

            <button
              onClick={() => handleSectionScroll("seleccion-productos")}
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "seleccion-productos" ? "text-[#004AAD]" : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Productos Solares</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "seleccion-productos" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </button>

            {/* Nuevo item para el menú de escritorio */}
            <button
              onClick={() => handleSectionScroll("soporte-tecnico")}
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "soporte-tecnico" ? "text-[#004AAD]" : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Soporte Técnico</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "soporte-tecnico" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </button>

            <button
              onClick={() => handleSectionScroll("proyectos-destacados")}
              className={`flex w-full flex-col items-center text-center text-xs font-medium transition-all duration-300 hover-lift ${
                activeSection === "proyectos-destacados" ? "text-[#004AAD]" : "text-gray-500 hover:text-[#004AAD]"
              }`}
            >
              <span className="mb-1 text-center">Proyectos Destacados</span>
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeSection === "proyectos-destacados" ? "w-6 bg-[#004AAD]" : "w-1 bg-gray-300"
                }`}
              ></div>
            </button>

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
        <div className="ml-0 flex-1 md:ml-[80px] overflow-x-hidden">
          {/* Estructura principal - Rediseñada para móvil */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 overflow-x-hidden" data-section="hero">
            {/* Left Section with Title and Hero Image */}
            <div className="relative lg:col-span-8 flex flex-col overflow-x-hidden">
              {/* Title Section - Ajustado con más espacio superior */}
              <div className="relative z-10 px-4 pt-16 md:pt-24 md:px-12 lg:px-16 mt-8 md:mt-0">
                <div className="mb-4 md:mb-6 mt-0 md:mt-0">
                  <div
                    className={`flex flex-wrap gap-2 transition-all duration-700 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
                  >
                    <span className="px-3 py-1 text-xs md:text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#004AAD] to-[#0066CC] shadow-sm">
                      Ingeniería
                    </span>
                    <span className="px-3 py-1 text-xs md:text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#0066CC] to-[#0088DD] shadow-sm">
                      Formación Técnica
                    </span>
                    <span className="px-3 py-1 text-xs md:text-sm font-medium text-white rounded-full bg-gradient-to-r from-[#0088DD] to-[#00AAEE] shadow-sm">
                      Productos Solares
                    </span>
                  </div>
                </div>
                <h1 className="mb-3 md:mb-6 text-3xl font-black tracking-tighter text-[#333333] md:text-5xl lg:text-6xl">
                  <span
                    className={`block transition-all duration-700 ${isLoaded ? "animate-fade-in-left stagger-1" : "opacity-0"}`}
                  >
                    TODO LO QUE NECESITAS
                  </span>
                  <span
                    className={`block transition-all duration-700 ${isLoaded ? "animate-fade-in-left stagger-2" : "opacity-0"}`}
                  >
                    PARA DESARROLLAR
                  </span>
                  <span
                    className={`block transition-all duration-700 ${isLoaded ? "animate-fade-in-left stagger-3" : "opacity-0"}`}
                  >
                    TU PROYECTO
                  </span>
                  <span
                    className={`block transition-all duration-700 ${isLoaded ? "animate-fade-in-left stagger-4" : "opacity-0"}`}
                  >
                    DE ENERGIA SOLAR
                  </span>
                </h1>
              </div>

              {/* Hero Slider - Reemplaza la imagen estática */}
              <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full">
                <HeroSlider />
              </div>
            </div>

            {/* Right Section with Social Media Posts - Solo visible en desktop */}
            <div className="lg:col-span-4 bg-[#004AAD] p-3 md:p-8 lg:p-10 hidden lg:flex items-center overflow-x-hidden">
              <SocialPosts isLoaded={isLoaded} />
            </div>
          </div>

          {/* Featured Brands Section - Movida a segunda posición */}
          <FeaturedBrands />
          <div data-section="brands"></div>

          {/* Nuevas secciones después de Marcas Destacadas */}
          <EngineeringSection />
          <EducationSection />
          <ProductSelectionSection />

          {/* Featured Products Section */}
          <FeaturedProducts />

          {/* Nueva sección de Soporte Técnico */}
          <TechnicalSupportSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* Social Posts Section - Solo visible en móvil, justo antes del footer */}
          <div className="lg:hidden bg-[#004AAD] p-3 flex items-center justify-center overflow-x-hidden">
            <SocialPosts isLoaded={isLoaded} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ClientPage
