"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Package } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "@/components/animated-title"

export default function ProductSelectionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef(null)
  const router = useRouter()

  // Imágenes para el carrusel
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      alt: "Productos para instalaciones solares",
    },
    {
      src: "/images/panel-solar-topcon.png",
      alt: "Panel solar de alta eficiencia",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2c9cb3_116c9812e00045f2bf45879cefc88d06~mv2-4V4zR6n1i1gHg4h4akwvy7NSqi8vvJ.png",
      alt: "Inversor Canadian Solar de última generación",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c7e44007-1dc1-4090-b3d4-80635ac1e77c.JPG-hp8EHPcWB0ychV9Vewsgn0EDk0b4ZI.jpeg",
      alt: "Instalación de paneles solares a gran escala en campo abierto",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      clearInterval(interval)
    }
  }, [carouselImages.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div id="seleccion-productos" ref={sectionRef} className="w-full bg-white py-8 md:py-12 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {/* Contenido - Lado izquierdo en desktop, arriba en móvil */}
          <div className="lg:w-1/2 text-[#333333] mb-8 lg:mb-0">
            {/* Título con animación */}
            <AnimatedTitle
              mainText="SELECCIÓN DE"
              secondaryText="PRODUCTOS"
              color="#004AAD"
              backgroundColor="gray"
              icon={<Package className="h-6 w-6 text-white" />}
              className="mb-6"
            />

            {isVisible && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-600 mb-6"
              >
                EL EQUIPO QUE NECESITAS PARA TU PROYECTO DE ENERGIA SOLAR
              </motion.p>
            )}

            <div className="grid grid-cols-1 gap-6 mb-8">
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <h3 className="text-xl font-bold text-[#004AAD] mb-2">Distribuidores autorizados</h3>
                  <p className="mb-4">
                    Aprovéchate de nuestra garantía y soporte técnico local, buenos precios y calidad.
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="relative h-12 w-32"
                    >
                      <Image
                        src="/images/canadian-solar-logo.png"
                        alt="Canadian Solar Logo"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                      className="relative h-12 w-32"
                    >
                      <Image
                        src="/images/xenatec-energy-logo.png"
                        alt="Xenatec Energy Logo"
                        fill
                        className="object-contain"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer hover:border-[#004AAD]"
                  onClick={() => router.push("/productos-solares")}
                >
                  <h3 className="text-xl font-bold text-[#004AAD] mb-2">Catálogo completo</h3>
                  <p>Estructuras, cableados, todo el repertorio.</p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Carrusel - Lado derecho en desktop, oculto en móvil */}
          <div className="hidden md:block lg:w-1/2 relative">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-2 grid-rows-2 gap-2 w-full overflow-hidden"
              >
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: index === currentImage ? 1.05 : 1,
                      border: index === currentImage ? "2px solid #004AAD" : "none",
                    }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`relative aspect-square overflow-hidden rounded-lg ${
                      index === currentImage ? "ring-2 ring-[#004AAD]" : ""
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Controles del carrusel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-2">
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                onClick={prevImage}
                className="h-8 w-8 rounded-full bg-gray-200/70 flex items-center justify-center text-[#333333] hover:bg-gray-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                onClick={nextImage}
                className="h-8 w-8 rounded-full bg-gray-200/70 flex items-center justify-center text-[#333333] hover:bg-gray-200"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-[#004AAD] w-6" : "bg-[#004AAD]/50 w-2"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
