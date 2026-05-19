'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Check, Gift, Gem } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { t } = useLanguage()
  const n = t.newsletter

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) { setIsSubmitted(true); setEmail('') }
  }

  return (
    <section className="py-24 bg-gold-gradient relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10"><Gem className="w-32 h-32 text-white" /></div>
      <div className="absolute bottom-10 right-10 opacity-10"><Gem className="w-24 h-24 text-white" /></div>

      <div className="container mx-auto px-4 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-4"><Gift className="w-10 h-10 text-white/80" /></div>
          <p className="text-white/70 font-display tracking-[0.3em] uppercase mb-4 text-sm">{n.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{n.title}</h2>
          <p className="text-white/80 mb-2">{n.desc}</p>
          <p className="text-white/60 text-sm mb-8">{n.discount}</p>

          {isSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-3 text-white">
              <Check className="w-6 h-6" />
              <span className="text-lg font-display">{n.success}</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder={n.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                required
              />
              <Button type="submit" className="bg-white text-accent hover:bg-white/90 font-display tracking-wider">
                {n.button}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
