'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Minus, Plus, Star, ChevronLeft, Check, Truck, Shield, RotateCcw } from 'lucide-react'
import { getProductById, products } from '@/lib/products'
import { useStore } from '@/lib/store'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const product = getProductById(params.id as string)
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  
  const addToCart = useStore((state) => state.addToCart)
  const addToWishlist = useStore((state) => state.addToWishlist)
  const removeFromWishlist = useStore((state) => state.removeFromWishlist)
  const isInWishlist = useStore((state) => product ? state.isInWishlist(product.id) : false)

  if (!product) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button asChild>
            <Link href="/shop">Return to Shop</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const handleBuyNow = () => {
    addToCart(product, quantity)
    router.push('/cart')
  }

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4)

  const images = product.images || [product.image]

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-accent">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-accent">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square overflow-hidden rounded-lg bg-secondary"
            >
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {images.length > 1 && (
              <div className="flex gap-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-accent' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <p className="text-accent font-display tracking-[0.3em] uppercase mb-2">
                {product.collection} Collection
              </p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed">{product.description}</p>

            {/* Details */}
            {product.details && (
              <div className="space-y-2">
                <h3 className="font-semibold">Details</h3>
                <ul className="space-y-1">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <label className="font-semibold">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gold-gradient text-accent-foreground hover:opacity-90"
                size="lg"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                variant="outline"
                size="lg"
                className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Buy Now
              </Button>
              <Button
                onClick={handleWishlistToggle}
                variant="outline"
                size="lg"
                className="border-border"
              >
                <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-accent text-accent' : ''}`} />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="w-6 h-6 text-accent" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Shield className="w-6 h-6 text-accent" />
                <span className="text-sm">Lifetime Warranty</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RotateCcw className="w-6 h-6 text-accent" />
                <span className="text-sm">30-Day Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
