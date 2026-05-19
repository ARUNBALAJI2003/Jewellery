'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const articleImages = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
  'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80',
  '/emerald-stone.jpg',
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
  '/necklace-layering.jpg',
]

export default function JournalPage() {
  const { t } = useLanguage()
  const j = t.journal

  const articles = j.articles.map((a, i) => ({ ...a, id: i + 1, image: articleImages[i], featured: i === 0 }))
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <main className="pt-20">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{j.eyebrow}</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{j.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{j.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-gold-gradient text-white text-xs font-display tracking-widest uppercase px-3 py-1 rounded-full">{j.featured}</span>
            </div>
            <div>
              <span className="text-accent font-display text-sm tracking-widest uppercase">{featured.category}</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{featured.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featured.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => (
              <motion.article key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-background rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 bg-white/90 text-accent text-xs font-display tracking-widest uppercase px-3 py-1 rounded-full">{article.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{article.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
