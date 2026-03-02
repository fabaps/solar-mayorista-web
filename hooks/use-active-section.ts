"use client"

import { useState, useEffect } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = [
      { id: "hero", element: document.querySelector('[data-section="hero"]') },
      { id: "brands", element: document.querySelector('[data-section="brands"]') },
      { id: "ingenieria", element: document.getElementById("ingenieria") },
      { id: "formacion", element: document.getElementById("formacion") }, // Esta es la sección "Hazlo TU, Hazlo ACÍ"
      { id: "seleccion-productos", element: document.getElementById("seleccion-productos") },
      { id: "productos-solares-catalogo", element: document.getElementById("productos-solares-catalogo") },
      { id: "proyectos-destacados", element: document.getElementById("proyectos-destacados") },
      { id: "soporte-tecnico", element: document.getElementById("soporte-tecnico") }, // Esta es la sección de Soporte Técnico
    ].filter((section) => section.element)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("data-section") || entry.target.id
            setActiveSection(sectionId)
          }
        })
      },
      {
        root: null,
        rootMargin: "-10% 0px -10% 0px", // Ajustado para que la sección se considere activa en un rango más amplio
        threshold: 0.1, // Ajustado para que la sección se active con menos visibilidad
      },
    )

    sections.forEach((section) => {
      if (section.element) {
        observer.observe(section.element)
      }
    })

    return () => {
      sections.forEach((section) => {
        if (section.element) {
          observer.unobserve(section.element)
        }
      })
    }
  }, [])

  return activeSection
}
