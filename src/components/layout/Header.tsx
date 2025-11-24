'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Détection de la section active
      const sections = portfolioConfig.navigation.map(item => 
        item.href.replace('#', '')
      )

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-primary-500/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="section-padding max-width-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            &lt;{portfolioConfig.personal.name.split(' ')[0]}/&gt;
          </motion.div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {portfolioConfig.navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary-400 ${
                  activeSection === item.href.replace('#', '')
                    ? 'text-primary-400'
                    : 'text-foreground-secondary'
                }`}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-400"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Liens sociaux Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href={portfolioConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href={`mailto:${portfolioConfig.personal.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </div>

          {/* Menu Mobile */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-background-secondary/95 backdrop-blur-md border-t border-primary-500/20"
            >
              <div className="py-4 space-y-2">
                {portfolioConfig.navigation.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ x: 10 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.href.replace('#', '')
                        ? 'text-primary-400 bg-primary-500/10'
                        : 'text-foreground-secondary hover:text-primary-400 hover:bg-primary-500/5'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Liens sociaux Mobile */}
                <div className="flex items-center justify-center space-x-6 pt-4 border-t border-primary-500/20">
                  <motion.a
                    href={portfolioConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={portfolioConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${portfolioConfig.personal.email}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-foreground-secondary hover:text-primary-400 transition-colors"
                  >
                    <Mail size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header