import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react'
import { navLinks, contactData } from '../data/portfolioData'

/**
 * Footer with quick links, social icons, and copyright.
 */
export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/[0.06] bg-dark-900/50 dark:bg-dark-900/50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-sm font-poppins font-bold text-white">SA</span>
              </div>
              <span className="font-poppins font-semibold text-lg gradient-text">
                Sandaru Abhishek
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-400 text-gray-500 leading-relaxed max-w-xs">
              AI & Software Research Enthusiast. Building innovative solutions for real-world challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-gray-400 hover:text-indigo-400 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-poppins font-semibold text-sm uppercase tracking-wider text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: contactData.github },
                { icon: Linkedin, href: contactData.linkedin },
                { icon: Mail, href: `mailto:${contactData.email}` },
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:bg-indigo-500/15 hover:border-indigo-500/30 transition-all"
                  >
                    <Icon size={18} className="text-gray-400 hover:text-indigo-400" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-space">
            © {new Date().getFullYear()} Sandaru Abhishek. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-gray-500 font-space">
            Built with <Heart size={12} className="text-pink-500" /> using
            <Code2 size={12} className="text-indigo-400" /> React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
