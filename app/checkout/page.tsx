'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CreditCard, Truck, ShieldCheck, ChevronLeft, Check } from 'lucide-react'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CheckoutPage() {
  const router = useRouter()
  const cart = useStore((state) => state.cart)
  const getCartTotal = useStore((state) => state.getCartTotal)
  const clearCart = useStore((state) => state.clearCart)
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    expiry: '',
    cvv: '',
    nameOnCard: '',
  })

  const subtotal = getCartTotal()
  const shipping = subtotal > 500 ? 0 : 25
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      clearCart()
      router.push('/order-confirmation')
    }
  }

  // Numeric-only input handlers — reject any non-digit keystrokes
  const handleNumericInput = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setFormData({ ...formData, [field]: value })
  }

  const handleExpiryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length >= 3) value = value.slice(0, 2) + '/' + value.slice(2, 4)
    setFormData({ ...formData, expiry: value })
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link href="/cart" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Cart
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Progress Steps */}
            <div className="flex items-center mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= s ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 h-0.5 ${step > s ? 'bg-accent' : 'bg-secondary'}`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Shipping */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Shipping Information</h2>
                  <div className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <Input
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="bg-secondary border-border"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="State"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                    <Input
                      type="text"
                      placeholder="ZIP Code"
                      value={formData.zip}
                      onChange={handleNumericInput('zip')}
                      inputMode="numeric"
                      maxLength={6}
                      className="bg-secondary border-border"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Payment Details</h2>
                  <div className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Name on card"
                      value={formData.nameOnCard}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^a-zA-Z\s]/g, '')
                        setFormData({ ...formData, nameOnCard: val })
                      }}
                      className="bg-secondary border-border"
                      required
                    />
                    <Input
                      type="text"
                      placeholder="Card number"
                      value={formData.cardNumber}
                      onChange={handleNumericInput('cardNumber')}
                      inputMode="numeric"
                      maxLength={16}
                      className="bg-secondary border-border"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="MM/YY"
                        value={formData.expiry}
                        onChange={handleExpiryInput}
                        inputMode="numeric"
                        maxLength={5}
                        className="bg-secondary border-border"
                        required
                      />
                      <Input
                        type="text"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleNumericInput('cvv')}
                        inputMode="numeric"
                        maxLength={4}
                        className="bg-secondary border-border"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    Your payment information is encrypted and secure
                  </div>
                </motion.div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold">Review Order</h2>
                  <div className="space-y-4">
                    <div className="bg-card rounded-lg border border-border p-4">
                      <h3 className="font-semibold mb-2">Shipping To</h3>
                      <p className="text-muted-foreground">
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zip}
                      </p>
                    </div>
                    <div className="bg-card rounded-lg border border-border p-4">
                      <h3 className="font-semibold mb-2">Payment Method</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Card ending in {formData.cardNumber.slice(-4) || '****'}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex gap-4 mt-8">
                {step > 1 && (
                  <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" className="flex-1 bg-gold-gradient text-accent-foreground hover:opacity-90">
                  {step === 3 ? 'Place Order' : 'Continue'}
                </Button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
              <hr className="border-border mb-4" />
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-accent" />
                  Free shipping on orders over $500
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
