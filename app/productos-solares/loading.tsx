export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo arriba */}
        <div className="mb-8">
          <img 
            src="/images/mayorista-solar-logo.png" 
            alt="Mayorista Solar" 
            className="h-20 w-auto mx-auto"
          />
        </div>
        
        {/* Spinner abajo del logo */}
        <div className="mb-8">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Texto de carga */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            Cargando productos...
          </h3>
          <p className="text-gray-600">
            Preparando catálogo solar
          </p>
        </div>
      </div>
    </div>
  )
}
