'use client'
import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

export default function AboutPage() {
  return (
    <div className="pt-28 pb-32">
      {/* Hero */}
      <div className="px-6 md:px-16 mb-20 max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-4"
        >
          The Studio
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-[clamp(2.5rem,5vw,5rem)] font-light text-charcoal leading-[1.05]"
        >
          Rooted in restraint.<br />
          <span className="italic">Refined by precision.</span>
        </motion.h1>
      </div>

      {/* Founder section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-24">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="img-placeholder aspect-[3/4] md:aspect-auto min-h-[500px]"
        >
          {/* REPLACE: Add portrait photo of Nitant Khanna */}
          <span className="opacity-30 text-[10px] tracking-[0.2em]">Founder Portrait — Nitant Khanna</span>
        </motion.div>

        {/* Content */}
        <div className="bg-[#FAF7F2] px-8 md:px-16 py-16 md:py-20 flex flex-col justify-center">
          <FadeIn>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-6">The Founder</p>
            <h2 className="font-display text-4xl font-light text-charcoal mb-2">Nitant Khanna</h2>
            <p className="text-[11px] tracking-[0.1em] uppercase text-[#7A7A7A] mb-8 font-light">Principal Designer & Founder</p>
            <div className="space-y-5 text-[13px] text-[#5A5450] leading-[1.9] font-light">
              <p>
                {/* REPLACE: Founder bio paragraph 1 */}
                With over a decade of experience across luxury residential and commercial spaces, Nitant brings a rare combination of spatial sensitivity and material obsession to every project.
              </p>
              <p>
                {/* REPLACE: Founder bio paragraph 2 */}
                His approach begins with listening — each space is understood before it is designed, each client's rhythm absorbed before a single line is drawn. The result is interiors that feel inevitable rather than imposed.
              </p>
              <p>
                {/* REPLACE: Founder bio paragraph 3 */}
                Before founding Bard Spaces, Nitant worked across hospitality, high-end residential, and commercial projects, developing an eye for the details that distinguish a designed space from a lived-in one.
              </p>
            </div>
            <div className="mt-10 pt-8 border-t border-[#E8E2D8]">
              <p className="font-display text-xl italic text-charcoal leading-relaxed">
                "Every room should tell a story without speaking."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Studio philosophy */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-24">
        <FadeIn>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-12">The Studio</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <FadeIn delay={0.1}>
            <p className="text-[14px] text-[#5A5450] leading-[1.9] font-light">
              Bard Spaces is a luxury interior design studio based in New Delhi, crafting residential and hospitality spaces that balance architecture, material, and light.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[14px] text-[#5A5450] leading-[1.9] font-light">
              We were founded with the belief that true luxury is quiet — it does not announce itself. It reveals itself slowly, in the quality of a surface, the proportion of a room, the way light moves across a wall at dusk.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Three values */}
      <div className="bg-[#141210] px-6 md:px-16 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-14 text-center">Our Values</p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              { word: 'Craft', desc: 'We obsess over the details most people never consciously notice — because they feel them.' },
              { word: 'Restraint', desc: 'We remove before we add. Luxury lives in what is left out as much as what is put in.' },
              { word: 'Intention', desc: 'Every element is a decision. There are no accidents, no fillers, no decorative noise.' },
            ].map((v, i) => (
              <FadeIn key={v.word} delay={i * 0.12}>
                <div className="border-t border-[#2A2520] pt-6">
                  <h3 className="font-display text-2xl text-[#F5F0E8] font-light mb-4">{v.word}</h3>
                  <p className="text-[12px] text-[#5A5450] leading-[1.8] font-light">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
