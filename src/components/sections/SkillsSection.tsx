'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { portfolioConfig } from '@/config/portfolio'
import dynamic from 'next/dynamic'

const FloatingIcons = dynamic(() => import('@/components/ui/FloatingIcons'), {
  ssr: false,
})

interface SkillBarProps {
  skill: {
    name: string
    level: number
    icon: string
  }
  index: number
  inView: boolean
}

const SkillBar = ({ skill, index, inView }: SkillBarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      {/* En-tête de la compétence */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl group-hover:scale-110 transition-transform">
            {skill.icon}
          </span>
          <span className="font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-primary-400 font-semibold">
          {skill.level}%
        </span>
      </div>

      {/* Barre de progression */}
      <div className="relative h-2 bg-background-tertiary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-accent-400 rounded-full"
        />
        {/* Effet de brillance */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={inView ? { x: "100%" } : { x: "-100%" }}
          transition={{
            delay: index * 0.1 + 1,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
      </div>
    </motion.div>
  )
}

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
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

  const skillIcons = portfolioConfig.skills.frontend.map(s => s.icon)
    .concat(portfolioConfig.skills.backend.map(s => s.icon))
    .concat(portfolioConfig.skills.tools.map(s => s.icon))
    .concat(portfolioConfig.skills.aiTools.map(s => s.icon))

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-background-secondary" />
      <div className="absolute inset-0 grid-bg opacity-5" />

      {/* Icônes flottantes */}
      <FloatingIcons icons={skillIcons} className="opacity-10" />

      <div className="section-padding max-width-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >

          {/* En-tête de section */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 60 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto"
            />
            <h2 className="text-3xl lg:text-4xl font-bold">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Technologies and tools I use to build exceptional web experiences
            </p>
          </motion.div>

          {/* Grille des compétences */}
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">

            {/* Frontend */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center">
                  <span className="mr-3">💻</span>
                  Frontend
                </h3>
                <p className="text-sm lg:text-base text-foreground-muted">
                  Creating modern and responsive interfaces
                </p>
              </div>

              <div className="space-y-6">
                {portfolioConfig.skills.frontend.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center">
                  <span className="mr-3">⚙️</span>
                  Backend
                </h3>
                <p className="text-sm lg:text-base text-foreground-muted">
                  Robust databases, servers and APIs
                </p>
              </div>

              <div className="space-y-6">
                {portfolioConfig.skills.backend.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>

            {/* Outils et Technologies */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center">
                  <span className="mr-3">🛠️</span>
                  Tools
                </h3>
                <p className="text-sm lg:text-base text-foreground-muted">
                  Complementary development tools
                </p>
              </div>

              <div className="space-y-6">
                {portfolioConfig.skills.tools.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
            {/* Outils IA */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground flex items-center">
                  <span className="mr-3">🧠</span>
                  AI Workflow
                </h3>
                <p className="text-sm lg:text-base text-foreground-muted">
                  Cutting-edge AI tools for development and productivity
                </p>
              </div>

              <div className="space-y-6">
                {portfolioConfig.skills.aiTools.map((skill, index) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          </div>



          {/* Call-to-action */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Ready to collaborate?
              </h3>
              <p className="text-foreground-muted mb-6">
                I am always open to new challenges and innovative projects.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Démarrons un projet
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection