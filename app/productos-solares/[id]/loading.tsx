export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        {/* Logo arriba */}
        <div className="mb-8">
          <img 
            src="/images/mayorista-solar-logo.png" 
            alt="Mayorista Solar" 
            className="h-16 w-auto mx-auto"
          />
        </div>
        
        {/* Spinner abajo del logo */}
        <div className="mb-8">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>
        
        {/* Texto de carga */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-800">
            Cargando producto...
          </h3>
          <p className="text-gray-600">
            Obteniendo detalles
          </p>
        </div>
      </div>
    </div>
  )
}
