'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Gem } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="/hero-image.jpg"
        alt="Luxury jewellery background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 1 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(105deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.10) 100%)' }}
      />
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full border border-white/10 hidden lg:block pointer-events-none" />
      <div className="absolute top-32 right-32 w-56 h-56 rounded-full border border-white/10 hidden lg:block pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-36">
        <div style={{ maxWidth: '680px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2 mb-6">
            <Gem style={{ width: 18, height: 18, color: '#d4a84b' }} />
            <p style={{ color: '#d4a84b', fontFamily: 'Montserrat, system-ui, sans-serif', letterSpacing: '0.28em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 600 }}>
              {h.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, lineHeight: 1.08, color: '#ffffff', marginBottom: '1.5rem', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
          >
            {h.headline1}
            <br />
            <span style={{ background: 'linear-gradient(135deg, #f0c96a 0%, #d4a84b 50%, #a87730 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {h.headline2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '520px', fontWeight: 300 }}
          >
            {h.subheading}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Button asChild size="lg" style={{ background: 'linear-gradient(135deg, #d4a84b, #a87730)', color: '#fff', border: 'none', fontSize: '1rem', padding: '0 2rem', height: '3.2rem', boxShadow: '0 4px 20px rgba(168,119,48,0.45)' }} className="hover:opacity-90 transition-opacity">
              <Link href="/shop">{h.cta1}<ArrowRight style={{ width: 18, height: 18, marginLeft: 8 }} /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', fontSize: '1rem', padding: '0 2rem', height: '3.2rem' }} className="hover:bg-white/20 transition-colors">
              <Link href="/about">{h.cta2}</Link>
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }} style={{ display: 'flex', gap: '2.5rem', marginTop: '3.5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.18)' }}>
            {[[h.stat1num, h.stat1label], [h.stat2num, h.stat2label], [h.stat3num, h.stat3label]].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontSize: '1.9rem', fontWeight: 700, background: 'linear-gradient(135deg, #f0c96a, #d4a84b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '0.35rem' }}>{num}</p>
                <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', fontFamily: 'Montserrat, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
