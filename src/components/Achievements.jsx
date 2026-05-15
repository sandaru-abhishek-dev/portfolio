import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { achievementsData } from '../data/portfolioData'

/**
 * Achievements section with animated icon cards and gradient accents.
 */
export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="achievements" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            Milestones
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card-hover p-7 rounded-2xl group relative overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-base mb-2 text-white dark:text-white text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
