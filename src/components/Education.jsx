import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, MapPin, BookOpen } from 'lucide-react'
import { educationData } from '../data/portfolioData'

/**
 * Education section with a featured card displaying university details.
 */
export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -5 }}
          className="glass-card-hover p-8 md:p-10 rounded-2xl relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 flex-shrink-0">
              <GraduationCap size={32} className="text-white" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 text-[10px] font-space font-semibold tracking-wider uppercase rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  {educationData.status}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-poppins font-bold mb-2 text-white dark:text-white text-gray-900">
                {educationData.degree}
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="flex items-center gap-1.5 text-sm text-indigo-400 font-space">
                  <BookOpen size={14} />
                  {educationData.university}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-gray-400 font-space">
                  <MapPin size={14} />
                  Sri Lanka
                </span>
              </div>

              <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-500 leading-relaxed">
                {educationData.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
