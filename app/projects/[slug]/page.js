'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { projects } from '../../../lib/projects'
import FadeIn from '../../../components/FadeIn'

export default function ProjectPage({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-[#7A7A7A]">Project not found.</p>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-32">
      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="img-placeholder w-full aspect-[16/9] md:aspect-[21/9] mb-16"
      >
        {/* REPLACE: Add main project hero image */}
        <span className="opacity-30 text-[10px] tracking-[0.25em]">{project.title} — Hero Image</span>
      </motion.div>

      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Meta + title */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-2">
            <FadeIn>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-4">{project.category}</p>
              <h1 className="font-display text-[clamp(2.2rem,4vw,4rem)] font-light text-charcoal leading-[1.1] mb-6">
                {project.title}
              </h1>
              <p className="text-[14px] text-[#5A5450] leading-[1.9] font-light max-w-xl">
                {project.description}
              </p>
            </FadeIn>
          </div>

          {/* Details */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6 border-l border-[#E8E2D8] pl-8 md:mt-2">
              {[
                { label: 'Location', value: project.location },
                { label: 'Area', value: project.area },
                { label: 'Year', value: project.year },
              ].map(d => (
                <div key={d.label}>
                  <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-1">{d.label}</p>
                  <p className="text-[13px] text-charcoal font-light">{d.value}</p>
                </div>
              ))}
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-2">Scope</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(t => (
                    <span key={t} className="text-[9px] tracking-[0.1em] uppercase text-[#7A7A7A] border border-[#E8E2D8] px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Image gallery placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {[1, 2, 3, 4].map(n => (
            <FadeIn key={n} delay={n * 0.08}>
              <div className={`img-placeholder ${n === 1 || n === 4 ? 'aspect-[4/3]' : 'aspect-[4/3]'} w-full`}>
                {/* REPLACE: Add project image {n} */}
                <span className="opacity-25 text-[9px] tracking-[0.2em]">Image {n}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Wide image */}
        <FadeIn>
          <div className="img-placeholder w-full aspect-[21/9] mb-20">
            {/* REPLACE: Add wide project image */}
            <span className="opacity-25 text-[9px] tracking-[0.2em]">Wide Image</span>
          </div>
        </FadeIn>

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-[#E8E2D8] pt-10">
          <Link href="/projects" className="text-[11px] tracking-[0.2em] uppercase text-[#7A7A7A] hover:text-[#B89A6A] transition-colors">
            ← All Projects
          </Link>
          <Link href="/contact" className="text-[11px] tracking-[0.2em] uppercase text-[#B89A6A] hover:text-charcoal transition-colors">
            Start a Project →
          </Link>
        </div>
      </div>
    </div>
  )
}
