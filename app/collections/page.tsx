'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { collections } from '@/lib/products'
import { useLanguage } from '@/lib/language-context'

export default function CollectionsPage() {
  const { t } = useLanguage()
  const cp = t.collectionsPage

  return (
    <div className="pt-20 min-h-screen">
      <section className="relative h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=100" alt="Collections" className="w-full h-full object-cover" style={{ filter: 'brightness(0.85)' }} />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">{cp.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/80">{cp.subtitle}</motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <motion.div key={collection.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
                    <p className="text-muted-foreground mb-4">{collection.description}</p>
                    <span className="inline-flex items-center text-accent font-display text-sm tracking-wider uppercase group-hover:gap-3 transition-all">
                      {cp.shopCollection} <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
