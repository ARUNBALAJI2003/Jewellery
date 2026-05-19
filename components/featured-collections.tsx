'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/lib/products'
import { useLanguage } from '@/lib/language-context'

export function FeaturedCollections() {
  const { t } = useLanguage()
  const col = t.collections

  const collectionTranslations: Record<string, { name: string; description: string }> = {
    eternal: col.eternal,
    celestial: col.celestial,
    ocean: col.ocean,
    royal: col.royal,
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{col.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{col.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => {
            const tr = collectionTranslations[collection.id] || { name: collection.name, description: collection.description }
            return (
              <motion.div key={collection.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Link href={`/collections/${collection.slug}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md">
                    <img src={collection.image} alt={tr.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-semibold mb-2 text-white">{tr.name}</h3>
                      <p className="text-sm text-white/70 mb-4 line-clamp-2">{tr.description}</p>
                      <span className="inline-flex items-center text-[oklch(0.85_0.1_65)] font-display text-sm tracking-wider uppercase group-hover:gap-2 transition-all">
                        {col.explore} <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
