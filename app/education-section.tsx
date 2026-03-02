"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedTitle } from "@/components/animated-title"

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef(null)

  // Imágenes actualizadas para el carrusel
  const carouselImages = [
    {
      src: "/images/aci-instalacion-paneles.jpeg",
      alt: "Instalación de paneles solares en campo abierto",
    },
    {
      src: "/images/aci-capacitacion-adep.jpeg",
      alt: "Capacitación técnica sobre paneles solares en ADEP",
    },
    {
      src: "/images/aci-equipo-campo.jpeg",
      alt: "Equipo técnico posando frente a instalación solar",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0171.jpg-mDJZ6bG39BGbnIDS8kMNQDP6nnN4y6.jpeg",
      alt: "Técnicos manipulando panel solar durante capacitación práctica",
    },
  ]

  // Fases de implementación actualizadas con "FASE" antes del nombre y numeración continua
  const implementationPhases = [
    {
      id: 1,
      title: "FASE PREPROYECTO",
      description: "Te apoyamos a abrir el negocio sin ningún costo.",
      steps: [
        {
          id: 1,
          title: "Identifica tu proyecto",
        },
        {
          id: 2,
          title: "Te apoyamos en diseño y planificación",
        },
      ],
    },
    {
      id: 2,
      title: "FASE EJECUCIÓN DE PROYECTO",
      description: "Esta fase comienza una vez se confirme el proyecto.",
      steps: [
        {
          id: 3,
          title: "Adquiere tus productos con nosotros.",
        },
        {
          id: 4,
          title: "Capacitamos a tu equipo técnico.",
        },
        {
          id: 5,
          title: "Instala tu proyecto.",
        },
        {
          id: 6,
          title: "Te brindamos soporte técnico en la instalación y puesta en marcha.",
        },
      ],
    },
  ]

  const phases = [
    {
      number: "01",
      title: "Adquiere",
      description: "Accede a nuestro catálogo de productos solares de alta calidad.",
      image: "/images/mayorista-catalogo-post.jpeg",
    },
    {
      number: "02",
      title: "Capacítate",
      description: "Formación técnica especializada para la instalación de sistemas solares.",
      image: "/images/academia-proyectos-post.jpeg",
    },
    {
      number: "03",
      title: "Instala",
      description: "Implementa proyectos solares con confianza y soporte técnico.",
      image: "/images/instaladores-solares-1.jpg",
    },
    {
      number: "04",
      title: "Crece",
      description: "Expande tu negocio con el respaldo de Mayorista Solar.",
      image: "/images/instaladores-solares-2.jpg",
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
    <div id="formacion" ref={sectionRef} className="w-full bg-[#FFD700] py-8 md:py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          {/* Contenido - Lado izquierdo en desktop, arriba en móvil */}
          <div className="lg:w-1/2 text-[#333333] mb-8 lg:mb-0">
            {/* Título con animación */}
            <AnimatedTitle
              mainText="ACÍ"
              secondaryText=""
              color="#1E3A8A"
              backgroundColor="#1E3A8A"
              icon={<GraduationCap className="h-6 w-6 text-[#FFD700]" />}
              className="mb-2"
            />

            {/* Subtítulo debajo del título principal */}
            {isVisible && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-700 mb-6 font-medium"
              >
                Metodología comprobada con 10 años de experiencia para que ejecutes tus proyectos de energía solar.
              </motion.p>
            )}

            {isVisible && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-[#333333] mb-4">
                  ¿Para qué hacerlo <span className="text-[#1E3A8A] font-black tracking-tighter">ACÍ</span>?
                </h3>

                {/* Nuevo diseño visual para A-C-I con círculos blancos y letras azules */}
                <div className="flex flex-row items-center justify-between gap-8 mt-4 mb-2 relative max-w-xs">
                  {/* Línea conectora que se extiende entre el primer y último círculo */}
                  <div className="absolute top-6 left-6 right-6 h-0.5 bg-[#1E3A8A]/30 z-0"></div>

                  {/* A - Adquiere */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex flex-col items-center z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E3A8A] font-black text-xl mb-2 shadow-md border-2 border-[#1E3A8A]/20">
                      A
                    </div>
                    <span className="text-sm font-semibold text-[#333333]">Adquiere</span>
                  </motion.div>

                  {/* C - Capacitate */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex flex-col items-center z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E3A8A] font-black text-xl mb-2 shadow-md border-2 border-[#1E3A8A]/20">
                      C
                    </div>
                    <span className="text-sm font-semibold text-[#333333]">Capacitate</span>
                  </motion.div>

                  {/* I - Instala */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="flex flex-col items-center z-10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1E3A8A] font-black text-xl mb-2 shadow-md border-2 border-[#1E3A8A]/20">
                      Í
                    </div>
                    <span className="text-sm font-semibold text-[#333333]">Instala</span>
                  </motion.div>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 gap-6 mb-8 overflow-hidden">
              {/* Primer contenedor mejorado */}
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="relative bg-gradient-to-r from-white to-white/95 p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A] overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div>
                      <h4 className="text-xl font-bold text-[#1E3A8A] mb-2 flex items-center">
                        <span className="bg-[#1E3A8A] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">
                          1
                        </span>
                        Para instalar plantas solares a tus clientes potenciales
                      </h4>
                      <p className="text-[#333333] pl-10">
                        Capacita a tu equipo técnico y ejecutua tus propios proyectos.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Segundo contenedor mejorado */}
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="relative bg-gradient-to-r from-white to-white/95 p-6 rounded-lg shadow-lg border-l-4 border-[#1E3A8A] overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div>
                      <h4 className="text-xl font-bold text-[#1E3A8A] mb-2 flex items-center">
                        <span className="bg-[#1E3A8A] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">
                          2
                        </span>
                        Para instalar una planta solar en tu empresa
                      </h4>
                      <div className="text-[#333333] pl-10">
                        Capacita a tu equipo técnico, optimiza recursos y
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.1, duration: 0.5 }}
                          className="font-bold text-[#1E3A8A]"
                        >
                          {" "}
                          reduce un 25%{" "}
                        </motion.span>
                        tu inversión inicial.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
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
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      scale: index === currentImage ? 1.05 : 1,
                      border: index === currentImage ? "2px solid #333333" : "none",
                    }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`relative aspect-square overflow-hidden rounded-lg ${
                      index === currentImage ? "ring-2 ring-[#333333]" : ""
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Controles del carrusel */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 px-2 z-10">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                onClick={prevImage}
                className="h-8 w-8 rounded-full bg-white/70 flex items-center justify-center text-[#333333] hover:bg-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                onClick={nextImage}
                className="h-8 w-8 rounded-full bg-white/70 flex items-center justify-center text-[#333333] hover:bg-white"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-10">
              {carouselImages.map((_, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImage ? "bg-[#333333] w-6" : "bg-[#333333]/50 w-2"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proceso de Implementación - Versión mejorada y compactada para móvil */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 md:mt-12 pt-6 md:pt-10 border-t border-[#333333]/20 relative"
        >
          {/* Imagen de fondo con menor opacidad para mejor legibilidad */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src="/images/hazlo-aci-background.jpeg"
              alt="Instaladores solares en capacitación"
              fill
              className="object-cover opacity-10" // Reducida la opacidad para mejor legibilidad
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/30 to-transparent mix-blend-overlay"></div>
          </div>

          {/* Contenido superpuesto */}
          <div className="relative z-10">
            <div className="mx-auto max-w-5xl space-y-6 mb-6 md:mb-10">
              {" "}
              {/* Adjusted for left alignment */}
              <AnimatedTitle
                mainText="HAZLO TU, HAZLO"
                secondaryText="ACÍ"
                color="#1E3A8A"
                backgroundColor="#1E3A8A"
                className="text-left text-3xl font-black tracking-tighter text-[#333333] md:text-5xl lg:text-6xl"
              />
              <p className="text-left text-gray-600 md:text-lg">
                Nuestro programa "Adquiere, Capacítate, Instala" (ACI) te brinda las herramientas y el conocimiento para
                desarrollar tus proyectos solares de manera exitosa.
              </p>
            </div>

            {/* Contenedor de fases - Versión compactada para móvil */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {implementationPhases.map((phase, phaseIndex) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + phaseIndex * 0.2, duration: 0.5 }}
                  className={`rounded-xl p-4 md:p-6 shadow-lg border-2 border-[#1E3A8A]/20 hover:border-[#1E3A8A]/40 transition-all duration-300 
                    ${
                      phaseIndex === 0
                        ? "bg-gradient-to-br from-[#004AAD]/10 to-[#1E3A8A]/20"
                        : "bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/30"
                    }`}
                >
                  <div className="mb-3 md:mb-5">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A] text-left border-b-2 border-[#1E3A8A] pb-2 mb-2 md:mb-3">
                      {" "}
                      {/* Changed to text-left */}
                      {phase.title}
                    </h3>
                    {/* Descripción de la fase con mejor contraste y en negrita */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.3 + phaseIndex * 0.2, duration: 0.5 }}
                      className="mt-1 md:mt-2 text-left text-gray-800 font-bold text-sm md:text-base" // Changed to text-left
                    >
                      {phase.description}
                    </motion.p>
                  </div>

                  <div className="space-y-2 md:space-y-4">
                    {phase.steps.map((step, stepIndex) => (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + phaseIndex * 0.2 + stepIndex * 0.1, duration: 0.5 }}
                        className={`flex items-center space-x-3 md:space-x-4 rounded-lg p-2 md:p-4 shadow-sm border border-[#1E3A8A]/10 hover:border-[#1E3A8A]/30 transition-all duration-300
                          ${
                            phaseIndex === 0
                              ? "bg-gradient-to-r from-white/80 to-[#004AAD]/10"
                              : "bg-gradient-to-r from-white/80 to-[#FFD700]/20"
                          }`}
                      >
                        <div className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-[#1E3A8A] text-white text-xs md:text-sm font-bold flex-shrink-0">
                          {step.id}
                        </div>
                        <h4 className="text-sm md:text-base font-bold text-[#333333] leading-tight text-left">
                          {step.title}
                        </h4>{" "}
                        {/* Changed to text-left */}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
