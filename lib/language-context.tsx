'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Language = 'en' | 'fr'

export const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      shop: 'Shop',
      collections: 'Collections',
      Custom: 'Custom',
      journal: 'Journal',
      about: 'About',
      contact: 'Contact',
      meetingsEvents: 'Meetings & Events',
      loginSignup: 'Login / Sign Up',
    },
    // Hero
    hero: {
      eyebrow: 'Timeless Elegance',
      headline1: 'Where Beauty',
      headline2: 'Meets Luxury',
      subheading: 'Discover our exquisite collection of handcrafted jewellery pieces that embody timeless elegance and sophisticated craftsmanship.',
      cta1: 'Explore Collection',
      cta2: 'Our Story',
      scrollLabel: 'Scroll to Discover',
      stat1num: '500+',
      stat1label: 'Unique Designs',
      stat2num: '35',
      stat2label: 'Years Legacy',
      stat3num: '4.9★',
      stat3label: 'Client Rating',
    },
    // Trust Badges
    trust: {
      badge1title: 'Certified Authentic',
      badge1desc: 'Every piece GIA certified',
      badge2title: 'Master Crafted',
      badge2desc: '35 years of expertise',
      badge3title: '30-Day Returns',
      badge3desc: 'Hassle-free policy',
      badge4title: 'Free Shipping',
      badge4desc: 'On orders over $500',
    },
    // Featured Products
    featured: {
      eyebrow: 'Handpicked for You',
      title: 'Featured Pieces',
      viewAll: 'View All Products',
    },
    // Featured Collections
    collections: {
      eyebrow: 'Curated Selections',
      title: 'Our Collections',
      explore: 'Explore',
      eternal: {
        name: 'Eternal Collection',
        description: 'Timeless pieces that celebrate everlasting love and commitment.',
      },
      celestial: {
        name: 'Celestial Collection',
        description: 'Inspired by the stars and moon, for those who dream beyond.',
      },
      ocean: {
        name: 'Ocean Collection',
        description: 'Flowing designs inspired by the beauty and mystery of the sea.',
      },
      royal: {
        name: 'Royal Collection',
        description: 'Regal pieces fit for royalty, featuring precious gemstones.',
      },
    },
    // Craft Story
    craft: {
      eyebrow: 'Our Heritage',
      title1: 'The Art of',
      title2: 'Fine Jewellery',
      p1: 'Since 1990, AURUM has been at the forefront of fine jewellery craftsmanship. Each piece begins as a sketch — a vision translated into metal, gemstone, and light. Our master jewelers spend hundreds of hours perfecting every detail, from the initial wax model to the final polish.',
      p2: 'We source only the finest ethically mined diamonds and gemstones, partnering with responsible suppliers across four continents. Every stone is hand-selected by our gemologists and accompanied by a certificate of authenticity.',
      stat1num: '2,400+',
      stat1label: 'Pieces Crafted',
      stat2num: '98%',
      stat2label: 'Client Satisfaction',
      stat3num: '12',
      stat3label: 'Expert Jewelers',
      cta: 'Discover Our Story',
    },
    // Testimonials
    testimonials: {
      eyebrow: 'Client Stories',
      title: 'What Our Clients Say',
      list: [
        {
          name: 'Elizabeth Morgan',
          role: 'Bride',
          content: 'The engagement ring from AURUM exceeded all my expectations. The craftsmanship is impeccable, and the diamond sparkles like nothing I have ever seen.',
        },
        {
          name: 'Catherine Wells',
          role: 'Collector',
          content: 'I have been collecting fine jewellery for 20 years, and AURUM pieces are among the finest in my collection. The attention to detail is extraordinary.',
        },
        {
          name: 'Victoria Chen',
          role: 'Fashion Editor',
          content: 'AURUM represents the pinnacle of luxury jewellery. Their Celestial collection has been featured in our magazine multiple times for its innovative design.',
        },
      ],
    },
    // Jewellery Guide
    guide: {
      eyebrow: 'Knowledge & Care',
      title: 'Jewellery Guides',
      viewAll: 'View All Guides',
      guides: [
        {
          title: 'Ring Size Guide',
          desc: 'Find your perfect fit with our comprehensive sizing chart and measurement tips.',
          tag: 'Guide',
        },
        {
          title: 'Diamond Clarity Explained',
          desc: 'Understanding the 4Cs — Cut, Color, Clarity, and Carat — to choose your ideal stone.',
          tag: 'Education',
        },
        {
          title: 'Jewellery Care & Maintenance',
          desc: 'Expert tips on cleaning, storing, and preserving your fine jewellery for generations.',
          tag: 'Care',
        },
        {
          title: 'Gemstone Meanings',
          desc: 'From sapphires to rubies — discover the rich symbolism behind precious gemstones.',
          tag: 'Heritage',
        },
      ],
    },
    // Instagram
    instagram: {
      eyebrow: 'Follow Us',
      title: '@aurum.jewellery',
      subtitle: 'Join our community of jewellery lovers',
    },
    // Newsletter
    newsletter: {
      eyebrow: 'Stay Connected',
      title: 'Join Our World',
      desc: 'Subscribe to receive exclusive offers, early access to new collections, and styling inspiration from our master jewelers.',
      discount: 'Get 10% off your first order when you sign up.',
      placeholder: 'Enter your email',
      button: 'Subscribe',
      success: 'Thank you for subscribing!',
    },
    // Footer
    footer: {
      desc: 'Crafting timeless pieces of luxury jewellery since 1990. Each piece tells a story of elegance, craftsmanship, and enduring beauty.',
      shop: 'Shop',
      collections: 'Collections',
      company: 'Company',
      contact: 'Contact',
      shopLinks: {
        all: 'All Jewellery',
        rings: 'Rings',
        necklaces: 'Necklaces',
        earrings: 'Earrings',
        bracelets: 'Bracelets',
      },
      collectionLinks: {
        eternal: 'Eternal',
        celestial: 'Celestial',
        ocean: 'Ocean',
        royal: 'Royal',
      },
      companyLinks: {
        about: 'About Us',
        Custom: 'Custom Jewellery',
        journal: 'The Journal',
        contact: 'Contact',
      },
      address: '123 Luxury Lane, NY',
      copyright: 'All rights reserved.',
      aboutUs: 'About Us',
      careGuide: 'Care Guide',
    },
    // Product Card
    productCard: {
      addToCart: 'Add to Cart',
      addToWishlist: 'Add to Wishlist',
      new: 'New',
      bestseller: 'Bestseller',
    },
    // Search
    search: {
      placeholder: 'Search for jewellery...',
    },
    // Meetings & Events page (if referenced)
    meetingsEvents: 'Meetings & Events',
    // Shop page
    shop: {
      title: 'Shop Collection',
      subtitle: 'Discover our complete range of luxury jewellery',
      filters: 'Filters',
      searchPlaceholder: 'Search products...',
      products: 'products',
      categories: 'Categories',
      collections: 'Collections',
      allCollections: 'All Collections',
      priceRange: 'Price Range',
      noProducts: 'No products found matching your criteria.',
      clearFilters: 'Clear Filters',
      sortFeatured: 'Featured',
      sortPriceLow: 'Price: Low to High',
      sortPriceHigh: 'Price: High to Low',
      sortNewest: 'Newest',
      allPrices: 'All Prices',
      under1k: 'Under $1,000',
      range1k3k: '$1,000 - $3,000',
      range3k5k: '$3,000 - $5,000',
      over5k: 'Over $5,000',
    },
    // About page
    about: {
      est: 'Est. 1990',
      heroTitle: 'Our Story',
      heroSubtitle: 'For over three decades, AURUM has been creating jewellery that transcends time — pieces that become part of your story, your family legacy.',
      beginningEyebrow: 'Our Beginning',
      beginningTitle: 'From a Single Workshop to a Global Legacy',
      beginningP1: 'AURUM began in 1990 when master jeweler Eleanor Ashworth opened a small atelier in New York\'s Diamond District. Armed with tools inherited from her grandfather — a celebrated Swiss watchmaker — and a passion for creating pieces that last lifetimes, Eleanor quickly gained a reputation for extraordinary craftsmanship.',
      beginningP2: 'What started as custom commissions for discerning New Yorkers grew into a collection celebrated by collectors, fashion editors, and couples seeking something truly special. Today, AURUM operates from its flagship studio in Manhattan, with a team of 12 artisans who share Eleanor\'s uncompromising dedication to quality.',
      beginningP3: 'Every AURUM piece carries the spirit of that original workshop — where skill, patience, and love are the most important materials of all.',
      valuesEyebrow: 'What We Stand For',
      valuesTitle: 'Our Values',
      teamEyebrow: 'The Artisans',
      teamTitle: 'Meet Our Team',
      ctaTitle: 'Start Your AURUM Story',
      ctaSubtitle: 'Commission a Custom piece or explore our curated collections — every journey with AURUM begins with a conversation.',
      ctaCustom: 'Custom Jewellery',
      ctaShop: 'Shop Now',
      values: [
        { title: 'Master Craftsmanship', desc: 'Every piece is hand-finished by artisans with decades of experience in fine jewellery.' },
        { title: 'Deeply Personal', desc: 'We believe jewellery should tell your story. Our team is dedicated to making that happen.' },
        { title: 'Ethically Sourced', desc: 'We partner exclusively with responsible miners and suppliers committed to sustainability.' },
        { title: 'Community First', desc: 'A portion of every sale supports artisan communities in our sourcing regions.' },
      ],
      team: [
        { name: 'Eleanor Ashworth', role: 'Founder & Head Designer' },
        { name: 'Marcus Chen', role: 'Master Goldsmith' },
        { name: 'Sophia Laurent', role: 'Chief Gemologist' },
        { name: 'James Harrington', role: 'Creative Director' },
      ],
    },
    // Custom page
    Custom: {
      eyebrow: 'Made for You Alone',
      title1: 'Custom',
      title2: 'Jewellery',
      subtitle: 'Commission a one-of-a-kind piece that tells your unique story. From engagement rings to anniversary gifts, our master jewelers transform your vision into an heirloom.',
      cta: 'Begin Your Journey',
      processEyebrow: 'How It Works',
      processTitle: 'The Custom Process',
      galleryTitle: 'Custom Gallery',
      gallerySubtitle: 'A selection of commissioned pieces crafted with love',
      includesTitle: 'Every Custom Piece Includes',
      consultCta: 'Request a Consultation',
      steps: [
        { step: '01', title: 'Design Consultation', desc: 'Meet with our master jewelers to discuss your vision, preferences, and budget. We listen, sketch, and refine until the concept is perfect.' },
        { step: '02', title: 'Stone Selection', desc: 'Hand-pick from our curated collection of GIA-certified diamonds and gemstones. Our gemologists guide you through every nuance of quality.' },
        { step: '03', title: 'Masterful Creation', desc: 'Our artisans bring your piece to life using traditional techniques and modern precision. You receive updates at every stage.' },
        { step: '04', title: 'Final Delivery', desc: 'Your finished piece is presented in our signature AURUM packaging, with full documentation and a lifetime care plan.' },
      ],
      includes: [
        'Private consultation with a master jeweler',
        'GIA-certified stones with full documentation',
        'Complimentary engraving service',
        'Signature AURUM gift packaging',
        'Lifetime resizing and cleaning',
        'Insurance valuation certificate',
        '18-month craftsmanship warranty',
        'Dedicated aftercare team',
      ],
    },
    // Journal page
    journal: {
      eyebrow: 'Stories & Insights',
      title: 'The AURUM Journal',
      subtitle: 'Discover the world of fine jewellery — from gemstone folklore to styling inspiration and behind-the-scenes artistry.',
      featured: 'Featured',
      readArticle: 'Read Article',
      articles: [
        { title: 'The History of Diamond Engagement Rings', excerpt: 'How a 15th century Austrian archduke started a tradition that would last centuries, and why diamonds became the symbol of eternal love.', category: 'Heritage', date: 'May 10, 2025', readTime: '5 min read' },
        { title: 'Choosing the Perfect Wedding Band', excerpt: 'A comprehensive guide to selecting a wedding band that complements your engagement ring and reflects your personal style.', category: 'Guide', date: 'Apr 28, 2025', readTime: '7 min read' },
        { title: 'Emeralds: The Stone of Venus', excerpt: 'Exploring the rich mythology and enduring allure of emeralds, from Cleopatra\'s mines to modern haute joaillerie.', category: 'Gemstones', date: 'Apr 15, 2025', readTime: '4 min read' },
        { title: 'Behind the Scenes: Our Atelier', excerpt: 'A rare look inside AURUM\'s studio, where master jewelers spend hundreds of hours perfecting each piece.', category: 'Craft', date: 'Apr 3, 2025', readTime: '6 min read' },
        { title: 'Spring 2025 Collection: Bloom', excerpt: 'Inspired by the intricate beauty of flowers in full bloom, our newest collection celebrates the artistry of nature.', category: 'Collections', date: 'Mar 20, 2025', readTime: '3 min read' },
        { title: 'How to Layer Necklaces Like a Stylist', excerpt: 'Master the art of necklace layering with these expert tips on lengths, textures, and creating a curated look.', category: 'Style', date: 'Mar 8, 2025', readTime: '5 min read' },
      ],
    },
    // Contact page
    contact: {
      eyebrow: 'We\'d Love to Hear From You',
      title: 'Get in Touch',
      subtitle: 'Have a question, a custom design in mind, or simply want to learn more? Our team is here to assist you.',
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'your@email.com',
      phonePlaceholder: '+1 (555) 000-0000 (optional)',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select a subject',
      messagePlaceholder: 'Tell us about your inquiry...',
      sendButton: 'Send Message',
      successTitle: 'Message Sent',
      successMsg: 'Thank you for reaching out. We\'ll respond within 1 business day.',
      infoTitles: ['Visit Our Boutique', 'Call Us', 'Email Us', 'Business Hours'],
      nameError: 'Name is required',
      nameLettersError: 'Name must contain letters only',
      emailError: 'Email is required',
      emailValidError: 'Enter a valid email address',
      phoneError: 'Phone must contain numbers only',
      subjectError: 'Please select a subject',
      messageError: 'Message is required',
      subjects: ['General Inquiry', 'Custom Order', 'Product Question', 'Returns & Exchanges', 'Other'],
    },
    // Cart page
    cart: {
      emptyTitle: 'Your Cart is Empty',
      emptyMsg: 'Looks like you haven\'t added any pieces yet.',
      continueShopping: 'Continue Shopping',
      title: 'Shopping Cart',
      remove: 'Remove',
      subtotal: 'Subtotal',
      shipping: 'Shipping',
      shippingFree: 'Free',
      total: 'Total',
      checkout: 'Proceed to Checkout',
      freeShippingNote: 'Free shipping on orders over $500',
    },
    // Wishlist page
    wishlist: {
      title: 'My Wishlist',
      emptyTitle: 'Your Wishlist is Empty',
      emptyMsg: 'Save your favorite pieces here.',
      browseCta: 'Browse Collection',
      addToCart: 'Add to Cart',
      remove: 'Remove',
    },
    // Collections page
    collectionsPage: {
      eyebrow: 'Our Collections',
      title: 'Explore Collections',
      subtitle: 'Each collection tells a unique story — discover the one that speaks to you.',
      shopCollection: 'Shop Collection',
    },
    // Care page
    care: {
      title: 'Jewellery Care Guide',
      subtitle: 'Preserve the beauty of your AURUM pieces for generations.',
    },
    // Order confirmation
    orderConfirmation: {
      title: 'Order Confirmed!',
      subtitle: 'Thank you for your purchase. You will receive a confirmation email shortly.',
      continueShopping: 'Continue Shopping',
    },
  },

  fr: {
    // Nav
    nav: {
      home: 'Accueil',
      shop: 'Boutique',
      collections: 'Collections',
      Custom: 'Sur Mesure',
      journal: 'Journal',
      about: 'À Propos',
      contact: 'Contact',
      meetingsEvents: 'Réunions & Événements',
      loginSignup: 'Connexion / Inscription',
    },
    // Hero
    hero: {
      eyebrow: 'Élégance Intemporelle',
      headline1: 'Là Où la Beauté',
      headline2: 'Rencontre le Luxe',
      subheading: 'Découvrez notre collection exquise de bijoux artisanaux qui incarnent une élégance intemporelle et un savoir-faire sophistiqué.',
      cta1: 'Explorer la Collection',
      cta2: 'Notre Histoire',
      scrollLabel: 'Défiler pour Découvrir',
      stat1num: '500+',
      stat1label: 'Designs Uniques',
      stat2num: '35',
      stat2label: 'Ans de Savoir-Faire',
      stat3num: '4.9★',
      stat3label: 'Avis Clients',
    },
    // Trust Badges
    trust: {
      badge1title: 'Authenticité Certifiée',
      badge1desc: 'Chaque pièce certifiée GIA',
      badge2title: 'Artisanat Maître',
      badge2desc: '35 ans d\'expertise',
      badge3title: 'Retours 30 Jours',
      badge3desc: 'Politique sans tracas',
      badge4title: 'Livraison Gratuite',
      badge4desc: 'Pour toute commande de plus de 500 $',
    },
    // Featured Products
    featured: {
      eyebrow: 'Sélectionnés pour Vous',
      title: 'Pièces Phares',
      viewAll: 'Voir Tous les Produits',
    },
    // Featured Collections
    collections: {
      eyebrow: 'Sélections Curatées',
      title: 'Nos Collections',
      explore: 'Explorer',
      eternal: {
        name: 'Collection Éternelle',
        description: 'Des pièces intemporelles qui célèbrent l\'amour et l\'engagement éternels.',
      },
      celestial: {
        name: 'Collection Céleste',
        description: 'Inspirée des étoiles et de la lune, pour ceux qui rêvent au-delà.',
      },
      ocean: {
        name: 'Collection Océan',
        description: 'Des designs fluides inspirés de la beauté et du mystère de la mer.',
      },
      royal: {
        name: 'Collection Royale',
        description: 'Des pièces royales dignes de la royauté, ornées de pierres précieuses.',
      },
    },
    // Craft Story
    craft: {
      eyebrow: 'Notre Héritage',
      title1: 'L\'Art de la',
      title2: 'Joaillerie Fine',
      p1: 'Depuis 1990, AURUM est à l\'avant-garde de l\'artisanat joaillier. Chaque pièce commence par une esquisse — une vision traduite en métal, pierre précieuse et lumière. Nos maîtres joailliers passent des centaines d\'heures à perfectionner chaque détail, du modèle en cire initial au polissage final.',
      p2: 'Nous sélectionnons uniquement les diamants et pierres précieuses extraits de manière éthique, en partenariat avec des fournisseurs responsables sur quatre continents. Chaque pierre est choisie à la main par nos gemmologues et accompagnée d\'un certificat d\'authenticité.',
      stat1num: '2 400+',
      stat1label: 'Pièces Créées',
      stat2num: '98%',
      stat2label: 'Satisfaction Client',
      stat3num: '12',
      stat3label: 'Joailliers Experts',
      cta: 'Découvrir Notre Histoire',
    },
    // Testimonials
    testimonials: {
      eyebrow: 'Témoignages Clients',
      title: 'Ce Que Disent Nos Clients',
      list: [
        {
          name: 'Elizabeth Morgan',
          role: 'Mariée',
          content: 'La bague de fiançailles d\'AURUM a dépassé toutes mes attentes. L\'artisanat est impeccable et le diamant scintille comme je n\'en ai jamais vu.',
        },
        {
          name: 'Catherine Wells',
          role: 'Collectionneuse',
          content: 'Je collectionne les bijoux de luxe depuis 20 ans, et les pièces AURUM sont parmi les plus belles de ma collection. L\'attention aux détails est extraordinaire.',
        },
        {
          name: 'Victoria Chen',
          role: 'Rédactrice Mode',
          content: 'AURUM représente le summum des bijoux de luxe. Leur collection Céleste a été présentée dans notre magazine à plusieurs reprises pour son design innovant.',
        },
      ],
    },
    // Jewellery Guide
    guide: {
      eyebrow: 'Connaissance & Entretien',
      title: 'Guides Joaillerie',
      viewAll: 'Voir Tous les Guides',
      guides: [
        {
          title: 'Guide des Tailles de Bagues',
          desc: 'Trouvez votre taille parfaite grâce à notre tableau de tailles complet et nos conseils de mesure.',
          tag: 'Guide',
        },
        {
          title: 'La Pureté du Diamant Expliquée',
          desc: 'Comprendre les 4C — Taille, Couleur, Pureté et Carat — pour choisir votre pierre idéale.',
          tag: 'Éducation',
        },
        {
          title: 'Entretien des Bijoux',
          desc: 'Conseils d\'experts pour nettoyer, stocker et préserver vos bijoux fins pour les générations futures.',
          tag: 'Entretien',
        },
        {
          title: 'Signification des Pierres Précieuses',
          desc: 'Des saphirs aux rubis — découvrez le riche symbolisme des pierres précieuses.',
          tag: 'Patrimoine',
        },
      ],
    },
    // Instagram
    instagram: {
      eyebrow: 'Suivez-Nous',
      title: '@aurum.jewellery',
      subtitle: 'Rejoignez notre communauté d\'amoureux des bijoux',
    },
    // Newsletter
    newsletter: {
      eyebrow: 'Restez Connecté',
      title: 'Rejoignez Notre Monde',
      desc: 'Abonnez-vous pour recevoir des offres exclusives, un accès anticipé aux nouvelles collections et l\'inspiration stylistique de nos maîtres joailliers.',
      discount: 'Bénéficiez de 10% de réduction sur votre première commande en vous inscrivant.',
      placeholder: 'Entrez votre email',
      button: 'S\'abonner',
      success: 'Merci de votre abonnement !',
    },
    // Footer
    footer: {
      desc: 'Créateur de bijoux de luxe intemporels depuis 1990. Chaque pièce raconte une histoire d\'élégance, d\'artisanat et de beauté durable.',
      shop: 'Boutique',
      collections: 'Collections',
      company: 'Entreprise',
      contact: 'Contact',
      shopLinks: {
        all: 'Tous les Bijoux',
        rings: 'Bagues',
        necklaces: 'Colliers',
        earrings: 'Boucles d\'Oreilles',
        bracelets: 'Bracelets',
      },
      collectionLinks: {
        eternal: 'Éternelle',
        celestial: 'Céleste',
        ocean: 'Océan',
        royal: 'Royale',
      },
      companyLinks: {
        about: 'À Propos',
        Custom: 'Bijoux Sur Mesure',
        journal: 'Le Journal',
        contact: 'Contact',
      },
      address: '123 Luxury Lane, NY',
      copyright: 'Tous droits réservés.',
      aboutUs: 'À Propos',
      careGuide: 'Guide d\'Entretien',
    },
    // Product Card
    productCard: {
      addToCart: 'Ajouter au Panier',
      addToWishlist: 'Ajouter aux Favoris',
      new: 'Nouveau',
      bestseller: 'Best-Seller',
    },
    // Search
    search: {
      placeholder: 'Rechercher des bijoux...',
    },
    meetingsEvents: 'Réunions & Événements',
    // Shop page
    shop: {
      title: 'Collection Boutique',
      subtitle: 'Découvrez notre gamme complète de bijoux de luxe',
      filters: 'Filtres',
      searchPlaceholder: 'Rechercher des produits...',
      products: 'produits',
      categories: 'Catégories',
      collections: 'Collections',
      allCollections: 'Toutes les Collections',
      priceRange: 'Gamme de Prix',
      noProducts: 'Aucun produit trouvé correspondant à vos critères.',
      clearFilters: 'Effacer les Filtres',
      sortFeatured: 'En Vedette',
      sortPriceLow: 'Prix : Croissant',
      sortPriceHigh: 'Prix : Décroissant',
      sortNewest: 'Nouveautés',
      allPrices: 'Tous les Prix',
      under1k: 'Moins de 1 000 $',
      range1k3k: '1 000 $ - 3 000 $',
      range3k5k: '3 000 $ - 5 000 $',
      over5k: 'Plus de 5 000 $',
    },
    // About page
    about: {
      est: 'Fondé en 1990',
      heroTitle: 'Notre Histoire',
      heroSubtitle: 'Depuis plus de trois décennies, AURUM crée des bijoux qui transcendent le temps — des pièces qui font partie de votre histoire et de votre héritage familial.',
      beginningEyebrow: 'Nos Débuts',
      beginningTitle: 'D\'un Seul Atelier à un Héritage Mondial',
      beginningP1: 'AURUM a débuté en 1990 lorsque la maître joaillière Eleanor Ashworth a ouvert un petit atelier dans le Diamond District de New York. Armée des outils hérités de son grand-père — un célèbre horloger suisse — et d\'une passion pour créer des pièces qui durent toute une vie, Eleanor s\'est rapidement forgé une réputation d\'artisanat extraordinaire.',
      beginningP2: 'Ce qui a commencé par des commandes personnalisées pour des New-Yorkais exigeants est devenu une collection célébrée par des collectionneurs, des rédacteurs de mode et des couples à la recherche de quelque chose de vraiment spécial. Aujourd\'hui, AURUM opère depuis son studio phare à Manhattan, avec une équipe de 12 artisans qui partagent le dévouement intransigeant d\'Eleanor à la qualité.',
      beginningP3: 'Chaque pièce AURUM porte l\'esprit de cet atelier d\'origine — où le savoir-faire, la patience et l\'amour sont les matériaux les plus importants de tous.',
      valuesEyebrow: 'Ce Que Nous Défendons',
      valuesTitle: 'Nos Valeurs',
      teamEyebrow: 'Les Artisans',
      teamTitle: 'Notre Équipe',
      ctaTitle: 'Commencez Votre Histoire AURUM',
      ctaSubtitle: 'Commissionnez une pièce sur mesure ou explorez nos collections curées — chaque voyage avec AURUM commence par une conversation.',
      ctaCustom: 'Bijoux Sur Mesure',
      ctaShop: 'Boutique',
      values: [
        { title: 'Artisanat Maître', desc: 'Chaque pièce est finalisée à la main par des artisans ayant des décennies d\'expérience en joaillerie fine.' },
        { title: 'Profondément Personnel', desc: 'Nous croyons que les bijoux devraient raconter votre histoire. Notre équipe est dédiée à réaliser cela.' },
        { title: 'Éthiquement Sourcé', desc: 'Nous nous associons exclusivement à des mineurs et fournisseurs responsables engagés dans la durabilité.' },
        { title: 'Communauté d\'Abord', desc: 'Une partie de chaque vente soutient les communautés d\'artisans dans nos régions d\'approvisionnement.' },
      ],
      team: [
        { name: 'Eleanor Ashworth', role: 'Fondatrice & Designer Principal' },
        { name: 'Marcus Chen', role: 'Maître Orfèvre' },
        { name: 'Sophia Laurent', role: 'Gemmologue en Chef' },
        { name: 'James Harrington', role: 'Directeur Créatif' },
      ],
    },
    // Custom page
    Custom: {
      eyebrow: 'Fait Pour Vous Seul',
      title1: 'Bijoux',
      title2: 'Sur Mesure',
      subtitle: 'Commissionnez une pièce unique qui raconte votre histoire. Des bagues de fiançailles aux cadeaux d\'anniversaire, nos maîtres joailliers transforment votre vision en héritage.',
      cta: 'Commencer Votre Voyage',
      processEyebrow: 'Comment Ça Marche',
      processTitle: 'Le Processus Sur Mesure',
      galleryTitle: 'Galerie Sur Mesure',
      gallerySubtitle: 'Une sélection de pièces commandées créées avec amour',
      includesTitle: 'Chaque Pièce Sur Mesure Comprend',
      consultCta: 'Demander une Consultation',
      steps: [
        { step: '01', title: 'Consultation Design', desc: 'Rencontrez nos maîtres joailliers pour discuter de votre vision, vos préférences et votre budget. Nous écoutons, esquissons et affinons jusqu\'à ce que le concept soit parfait.' },
        { step: '02', title: 'Sélection des Pierres', desc: 'Choisissez parmi notre collection de diamants et gemmes certifiés GIA. Nos gemmologues vous guident à travers chaque nuance de qualité.' },
        { step: '03', title: 'Création Magistrale', desc: 'Nos artisans donnent vie à votre pièce en utilisant des techniques traditionnelles et une précision moderne. Vous recevez des mises à jour à chaque étape.' },
        { step: '04', title: 'Livraison Finale', desc: 'Votre pièce finie est présentée dans notre emballage AURUM signature, avec toute la documentation et un plan de soin à vie.' },
      ],
      includes: [
        'Consultation privée avec un maître joaillier',
        'Pierres certifiées GIA avec documentation complète',
        'Service de gravure gratuit',
        'Emballage cadeau AURUM signature',
        'Redimensionnement et nettoyage à vie',
        'Certificat d\'évaluation d\'assurance',
        'Garantie artisanale de 18 mois',
        'Équipe de service après-vente dédiée',
      ],
    },
    // Journal page
    journal: {
      eyebrow: 'Histoires & Perspectives',
      title: 'Le Journal AURUM',
      subtitle: 'Découvrez le monde de la joaillerie fine — du folklore des gemmes à l\'inspiration stylistique et à l\'artisanat en coulisses.',
      featured: 'À la Une',
      readArticle: 'Lire l\'Article',
      articles: [
        { title: 'L\'Histoire des Bagues de Fiançailles en Diamant', excerpt: 'Comment un archiduc autrichien du XVe siècle a lancé une tradition qui durerait des siècles, et pourquoi les diamants sont devenus le symbole de l\'amour éternel.', category: 'Patrimoine', date: '10 Mai 2025', readTime: '5 min de lecture' },
        { title: 'Choisir l\'Alliance Parfaite', excerpt: 'Un guide complet pour sélectionner une alliance qui complète votre bague de fiançailles et reflète votre style personnel.', category: 'Guide', date: '28 Avr 2025', readTime: '7 min de lecture' },
        { title: 'Les Émeraudes : La Pierre de Vénus', excerpt: 'Explorer la riche mythologie et l\'attrait durable des émeraudes, des mines de Cléopâtre à la haute joaillerie moderne.', category: 'Gemmes', date: '15 Avr 2025', readTime: '4 min de lecture' },
        { title: 'Dans les Coulisses : Notre Atelier', excerpt: 'Un regard rare à l\'intérieur du studio d\'AURUM, où les maîtres joailliers passent des centaines d\'heures à perfectionner chaque pièce.', category: 'Artisanat', date: '3 Avr 2025', readTime: '6 min de lecture' },
        { title: 'Collection Printemps 2025 : Bloom', excerpt: 'Inspirée par la beauté complexe des fleurs en pleine floraison, notre dernière collection célèbre l\'art de la nature.', category: 'Collections', date: '20 Mar 2025', readTime: '3 min de lecture' },
        { title: 'Comment Superposer les Colliers comme un Styliste', excerpt: 'Maîtrisez l\'art de la superposition de colliers avec ces conseils d\'experts sur les longueurs, textures et la création d\'un look curé.', category: 'Style', date: '8 Mar 2025', readTime: '5 min de lecture' },
      ],
    },
    // Contact page
    contact: {
      eyebrow: 'Nous Aimerions Vous Entendre',
      title: 'Contactez-Nous',
      subtitle: 'Vous avez une question, un design personnalisé en tête, ou souhaitez simplement en savoir plus ? Notre équipe est là pour vous aider.',
      namePlaceholder: 'Votre Nom Complet',
      emailPlaceholder: 'votre@email.com',
      phonePlaceholder: '+1 (555) 000-0000 (facultatif)',
      subjectLabel: 'Sujet',
      subjectPlaceholder: 'Sélectionner un sujet',
      messagePlaceholder: 'Parlez-nous de votre demande...',
      sendButton: 'Envoyer le Message',
      successTitle: 'Message Envoyé',
      successMsg: 'Merci de nous avoir contactés. Nous répondrons dans un délai d\'1 jour ouvrable.',
      infoTitles: ['Visitez Notre Boutique', 'Appelez-Nous', 'Écrivez-Nous', 'Heures d\'Ouverture'],
      nameError: 'Le nom est requis',
      nameLettersError: 'Le nom doit contenir uniquement des lettres',
      emailError: 'L\'e-mail est requis',
      emailValidError: 'Entrez une adresse e-mail valide',
      phoneError: 'Le téléphone ne doit contenir que des chiffres',
      subjectError: 'Veuillez sélectionner un sujet',
      messageError: 'Le message est requis',
      subjects: ['Renseignement Général', 'Commande Personnalisée', 'Question Produit', 'Retours & Échanges', 'Autre'],
    },
    // Cart page
    cart: {
      emptyTitle: 'Votre Panier est Vide',
      emptyMsg: 'Il semble que vous n\'ayez pas encore ajouté de pièces.',
      continueShopping: 'Continuer les Achats',
      title: 'Panier d\'Achat',
      remove: 'Supprimer',
      subtotal: 'Sous-total',
      shipping: 'Livraison',
      shippingFree: 'Gratuite',
      total: 'Total',
      checkout: 'Procéder au Paiement',
      freeShippingNote: 'Livraison gratuite pour les commandes de plus de 500 $',
    },
    // Wishlist page
    wishlist: {
      title: 'Ma Liste de Souhaits',
      emptyTitle: 'Votre Liste de Souhaits est Vide',
      emptyMsg: 'Sauvegardez vos pièces préférées ici.',
      browseCta: 'Parcourir la Collection',
      addToCart: 'Ajouter au Panier',
      remove: 'Supprimer',
    },
    // Collections page
    collectionsPage: {
      eyebrow: 'Nos Collections',
      title: 'Explorer les Collections',
      subtitle: 'Chaque collection raconte une histoire unique — découvrez celle qui vous parle.',
      shopCollection: 'Voir la Collection',
    },
    // Care page
    care: {
      title: 'Guide d\'Entretien des Bijoux',
      subtitle: 'Préservez la beauté de vos pièces AURUM pour les générations futures.',
    },
    // Order confirmation
    orderConfirmation: {
      title: 'Commande Confirmée !',
      subtitle: 'Merci pour votre achat. Vous recevrez un e-mail de confirmation sous peu.',
      continueShopping: 'Continuer les Achats',
    },
  },
}

type TranslationsType = typeof translations.en

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationsType
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const t = translations[language]
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
