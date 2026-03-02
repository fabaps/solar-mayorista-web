"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Wrench } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "@/components/animated-title"

// Componente personalizado para el icono de WhatsApp
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.23 1.1 1.124-4.11a7.908 7.908 0 0 1-1.064-3.955c0-4.367 3.582-7.938 8.006-7.938 2.127 0 4.125.825 5.634 2.324 1.51 1.51 2.333 3.507 2.332 5.633 0 4.365-3.58 7.938-8.006 7.938z" />
  </svg>
)

export default function EngineeringSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentOption, setCurrentOption] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const sectionRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Opciones de proyectos con los nuevos iconos
  const projectOptions = [
    {
      title: "Bombeo en AC",
      description: "",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC%20%283%29-Ejzv6VSUuRuhRNMGZxONutVHRJ3adl.png",
    },
    {
      title: "Sistema de respaldo",
      description: "(sistema aislado a la red)",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aislado%20%282%29-fKVz2IU3KfZHlyWqJkcTqDOvPXuDsK.png",
    },
    {
      title: "Sistema híbrido",
      description: "",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hi%CC%81brido%20%282%29-o6EZZAcyhPcxhl5wdQxykRPgBCEtsh.png",
    },
    {
      title: "Atado a red industrial o comercial",
      description: "",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/atado%20%282%29-aNavn7WJi0IDJRbaUNvZZN4HukgBaM.png",
    },
    {
      title: "Bombeo en DC",
      description: "",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AC%20%282%29%20%282%29-Y9LQOfAjSSnVLaMj4LBHBct1FN98kp.png",
    },
  ]

  // Información del equipo técnico
  const teamMembers = [
    {
      name: "Ingeniero 1",
      role: "Especialista en Diseño",
      image: "/images/team-member-1.png",
    },
    {
      name: "Ander Aquino",
      role: "Ingeniero de Proyectos",
      image: "/images/team-member-2.png",
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // Verificar si se puede desplazar a la izquierda o derecha
  useEffect(() => {
    if (sliderRef.current) {
      const checkScroll = () => {
        setCanScrollLeft(sliderRef.current!.scrollLeft > 0)
        setCanScrollRight(
          sliderRef.current!.scrollLeft < sliderRef.current!.scrollWidth - sliderRef.current!.clientWidth,
        )
      }

      sliderRef.current.addEventListener("scroll", checkScroll)
      checkScroll() // Initial check

      return () => {
        sliderRef.current?.removeEventListener("scroll", checkScroll)
      }
    }
  }, [])

  const goToOption = (index: number) => {
    // Asegurar que el índice esté dentro de los límites
    const boundedIndex = Math.max(0, Math.min(index, projectOptions.length - 1))
    setCurrentOption(boundedIndex)

    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth
      sliderRef.current.scrollTo({
        left: slideWidth * boundedIndex,
        behavior: "smooth",
      })
    }
  }

  const nextOption = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 150
    }
  }

  const prevOption = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 150
    }
  }

  return (
    <div id="ingenieria" ref={sectionRef} className="w-full bg-[#004AAD] py-8 md:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {/* Contenido - Lado izquierdo en desktop, arriba en móvil */}
          <div className="lg:w-1/2 text-white mb-8 lg:mb-0">
            {/* Título con animación */}
            <AnimatedTitle
              mainText="INGENIERIA"
              secondaryText="ESPECIALIZADA"
              color="#FFD700"
              backgroundColor="#FFD700"
              icon={<Wrench className="h-6 w-6 text-[#004AAD]" />}
              className="mb-6"
            />

            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold">¿Cuál es el proyecto que te está pidiendo tu cliente?</h3>
                <p className="text-white/90 mt-1">Nosotros te apoyamos en el proceso.</p>
              </motion.div>
            )}

            {/* Versión desktop: Grid de opciones */}
            <div className="hidden md:grid md:grid-cols-2 gap-4 mb-8">
              {projectOptions.map(
                (option, index) =>
                  isVisible && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all cursor-pointer"
                    >
                      <h3 className="font-semibold text-white">{option.title}</h3>
                      {option.description && <p className="text-xs text-white/70">{option.description}</p>}
                    </motion.div>
                  ),
              )}
            </div>

            {/* Versión móvil: Slider de opciones con círculos */}
            <div className="md:hidden mb-8">
              <div className="relative">
                {/* Contenedor del slider con scroll horizontal */}
                <div
                  ref={sliderRef}
                  className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
                  onScroll={() => {
                    setCanScrollLeft(sliderRef.current?.scrollLeft > 0)
                    setCanScrollRight(
                      sliderRef.current?.scrollLeft <
                        sliderRef.current?.scrollWidth - sliderRef.current?.clientWidth - 10,
                    )
                  }}
                >
                  {projectOptions.map((option, index) => (
                    <div key={index} className="flex flex-col items-center min-w-[120px] text-center">
                      <div className="relative h-32 w-32 rounded-full overflow-hidden flex items-center justify-center bg-white/10 hover:bg-white/20 transition-all duration-300 mb-3">
                        <div className="w-28 h-28 flex items-center justify-center">
                          <img
                            src={option.icon || "/placeholder.svg"}
                            alt={option.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <h3 className="text-sm font-semibold text-white text-center w-full">{option.title}</h3>
                      {option.description && (
                        <p className="text-xs text-white/70 text-center w-full">{option.description}</p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Controles del slider */}
                {canScrollLeft && (
                  <button
                    onClick={prevOption}
                    className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD700] shadow-lg transition-all hover:bg-[#FFD700]/90 md:left-0"
                  >
                    <ChevronLeft className="h-5 w-5 text-[#004AAD]" />
                  </button>
                )}

                {canScrollRight && (
                  <button
                    onClick={nextOption}
                    className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD700] shadow-lg transition-all hover:bg-[#FFD700]/90 md:right-0"
                  >
                    <ChevronRight className="h-5 w-5 text-[#004AAD]" />
                  </button>
                )}
              </div>
            </div>

            {/* Botón de WhatsApp con fotos del equipo integradas */}
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button
                  className="bg-white text-[#004AAD] hover:bg-white/90 w-full flex items-center justify-between px-4 py-2 h-auto group"
                  onClick={() => window.open("https://api.whatsapp.com/send?phone=50230916300", "_blank")}
                >
                  <div className="flex items-center">
                    <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-medium group-hover:scale-105 transition-transform">
                      Consultar a equipo técnico
                    </span>
                  </div>
                  <div className="flex -space-x-2 ml-2 transition-transform group-hover:scale-110">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#004AAD]"
                        title={`${member.name} - ${member.role}`}
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Carrusel - Lado derecho en desktop, abajo en móvil */}
          <div className="lg:w-1/2 relative">
            {isVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="grid grid-cols-2 grid-rows-2 gap-2 w-full overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-27%20at%2008.56.59%20%281%29-gvFk0tPas5HAhWViHKXfs3urqEZqNi.jpeg"
                      alt="Ingeniero analizando diseño de instalación solar en pantalla"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5972.jpg-wXPVL3Q82q9wsUErxdrZ1VBFO7MDlQ.jpeg"
                      alt="Técnico de ADEP supervisando instalación de paneles solares"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8143%20%281%29.png-yAqLBlwtGHcwYrXacrmq849MnFKizC.jpeg"
                      alt="Ingeniero de ADEP explicando sistema de control eléctrico"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5582.png-iVIqKorbw3TAiVBmqzB5Ti3QvcpXed.jpeg"
                      alt="Ingeniera de ADEP explicando cálculos de energía solar"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
