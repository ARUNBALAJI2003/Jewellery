'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Eye } from 'lucide-react'
import { Product, useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useStore((state) => state.addToCart)
  const addToWishlist = useStore((state) => state.addToWishlist)
  const removeFromWishlist = useStore((state) => state.removeFromWishlist)
  const isInWishlist = useStore((state) => state.isInWishlist(product.id))
  const { t } = useLanguage()
  const pc = t.productCard

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    if (isInWishlist) { removeFromWishlist(product.id) } else { addToWishlist(product) }
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg bg-secondary aspect-square">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-display uppercase tracking-wider rounded">{pc.new}</span>
            )}
            {product.isBestseller && (
              <span className="px-2 py-1 bg-foreground text-background text-xs font-display uppercase tracking-wider rounded">{pc.bestseller}</span>
            )}
            {product.originalPrice && (
              <span className="px-2 py-1 bg-destructive text-destructive-foreground text-xs font-display uppercase tracking-wider rounded">Sale</span>
            )}
          </div>

          <button
            onClick={handleWishlistToggle}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-label={isInWishlist ? pc.addToWishlist : pc.addToWishlist}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-accent text-accent' : ''}`} />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-2">
              <Button onClick={handleAddToCart} className="flex-1 bg-gold-gradient text-accent-foreground hover:opacity-90" size="sm">
                <ShoppingBag className="w-4 h-4 mr-2" />
                {pc.addToCart}
              </Button>
              <Button variant="secondary" size="sm" className="bg-background/80 backdrop-blur">
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{product.collection}</p>
          <h3 className="font-semibold text-lg group-hover:text-accent transition-colors">{product.name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
