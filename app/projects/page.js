'use client'
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import FadeIn from '../../components/FadeIn'
import { projects } from '../../lib/projects'

export default function ProjectsPage() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-16">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-4"
        >
          Selected Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-charcoal leading-[1.1] mb-6"
        >
          Our Work
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] text-[#7A7A7A] leading-relaxed font-light max-w-lg"
        >
          Each project is a response to its owner — their rhythms, their aesthetic, their life. We design spaces that endure.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  )
}
