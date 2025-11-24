'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Send,
  Check,
  AlertCircle
} from 'lucide-react'
import { portfolioConfig } from '@/config/portfolio'

// Schéma de validation
const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Configuration EmailJS
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: portfolioConfig.personal.name,
      }

      await emailjs.send(
        portfolioConfig.emailjs.serviceId,
        portfolioConfig.emailjs.templateId,
        templateParams,
        portfolioConfig.emailjs.publicKey
      )

      setSubmitStatus('success')
      reset()
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Arrière-plan */}
      <div className="absolute inset-0 bg-background-secondary" />
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="section-padding max-width-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
              Travaillons <span className="text-gradient">ensemble</span>
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              Vous avez un projet en tête ? N&apos;hésitez pas à me contacter pour en discuter.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Informations de contact */}
            <motion.div variants={itemVariants} className="space-y-8">
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Restons en contact
                </h3>
                <p className="text-foreground-secondary leading-relaxed">
                  Je suis toujours ouvert aux nouvelles opportunités et collaborations. 
                  Que ce soit pour un projet, une opportunité ou simplement pour discuter 
                  de développement web, n&apos;hésitez pas à me contacter.
                </p>
              </div>

              {/* Coordonnées */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-lg group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Mail className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${portfolioConfig.personal.email}`}
                      className="text-foreground-secondary hover:text-primary-400 transition-colors"
                    >
                      {portfolioConfig.personal.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-lg group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <Phone className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a 
                      href={`tel:${portfolioConfig.personal.phone}`}
                      className="text-foreground-secondary hover:text-primary-400 transition-colors"
                    >
                      {portfolioConfig.personal.phone}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-lg group"
                >
                  <div className="p-3 bg-primary-500/10 rounded-lg group-hover:bg-primary-500/20 transition-colors">
                    <MapPin className="text-primary-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localisation</p>
                    <p className="text-foreground-secondary">
                      {portfolioConfig.personal.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Réseaux sociaux */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Retrouvez-moi sur</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href={portfolioConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-effect rounded-lg text-foreground-secondary hover:text-primary-400 hover:border-primary-500/40 transition-all"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    href={portfolioConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-effect rounded-lg text-foreground-secondary hover:text-primary-400 hover:border-primary-500/40 transition-all"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href={portfolioConfig.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 glass-effect rounded-lg text-foreground-secondary hover:text-primary-400 hover:border-primary-500/40 transition-all"
                  >
                    <Twitter size={24} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Formulaire de contact */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 glass-effect rounded-lg border border-primary-500/20 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 text-foreground placeholder-foreground-muted transition-colors"
                    placeholder="Votre nom complet"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Adresse email
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 glass-effect rounded-lg border border-primary-500/20 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 text-foreground placeholder-foreground-muted transition-colors"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Sujet */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 glass-effect rounded-lg border border-primary-500/20 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 text-foreground placeholder-foreground-muted transition-colors"
                    placeholder="Sujet de votre message"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 glass-effect rounded-lg border border-primary-500/20 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400 text-foreground placeholder-foreground-muted transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Bouton d'envoi */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black animate-spin rounded-full" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>

                {/* Messages de statut */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20"
                  >
                    <Check size={20} />
                    <span>Message envoyé avec succès ! Je vous répondrai bientôt.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
                  >
                    <AlertCircle size={20} />
                    <span>Erreur lors de l&apos;envoi. Veuillez réessayer ou me contacter directement.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection