'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(184,154,106,0.15)]' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="font-display text-[13px] tracking-[0.28em] text-charcoal uppercase font-light">
          Bard Spaces
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-[11px] tracking-[0.2em] uppercase text-[#5A5248] hover:text-charcoal transition-colors duration-300 font-light"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] w-7 h-7 justify-center items-end z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
            className="block h-[1px] bg-charcoal origin-center transition-all"
            style={{ width: '24px' }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[1px] bg-charcoal"
            style={{ width: '16px' }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
            className="block h-[1px] bg-charcoal origin-center"
            style={{ width: '24px' }}
          />
        </button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#141210] flex flex-col items-center justify-center gap-12"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-5xl text-[#F5F0E8] font-light tracking-wide hover:text-[#B89A6A] transition-colors duration-300"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-[10px] tracking-[0.25em] text-[#5A5248] uppercase"
            >
              bardspaces.in
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
