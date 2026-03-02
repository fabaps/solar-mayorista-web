"use client"

import { CheckCircle, Wrench, Zap, LifeBuoy, Handshake, Phone } from "lucide-react"
import { SectionSeparator } from "@/components/section-separator"
import { AnimatedTitle } from "@/components/animated-title"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Import Link for external navigation

// Componente personalizado para el icono de WhatsApp (copiado del header)
const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm.029 18.88a7.947 7.947 0 0 1-3.82-.97l-4.23 1.1 1.124-4.11a7.908 7.908 0 0 1-1.064-3.955c0-4.367 3.582-7.938 8.006-7.938 2.127 0 4.125.825 5.634 2.324 1.51 1.51 2.333 3.507 2.332 5.633 0 4.365-3.58 7.938-8.006 7.938z" />
  </svg>
)

export default function TechnicalSupportSection() {
  const whatsappNumber = "50250384112" // El número de WhatsApp de Ander

  return (
    <section id="soporte-tecnico" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Adjusted container for title and introductory paragraph */}
        <div className="mx-auto max-w-5xl space-y-6">
          <AnimatedTitle
            mainText="Aprovecha nuestro"
            secondaryText="Soporte Técnico"
            icon={<LifeBuoy className="h-6 w-6 text-white" />}
            color="#004AAD"
            backgroundColor="#E0F2F7"
            className="mb-6"
          />
          <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Nuestro equipo de expertos está listo para brindarte el mejor acompañamiento y asegurar el éxito de tus
            proyectos solares.
          </p>
        </div>
        {/* Adjusted grid container for benefits */}
        <div className="grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {" "}
          {/* Removed mx-auto from here */}
          <div className="grid gap-2 text-left">
            {" "}
            {/* Changed text-center to text-left */}
            <div className="flex justify-start">
              {" "}
              {/* Changed justify-center to justify-start */}
              <CheckCircle className="h-8 w-8 text-[#004AAD]" />
            </div>
            <h3 className="text-lg font-bold text-[#333333]">100% tickets resueltos</h3>
            <p className="text-sm text-gray-600">Solución garantizada para cada consulta.</p>
          </div>
          <div className="grid gap-2 text-left">
            {" "}
            {/* Changed text-center to text-left */}
            <div className="flex justify-start">
              {" "}
              {/* Changed justify-center to justify-start */}
              <Wrench className="h-8 w-8 text-[#004AAD]" />
            </div>
            <h3 className="text-lg font-bold text-[#333333]">Acompañamiento continuo</h3>
            <p className="text-sm text-gray-600">Seguimiento post-venta para buen funcionamiento.</p>
          </div>
          <div className="grid gap-2 text-left">
            {" "}
            {/* Changed text-center to text-left */}
            <div className="flex justify-start">
              {" "}
              {/* Changed justify-center to justify-start */}
              <Zap className="h-8 w-8 text-[#004AAD]" />
            </div>
            <h3 className="text-lg font-bold text-[#333333]">Resolución rápida</h3>
            <p className="text-sm text-gray-600">Eficiente solución a inconvenientes técnicos.</p>
          </div>
          <div className="grid gap-2 text-left">
            {" "}
            {/* Changed text-center to text-left */}
            <div className="flex justify-start">
              {" "}
              {/* Changed justify-center to justify-start */}
              <Handshake className="h-8 w-8 text-[#004AAD]" />
            </div>
            <h3 className="text-lg font-bold text-[#333333]">Confianza y fidelización</h3>
            <p className="text-sm text-gray-600">Soporte constante que mejora la experiencia.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12 space-y-4">
          <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-2 rounded-full text-base font-semibold shadow-lg transition-all duration-300 ease-in-out flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              Consultar a un técnico
            </Button>
          </Link>
        </div>
      </div>
      <SectionSeparator fromColor="#f3f4f6" toColor="#ffffff" />
    </section>
  )
}
