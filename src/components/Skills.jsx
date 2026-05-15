import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { skillsData } from '../data/portfolioData'

/**
 * Skills section with three tabs: Technical, Research, Soft Skills.
 * Technical skills show animated progress bars.
 * Research and Soft skills show icon cards.
 */
export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeTab, setActiveTab] = useState('technical')

  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'research', label: 'Research Interests' },
    { id: 'soft', label: 'Soft Skills' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            My Expertise
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Skills & Interests
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-1.5 rounded-xl flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills — Progress Bars */}
        {activeTab === 'technical' && (
          <motion.div
            key="technical"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {skillsData.technical.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass-card p-5 rounded-xl group hover:bg-white/[0.06] transition-all"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-space font-medium text-sm text-gray-200 dark:text-gray-200 text-gray-700">
                    {skill.name}
                  </span>
                  <span className="text-xs font-space text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] rounded-full" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Research Interests — Icon Cards */}
        {activeTab === 'research' && (
          <motion.div
            key="research"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {skillsData.research.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="glass-card-hover p-6 rounded-xl text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center mx-auto mb-3 group-hover:from-indigo-500/25 group-hover:to-purple-500/25 transition-all">
                    <Icon size={24} className="text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <span className="text-sm font-space font-medium text-gray-300 dark:text-gray-300 text-gray-600">
                    {item.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Soft Skills — Icon Cards */}
        {activeTab === 'soft' && (
          <motion.div
            key="soft"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {skillsData.soft.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="glass-card-hover p-6 rounded-xl text-center group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/15 flex items-center justify-center mx-auto mb-3 group-hover:from-purple-500/25 group-hover:to-pink-500/25 transition-all">
                    <Icon size={24} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                  </div>
                  <span className="text-sm font-space font-medium text-gray-300 dark:text-gray-300 text-gray-600">
                    {item.name}
                  </span>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
