import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experienceData } from '../data/portfolioData'

/**
 * Experience section with a vertical timeline layout.
 * Cards alternate sides on desktop, stack on mobile.
 */
export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            My Journey
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line" />

          {experienceData.map((item, i) => {
            const Icon = item.icon
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 md:mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
                  <Icon size={18} className="text-white" />
                </div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card-hover p-6 rounded-2xl"
                  >
                    <span className="inline-block px-3 py-1 text-[10px] font-space font-semibold tracking-wider uppercase rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 mb-3">
                      {item.year}
                    </span>
                    <h3 className="font-poppins font-semibold text-lg mb-1 text-white dark:text-white text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-indigo-400/80 font-space mb-3">{item.org}</p>
                    <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
