'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import FadeIn from '../components/FadeIn'
import { projects } from '../lib/projects'

// Staggered word-reveal animation
function HeroText({ text, className }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-16 overflow-hidden">
        {/* REPLACE: Hero background image */}
        <div className="absolute inset-0 img-placeholder">
          <span className="text-[10px] tracking-[0.25em] opacity-30">HERO IMAGE — REPLACE WITH PROJECT PHOTO</span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[10px] tracking-[0.3em] uppercase text-[#B89A6A] mb-6"
          >
            Interior Design Studio — New Delhi
          </motion.p>

          <h1 className="font-display font-light text-[#F5F0E8] leading-[1.05] mb-8">
            <HeroText
              text="Spaces Designed"
              className="block text-[clamp(3rem,8vw,7rem)]"
            />
            <HeroText
              text="to Endure."
              className="block text-[clamp(3rem,8vw,7rem)] italic"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8] border border-[#F5F0E8]/30 px-7 py-4 hover:border-[#B89A6A] hover:text-[#B89A6A] transition-all duration-300"
            >
              View Our Work
              <span className="text-base">→</span>
            </Link>
            <Link
              href="/contact"
              className="text-[11px] tracking-[0.2em] uppercase text-[#B89A6A] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 right-6 md:right-16 flex flex-col items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-[1px] h-14 bg-gradient-to-b from-transparent to-[#B89A6A]"
          />
          <p className="text-[8px] tracking-[0.25em] uppercase text-[#B89A6A] rotate-90 origin-center mt-2">Scroll</p>
        </motion.div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section className="px-6 md:px-16 py-24 md:py-36 max-w-4xl">
        <FadeIn>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-8">Our Philosophy</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="font-display text-[clamp(1.6rem,3.5vw,2.8rem)] font-light text-charcoal leading-[1.35]">
            We believe true luxury is quiet. It does not announce itself — it reveals itself slowly, in the quality of a surface, the proportion of a room, the way light moves across a wall at dusk.
          </p>
        </FadeIn>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="px-6 md:px-16 pb-24 md:pb-36">
        <FadeIn>
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-3">Selected Work</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-charcoal">Recent Projects</h2>
            </div>
            <Link href="/projects" className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#B89A6A] transition-colors duration-300">
              All Work <span>→</span>
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-14 md:hidden">
          <Link href="/projects" className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-[#7A7A7A] hover:text-[#B89A6A] transition-colors duration-300">
            View All Work <span>→</span>
          </Link>
        </div>
      </section>

      {/* ── SERVICES STRIP ── */}
      <section className="bg-[#141210] px-6 md:px-16 py-24 md:py-32">
        <FadeIn>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-14 text-center">What We Do</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Full Interior Design', desc: 'End-to-end design across spatial planning, material selection, and lighting.' },
            { title: 'Project Supervision', desc: 'On-site representation ensuring design intent is executed to the last detail.' },
            { title: 'Interior Styling', desc: 'Curating accessories, art, and soft furnishings that complete a space.' },
            { title: 'Loose Furniture', desc: 'Bespoke furniture curation — sofas, beds, tables, and occasional pieces.' },
          ].map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="border-t border-[#2A2520] pt-6">
                <h3 className="font-display text-xl text-[#F5F0E8] font-light mb-3">{s.title}</h3>
                <p className="text-[12px] text-[#5A5450] leading-relaxed font-light">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section className="relative py-32 md:py-48 px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 img-placeholder opacity-30">
          {/* REPLACE: Add a moody interior photo here */}
        </div>
        <div className="absolute inset-0 bg-[#FAF7F2]/85" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light italic text-charcoal leading-relaxed mb-8">
              "Every room should tell a story without speaking."
            </p>
            <div className="w-8 h-[1px] bg-[#B89A6A] mx-auto mb-5" />
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#B89A6A]">Nitant Khanna</p>
            <p className="text-[10px] tracking-[0.15em] uppercase text-[#7A7A7A] mt-1">Principal Designer & Founder</p>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="bg-[#1A1814] px-6 md:px-16 py-20 md:py-24 text-center">
        <FadeIn>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-[#F5F0E8] mb-6">
            Every great space begins<br className="hidden md:block" /> with a conversation.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8] border border-[#B89A6A] px-8 py-4 mt-4 hover:bg-[#B89A6A] hover:text-[#141210] transition-all duration-400"
          >
            Begin Yours <span>→</span>
          </Link>
        </FadeIn>
      </section>
    </>
  )
}
