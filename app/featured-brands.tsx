"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function FeaturedBrands() {
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

  // Datos de las marcas
  const brands = [
    {
      id: 1,
      name: "Xenatec Energy",
      logo: "/images/xenatec-energy-logo.png",
    },
    {
      id: 2,
      name: "JA Solar",
      logo: "/images/ja-solar-logo.png",
    },
    {
      id: 3,
      name: "INVT",
      logo: "/images/invt-logo.png",
    },
    {
      id: 4,
      name: "Canadian Solar",
      logo: "/images/canadian-solar-logo.png",
    },
    {
      id: 5,
      name: "DIFFUL",
      logo: "/images/difful-logo.jpeg",
    },
  ]

  return (
    <div ref={sectionRef} className="w-full bg-gray-50 py-8 md:py-16 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-[#333333] md:text-5xl">
            MARCAS DESTACADAS
          </h2>
          <p className="mt-3 text-gray-500">Trabajamos con las mejores marcas del sector solar</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group flex h-24 md:h-28 cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-3 md:p-4 transition-all hover:border-[#004AAD] hover:shadow-md hover-glow"
            >
              <div className="relative h-12 md:h-14 w-full">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`${brand.name} Logo`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="mt-2 text-xs font-medium text-gray-700">{brand.name}</p>
            </div>
          ))}
        </div>

        {/* Texto y enlace para ver más productos */}
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-gray-600 mb-3">¿No encuentras la marca que buscas?</p>
          <Link
            href="/productos-solares"
            className="inline-flex items-center text-[#004AAD] font-medium hover:underline transition-all group"
          >
            Ver productos solares
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
