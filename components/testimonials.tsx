'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

const testimonialImages = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
]

export function Testimonials() {
  const { t } = useLanguage()
  const te = t.testimonials

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-accent font-display tracking-[0.3em] uppercase mb-4 text-sm">{te.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{te.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {te.list.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 relative border border-border shadow-sm"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonialImages[index]} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
