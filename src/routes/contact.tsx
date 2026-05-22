import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Mail, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import { MobileBar } from '../components/MobileBar'
import { PageFooter } from '../components/PageFooter'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const initialForm = {
  company: '',
  name: '',
  mobileNumber: '',
  email: '',
  subject: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [responseMessage, setResponseMessage] = useState('')

  async function submitContact(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setResponseMessage('')

    const response = await fetch('/api/contact', {
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const result = (await response.json()) as { message?: string }

    if (!response.ok) {
      setStatus('error')
      setResponseMessage(result.message || 'Could not send your message.')
      return
    }

    setStatus('success')
    setResponseMessage(result.message || 'Your message has been sent.')
    setForm(initialForm)
    alert('Our team will reach you soon.')
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-lg text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
            <Mail aria-hidden="true" size={18} />
            Get in Touch
          </div>
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">Send Us a Message</h1>
          <p className="text-blue-100">
            Have a question or need a custom quote? Fill out the form below and our team will
            respond shortly.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-lg px-6 pb-20">
        <div className="rounded-lg bg-white p-6 shadow-xl">
          <form className="space-y-4" onSubmit={submitContact}>
            <input
              aria-hidden="true"
              autoComplete="off"
              className="hidden"
              name="company"
              tabIndex={-1}
              value={form.company}
              onChange={(event) => setForm({ ...form, company: event.target.value })}
            />

            <label className="block">
              <span className="sr-only">Name</span>
              <input
                className="w-full rounded-lg border border-slate-300 p-3"
                name="name"
                placeholder="Full Name"
                required
                type="text"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
              />
            </label>

            <label className="block">
              <span className="sr-only">Mobile Number</span>
              <input
                className="w-full rounded-lg border border-slate-300 p-3"
                name="mobileNumber"
                placeholder="Mobile Number"
                required
                type="tel"
                value={form.mobileNumber}
                onChange={(event) => setForm({ ...form, mobileNumber: event.target.value })}
              />
            </label>

            <label className="block">
              <span className="sr-only">Email</span>
              <input
                className="w-full rounded-lg border border-slate-300 p-3"
                name="email"
                placeholder="Email Address"
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
              />
            </label>

            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                className="w-full rounded-lg border border-slate-300 p-3"
                name="subject"
                placeholder="Subject (optional)"
                type="text"
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
              />
            </label>

            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                className="min-h-32 w-full resize-y rounded-lg border border-slate-300 p-3"
                name="message"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </label>

            <button
              className="w-full rounded-lg bg-blue-950 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={status === 'submitting'}
              type="submit"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {responseMessage ? (
              <p
                aria-live="polite"
                className={`text-sm ${status === 'error' ? 'text-red-700' : 'text-green-700'}`}
              >
                {responseMessage}
              </p>
            ) : null}
          </form>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-center text-sm sm:flex-row sm:justify-between">
          <Link
            className="inline-flex items-center gap-1 text-slate-500 transition hover:text-blue-950"
            to="/"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back to Home
          </Link>

          <div className="flex items-center justify-center gap-6 text-slate-500">
            <a
              className="inline-flex items-center gap-1 transition hover:text-green-600"
              href="https://wa.me/918239059640"
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={16} />
              WhatsApp
            </a>
            <a
              className="inline-flex items-center gap-1 transition hover:text-orange-500"
              href="tel:+918239059640"
            >
              <Phone aria-hidden="true" size={16} />
              Call
            </a>
            <a
              className="inline-flex items-center gap-1 transition hover:text-blue-600"
              href="mailto:lakshyalogisticpackers@gmail.com"
            >
              <Mail aria-hidden="true" size={16} />
              Email
            </a>
          </div>
        </div>
      </section>

      <PageFooter />

      <MobileBar />
    </div>
  )
}
