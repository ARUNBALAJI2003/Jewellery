import { Hero } from '@/components/hero'
import { FeaturedCollections } from '@/components/featured-collections'
import { FeaturedProducts } from '@/components/featured-products'
import { Testimonials } from '@/components/testimonials'
import { Newsletter } from '@/components/newsletter'
import { CraftStory } from '@/components/craft-story'
import { JewelleryGuide } from '@/components/jewellery-guide'
import { TrustBadges } from '@/components/trust-badges'
import { InstagramFeed } from '@/components/instagram-feed'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <FeaturedCollections />
      <CraftStory />
      <FeaturedProducts />
      <JewelleryGuide />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </>
  )
}
