"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

// Definimos las categorías de productos
const productCategories = [
  {
    id: "paneles",
    name: "Paneles Solares",
    icon: "/images/panel-solar-topcon.png",
    description: "Paneles solares de alta eficiencia",
    url: "/productos-solares?category=paneles",
  },
  {
    id: "inversores",
    name: "Inversores",
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2c9cb3_116c9812e00045f2bf45879cefc88d06~mv2-4V4zR6n1i1gHg4h4akwvy7NSqi8vvJ.png",
    description: "Inversores solares de última generación",
    url: "/productos-solares?category=inversores",
  },
  {
    id: "baterias",
    name: "Baterías",
    icon: "/images/baterias.png",
    description: "Almacenamiento de energía",
    url: "/productos-solares?category=baterias",
  },
  {
    id: "estructuras",
    name: "Estructuras",
    icon: "/images/estructuras.png",
    description: "Sistemas de montaje",
    url: "/productos-solares?category=estructuras",
  },
  {
    id: "interruptores",
    name: "Interruptores",
    icon: "/images/interruptores.png",
    description: "Protección eléctrica",
    url: "/productos-solares?category=interruptores",
  },
  {
    id: "kits",
    name: "Kits Solares",
    icon: "/images/kits.png",
    description: "Soluciones completas",
    url: "/productos-solares?category=kits",
  },
]

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const sectionRef = useRef(null)
  const sliderRef = useRef(null)

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

  // Función para manejar el scroll del slider
  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Funciones para desplazarse a la izquierda y derecha
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <div id="productos-solares-catalogo" ref={sectionRef} className="w-full bg-white py-8 md:py-12 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Título de Productos con botón "Ver todos" */}
        <div className="mb-6 md:mb-8 flex flex-col md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-black tracking-tighter text-[#333333] md:text-3xl mb-4">Productos Solares</h2>

          <Link
            href="/productos-solares"
            className="mt-4 md:mt-0 self-start md:self-auto flex items-center space-x-2 rounded-full border border-[#004AAD] px-4 py-2 text-sm font-medium text-[#004AAD] transition-all hover:bg-[#004AAD] hover:text-white"
          >
            <span>Ver todos</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Slider circular de categorías */}
        <div className="relative">
          {/* Botón de navegación izquierda */}
          {canScrollLeft && (
            <button
              onClick={scrollLeft}
              className="absolute -left-4 top-1/2 z-10 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD700] shadow-lg transition-all hover:bg-[#FFD700]/90 md:left-0"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-[#004AAD]" />
            </button>
          )}

          {/* Contenedor del slider con scroll horizontal */}
          <div
            ref={sliderRef}
            className="flex space-x-4 md:space-x-6 overflow-x-auto pb-6 scrollbar-hide"
            onScroll={handleScroll}
          >
            {productCategories.map((category) => (
              <Link
                key={category.id}
                href={category.url}
                className="flex flex-col items-center min-w-[120px] md:min-w-[150px] group"
              >
                <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-full overflow-hidden border-4 border-[#004AAD]/10 group-hover:border-[#004AAD] transition-all duration-300 mb-3">
                  <Image
                    src={category.icon || "/placeholder.svg?height=128&width=128&query=solar panel icon"}
                    alt={category.name}
                    fill
                    className="object-cover p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#333333] text-center">{category.name}</h3>
                <p className="text-xs text-gray-500 text-center hidden md:block">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Botón de navegación derecha */}
          {canScrollRight && (
            <button
              onClick={scrollRight}
              className="absolute -right-4 top-1/2 z-10 flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFD700] shadow-lg transition-all hover:bg-[#FFD700]/90 md:right-0"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-[#004AAD]" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
