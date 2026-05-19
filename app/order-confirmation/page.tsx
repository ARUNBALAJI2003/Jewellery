'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Package, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'

export default function OrderConfirmationPage() {
  const { t } = useLanguage()
  const oc = t.orderConfirmation
  const orderNumber = `AUR-${Date.now().toString().slice(-8)}`

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-10 h-10 text-accent" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{oc.title}</h1>
          <p className="text-muted-foreground mb-8">
            {oc.subtitle}
          </p>

          <div className="bg-card rounded-lg border border-border p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Package className="w-5 h-5 text-accent" />
              <span className="font-semibold">Order Number</span>
            </div>
            <p className="text-2xl font-mono text-accent">{orderNumber}</p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full bg-gold-gradient text-accent-foreground hover:opacity-90">
              <Link href="/shop">
                Continue Shopping
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
