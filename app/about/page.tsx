'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Heart, Leaf, Users } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const teamImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
]

const valueIcons = [Award, Heart, Leaf, Users]

export default function AboutPage() {
  const { t } = useLanguage()
  const a = t.about

  return (
    <main className="pt-0">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80" alt="Our atelier" className="w-full h-full object-cover" style={{ filter: 'brightness(0.75)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#d4a84b] font-display tracking-[0.3em] uppercase mb-4 text-sm">{a.est}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">{a.heroTitle}</h1>
            <p className="text-xl text-white/85 max-w-2xl mx-auto">{a.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src="https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=800&q=80" alt="Our heritage" className="rounded-2xl shadow-xl w-full aspect-square object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{a.beginningEyebrow}</p>
              <h2 className="text-4xl font-bold mb-6">{a.beginningTitle}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{a.beginningP1}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">{a.beginningP2}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{a.beginningP3}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{a.valuesEyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold">{a.valuesTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {a.values.map((value, i) => {
              const Icon = valueIcons[i]
              return (
                <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{a.teamEyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold">{a.teamTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {a.team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img src={teamImages[i]} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-accent font-display tracking-wide">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{a.ctaTitle}</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{a.ctaSubtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/Custom" className="bg-white text-accent px-8 py-3 rounded-lg font-display tracking-wider text-sm uppercase hover:bg-white/90 transition-colors inline-flex items-center gap-2">
              {a.ctaCustom} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/shop" className="border border-white text-white px-8 py-3 rounded-lg font-display tracking-wider text-sm uppercase hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              {a.ctaShop} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
