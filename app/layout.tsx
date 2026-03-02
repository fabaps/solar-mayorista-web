import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Mayorista Solar Guatemala",
    template: "%s | Mayorista Solar Guatemala",
  },
  description:
    "Productos y apoyo de ingeniería para el instalador solar. Especialistas en paneles solares, inversores, baterías y capacitación técnica en Guatemala.",
  keywords: [
    "paneles solares Guatemala",
    "instalador solar",
    "productos solares",
    "ingeniería solar",
    "capacitación solar",
    "mayorista solar",
    "energía renovable Guatemala",
    "ADEP",
    "Canadian Solar",
    "inversores solares",
  ],
  authors: [{ name: "Mayorista Solar Guatemala" }],
  creator: "Mayorista Solar Guatemala",
  publisher: "Mayorista Solar Guatemala",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_GT",
    url: "https://www.mayoristasolar.com",
    siteName: "Mayorista Solar Guatemala",
    title: "Mayorista Solar Guatemala",
    description:
      "Productos y apoyo de ingeniería para el instalador solar. Especialistas en paneles solares, inversores, baterías y capacitación técnica en Guatemala.",
    images: [
      {
        url: "/images/mayorista-solar-opengraph.jpeg",
        width: 1200,
        height: 630,
        alt: "Mayorista Solar Guatemala - Instaladores trabajando en paneles solares con vista a montañas guatemaltecas",
        type: "image/jpeg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
        width: 400,
        height: 400,
        alt: "Logo Mayorista Solar Guatemala",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mayoristasolar",
    creator: "@mayoristasolar",
    title: "Mayorista Solar Guatemala",
    description:
      "Productos y apoyo de ingeniería para el instalador solar. Especialistas en paneles solares, inversores, baterías y capacitación técnica en Guatemala.",
    images: [
      {
        url: "/images/mayorista-solar-opengraph.jpeg",
        alt: "Mayorista Solar Guatemala - Instaladores trabajando en paneles solares con vista a montañas guatemaltecas",
      },
    ],
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
  },
  alternates: {
    canonical: "https://www.mayoristasolar.com",
    languages: {
      "es-GT": "https://www.mayoristasolar.com",
      es: "https://www.mayoristasolar.com",
    },
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mayorista%20solar-RdcWNO7Tvm8IEpJ50BGS7QV7JADfaw.png",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "business",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
