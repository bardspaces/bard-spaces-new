'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeIn from '../../components/FadeIn'

const services = [
  {
    number: '01',
    title: 'Full Interior Design',
    short: 'End-to-end design across all spaces.',
    description: 'Our complete design service covers everything from spatial planning and material selection through to lighting design, furniture specification, and final styling. We work with you from the first concept to the last cushion.',
    includes: [
      'Spatial planning & layout',
      'Material & finish selection',
      'Custom furniture design',
      'Lighting design',
      'Joinery & millwork design',
      'Final styling & accessorising',
    ],
  },
  {
    number: '02',
    title: 'Project Supervision',
    short: 'Design intent executed to the last detail.',
    description: 'We represent your design on site — attending site visits, coordinating with contractors and vendors, and ensuring that what was designed is what gets built. The gap between drawing and reality is where most projects lose their quality.',
    includes: [
      'Regular site visits',
      'Contractor coordination',
      'Material & sample approvals',
      'Quality control inspections',
      'Vendor management',
      'Final handover snag list',
    ],
  },
  {
    number: '03',
    title: 'Interior Styling',
    short: 'The final layer that transforms a space.',
    description: 'A designed space is a shell. Styling is what makes it feel inhabited. We curate the art, objects, soft furnishings, plants, books, and incidental details that give a room its soul — without tipping into clutter.',
    includes: [
      'Art selection & placement',
      'Soft furnishings curation',
      'Object & accessory sourcing',
      'Rug & cushion specification',
      'Plant & greenery styling',
      'Final photography ready setup',
    ],
  },
  {
    number: '04',
    title: 'Loose Furniture',
    short: 'Bespoke curation for every space.',
    description: 'We source and specify loose furniture — sofas, beds, dining tables, coffee tables, side tables, and occasional pieces — from domestic and international vendors, or commission custom pieces where nothing off-the-shelf will do.',
    includes: [
      'Full furniture specification',
      'Custom commission briefs',
      'Domestic & international sourcing',
      'Procurement management',
      'Delivery & placement coordination',
      'Post-installation adjustments',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-32">
      {/* Header */}
      <div className="px-6 md:px-16 mb-20 max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-4"
        >
          What We Offer
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-charcoal leading-[1.1] mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[13px] text-[#7A7A7A] leading-relaxed font-light"
        >
          Every project begins with a conversation. From that, we build a scope that is exactly right for you — no more, no less.
        </motion.p>
      </div>

      {/* Services list */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <FadeIn key={s.number} delay={i * 0.05}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-14 border-b border-[#E8E2D8]">
              {/* Left */}
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#B89A6A] mb-3">{s.number}</p>
                <h2 className="font-display text-2xl md:text-3xl font-light text-charcoal mb-3">{s.title}</h2>
                <p className="text-[12px] text-[#7A7A7A] font-light italic">{s.short}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-[13px] text-[#5A5450] leading-[1.9] font-light">{s.description}</p>
              </div>

              {/* Includes */}
              <div>
                <p className="text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-4">Includes</p>
                <ul className="space-y-2">
                  {s.includes.map(item => (
                    <li key={item} className="flex items-start gap-3 text-[12px] text-[#5A5450] font-light">
                      <span className="w-3 h-[1px] bg-[#B89A6A] mt-[9px] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Process */}
      <div className="bg-[#141210] px-6 md:px-16 py-24 md:py-32 mt-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-14">How We Work</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: '01', title: 'Vibe Presentation', desc: 'We open with mood and atmosphere — establishing the emotional direction of the space.' },
              { n: '02', title: 'Concept Presentation', desc: 'A detailed concept developed from the selected vibe, presented as a full design board.' },
              { n: '03', title: '3D Visualisation', desc: 'Photorealistic renders bringing the concept to life before any work begins.' },
              { n: '04', title: 'Execution', desc: 'Material selections, 2D drawings, site supervision, and styling to completion.' },
            ].map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.1}>
                <div className="border-t border-[#2A2520] pt-6">
                  <p className="text-[10px] text-[#B89A6A] mb-4 tracking-[0.2em]">{step.n}</p>
                  <h3 className="font-display text-xl text-[#F5F0E8] font-light mb-3">{step.title}</h3>
                  <p className="text-[11px] text-[#5A5450] leading-[1.8] font-light">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 md:px-16 py-24 text-center">
        <FadeIn>
          <p className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light text-charcoal mb-8">
            Every project begins with a conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-charcoal border border-charcoal px-8 py-4 hover:bg-charcoal hover:text-[#F5F0E8] transition-all duration-400"
          >
            Reach Out <span>→</span>
          </Link>
        </FadeIn>
      </div>
    </div>
  )
}
