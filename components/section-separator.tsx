interface SectionSeparatorProps {
  fromColor: string
  toColor: string
  flip?: boolean
}

export function SectionSeparator({ fromColor, toColor, flip = false }: SectionSeparatorProps) {
  return (
    <div className="relative h-16 md:h-20 overflow-hidden">
      <svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ transform: flip ? "scaleY(-1)" : "none" }}
      >
        <defs>
          <linearGradient id={`gradient-${fromColor}-${toColor}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        <path
          d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"
          fill={`url(#gradient-${fromColor}-${toColor})`}
          className="transition-all duration-700"
        />
      </svg>
    </div>
  )
}
