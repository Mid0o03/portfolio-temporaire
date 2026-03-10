'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, X } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'
import Image from 'next/image'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  category: string
  githubUrl?: string
  liveUrl?: string
  featured: boolean
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative glass-effect p-6 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-foreground-muted hover:text-primary-400 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Contenu du modal */}
            <div className="grid lg:grid-cols-2 gap-8">

              {/* Image */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Informations */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-400 font-medium">
                    {project.category}
                  </p>
                </div>

                <p className="text-foreground-secondary leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full text-sm border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Liens */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Live Preview
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary inline-flex items-center gap-2"
                    >
                      Source Code
                      <Github size={18} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  onClick: () => void
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="glass-effect rounded-2xl overflow-hidden hover:border-primary-500/40 transition-all duration-300">

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Overlay au hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badge featured */}
          {project.featured && (
            <div className="absolute top-4 left-4 bg-primary-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ Featured
            </div>
          )}

          {/* Boutons d'action au hover */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-primary-500 text-black rounded-full hover:bg-primary-400 transition-colors"
            >
              <Eye size={20} />
            </motion.button>
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-background-secondary text-primary-400 rounded-full hover:bg-background-tertiary transition-colors"
              >
                <Github size={20} />
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="p-3 bg-background-secondary text-primary-400 rounded-full hover:bg-background-tertiary transition-colors"
              >
                <ExternalLink size={20} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Contenu */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-primary-400 text-sm font-medium mt-1">
              {project.category}
            </p>
          </div>

          <p className="text-foreground-muted text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded text-xs border border-primary-500/20"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-background-tertiary text-foreground-muted rounded text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects = activeFilter === 'All'
    ? portfolioConfig.projects
    : portfolioConfig.projects.filter(project => project.category === activeFilter)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Arrière-plan */}
      <div className="absolute inset-0 grid-bg opacity-5" />

      <div className="section-padding max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="space-y-16"
        >

          {/* En-tête */}
          <div className="text-center space-y-4">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: 60 } : { width: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto"
            />
            <h2 className="text-3xl lg:text-4xl font-bold">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Discover a selection of my recent projects, combining creativity and technical performance
            </p>
          </div>

          {/* Filtres */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {portfolioConfig.projectCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                  ? 'bg-primary-500 text-black'
                  : 'glass-effect text-foreground-secondary hover:text-primary-400 hover:border-primary-500/40'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Grille des projets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => openModal(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Call-to-action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.8 }}
            className="text-center pt-8"
          >
            <div className="glass-effect p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Interested in my work?
              </h3>
              <p className="text-foreground-muted mb-6">
                Feel free to explore my projects or contact me to discuss new opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href={portfolioConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  See more on GitHub
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Contact me
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal des projets */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}

export default ProjectsSection