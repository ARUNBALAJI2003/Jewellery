'use client'

import { motion } from 'framer-motion'
import { Pencil, Gem, Package, Star, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import { useLanguage } from '@/lib/language-context'

const stepIcons = [Pencil, Gem, Package, Star]

const gallery = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
]

export default function CustomPage() {
  const { t } = useLanguage()
  const b = t.Custom

  return (
    <main className="pt-20">
      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-bg" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{b.eyebrow}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {b.title1}<br /><span className="text-gold-gradient">{b.title2}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{b.subtitle}</p>
            <Link href="/contact">
              <Button size="lg" className="bg-gold-gradient text-white hover:opacity-90">
                {b.cta} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{b.processEyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold">{b.processTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {b.steps.map((step, i) => {
              const Icon = stepIcons[i]
              return (
                <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-accent font-display text-xs tracking-widest uppercase mb-2">{step.step}</p>
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">{b.galleryTitle}</h2>
            <p className="text-muted-foreground mt-4">{b.gallerySubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="aspect-square overflow-hidden rounded-xl">
                <img src={img} alt="Custom piece" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{b.includesTitle}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {b.includes.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/contact">
                <Button size="lg" className="bg-gold-gradient text-white hover:opacity-90">
                  {b.consultCta} <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
