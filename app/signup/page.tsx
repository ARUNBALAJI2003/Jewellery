'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleNameChange = (field: 'firstName' | 'lastName') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^A-Za-z\s''-]/g, '')
    setFormData({ ...formData, [field]: val })
    if (errors[field]) setErrors({ ...errors, [field]: '' })
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required'
    else if (!/^[A-Za-z\s''-]+$/.test(formData.firstName)) newErrors.firstName = 'Letters only'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required'
    else if (!/^[A-Za-z\s''-]+$/.test(formData.lastName)) newErrors.lastName = 'Letters only'
    if (!formData.email) newErrors.email = 'Email required'
    if (formData.password.length < 8) newErrors.password = 'Minimum 8 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    router.push('/')
  }

  const passwordRequirements = [
    { text: 'At least 8 characters', met: formData.password.length >= 8 },
    { text: 'Contains a number', met: /\d/.test(formData.password) },
    { text: 'Contains uppercase letter', met: /[A-Z]/.test(formData.password) },
  ]

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-muted-foreground">Join the AURUM experience</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <Input
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleNameChange('firstName')}
                  className={`bg-secondary border-border ${errors.firstName ? 'border-red-400' : ''}`}
                  required
                />
                {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
                <p className="text-xs text-muted-foreground">Letters only</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <Input
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleNameChange('lastName')}
                  className={`bg-secondary border-border ${errors.lastName ? 'border-red-400' : ''}`}
                  required
                />
                {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
                <p className="text-xs text-muted-foreground">Letters only</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-secondary border-border"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-secondary border-border pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="space-y-1 mt-2">
                {passwordRequirements.map((req, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className={`w-4 h-4 ${req.met ? 'text-accent' : 'text-muted-foreground'}`} />
                    <span className={req.met ? 'text-accent' : 'text-muted-foreground'}>{req.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-2">
              <input type="checkbox" className="rounded border-border mt-1" required />
              <span className="text-sm text-muted-foreground">
                I agree to the{' '}
                <Link href="#" className="text-accent hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="text-accent hover:underline">Privacy Policy</Link>
              </span>
            </label>

            <Button
              type="submit"
              className="w-full bg-gold-gradient text-accent-foreground hover:opacity-90"
              size="lg"
            >
              Create Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-accent hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
