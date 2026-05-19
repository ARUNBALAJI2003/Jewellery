'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function CraftStory() {
  const { t } = useLanguage()
  const c = t.craft

  return (
    <section className="py-24 bg-background overflow-hidden" style={{ fontFamily: 'var(--font-bodoni, Georgia, serif)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative overflow-hidden aspect-[4/5]">
              <img src="/kundan-necklace.jpg" alt="Handcrafted kundan necklace — AURUM heritage piece" className="w-full h-full object-cover object-top" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-accent tracking-[0.3em] uppercase mb-4 text-sm font-semibold" style={{ fontFamily: 'var(--font-dmsans, sans-serif)' }}>
              {c.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              {c.title1}<br />
              <span className="text-gold-gradient">{c.title2}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 text-base">{c.p1}</p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">{c.p2}</p>
            <div className="grid grid-cols-3 gap-6 mb-8 pt-6 border-t border-border">
              {[[c.stat1num, c.stat1label], [c.stat2num, c.stat2label], [c.stat3num, c.stat3label]].map(([num, label]) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-gold-gradient mb-1">{num}</p>
                  <p className="text-xs text-muted-foreground tracking-wide uppercase" style={{ fontFamily: 'var(--font-dmsans, sans-serif)', fontWeight: 600 }}>{label}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm tracking-wider uppercase text-accent hover:gap-4 transition-all font-semibold" style={{ fontFamily: 'var(--font-dmsans, sans-serif)' }}>
              {c.cta} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
