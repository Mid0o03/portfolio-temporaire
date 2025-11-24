'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingIconProps {
  icon: string
  initialX: number
  initialY: number
  delay: number
  dimensions: { width: number; height: number }
}

const FloatingIcon = ({ icon, initialX, initialY, delay, dimensions }: FloatingIconProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="absolute text-6xl opacity-20 hover:opacity-40 transition-opacity cursor-pointer"
      initial={{
        x: initialX,
        y: initialY,
        rotate: 0,
      }}
      animate={{
        x: initialX + (mousePosition.x - dimensions.width / 2) * 0.01,
        y: initialY + (mousePosition.y - dimensions.height / 2) * 0.01,
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        x: { type: 'spring', stiffness: 50, damping: 20 },
        y: { type: 'spring', stiffness: 50, damping: 20 },
        rotate: { duration: 4, repeat: Infinity, delay },
        scale: { duration: 2, repeat: Infinity, delay },
      }}
      whileHover={{ scale: 1.3, opacity: 0.6 }}
    >
      {icon}
    </motion.div>
  )
}

interface FloatingIconsProps {
  icons: string[]
  className?: string
}

const FloatingIcons = ({ icons, className = '' }: FloatingIconsProps) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {icons.map((icon, index) => (
        <FloatingIcon
          key={index}
          icon={icon}
          initialX={Math.random() * dimensions.width}
          initialY={Math.random() * dimensions.height}
          delay={index * 0.2}
          dimensions={dimensions}
        />
      ))}
    </div>
  )
}

export default FloatingIcons

