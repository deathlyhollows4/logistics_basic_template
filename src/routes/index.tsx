import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle, Clock, MapPin, Phone, Shield, Star, Truck } from 'lucide-react'
import { MobileBar } from '../components/MobileBar'
import { PageFooter } from '../components/PageFooter'
import { QuoteForm } from '../components/QuoteForm'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Pune, Nigdi & PCMC — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Trusted packers and movers serving Nigdi, Bhosari, Pimpri-Chinchwad and all Pune. Home shifting, office relocation, vehicle transport, warehousing. Free quote, insured moves. Call +91 8239059640.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Pune, movers and packers Pune, best packers and movers Pune, relocation services Pune, shifting services Pune, moving company Pune, packers movers near me',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Pune, Nigdi & PCMC — Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Trusted packers and movers serving Nigdi, Bhosari, Pimpri-Chinchwad and all Pune. Home shifting, office relocation, vehicle transport, warehousing. Free quote, insured moves. Call +91 8239059640.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Packers and Movers in Pune, Nigdi & PCMC — Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Trusted packers and movers serving Nigdi, Bhosari, Pimpri-Chinchwad and all Pune. Home shifting, office relocation, vehicle transport, warehousing. Free quote, insured moves. Call +91 8239059640.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://habbits2grow.com' }],
  }),
  component: LakshyaLogisticPackers,
})

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

const areas = [
  { name: 'Nigdi', slug: 'nigdi' },
  { name: 'Bhosari', slug: 'bhosari' },
  { name: 'Pimpri-Chinchwad', slug: 'pimpri-chinchwad' },
  { name: 'Hinjewadi', slug: 'hinjewadi' },
  { name: 'Wakad', slug: 'wakad' },
  { name: 'Baner', slug: 'baner' },
  { name: 'Aundh', slug: 'aundh' },
]

const testimonials = [
  {
    quote:
      'Professional team, handled our 3BHK shifting from Nigdi to Hinjewadi flawlessly. Highly recommend! Everything was packed securely and delivered on time.',
    name: 'Rajesh K.',
    area: 'Nigdi',
  },
  {
    quote:
      'Office relocation done over a weekend with zero downtime. Amazing service! They moved our entire IT setup, furniture, and files without a scratch.',
    name: 'Priya M.',
    area: 'Hinjewadi',
  },
  {
    quote:
      'Car transported from Pune to Mumbai safely. GPS tracking was a plus! The team kept us updated throughout the journey and the vehicle arrived in perfect condition.',
    name: 'Amit S.',
    area: 'Wakad',
  },
]

