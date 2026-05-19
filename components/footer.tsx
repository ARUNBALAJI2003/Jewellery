'use client'

import Link from 'next/link'
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: XIcon, href: 'https://x.com', label: 'X (Twitter)' },
]

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-[0.3em] text-gold-gradient">AURUM</Link>
            <p className="mt-4 text-stone-600 text-lg leading-relaxed font-medium">{f.desc}</p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-display font-bold text-lg tracking-widest uppercase mb-5 text-foreground">{f.shop}</h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.shopLinks.all}</Link></li>
              <li><Link href="/shop?category=Rings" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.shopLinks.rings}</Link></li>
              <li><Link href="/shop?category=Necklaces" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.shopLinks.necklaces}</Link></li>
              <li><Link href="/shop?category=Earrings" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.shopLinks.earrings}</Link></li>
              <li><Link href="/shop?category=Bracelets" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.shopLinks.bracelets}</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-display font-bold text-lg tracking-widest uppercase mb-5 text-foreground">{f.collections}</h3>
            <ul className="space-y-3">
              <li><Link href="/collections/eternal" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.collectionLinks.eternal}</Link></li>
              <li><Link href="/collections/celestial" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.collectionLinks.celestial}</Link></li>
              <li><Link href="/collections/ocean" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.collectionLinks.ocean}</Link></li>
              <li><Link href="/collections/royal" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.collectionLinks.royal}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg tracking-widest uppercase mb-5 text-foreground">{f.company}</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.companyLinks.about}</Link></li>
              <li><Link href="/bespoke" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.companyLinks.Custom}</Link></li>
              <li><Link href="/journal" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.companyLinks.journal}</Link></li>
              <li><Link href="/contact" className="text-lg text-stone-600 hover:text-accent transition-colors font-medium">{f.companyLinks.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg tracking-widest uppercase mb-5 text-foreground">{f.contact}</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /><span className="text-lg font-medium">{f.address}</span></li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-accent" /><span className="text-lg font-medium">+1 (555) 123-4567</span></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-accent" /><span className="text-lg font-medium">hello@aurum.com</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-stone-600 font-medium">
            &copy; {new Date().getFullYear()} AURUM. {f.copyright}
          </p>
          <div className="flex gap-6 text-base text-stone-600 font-medium">
            <Link href="/about" className="hover:text-accent transition-colors">{f.aboutUs}</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">{f.companyLinks.contact}</Link>
            <Link href="/care" className="hover:text-accent transition-colors">{f.careGuide}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
