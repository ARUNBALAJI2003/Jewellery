'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, ArrowRight, CheckCircle, Gem, Sparkles, Package, Heart, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!email || !password) {
      setError('Please fill in all fields.')
      return
    }
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
    }, 1400)
  }

  return (
    <div
      className="pt-20 min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(160deg, #fdf8f1 0%, #f9f3e8 100%)' }}
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ position:'absolute', top:'-6rem', left:'-6rem', width:'28rem', height:'28rem', borderRadius:'50%', background:'rgba(212,168,75,0.07)' }} />
        <div style={{ position:'absolute', bottom:'-4rem', right:'-4rem', width:'22rem', height:'22rem', borderRadius:'50%', background:'rgba(212,168,75,0.07)' }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <AnimatePresence mode="wait">

          {/* ════════════════════════════════ LOGIN FORM ═══════════════════════════════ */}
          {!isSuccess && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28, transition: { duration: 0.25 } }}
              style={{ maxWidth: 460, margin: '0 auto' }}
            >
              {/* Brand */}
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '1.5rem', textDecoration: 'none' }}>
                  <Gem style={{ width: 22, height: 22, color: '#d4a84b' }} />
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '0.25em',
                    background: 'linear-gradient(135deg, #d4a84b, #a87730)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    AURUM
                  </span>
                </Link>
                <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1a1410', margin: '0 0 0.5rem' }}>
                  Welcome Back
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#6b5e4e', margin: 0 }}>
                  Sign in to your AURUM account
                </p>
              </div>

              {/* Card */}
              <div style={{
                background: '#ffffff',
                borderRadius: 20,
                border: '1px solid rgba(212,168,75,0.18)',
                boxShadow: '0 8px 40px rgba(168,119,48,0.10)',
                padding: '2.5rem',
              }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a4a38' }}>
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-base"
                      style={{ background: '#fdf8f1', borderColor: 'rgba(212,168,75,0.25)', fontSize: '1rem' }}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a4a38' }}>
                      Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 text-base pr-12"
                        style={{ background: '#fdf8f1', borderColor: 'rgba(212,168,75,0.25)', fontSize: '1rem' }}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', color: '#9e8672', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      >
                        {showPassword ? <EyeOff style={{ width: 18, height: 18 }} /> : <Eye style={{ width: 18, height: 18 }} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember / Forgot */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: '0.9rem', color: '#6b5e4e' }}>
                      <input type="checkbox" style={{ accentColor: '#d4a84b', width: 15, height: 15 }} />
                      Remember me
                    </label>
                    <Link href="#" style={{ fontSize: '0.9rem', color: '#d4a84b', fontWeight: 600, textDecoration: 'none' }}>
                      Forgot password?
                    </Link>
                  </div>

                  {/* Error message */}
                  {error && (
                    <p style={{ color: '#c0392b', fontSize: '0.88rem', margin: 0, background: '#fdf0ed', padding: '0.6rem 1rem', borderRadius: 8 }}>
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    size="lg"
                    style={{
                      background: 'linear-gradient(135deg, #d4a84b, #a87730)',
                      color: '#fff',
                      border: 'none',
                      height: '3.2rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      boxShadow: '0 4px 16px rgba(168,119,48,0.35)',
                      marginTop: '0.4rem',
                    }}
                    className="w-full hover:opacity-90 transition-opacity"
                  >
                    {isLoading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <svg style={{ animation: 'spin 0.8s linear infinite', width: 18, height: 18 }} viewBox="0 0 24 24" fill="none">
                          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
                          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4"/>
                          <path fill="white" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                        </svg>
                        Signing In…
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        Sign In <ArrowRight style={{ width: 18, height: 18 }} />
                      </span>
                    )}
                  </Button>
                </form>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '1.6rem 0' }}>
                  <div style={{ flex: 1, height: 1, background: 'rgba(212,168,75,0.18)' }} />
                  <span style={{ fontSize: '0.82rem', color: '#9e8672' }}>or</span>
                  <div style={{ flex: 1, height: 1, background: 'rgba(212,168,75,0.18)' }} />
                </div>

                <p style={{ textAlign: 'center', fontSize: '0.97rem', color: '#6b5e4e', margin: 0 }}>
                  Don&apos;t have an account?{' '}
                  <Link href="/signup" style={{ color: '#d4a84b', fontWeight: 700, textDecoration: 'none' }}>
                    Create one
                  </Link>
                </p>
              </div>
            </motion.div>
          )}

          {/* ════════════════════════════════ SUCCESS MESSAGE ══════════════════════════ */}
          {isSuccess && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.90 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 240, damping: 22 }}
              style={{ maxWidth: 480, margin: '0 auto', textAlign: 'center' }}
            >
              <div style={{
                background: '#ffffff',
                borderRadius: 24,
                border: '1px solid rgba(212,168,75,0.2)',
                boxShadow: '0 12px 48px rgba(168,119,48,0.13)',
                padding: '3rem 2.5rem',
              }}>

                {/* Animated checkmark */}
                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
                  style={{
                    width: 80, height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #d4a84b, #a87730)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 6px 24px rgba(168,119,48,0.35)',
                  }}
                >
                  <CheckCircle style={{ width: 42, height: 42, color: '#fff' }} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                  <Sparkles style={{ width: 18, height: 18, color: '#d4a84b', display: 'block', margin: '0 auto 0.75rem' }} />
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1410', margin: '0 0 0.75rem' }}>
                    Welcome Back!
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#6b5e4e', lineHeight: 1.65, margin: '0 0 0.5rem' }}>
                    You&apos;ve successfully signed in to your AURUM account.
                  </p>
                  <p style={{ fontSize: '0.97rem', color: '#9e8672', lineHeight: 1.65, margin: '0 0 2rem' }}>
                    Your world of handcrafted luxury awaits — explore your saved pieces, track orders, and discover what&apos;s new.
                  </p>
                </motion.div>

                {/* Perks grid */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.38 }}
                  style={{
                    background: '#fdf8f1',
                    borderRadius: 14,
                    border: '1px solid rgba(212,168,75,0.15)',
                    padding: '1.25rem 1.5rem',
                    marginBottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    textAlign: 'left',
                  }}
                >
                  {[
                    [Heart, 'Your wishlist & saved favourites are ready'],
                    [Package, 'Track your orders in real time'],
                    [Tag, 'Member-exclusive offers & early collection access'],
                  ].map(([Icon, text]) => (
                    <div key={text as string} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{
                        width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                        background: 'linear-gradient(135deg, #d4a84b, #a87730)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon as any style={{ width: 16, height: 16, color: '#fff' }} />
                      </div>
                      <span style={{ fontSize: '0.93rem', color: '#5a4a38', fontWeight: 500 }}>{text as string}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Actions */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.52 }} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <Button
                    onClick={() => router.push('/')}
                    size="lg"
                    style={{
                      background: 'linear-gradient(135deg, #d4a84b, #a87730)',
                      color: '#fff',
                      border: 'none',
                      height: '3.2rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      boxShadow: '0 4px 16px rgba(168,119,48,0.35)',
                    }}
                    className="w-full hover:opacity-90 transition-opacity"
                  >
                    Continue to AURUM <ArrowRight style={{ width: 18, height: 18, marginLeft: 8 }} />
                  </Button>
                  <Link
                    href="/shop"
                    style={{ fontSize: '0.93rem', color: '#d4a84b', fontWeight: 600, textDecoration: 'none' }}
                  >
                    Browse the latest collection →
                  </Link>
                </motion.div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}
