import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, FolderOpen, ChevronDown } from 'lucide-react'
import { heroData } from '../data/portfolioData'

/**
 * Hero section with profile photo on the left, text on the right.
 * Features animated gradient, typing effect, CTA buttons, and tech badges.
 */
export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const currentRole = heroData.roles[roleIndex]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && text === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000)
      return
    }
    if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % heroData.roles.length)
      return
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
      )
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full"
      >
        {/* Two-column layout: Photo left, Text right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT — Profile Photo */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <div className="relative group">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"
              />
              {/* Photo container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-[3px] shadow-2xl shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow duration-500">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-900">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.jpg`}
                    alt="Sandaru Abhishek"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Status dot */}
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-emerald-500 rounded-full border-4 border-dark-900 dark:border-dark-900 border-gray-100 shadow-lg shadow-emerald-500/50" />
            </div>
          </motion.div>

          {/* RIGHT — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base font-space tracking-[0.2em] uppercase text-indigo-400 mb-4"
            >
              {heroData.greeting}
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold mb-4 leading-tight"
            >
              <span className="gradient-text">{heroData.name}</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.div variants={itemVariants} className="h-10 md:h-12 mb-6 flex items-center lg:justify-start justify-center">
              <span className="text-lg md:text-2xl font-space text-gray-300 dark:text-gray-300 text-gray-600">
                <span className="typing-cursor">{text}</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 dark:text-gray-400 text-gray-500 max-w-xl mb-10 leading-relaxed lg:mx-0 mx-auto"
            >
              {heroData.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center lg:justify-start justify-center gap-4 mb-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                href={`${import.meta.env.BASE_URL}Sandaru_Abhishek_CV.pdf`}
                download="Sandaru_Abhishek_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 rounded-xl font-semibold transition-all border border-indigo-500/20 hover:border-indigo-500/40"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 glass-card hover:bg-white/10 rounded-xl font-semibold transition-all border border-purple-500/20 hover:border-purple-500/40"
              >
                <FolderOpen size={18} />
                View Projects
              </motion.a>
            </motion.div>

            {/* Tech Stack Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap lg:justify-start justify-center gap-2">
              {heroData.techBadges.map((badge, i) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-3 py-1.5 text-xs font-space font-medium rounded-full bg-white/[0.06] border border-white/[0.1] text-gray-300 dark:text-gray-300 text-gray-600 hover:border-indigo-500/30 hover:text-indigo-400 transition-all cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
