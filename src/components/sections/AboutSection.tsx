'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioConfig } from '@/config/portfolio'
import Image from 'next/image'

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Arrière-plan avec grille */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="section-padding max-width-container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          
          {/* Colonne gauche - Image et info */}
          <motion.div variants={itemVariants} className="space-y-8">
            
            {/* Photo de profil */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-effect"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20" />
                <Image
                  src={portfolioConfig.personal.profileImage}
                  alt={portfolioConfig.personal.name}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Effet de glow */}
                <div className="absolute inset-0 rounded-2xl shadow-xl shadow-primary-500/20" />
              </motion.div>
              
              {/* Badge flottant */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 -right-4 bg-primary-500 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg"
              >
                👋 Disponible
              </motion.div>
            </div>

            {/* Informations rapides */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-400">
                  {portfolioConfig.projects.length}+
                </div>
                <div className="text-sm text-foreground-muted">Projets</div>
              </div>
              <div className="glass-effect p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-sm text-foreground-muted">Années</div>
              </div>
            </div>
          </motion.div>

          {/* Colonne droite - Contenu */}
          <motion.div variants={itemVariants} className="space-y-8">
            
            {/* En-tête */}
            <div className="space-y-4">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 60 } : { width: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-primary-400 to-accent-400"
              />
              <h2 className="text-3xl lg:text-4xl font-bold">
                À propos de <span className="text-gradient">moi</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-foreground-secondary leading-relaxed">
              <p>
                Développeur front-end passionné avec plus de 7 mois d&apos;expérience dans la 
                création d&apos;applications web modernes et performantes. Spécialisé en 
                <span className="text-primary-400 font-medium"> React, Next.js et TypeScript</span>.
              </p>
              <p>
                J&apos;aime transformer des concepts complexes en interfaces utilisateur intuitives 
                et élégantes. Mon approche combine créativité et rigueur technique pour 
                livrer des solutions qui dépassent les attentes.
              </p>
              <p>
                Actuellement, je me concentre sur les technologies web de pointe, 
                l&apos;optimisation des performances et l&apos;amélioration de l&apos;expérience utilisateur.
              </p>
            </div>

            {/* Ce que je fais */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Ce que je fais</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🚀", title: "Développement Frontend", desc: "Interfaces modernes et réactives" },
                  { icon: "⚡", title: "Optimisation Performance", desc: "Applications rapides et fluides" },
                  { icon: "📱", title: "Design Responsive", desc: "Compatible tous appareils" },
                  { icon: "🔧", title: "Maintenance & Support", desc: "Suivi et amélioration continue" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="glass-effect p-4 rounded-lg hover:border-primary-500/40 transition-colors group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-foreground-muted">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Coordonnées */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={`mailto:${portfolioConfig.personal.email}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Me contacter
              </motion.a>
              <motion.a
                href={portfolioConfig.personal.resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                Télécharger CV
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection