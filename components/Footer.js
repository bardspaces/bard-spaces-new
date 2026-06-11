'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#141210] text-[#F5F0E8] px-6 md:px-16 pt-20 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-16 border-b border-[#2A2520]">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-light tracking-[0.15em] mb-3">Bard Spaces</p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5248]">New Delhi, India</p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#5A5248] mb-1">Navigation</p>
            {['Work', 'About', 'Services', 'Contact'].map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase() === 'work' ? 'projects' : l.toLowerCase()}`}
                className="text-sm text-[#9A9490] hover:text-[#B89A6A] transition-colors duration-300 font-light"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#5A5248] mb-1">Get in Touch</p>
            <a href="mailto:hello@bardspaces.in" className="text-sm text-[#9A9490] hover:text-[#B89A6A] transition-colors duration-300">
              hello@bardspaces.in
            </a>
            <a href="tel:+917610058783" className="text-sm text-[#9A9490] hover:text-[#B89A6A] transition-colors duration-300">
              +91 76100 58783
            </a>
            <a href="https://bardspaces.in" className="text-sm text-[#9A9490] hover:text-[#B89A6A] transition-colors duration-300">
              bardspaces.in
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#3A3530]">
            © {new Date().getFullYear()} Bard Spaces. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#3A3530]">
            Spaces Designed to Endure
          </p>
        </div>
      </div>
    </footer>
  )
}
