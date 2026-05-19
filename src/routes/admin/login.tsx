import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/admin/login')({
  component: AdminLogin,
})

function AdminLogin() {
  const [email, setEmail] = useState('vidhantomar2004@gmail.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function submitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    const response = await fetch('/api/admin/login', {
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (!response.ok) {
      const result = (await response.json().catch(() => ({}))) as { message?: string }
      setError(result.message || 'Invalid admin credentials.')
      setIsSubmitting(false)
      return
    }

    window.location.href = '/admin'
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-lg bg-blue-950 text-white">
            <ShieldCheck aria-hidden="true" size={24} />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
              Lakshya Admin
            </p>
            <h1 className="text-2xl font-bold text-blue-950">Sign in</h1>
          </div>
        </div>

        <form className="space-y-4" onSubmit={submitLogin}>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Email</span>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-slate-300 p-3"
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Password</span>
            <input
              autoComplete="current-password"
              className="w-full rounded-lg border border-slate-300 p-3"
              required
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          {error ? (
            <p aria-live="polite" className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <button
            className="w-full rounded-lg bg-blue-950 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}