function LakshyaLogisticPackers() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Lakshya Logistic Packers',
            url: 'https://habbits2grow.com',
            logo: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-8239059640',
              contactType: 'customer service',
              areaServed: 'IN-MH',
              availableLanguage: ['English', 'Hindi', 'Marathi'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Nigdi Bus Stop, Sector 23, Transport Nagar',
              addressLocality: 'Nigdi',
              addressRegion: 'Maharashtra',
              postalCode: '411044',
              addressCountry: 'IN',
            },
            sameAs: [],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Lakshya Logistic Packers',
            url: 'https://habbits2grow.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate:
                  'https://habbits2grow.com/search?q={search_term_string}',
              },
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://habbits2grow.com',
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1fr_0.9fr] md:items-center md:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
              <Truck aria-hidden="true" size={18} />
              Packers and movers across India
            </div>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Packers and Movers in Pune, Nigdi & PCMC — Lakshya Logistic Packers
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-blue-100">
              Trusted packers and movers serving Nigdi, Bhosari, Pimpri-Chinchwad and all of Pune.
              Home shifting, office relocation, vehicle transport, and warehousing — with transparent
              pricing and insured moves.
            </p>

            <QuoteForm />
          </div>

          <img
            alt="Logistics containers and freight operations"
            className="h-full max-h-[680px] w-full rounded-lg object-cover shadow-2xl"
            fetchPriority="high"
            width="1200"
            height="800"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
            srcSet="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop 1200w"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Clock aria-hidden="true" className="mx-auto mb-3 text-orange-500" size={32} />
              <h3 className="text-4xl font-bold text-blue-950">15+</h3>
              <p className="mt-2 text-sm text-slate-600">Years Experience</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Truck aria-hidden="true" className="mx-auto mb-3 text-orange-500" size={32} />
              <h3 className="text-4xl font-bold text-blue-950">5,000+</h3>
              <p className="mt-2 text-sm text-slate-600">Moves Completed</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <MapPin aria-hidden="true" className="mx-auto mb-3 text-orange-500" size={32} />
              <h3 className="text-4xl font-bold text-blue-950">125+</h3>
              <p className="mt-2 text-sm text-slate-600">Cities Coverage</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm">
              <Shield aria-hidden="true" className="mx-auto mb-3 text-orange-500" size={32} />
              <h3 className="text-4xl font-bold text-blue-950">100%</h3>
              <p className="mt-2 text-sm text-slate-600">Insured & Verified</p>
            </div>
          </div>
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
                  decoding="async"
                  loading="lazy"
                  width="1200"
                  height="800"
                  src={service.image}
                  srcSet={`${service.image.replace('w=1200', 'w=400')} 400w, ${service.image.replace('w=1200', 'w=800')} 800w, ${service.image} 1200w`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{service.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-4xl font-bold">Areas We Serve in Pune & PCMC</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-600">
            Covering a 50km radius across Pune, Pimpri-Chinchwad, and surrounding areas.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {areas.map((area) => (
              <a
                className="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-orange-500 hover:shadow-md"
                key={area.slug}
                href={`/areas/${area.slug}`}
              >
                <span className="font-medium text-slate-900">{area.name}</span>
                <ArrowRight
                  aria-hidden="true"
                  className="text-slate-400 transition group-hover:text-orange-500"
                  size={16}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">How It Works</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-600">
            Three simple steps to a stress-free move with Lakshya Logistic Packers.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-blue-950 text-white">
                <Phone aria-hidden="true" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">1. Get a Free Quote</h3>
              <p className="text-sm leading-6 text-slate-600">
                Fill out our quick form or call us. We assess your requirements and provide a
                transparent, no-obligation estimate within hours.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-blue-950 text-white">
                <Truck aria-hidden="true" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">2. We Pack & Load</h3>
              <p className="text-sm leading-6 text-slate-600">
                Our trained team arrives with quality packing materials, carefully wraps every item,
                and loads them securely into GPS-tracked vehicles.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-blue-950 text-white">
                <CheckCircle aria-hidden="true" size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold">3. Safe Delivery</h3>
              <p className="text-sm leading-6 text-slate-600">
                Goods are transported safely, unloaded with care, and placed in your new space.
                We unpack and remove debris — you settle in stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold">What Our Customers Say</h2>
          <p className="mx-auto mb-12 max-w-2xl text-slate-600">
            Real feedback from families and businesses we have moved across Pune.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 text-left shadow-sm"
                key={t.name}
              >
                <div className="mb-3 flex gap-1 text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star aria-hidden="true" fill="currentColor" key={i} size={16} />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-600">"{t.quote}"</p>
                <p className="font-semibold text-slate-900">
                  — {t.name}, <span className="text-slate-500">{t.area}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <img
            alt="Moving truck on the road"
            className="h-full max-h-[560px] w-full rounded-lg object-cover shadow-xl"
            decoding="async"
            loading="lazy"
            width="1200"
            height="800"
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop"
            srcSet="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=400&auto=format&fit=crop 400w, https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop 800w, https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop 1200w"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div>
            <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
            <div className="mb-8 grid grid-cols-2 gap-5">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                <h3 className="text-4xl font-bold text-blue-950">15+</h3>
                <p className="mt-2 text-sm text-slate-600">Years Experience</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
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

          <div className="mb-10 grid gap-6 text-left md:grid-cols-3">
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

          <div className="rounded-lg border border-white/10 bg-blue-900 p-6 text-left">
            <div className="mb-3 flex items-center gap-2">
              <MapPin aria-hidden="true" size={20} />
              <h3 className="text-xl font-bold">Visit Our Office</h3>
            </div>
            <p className="mb-3 text-blue-100">
              Near Nigdi Bus Stop, Sector 23, Transport Nagar, Nigdi, Pune, Maharashtra 411044
            </p>
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
              href="https://www.google.com/maps/dir/?api=1&destination=18.6569,73.7750"
              rel="noreferrer"
              target="_blank"
            >
              <MapPin aria-hidden="true" size={16} />
              View on Google Maps
            </a>
          </div>
        </div>
      </section>

      <PageFooter />

      <MobileBar />
    </div>
    </>
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
