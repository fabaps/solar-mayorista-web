"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ChevronRight, Award } from "lucide-react"
import Link from "next/link"
import { AnimatedTitle } from "@/components/animated-title"

// Actualizar los datos de proyectos para incluir los nuevos proyectos de Kevyn García y Erick Villatoro
// Reemplazar los proyectos existentes con los nuevos

const projects = [
  {
    id: 1,
    title: "Proyecto Kevyn García - Sistema Atado a Red",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/proyecto%201%20kevyn%20garcia%203%20-sN9wsw6iXrNEiMhBEwetA4rHe1L2iu.jpeg",
  },
  {
    id: 2,
    title: "Proyecto Erick Villatoro - Sistema Atado a Red",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Proyecto%20Erick%20Villatoro%202%20%20.JPG-kNL3tc29GdcKRE3Xumz5GoXcCfpEh4.jpeg",
  },
  {
    id: 3,
    title: "Proyecto Bodega SAT",
    image: "/images/proyecto-bodega-sat.jpeg",
  },
  {
    id: 4,
    title: "Proyecto AutoHotel",
    image: "/images/proyecto-autohotel.jpeg",
  },
]

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

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

  return (
    <div id="proyectos-destacados" ref={sectionRef} className="w-full bg-gray-50 py-8 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Título de la sección con botón "Ver todos" */}
        <div className="mb-6 md:mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
          <div>
            <AnimatedTitle
              mainText="PROYECTOS"
              secondaryText="DESTACADOS"
              color="#004AAD"
              backgroundColor="#004AAD"
              icon={<Award className="h-6 w-6 text-white" />}
              className="mb-6"
            />
          </div>

          {/* Botón "Ver todos" */}
          <Link
            href="/proyectos-solares"
            className="mt-4 md:mt-0 self-start md:self-auto flex items-center space-x-2 rounded-full border border-[#004AAD] px-4 py-2 text-sm font-medium text-[#004AAD] transition-all hover:bg-[#004AAD] hover:text-white"
          >
            <span>Ver todos</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-700 hover-glow"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-40 md:h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Contenido del proyecto - Solo título */}
              <div className="p-4 md:p-5">
                <h3 className="text-base md:text-lg font-bold text-[#333333]">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
