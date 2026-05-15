import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { aboutData } from '../data/portfolioData'

/**
 * About section with biography, highlight cards, and interest tags.
 */
export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            Get to know me
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Biography */}
          <motion.div variants={itemVariants}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-poppins font-semibold mb-4 text-white dark:text-white text-gray-900">
                Who I Am
              </h3>
              <p className="text-gray-400 dark:text-gray-400 text-gray-600 leading-relaxed mb-6">
                {aboutData.bio}
              </p>

              {/* Interest Tags */}
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 text-xs font-space rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutData.highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card-hover p-6 rounded-2xl group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                    <Icon size={22} className="text-indigo-400" />
                  </div>
                  <h4 className="font-poppins font-semibold text-sm mb-2 text-white dark:text-white text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-400 text-gray-500 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
