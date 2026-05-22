import { createFileRoute, Link } from '@tanstack/react-router'
import { Mail, MessageCircle, Phone, ShieldCheck, Truck } from 'lucide-react'
import { useState } from 'react'
import type { BookingInput } from '../lib/types'

export const Route = createFileRoute('/')({
  component: LakshyaLogisticPackers,
})

const initialForm: BookingInput & { company: string } = {
  company: '',
  contactNumber: '',
  dropLocation: '',
  email: '',
  message: '',
  name: '',
  pickupLocation: '',
}

const services = [
  {
    title: 'Household Shifting',
    desc: 'Local and intercity shifting, careful packing, loading, unloading, unpacking, and safe handling of fragile items.',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Office Relocation',
    desc: 'Fast and secure office shifting planned to reduce downtime and protect business equipment.',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Vehicle Transport',
    desc: 'Professional bike and car transportation with secure handling and nationwide delivery support.',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Warehouse Storage',
    desc: 'Clean, secure warehouse and storage facilities for household goods and commercial inventory.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
  },
]

function LakshyaLogisticPackers() {
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
    alert('Our team will reach you soon.')
  }

  return (
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Truck aria-hidden="true" size={18} />
              Packers and movers across India
            </div>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Lakshya Logistic Packers
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-100">
              Safe, fast, and reliable packers and movers services for home shifting, office
              relocation, vehicle transport, and warehouse solutions with complete safety.
            </p>

            <div className="max-w-xl rounded-lg bg-white p-6 text-slate-900 shadow-2xl">
              <h2 className="mb-1 text-2xl font-bold text-blue-950">Get Free Quote</h2>
              <p className="mb-5 text-sm text-slate-600">
                Share your moving details and we will respond with a practical estimate.
              </p>

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
                  {status === 'submitting' ? 'Requesting Quote...' : 'Request Quote'}
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
          </div>

          <img
            alt="Logistics containers and freight operations"
            className="h-full max-h-[680px] w-full rounded-lg object-cover shadow-2xl"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Our Services</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-600">
            Complete packing and logistics solutions for individuals and businesses.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {services.map((service) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                key={service.title}
              >
                <img
                  alt={service.title}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                  src={service.image}
                />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <img
            alt="Moving truck on the road"
            className="h-full max-h-[560px] w-full rounded-lg object-cover shadow-xl"
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
          />

          <div>
            <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
            <div className="mb-8 grid grid-cols-2 gap-5">
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-blue-950">15+</h3>
                <p className="mt-2 text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-blue-950">12K+</h3>
                <p className="mt-2 text-sm text-slate-600">Company Works Completed</p>
              </div>
            </div>

            <ul className="space-y-5 text-lg text-slate-700">
              <li>
                <strong>End-to-End Solutions:</strong> Warehousing, packing, freight forwarding,
                and last-mile delivery in one coordinated service.
              </li>
              <li>
                <strong>Advanced Technology Integration:</strong> GPS shipment tracking, digital
                documentation, and automated status updates.
              </li>
              <li>
                <strong>Cost Efficiency:</strong> Industry expertise and carrier relationships help
                reduce transit time and freight costs.
              </li>
              <li>
                <strong>Reliability and Safety:</strong> Secure transport, careful handling, and
                transit insurance support.
              </li>
              <li>
                <strong>Dedicated Support:</strong> A single point of contact at every step of your
                move.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Contact Us</h2>
          <p className="mb-8 text-lg text-blue-100">
            Ready to move? Contact Lakshya Logistic Packers today for a free quote.
          </p>

          <div className="grid gap-6 text-left md:grid-cols-3">
            <ContactCard title="Phone">
              <p>+91 8239059640</p>
              <p>+91 8806571898</p>
            </ContactCard>
            <ContactCard title="Email">
              <p>lakshyalogisticpackers@gmail.com</p>
            </ContactCard>
            <ContactCard title="Location">
              <p>Near Nigdi Bus Stop, Pune, Maharashtra, India</p>
            </ContactCard>
          </div>
        </div>
      </section>

      <footer className="bg-black px-6 py-6 text-center text-slate-400">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <p className="text-sm">© 2026 Lakshya Logistic Packers. All Rights Reserved.</p>
          <a
            aria-label="Admin login"
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-slate-500 hover:text-white"
            href="/admin/login"
          >
            <ShieldCheck aria-hidden="true" size={18} />
          </a>
        </div>
        </footer>

        <div className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-white/10 bg-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
          <a
            className="flex flex-col items-center justify-center gap-1 bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            href="https://wa.me/918239059640"
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            href="tel:+918239059640"
          >
            <Phone aria-hidden="true" size={18} />
            Call
          </a>
          <Link
            className="flex flex-col items-center justify-center gap-1 bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            to="/contact"
          >
            <Mail aria-hidden="true" size={18} />
            Email
          </Link>
        </div>
    </div>
  )
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

function ContactCard({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-blue-900 p-6">
      <div className="mb-3 flex items-center gap-2">
        <Phone aria-hidden="true" size={18} />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div className="space-y-1 text-blue-100">{children}</div>
    </div>
  )
}
