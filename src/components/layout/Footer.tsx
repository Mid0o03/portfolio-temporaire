'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-background-secondary border-t border-primary-500/20">
      {/* Arrière-plan */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="section-padding max-width-container relative z-10">
        <div className="py-12 space-y-8">

          {/* Contenu principal */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* Colonne 1 - À propos */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gradient">
                &lt;{portfolioConfig.personal.name.split(' ')[0]}/&gt;
              </div>
              <p className="text-foreground-muted leading-relaxed">
                {portfolioConfig.personal.title} passionné par la création d&apos;expériences
                web modernes et performantes.
              </p>
              <div className="text-sm text-foreground-muted">
                📍 {portfolioConfig.personal.location}
              </div>
            </div>

            {/* Colonne 2 - Navigation */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                {portfolioConfig.navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="text-foreground-muted hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Colonne 3 - Contact & Réseaux */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${portfolioConfig.personal.email}`}
                  className="block text-foreground-muted hover:text-primary-400 transition-colors text-sm"
                >
                  {portfolioConfig.personal.email}
                </a>

              </div>

              {/* Réseaux sociaux */}
              <div className="flex space-x-4 pt-2">
                <motion.a
                  href={portfolioConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 glass-effect rounded-lg text-foreground-muted hover:text-primary-400 hover:border-primary-500/40 transition-all"
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={portfolioConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 glass-effect rounded-lg text-foreground-muted hover:text-primary-400 hover:border-primary-500/40 transition-all"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href={`mailto:${portfolioConfig.personal.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 glass-effect rounded-lg text-foreground-muted hover:text-primary-400 hover:border-primary-500/40 transition-all"
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-primary-500/20" />

          {/* Bas du footer */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-foreground-muted">
              <span>© {currentYear} {portfolioConfig.personal.name}.</span>
              <span>Fait avec</span>
              <Heart size={16} className="text-red-400" />
              <span>et</span>
              <span className="text-primary-400">Next.js</span>
            </div>

            {/* Technologies utilisées */}
            <div className="flex items-center space-x-4 text-xs text-foreground-muted">
              <span>Next.js</span>
              <span>•</span>
              <span>TypeScript</span>
              <span>•</span>
              <span>Tailwind CSS</span>
              <span>•</span>
              <span>Framer Motion</span>
              <span>•</span>
              <span>Three.js</span>
            </div>

            {/* Bouton retour en haut */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-effect rounded-lg text-foreground-muted hover:text-primary-400 hover:border-primary-500/40 transition-all group"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer