'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const posts = [
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=400&q=80',
  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80',
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80',
  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80',
]

export function InstagramFeed() {
  const { t } = useLanguage()
  const ig = t.instagram

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{ig.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{ig.title}</h2>
          <p className="text-muted-foreground">{ig.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((src, i) => (
            <motion.a key={i} href="https://instagram.com" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group relative aspect-square overflow-hidden rounded-lg">
              <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
