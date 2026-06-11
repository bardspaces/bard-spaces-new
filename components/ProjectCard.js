'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Image */}
        <div className="overflow-hidden aspect-[4/3] mb-5">
          <div
            className="img-placeholder w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.04]"
          >
            {/* REPLACE: Add project image here */}
            <span className="opacity-40">{project.title}</span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#B89A6A] mb-2">{project.category}</p>
            <h3 className="font-display text-xl font-light text-charcoal group-hover:text-[#8C7460] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-[11px] text-[#7A7A7A] mt-1 font-light">{project.location}</p>
          </div>
          <span className="text-[#B89A6A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 text-lg">→</span>
        </div>
      </motion.div>
    </Link>
  )
}
