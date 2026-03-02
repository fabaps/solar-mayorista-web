import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#004AAD] text-white overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col">
            <div className="mb-4 flex items-center">
              <div className="mr-3 h-8 w-8 md:h-10 md:w-10 overflow-hidden rounded-full bg-white p-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png"
                  alt="Mayorista Solar Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-lg md:text-xl font-bold">Mayorista Solar</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos-solares" className="hover:underline">
                  Productos Solares
                </Link>
              </li>
              <li>
                <Link href="/proyectos-solares" className="hover:underline">
                  Proyectos Solares
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">Productos</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/productos-solares?category=paneles" className="hover:underline">
                  Paneles Solares
                </Link>
              </li>
              <li>
                <Link href="/productos-solares?category=inversores" className="hover:underline">
                  Inversores
                </Link>
              </li>
              <li>
                <Link href="/productos-solares?category=baterias" className="hover:underline">
                  Baterías
                </Link>
              </li>
              <li>
                <Link href="/productos-solares?category=estructuras" className="hover:underline">
                  Estructuras de Montaje
                </Link>
              </li>
              <li>
                <Link href="/productos-solares?category=kits" className="hover:underline">
                  Kits Solares
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 md:mb-4 text-base md:text-lg font-semibold">Contacto</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 md:h-5 md:w-5 text-[#FFD700]" />
                <span>Ruta 4 5-58, Ciudad de Guatemala, Guatemala</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 text-[#FFD700]" />
                <a href="tel:+50230916300" className="hover:underline">
                  +502 3091 6300
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5 text-[#FFD700]" />
                <a href="mailto:janice@adepenlinea.com" className="hover:underline">
                  janice@adepenlinea.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 border-t border-white/20 pt-6 md:pt-8 text-center text-xs text-gray-300">
          <p>© {new Date().getFullYear()} Mayorista Solar. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
