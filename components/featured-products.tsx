'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProducts } from '@/lib/products'
import { ProductCard } from './product-card'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export function FeaturedProducts() {
  const products = getFeaturedProducts()
  const { t } = useLanguage()
  const f = t.featured

  return (
    <section className="py-24 bg-[oklch(0.97_0.012_85)]">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-accent font-display tracking-[0.3em] uppercase mb-4">{f.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{f.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <Link href="/shop">{f.viewAll}<ArrowRight className="w-5 h-5 ml-2" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
