'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function CartPage() {
  const cart = useStore((state) => state.cart)
  const removeFromCart = useStore((state) => state.removeFromCart)
  const updateQuantity = useStore((state) => state.updateQuantity)
  const getCartTotal = useStore((state) => state.getCartTotal)
  const { t } = useLanguage()
  const c = t.cart

  const subtotal = getCartTotal()
  const shipping = subtotal > 500 ? 0 : 25
  const total = subtotal + shipping

  if (cart.length === 0) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
            <ShoppingBag className="w-16 h-16 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-2xl font-bold mb-4">{c.emptyTitle}</h1>
            <p className="text-muted-foreground mb-8">{c.emptyMsg}</p>
            <Button asChild className="bg-gold-gradient text-accent-foreground hover:opacity-90">
              <Link href="/shop">{c.continueShopping}<ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{c.title}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, index) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="flex gap-6 p-6 bg-card rounded-lg border border-border">
                <Link href={`/product/${item.id}`} className="shrink-0">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                </Link>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <Link href={`/product/${item.id}`}><h3 className="font-semibold hover:text-accent transition-colors">{item.name}</h3></Link>
                      <p className="text-sm text-muted-foreground">{item.collection} Collection</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-border rounded-md">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-secondary transition-colors"><Minus className="w-4 h-4" /></button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-secondary transition-colors"><Plus className="w-4 h-4" /></button>
                    </div>
                    <span className="font-semibold">${(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">{c.title}</h2>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-muted-foreground">{c.subtotal}</span><span>${subtotal.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">{c.shipping}</span><span>{shipping === 0 ? c.shippingFree : `$${shipping}`}</span></div>
                {shipping > 0 && <p className="text-sm text-muted-foreground">{c.freeShippingNote}</p>}
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-semibold"><span>{c.total}</span><span>${total.toLocaleString()}</span></div>
              </div>
              <Button asChild className="w-full mt-6 bg-gold-gradient text-accent-foreground hover:opacity-90" size="lg">
                <Link href="/checkout">{c.checkout}</Link>
              </Button>
              <Button asChild variant="outline" className="w-full mt-3">
                <Link href="/shop">{c.continueShopping}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
