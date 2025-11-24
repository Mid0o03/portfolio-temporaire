'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = Boolean(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        (typeof window !== 'undefined' && window.getComputedStyle(target).cursor === 'pointer')
      )
      
      setIsPointer(isInteractive)
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', moveCursor)
      document.addEventListener('mouseenter', handleMouseEnter, true)
      document.addEventListener('mouseleave', handleMouseLeave, true)
      
      // Masquer le curseur par défaut
      document.body.style.cursor = 'none'
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', moveCursor)
        document.removeEventListener('mouseenter', handleMouseEnter, true)
        document.removeEventListener('mouseleave', handleMouseLeave, true)
        document.body.style.cursor = 'auto'
      }
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Curseur principal */}
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference ${
          isPointer ? 'bg-primary-400' : 'bg-white'
        }`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovering ? (isPointer ? 1.5 : 1) : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
      
      {/* Cercle externe */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-2 border-primary-400 pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      />
      
      {/* Point au centre */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-primary-400 pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
    </>
  )
}

export default CustomCursor

