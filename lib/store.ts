import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  collection: string
  description: string
  details?: string[]
  rating: number
  reviews: number
  inStock: boolean
  isNew?: boolean
  isBestseller?: boolean
}

export interface CartItem extends Product {
  quantity: number
}

interface StoreState {
  cart: CartItem[]
  wishlist: Product[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  isInCart: (productId: string) => boolean
  getCartTotal: () => number
  getCartCount: () => number
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id)
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }
          return { cart: [...state.cart, { ...product, quantity }] }
        })
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }))
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }))
      },
      
      clearCart: () => set({ cart: [] }),
      
      addToWishlist: (product) => {
        set((state) => {
          if (state.wishlist.some((item) => item.id === product.id)) {
            return state
          }
          return { wishlist: [...state.wishlist, product] }
        })
      },
      
      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== productId),
        }))
      },
      
      isInWishlist: (productId) => {
        return get().wishlist.some((item) => item.id === productId)
      },
      
      isInCart: (productId) => {
        return get().cart.some((item) => item.id === productId)
      },
      
      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0)
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0)
      },
    }),
    {
      name: 'aurum-store',
    }
  )
)
