"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { ShoppingCart, GraduationCap, Wrench } from "lucide-react"

export default function WhyChooseUs() {
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
    <div ref={sectionRef} className="w-full bg-white py-8 md:py-12 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Título principal */}
        <h2 className="mb-6 text-3xl md:text-4xl font-black tracking-tighter text-[#333333] uppercase md:text-5xl">
          POR QUÉ
          <br />
          MAYORISTA
          <br />
          SOLAR?
        </h2>

        {/* Primero las tarjetas de servicios */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
            {/* Service 1 - Adquiere */}
            <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border border-gray-200 bg-white p-3 md:p-4 transition-all hover:border-[#004AAD] hover:shadow-md hover-glow">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 text-[#004AAD] transition-colors group-hover:bg-[#004AAD] group-hover:text-white">
                <ShoppingCart className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#333333]">Adquiere</h3>
              <p className="text-xs text-gray-500">Compra tus productos solares directamente con Mayorista Solar.</p>
            </div>

            {/* Service 2 - Capacítate */}
            <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border border-gray-200 bg-white p-3 md:p-4 transition-all hover:border-[#004AAD] hover:shadow-md hover-glow">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 text-[#004AAD] transition-colors group-hover:bg-[#004AAD] group-hover:text-white">
                <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#333333]">Capacítate</h3>
              <p className="text-xs text-gray-500">Formación experta en el Centro Tecnológico ADEP.</p>
            </div>

            {/* Service 3 - Instala */}
            <div className="group flex cursor-pointer flex-col space-y-2 rounded-lg border border-gray-200 bg-white p-3 md:p-4 transition-all hover:border-[#004AAD] hover:shadow-md hover-glow">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-gray-100 text-[#004AAD] transition-colors group-hover:bg-[#004AAD] group-hover:text-white">
                <Wrench className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <h3 className="text-sm font-semibold text-[#333333]">Instala</h3>
              <p className="text-xs text-gray-500">Implementa tus proyectos con apoyo de nuestro equipo técnico.</p>
            </div>
          </div>
        </div>

        {/* Luego las imágenes */}
        <div className="space-y-3 md:space-y-4">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/images/instalacion-paneles-solares.png"
              alt="Instalación de paneles solares"
              width={1200}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Paneles solares"
              width={1200}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
