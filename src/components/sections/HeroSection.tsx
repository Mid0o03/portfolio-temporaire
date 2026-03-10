'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, ExternalLink } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'
import dynamic from 'next/dynamic'

const Enhanced3DScene = dynamic(() => import('@/components/3d/Enhanced3DScene'), {
  ssr: false,
})

const AnimatedParticles = dynamic(() => import('@/components/ui/AnimatedParticles'), {
  ssr: false,
})

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Scène 3D en arrière-plan */}
      <Enhanced3DScene />

      {/* Arrière-plan animé */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 animate-pulse" />

        {/* Formes géométriques animées */}
        <AnimatedParticles />

        {/* Grille animée */}
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />

      {/* Contenu principal */}
      <div className="relative z-10 section-padding max-width-container">
        <div className="text-center space-y-8">

          {/* Badge de statut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary-500/30"
          >
            <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse mr-3" />
            <span className="text-sm text-foreground-secondary">
              Disponible pour nouveaux projets
            </span>
          </motion.div>

          {/* Nom et titre */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Salut, je suis{' '}
            <span className="text-gradient">
              {portfolioConfig.personal.name}
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground-secondary"
          >
            {portfolioConfig.personal.title}
          </motion.h2>

          {/* Spécialisation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-primary-400 font-medium"
          >
            {portfolioConfig.personal.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-foreground-muted leading-relaxed"
          >
            {portfolioConfig.personal.description}
          </motion.p>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Voir mes projets
              <ExternalLink size={18} />
            </motion.a>

            <motion.a
              href={portfolioConfig.personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              Télécharger CV
              <Download size={18} />
            </motion.a>

            <motion.a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-lg border border-primary-500/30 text-primary-400 hover:bg-primary-500/10 transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                {portfolioConfig.projects.length}+
              </div>
              <div className="text-sm text-foreground-muted">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">
                {portfolioConfig.skills.frontend.length + portfolioConfig.skills.backend.length + portfolioConfig.skills.tools.length + portfolioConfig.skills.aiTools.length}+
              </div>
              <div className="text-sm text-foreground-muted">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-400">7 months</div>
              <div className="text-sm text-foreground-muted">Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground-muted hover:text-primary-400 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm">Scroll down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default HeroSection