'use client'

import { motion } from 'framer-motion'
import { Shield, Award, RefreshCw, Truck } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function TrustBadges() {
  const { t } = useLanguage()
  const tr = t.trust

  const badges = [
    { icon: Shield, title: tr.badge1title, desc: tr.badge1desc },
    { icon: Award, title: tr.badge2title, desc: tr.badge2desc },
    { icon: RefreshCw, title: tr.badge3title, desc: tr.badge3desc },
    { icon: Truck, title: tr.badge4title, desc: tr.badge4desc },
  ]

  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm tracking-wide">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
