'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../../components/FadeIn'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // REPLACE: Hook up to your email / form backend here
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <div className="pt-28 pb-32">
      <div className="px-6 md:px-16 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.25em] uppercase text-[#B89A6A] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-charcoal leading-[1.1]"
          >
            Let's create something<br />
            <span className="italic">considered.</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-20">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <FadeIn>
                <div className="py-16">
                  <p className="font-display text-3xl text-charcoal font-light mb-4">Thank you.</p>
                  <p className="text-[13px] text-[#7A7A7A] font-light leading-relaxed">
                    We've received your message and will be in touch shortly. Every great space begins with a conversation — we look forward to this one.
                  </p>
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-3">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent border-b border-[#D4CFC8] focus:border-[#B89A6A] outline-none py-3 text-[13px] text-charcoal font-light placeholder:text-[#C4BFB8] transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-3">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        inputMode="email"
                        className="w-full bg-transparent border-b border-[#D4CFC8] focus:border-[#B89A6A] outline-none py-3 text-[13px] text-charcoal font-light placeholder:text-[#C4BFB8] transition-colors duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone + Project type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-3">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        inputMode="tel"
                        className="w-full bg-transparent border-b border-[#D4CFC8] focus:border-[#B89A6A] outline-none py-3 text-[13px] text-charcoal font-light placeholder:text-[#C4BFB8] transition-colors duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-3">Project Type</label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-[#D4CFC8] focus:border-[#B89A6A] outline-none py-3 text-[13px] text-charcoal font-light transition-colors duration-300 appearance-none"
                      >
                        <option value="">Select type</option>
                        <option>Residential</option>
                        <option>Commercial / F&B</option>
                        <option>Styling Only</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[9px] tracking-[0.2em] uppercase text-[#B89A6A] mb-3">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-transparent border-b border-[#D4CFC8] focus:border-[#B89A6A] outline-none py-3 text-[13px] text-charcoal font-light placeholder:text-[#C4BFB8] transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project — location, size, timeline, anything relevant."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-charcoal border border-charcoal px-8 py-4 hover:bg-charcoal hover:text-[#F5F0E8] transition-all duration-400 mt-2"
                  >
                    Send Message <span>→</span>
                  </button>
                </form>
              </FadeIn>
            )}
          </div>

          {/* Info */}
          <FadeIn delay={0.2} className="md:col-span-2">
            <div className="space-y-10 border-l border-[#E8E2D8] pl-10">
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-3">Studio</p>
                <p className="text-[13px] text-charcoal font-light">Bard Spaces</p>
                <p className="text-[12px] text-[#7A7A7A] font-light">New Delhi, India</p>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-3">Email</p>
                <a href="mailto:hello@bardspaces.in" className="text-[13px] text-charcoal hover:text-[#B89A6A] transition-colors font-light">
                  hello@bardspaces.in
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-3">Phone</p>
                <a href="tel:+917610058783" className="text-[13px] text-charcoal hover:text-[#B89A6A] transition-colors font-light">
                  +91 76100 58783
                </a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase text-[#B89A6A] mb-3">Response time</p>
                <p className="text-[12px] text-[#7A7A7A] font-light">We respond to every enquiry within 48 hours.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
