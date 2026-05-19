'use client'

import { motion } from 'framer-motion'
import { Droplets, Sun, Box, AlertTriangle, Sparkles, Heart } from 'lucide-react'

const tips = [
  {
    icon: Droplets,
    title: 'Cleaning Your Jewellery',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-blue-500',
    tips: [
      'Use warm water with a few drops of mild dish soap',
      'Gently scrub with a soft-bristled toothbrush',
      'Rinse thoroughly and pat dry with a lint-free cloth',
      'Avoid ultrasonic cleaners for pearls or emeralds',
    ],
  },
  {
    icon: Box,
    title: 'Storing Your Pieces',
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-500',
    tips: [
      'Store each piece separately to prevent scratches',
      'Use a fabric-lined jewellery box or soft pouches',
      'Keep pearls away from other jewellery to avoid abrasion',
      'Store in a cool, dry place away from sunlight',
    ],
  },
  {
    icon: Sun,
    title: 'Daily Wear Tips',
    color: 'bg-yellow-50 border-yellow-100',
    iconColor: 'text-yellow-500',
    tips: [
      'Put on jewellery last — after perfume and cosmetics',
      'Remove jewellery before swimming or exercising',
      'Avoid contact with household chemicals and bleach',
      'Take off rings before washing hands frequently',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'What to Avoid',
    color: 'bg-red-50 border-red-100',
    iconColor: 'text-red-400',
    tips: [
      'Chlorine and saltwater damage gold and gemstones',
      'Extreme heat can loosen gemstone settings',
      'Harsh abrasives scratch precious metals',
      'Sleeping in jewellery can strain delicate settings',
    ],
  },
  {
    icon: Sparkles,
    title: 'Professional Care',
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-400',
    tips: [
      'Professional cleaning recommended every 6 months',
      'Annual prong check to ensure stones are secure',
      'Replating white gold every 1-2 years is normal',
      'Visit us for free inspection with any AURUM piece',
    ],
  },
  {
    icon: Heart,
    title: 'Special Pieces',
    color: 'bg-pink-50 border-pink-100',
    iconColor: 'text-pink-400',
    tips: [
      'Pearls need occasional light wipe with damp cloth',
      'Opals are delicate — avoid sudden temperature changes',
      'Emeralds may be oiled — avoid ultrasonic cleaners',
      'Antique jewellery may need specialized care',
    ],
  },
]

export default function CarePage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-card border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">Preserve Your Beauty</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Jewellery Care Guide</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proper care ensures your AURUM pieces remain as radiant as the day you received them. Follow these expert tips to protect your investment for generations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${section.color}`}
              >
                <section.icon className={`w-8 h-8 mb-4 ${section.iconColor}`} />
                <h3 className="font-bold text-xl mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-accent mt-0.5">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Care?</h2>
          <p className="text-muted-foreground mb-8">Bring your AURUM piece to our atelier for complimentary cleaning and inspection.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-gold-gradient text-white px-8 py-3 rounded-lg font-display tracking-wider text-sm uppercase hover:opacity-90 transition-opacity">
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
