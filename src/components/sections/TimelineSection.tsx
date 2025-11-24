'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Briefcase, GraduationCap, Award } from 'lucide-react'

interface TimelineItem {
  id: number
  type: 'work' | 'education' | 'achievement'
  title: string
  company?: string
  location?: string
  date: string
  description: string
  technologies?: string[]
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Développeur Front-End Senior',
    company: 'TechCorp',
    location: 'Paris, France',
    date: '2023 - Présent',
    description: 'Développement d\'applications web modernes avec React et Next.js. Leadership technique et mentoring d\'une équipe de 5 développeurs.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Meilleur Portfolio 2023',
    company: 'Awwwards',
    date: '2023',
    description: 'Reconnu pour l\'innovation et la créativité dans le développement web moderne.',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 3,
    type: 'work',
    title: 'Développeur Front-End',
    company: 'StartupXYZ',
    location: 'Remote',
    date: '2021 - 2023',
    description: 'Développement de features complexes, optimisation des performances et amélioration de l\'UX.',
    technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 4,
    type: 'education',
    title: 'Master en Informatique',
    company: 'Université Paris',
    location: 'Paris, France',
    date: '2019 - 2021',
    description: 'Spécialisation en développement web et technologies front-end modernes.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Databases'],
    icon: <GraduationCap className="w-6 h-6" />,
  },
]

const TimelineSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-cyan-500'
      case 'education':
        return 'from-purple-500 to-pink-500'
      case 'achievement':
        return 'from-yellow-500 to-orange-500'
      default:
        return 'from-primary-400 to-accent-400'
    }
  }

  return (
    <section id="timeline" className="py-20 lg:py-32 relative">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-background-secondary" />
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="section-padding max-width-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* En-tête */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 60 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto"
            />
            <h2 className="text-3xl lg:text-4xl font-bold">
              Mon <span className="text-gradient">Parcours</span>
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Découvrez mon parcours professionnel et mes réalisations
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Ligne verticale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-transparent" />

            {/* Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Point sur la ligne */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${getTypeColor(
                        item.type
                      )} flex items-center justify-center text-white shadow-lg shadow-primary-500/50`}
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div
                    className={`w-full md:w-[45%] ml-20 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass-effect p-6 rounded-2xl hover:border-primary-500/40 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {item.title}
                          </h3>
                          {item.company && (
                            <p className="text-primary-400 font-medium">
                              {item.company}
                            </p>
                          )}
                        </div>
                        <Calendar className="w-5 h-5 text-foreground-muted flex-shrink-0" />
                      </div>

                      {/* Date et location */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-foreground-muted">
                        <span>{item.date}</span>
                        {item.location && (
                          <>
                            <span>•</span>
                            <span>{item.location}</span>
                          </>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-foreground-secondary mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-xs border border-primary-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TimelineSection

