import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, Phone } from 'lucide-react'
import { contactData } from '../data/portfolioData'

/**
 * Contact section with animated form and social links.
 */
export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const socialLinks = [
    { icon: Mail, label: 'Email', value: contactData.email, href: `mailto:${contactData.email}` },
    { icon: Phone, label: 'Phone', value: contactData.phone, href: `tel:${contactData.phone.replace(/\s+/g, '')}` },
    { icon: Github, label: 'GitHub', value: 'GitHub Profile', href: contactData.github },
    { icon: Linkedin, label: 'LinkedIn', value: 'LinkedIn Profile', href: contactData.linkedin },
    { icon: MapPin, label: 'Location', value: contactData.location, href: '#' },
  ]

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-space tracking-[0.2em] uppercase text-indigo-400 mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold gradient-text mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-gray-400 dark:text-gray-400 text-gray-500 text-sm leading-relaxed mb-6">
              I&apos;m always open to discussing new projects, research collaborations,
              internship opportunities, or just having a conversation about AI and technology.
            </p>

            {socialLinks.map((link, i) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-card-hover rounded-xl group"
                >
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-indigo-500/15 to-purple-500/15 flex items-center justify-center group-hover:from-indigo-500/25 group-hover:to-purple-500/25 transition-all">
                    <Icon size={20} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-space uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-space text-gray-400 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-space text-gray-400 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-space text-gray-400 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-space text-gray-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white dark:text-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                  placeholder="Tell me about your idea or opportunity..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
