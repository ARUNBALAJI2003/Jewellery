'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function WishlistPage() {
  const wishlist = useStore((state) => state.wishlist)
  const removeFromWishlist = useStore((state) => state.removeFromWishlist)
  const addToCart = useStore((state) => state.addToCart)
  const { t } = useLanguage()
  const w = t.wishlist

  const handleMoveToCart = (productId: string) => {
    const product = wishlist.find((item) => item.id === productId)
    if (product) { addToCart(product); removeFromWishlist(productId) }
  }

  if (wishlist.length === 0) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
            <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-4">{w.emptyTitle}</h1>
            <p className="text-muted-foreground mb-8">{w.emptyMsg}</p>
            <Button asChild className="bg-gold-gradient text-accent-foreground hover:opacity-90">
              <Link href="/shop">{w.browseCta}<ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{w.title}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishlist.map((item, index) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group">
              <div className="relative overflow-hidden rounded-lg bg-secondary aspect-square">
                <Link href={`/product/${item.id}`}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </Link>
                <button onClick={() => removeFromWishlist(item.id)} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{item.collection}</p>
                <Link href={`/product/${item.id}`}><h3 className="font-semibold text-lg hover:text-accent transition-colors">{item.name}</h3></Link>
                <p className="text-lg font-semibold">${item.price.toLocaleString()}</p>
                <Button onClick={() => handleMoveToCart(item.id)} className="w-full bg-gold-gradient text-accent-foreground hover:opacity-90" size="sm">
                  <ShoppingBag className="w-4 h-4 mr-2" />{w.addToCart}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
