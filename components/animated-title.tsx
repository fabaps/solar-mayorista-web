"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimatedTitleProps {
  mainText: string
  secondaryText: string
  icon?: ReactNode
  color: string
  backgroundColor?: string
  className?: string
}

export function AnimatedTitle({
  mainText,
  secondaryText,
  icon,
  color,
  backgroundColor,
  className = "",
}: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false)
  const titleRef = useRef<HTMLDivElement>(null)

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

    if (titleRef.current) {
      observer.observe(titleRef.current)
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current)
      }
    }
  }, [])

  return (
    <div ref={titleRef} className={`relative ${className}`}>
      {icon && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-block p-2 rounded-lg mb-2"
          style={{ backgroundColor: backgroundColor || color }}
        >
          {icon}
        </motion.div>
      )}

      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: "3rem" } : { width: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="h-0.5 w-12 mb-2"
        style={{ backgroundColor: color }}
      />

      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2"
        >
          <span style={{ color }}>{mainText}</span>
        </motion.h2>
      </div>

      {secondaryText && (
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter relative"
          >
            <span className="relative">
              {secondaryText}
              <motion.span
                initial={{ width: 0 }}
                animate={isVisible ? { width: "6rem" } : { width: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-2 left-0 h-1.5"
                style={{ backgroundColor: color }}
              />
            </span>
          </motion.h2>
        </div>
      )}
    </div>
  )
}
