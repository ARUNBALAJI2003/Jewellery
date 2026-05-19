'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'

const contactIcons = [MapPin, Phone, Mail, Clock]
const contactDetails = [
  ['123 Luxury Lane', 'New York, NY 10001'],
  ['+1 (800) AURUM-01', '+1 (212) 555-0123'],
  ['contact@aurum.com', 'support@aurum.com'],
  ['Mon - Sat: 10am - 7pm', 'Sunday: 12pm - 5pm'],
]

interface FieldErrors {
  name?: string; phone?: string; email?: string; subject?: string; message?: string
}

export default function ContactPage() {
  const { t } = useLanguage()
  const c = t.contact

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FieldErrors = {}
    if (!formData.name.trim()) newErrors.name = c.nameError
    else if (!/^[A-Za-z\s'-]+$/.test(formData.name)) newErrors.name = c.nameLettersError
    if (!formData.email.trim()) newErrors.email = c.emailError
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = c.emailValidError
    if (formData.phone && !/^[\d\s\+\-\(\)]{7,15}$/.test(formData.phone)) newErrors.phone = c.phoneError
    if (!formData.subject) newErrors.subject = c.subjectError
    if (!formData.message.trim()) newErrors.message = c.messageError
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^A-Za-z\s''-]/g, '')
    setFormData({ ...formData, name: val })
    if (errors.name) setErrors({ ...errors, name: undefined })
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d\s\+\-\(\)]/g, '')
    setFormData({ ...formData, phone: val })
    if (errors.phone) setErrors({ ...errors, phone: undefined })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    if (errors[e.target.name as keyof FieldErrors]) setErrors({ ...errors, [e.target.name]: undefined })
  }

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? (<p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle className="w-3 h-3" /> {msg}</p>) : null

  return (
    <div className="pt-20 min-h-screen">
      <section className="relative py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
            <p className="text-accent text-sm tracking-[0.3em] uppercase mb-4 font-display">{c.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
            <p className="text-muted-foreground">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {c.infoTitles.map((title, i) => {
              const Icon = contactIcons[i]
              return (
                <motion.div key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  {contactDetails[i].map((detail) => (
                    <p key={detail} className="text-muted-foreground text-sm">{detail}</p>
                  ))}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="p-8 glass rounded-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{c.successTitle}</h3>
                  <p className="text-muted-foreground">{c.successMsg}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {c.namePlaceholder.replace('Your ', '')} <span className="text-red-500">*</span>
                      </label>
                      <Input id="name" name="name" type="text" value={formData.name} onChange={handleNameChange} placeholder={c.namePlaceholder} className={`bg-secondary border-border ${errors.name ? 'border-red-400' : ''}`} inputMode="text" />
                      <FieldError msg={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder={c.emailPlaceholder} className={`bg-secondary border-border ${errors.email ? 'border-red-400' : ''}`} />
                      <FieldError msg={errors.email} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handlePhoneChange} placeholder={c.phonePlaceholder} className={`bg-secondary border-border ${errors.phone ? 'border-red-400' : ''}`} inputMode="numeric" />
                      <FieldError msg={errors.phone} />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {c.subjectLabel} <span className="text-red-500">*</span>
                      </label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`w-full px-4 py-2 bg-secondary border rounded-md text-sm focus:ring-accent focus:border-accent ${errors.subject ? 'border-red-400' : 'border-border'}`}>
                        <option value="">{c.subjectPlaceholder}</option>
                        {c.subjects.map((s) => (<option key={s} value={s}>{s}</option>))}
                      </select>
                      <FieldError msg={errors.subject} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder={c.messagePlaceholder} rows={6} className={`w-full px-4 py-3 bg-secondary border rounded-md text-sm focus:ring-accent focus:border-accent resize-none ${errors.message ? 'border-red-400' : 'border-border'}`} />
                    <FieldError msg={errors.message} />
                  </div>
                  <Button type="submit" className="w-full bg-gold-gradient text-accent-foreground hover:opacity-90" size="lg" disabled={loading}>
                    {loading ? '...' : c.sendButton} <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <div className="sticky top-32">
                <div className="rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop" alt="AURUM Boutique" className="w-full h-[400px] object-cover" />
                </div>
                <div className="mt-6 p-6 glass rounded-lg">
                  <h3 className="font-semibold mb-2">{c.infoTitles[0]}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{contactDetails[0].join(', ')}</p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=40.7484,-73.9967&destination_place_id=ChIJd8BlQ2BZwokRAFUEcm_qrcA" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-border hover:bg-secondary">Get Directions</Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
