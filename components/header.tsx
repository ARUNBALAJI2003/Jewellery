'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react'
import { useStore } from '@/lib/store'
import { searchProducts } from '@/lib/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ReturnType<typeof searchProducts>>([])

  const pathname = usePathname()
  const cartCount = useStore((state) => state.getCartCount())
  const wishlistCount = useStore((state) => state.wishlist.length)
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/shop', label: t.nav.shop },
    { href: '/collections', label: t.nav.collections },
    { href: '/bespoke', label: t.nav.Custom },
    { href: '/journal', label: t.nav.journal },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = searchProducts(searchQuery)
      setSearchResults(results.slice(0, 5))
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const langBtnBase = 'text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded transition-all duration-200'
  const langActive = isScrolled ? 'bg-amber-700 text-white' : 'bg-amber-400/90 text-stone-900'
  const langInactive = isScrolled ? 'text-stone-500 hover:text-amber-700' : 'text-white/70 hover:text-amber-200'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-50/96 backdrop-blur-md shadow-[0_2px_20px_rgba(139,107,68,0.10)] border-b border-amber-200/50'
          : 'bg-gradient-to-b from-stone-900/55 via-stone-900/25 to-transparent backdrop-blur-[1px]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-stone-700' : 'text-amber-50'}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-stone-700' : 'text-amber-50'}`} />}
          </button>

          <Link href="/" className={`text-2xl md:text-3xl font-bold tracking-[0.3em] ${isScrolled ? 'text-amber-800' : 'text-amber-50 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]'}`}>
            AURUM
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors ${
                    isActive
                      ? isScrolled
                        ? 'text-amber-700 underline underline-offset-4 decoration-1'
                        : 'text-amber-300 underline underline-offset-4 decoration-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                      : isScrolled
                        ? 'text-stone-800 hover:text-amber-700'
                        : 'text-white hover:text-amber-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Language Toggle — placed right after Meetings & Events */}
            <div className={`flex items-center gap-1 border rounded-full px-1.5 py-0.5 ${isScrolled ? 'border-amber-300' : 'border-white/30'}`}>
              <button
                onClick={() => setLanguage('en')}
                className={`${langBtnBase} ${language === 'en' ? langActive : langInactive}`}
                aria-label="Switch to English"
              >
                ENG
              </button>
              <span className={`text-xs ${isScrolled ? 'text-stone-300' : 'text-white/30'}`}>|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`${langBtnBase} ${language === 'fr' ? langActive : langInactive}`}
                aria-label="Passer en français"
              >
                FR
              </button>
            </div>
          </nav>

          <div className={`flex items-center gap-2 md:gap-4 ${isScrolled ? 'text-stone-600' : 'text-amber-100'}`}>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="p-2 hover:text-accent transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="p-2 hover:text-accent transition-colors relative">
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">{wishlistCount}</span>
              )}
            </Link>
            <Link href="/cart" className="p-2 hover:text-accent transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            <Link href="/login" className="hidden md:block p-2 hover:text-accent transition-colors">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-4"
          >
            <div className="container mx-auto max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t.search.placeholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary border-border pl-10"
                  autoFocus
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              {searchResults.length > 0 && (
                <div className="mt-4 space-y-2">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      className="flex items-center gap-4 p-2 hover:bg-secondary rounded-lg transition-colors"
                      onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}
                    >
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground">${product.price.toLocaleString()}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween' }}
            className="lg:hidden fixed inset-0 top-20 bg-background z-40"
          >
            <nav className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-lg tracking-wider uppercase hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => setLanguage('en')}
                  className={`text-sm font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all ${language === 'en' ? 'bg-amber-700 text-white border-amber-700' : 'border-stone-300 text-stone-500'}`}
                >
                  ENG
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`text-sm font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border transition-all ${language === 'fr' ? 'bg-amber-700 text-white border-amber-700' : 'border-stone-300 text-stone-500'}`}
                >
                  FRANÇAIS
                </button>
              </div>

              <hr className="border-border" />
              <Link
                href="/login"
                className="font-display text-lg tracking-wider uppercase hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.loginSignup}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
