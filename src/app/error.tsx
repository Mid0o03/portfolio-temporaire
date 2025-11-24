'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, Home, RefreshCw } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log l'erreur à un service de reporting d'erreurs
    console.error('Error:', error)
  }, [error])

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
          <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-400" />
          </div>
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Oups, quelque chose s&apos;est mal passé !
          </h1>
          <p className="text-foreground-muted">
            Une erreur inattendue s&apos;est produite. Veuillez réessayer.
          </p>
          {error.digest && (
            <p className="text-xs text-foreground-muted mt-2">
              Erreur ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            Réessayer
          </motion.button>

          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Retour à l&apos;accueil
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}

