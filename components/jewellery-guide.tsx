'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const guideImages = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  '/diamond-clarity.jpg',
  'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
]

export function JewelleryGuide() {
  const { t } = useLanguage()
  const g = t.guide

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{g.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold">{g.title}</h2>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 font-display text-sm tracking-wider uppercase text-accent hover:gap-4 transition-all">
            {g.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {g.guides.map((guide, i) => (
            <motion.div key={guide.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img src={guideImages[i]} alt={guide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-accent text-xs font-display font-semibold tracking-widest uppercase px-3 py-1 rounded-full">{guide.tag}</span>
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">{guide.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{guide.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
