'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal } from 'lucide-react'
import { products, categories, collections } from '@/lib/products'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLanguage } from '@/lib/language-context'

export default function ShopPage() {
  const { t } = useLanguage()
  const s = t.shop

  const priceRanges = [
    { label: s.allPrices, min: 0, max: Infinity },
    { label: s.under1k, min: 0, max: 999 },
    { label: s.range1k3k, min: 1000, max: 3000 },
    { label: s.range3k5k, min: 3000, max: 5000 },
    { label: s.over5k, min: 5000, max: Infinity },
  ]

  const sortOptions = [
    { label: s.sortFeatured, value: 'featured' },
    { label: s.sortPriceLow, value: 'price-asc' },
    { label: s.sortPriceHigh, value: 'price-desc' },
    { label: s.sortNewest, value: 'newest' },
  ]

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCollection, setSelectedCollection] = useState('All')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState('featured')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      )
    }
    if (selectedCategory !== 'All') result = result.filter((p) => p.category === selectedCategory)
    if (selectedCollection !== 'All')
      result = result.filter((p) => p.collection.toLowerCase() === selectedCollection.toLowerCase())
    result = result.filter((p) => p.price >= selectedPriceRange.min && p.price <= selectedPriceRange.max)
    switch (sortBy) {
      case 'price-asc': result.sort((a, b) => a.price - b.price); break
      case 'price-desc': result.sort((a, b) => b.price - a.price); break
      case 'newest': result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew)); break
      default: result = result.filter((p) => p.isBestseller).concat(result.filter((p) => !p.isBestseller))
    }
    return result
  }, [selectedCategory, selectedCollection, selectedPriceRange, sortBy, searchQuery])

  return (
    <div className="pt-0">
      <section className="relative h-72 flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1920&q=100" alt="Shop jewellery" className="w-full h-full object-cover" style={{ filter: 'brightness(0.72)' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative text-center pb-10 px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold mb-3 text-white drop-shadow-lg" style={{ fontFamily: 'var(--font-bodoni, Georgia, serif)', letterSpacing: '-0.02em' }}>
            {s.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-white/85 text-base font-medium tracking-wide">
            {s.subtitle}
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)} className="border-border">
              <SlidersHorizontal className="w-4 h-4 mr-2" />{s.filters}
            </Button>
            <Input type="text" placeholder={s.searchPlaceholder} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full md:w-64 bg-secondary border-border" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{filteredProducts.length} {s.products}</span>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-secondary border border-border rounded-md px-3 py-2 text-sm">
              {sortOptions.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 space-y-8 shrink-0`}>
            <div>
              <h3 className="font-display font-semibold tracking-wider uppercase mb-4">{s.categories}</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button key={category} onClick={() => setSelectedCategory(category)} className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'}`}>{category}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold tracking-wider uppercase mb-4">{s.collections}</h3>
              <div className="space-y-2">
                <button onClick={() => setSelectedCollection('All')} className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCollection === 'All' ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'}`}>{s.allCollections}</button>
                {collections.map((collection) => (
                  <button key={collection.id} onClick={() => setSelectedCollection(collection.slug)} className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCollection === collection.slug ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'}`}>{collection.name}</button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold tracking-wider uppercase mb-4">{s.priceRange}</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button key={range.label} onClick={() => setSelectedPriceRange(range)} className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedPriceRange.label === range.label ? 'bg-accent text-accent-foreground' : 'hover:bg-secondary'}`}>{range.label}</button>
                ))}
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (<ProductCard key={product.id} product={product} />))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">{s.noProducts}</p>
                <Button variant="outline" onClick={() => { setSelectedCategory('All'); setSelectedCollection('All'); setSelectedPriceRange(priceRanges[0]); setSearchQuery('') }} className="mt-4">{s.clearFilters}</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
