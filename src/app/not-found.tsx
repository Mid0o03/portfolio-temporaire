'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
          className="flex justify-center"
        >
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary-400/20">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary-500/10 flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Page introuvable
          </h2>
          <p className="text-foreground-muted">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Retour à l&apos;accueil
          </motion.a>

          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Page précédente
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

