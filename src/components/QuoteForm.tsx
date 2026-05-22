import { useState } from 'react'
import type { BookingInput } from '../lib/types'

type QuoteFormProps = {
  title?: string
  subtitle?: string
  ctaText?: string
}

const initialForm: BookingInput & { company: string } = {
  company: '',
  contactNumber: '',
  dropLocation: '',
  email: '',
  message: '',
  name: '',
  pickupLocation: '',
}

function Field({
  label,
  name,
  onChange,
  placeholder,
  type = 'text',
  value,
}: {
  label: string
  name: keyof BookingInput
  onChange: (value: string) => void
  placeholder: string
  type?: 'email' | 'tel' | 'text'
  value: string
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <input
        className="w-full rounded-lg border border-slate-300 p-3"
        name={name}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export function QuoteForm({
  title = 'Get Free Quote',
  subtitle = 'Share your moving details and we will respond with a practical estimate.',
  ctaText = 'Request Quote',
}: QuoteFormProps) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function submitBooking(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const response = await fetch('/api/bookings', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const result = (await response.json()) as { message?: string }

    if (!response.ok) {
      setStatus('error')
      setMessage(result.message || 'Could not submit your quote request.')
      return
    }

    setStatus('success')
    setMessage('Thanks. Your quote request has been received and our team will contact you shortly.')
    setForm(initialForm)
  }

  return (
    <div className="max-w-xl rounded-lg bg-white p-6 text-slate-900 shadow-2xl">
      <h2 className="mb-1 text-2xl font-bold text-blue-950">{title}</h2>
      <p className="mb-5 text-sm text-slate-600">{subtitle}</p>

      <form className="space-y-4" onSubmit={submitBooking}>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="company"
          tabIndex={-1}
          value={form.company}
          onChange={(event) => setForm({ ...form, company: event.target.value })}
        />
        <Field
          label="Name"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={(value) => setForm({ ...form, name: value })}
        />
        <Field
          label="Pickup Location"
          name="pickupLocation"
          placeholder="Pickup Location"
          value={form.pickupLocation}
          onChange={(value) => setForm({ ...form, pickupLocation: value })}
        />
        <Field
          label="Drop Location"
          name="dropLocation"
          placeholder="Drop Location"
          value={form.dropLocation}
          onChange={(value) => setForm({ ...form, dropLocation: value })}
        />
        <Field
          label="Contact Number"
          name="contactNumber"
          placeholder="Contact Number"
          type="tel"
          value={form.contactNumber}
          onChange={(value) => setForm({ ...form, contactNumber: value })}
        />
        <Field
          label="Email"
          name="email"
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm({ ...form, email: value })}
        />
        <label className="block">
          <span className="sr-only">Your Message</span>
          <textarea
            className="min-h-28 w-full resize-y rounded-lg border border-slate-300 p-3"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
          />
        </label>

        <button
          className="w-full rounded-lg bg-blue-950 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300"
          disabled={status === 'submitting'}
          type="submit"
        >
          {status === 'submitting' ? 'Requesting Quote...' : ctaText}
        </button>

        {message ? (
          <p
            aria-live="polite"
            className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-green-700'}`}
          >
            {message}
          </p>
        ) : null}

        <div className="grid grid-cols-2 gap-4 pt-2">
          <a
            className="rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            href="https://wa.me/918239059640"
            rel="noreferrer"
            target="_blank"
          >
            WhatsApp Now
          </a>
          <a
            className="rounded-lg bg-orange-500 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
            href="tel:+918239059640"
          >
            Call Now
          </a>
        </div>
      </form>
    </div>
  )
}
