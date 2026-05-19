'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { collections, getProductsByCollection } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export default function CollectionPage() {
  const params = useParams()
  const slug = params.slug as string
  const collection = collections.find((c) => c.slug === slug)
  const products = getProductsByCollection(slug)

  if (!collection) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Collection not found</h1>
          <Button asChild>
            <Link href="/collections">View All Collections</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={collection.image}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>
        <div className="relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-display tracking-[0.3em] uppercase mb-4"
          >
            Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg"
          >
            {collection.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 max-w-xl mx-auto"
          >
            {collection.description}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No products in this collection yet.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
