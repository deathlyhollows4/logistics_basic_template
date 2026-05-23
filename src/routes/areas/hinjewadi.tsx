import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, CheckCircle, MapPin, Star } from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/hinjewadi')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Lakshya Logistic Packers in Hinjewadi, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Phase 1-3, IT Park, Maan, Mulshi. Call +91 8239059640 for free quote.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Hinjewadi, home shifting Hinjewadi, office shifting Hinjewadi, car transport Hinjewadi, best movers Hinjewadi, relocation services Hinjewadi',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Lakshya Logistic Packers in Hinjewadi, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Phase 1-3, IT Park, Maan, Mulshi. Free quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/hinjewadi',
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
          'Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Lakshya Logistic Packers in Hinjewadi, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Phase 1-3, IT Park, Maan, Mulshi. Free quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://habbits2grow.com/areas/hinjewadi' }],
  }),
  component: HinjewadiAreaPage,
})

const microAreas = [
  'Phase 1', 'Phase 2', 'Phase 3', 'IT Park',
  'Maan Village', 'Mulshi Road', 'Marunji', 'Kasarsai',
]

const landmarks = [
  { icon: MapPin, name: 'Near Rajiv Gandhi Infotech Park', desc: 'Located minutes from Hinjewadi IT Park — convenient for corporate and employee relocations' },
  { icon: MapPin, name: 'Near Xion Mall', desc: 'Well-known shopping landmark off Mumbai-Bangalore Highway' },
  { icon: MapPin, name: 'Near Blue Ridge Township', desc: 'Easy access for Blue Ridge, Life Republic, and surrounding townships' },
  { icon: MapPin, name: 'Near Hinjewadi Bridge', desc: 'Key junction connecting Hinjewadi to Wakad and PCMC areas' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Hinjewadi?',
    a: 'A 1BHK shift within Hinjewadi typically costs Rs 4,000–7,000, a 2BHK costs Rs 7,000–10,000, and a 3BHK costs Rs 10,000–16,000. These include packing material, loading, transport, and unloading. Final pricing depends on the volume of goods and floor level with or without lift access.',
  },
  {
    q: 'Do you handle corporate employee relocations from Hinjewadi IT Park?',
    a: 'Yes, we specialize in IT employee relocations. We work with corporates in Rajiv Gandhi Infotech Park and surrounding tech parks — handling weekend moves, corporate billing, and employee transfers across cities. We can coordinate directly with your HR for seamless bulk relocations.',
  },
  {
    q: 'How quickly can you reach Hinjewadi for a survey?',
    a: 'We can reach your location in Hinjewadi within 20–40 minutes for a free pre-move survey. Being based nearby in Nigdi means short travel time and no hidden travel surcharge for Hinjewadi residents. Same-day packing is often available for local moves.',
  },
  {
    q: 'Do you have experience moving in Blue Ridge and Life Republic townships?',
    a: 'Yes, we move families in and out of Blue Ridge, Life Republic, and other Hinjewadi townships regularly. We know the gate procedures, service-lift access hours, and all society-specific rules for smooth, hassle-free moves.',
  },
]

function HinjewadiAreaPage() {
  return (<>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Lakshya Logistic Packers',
            image:
              'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
            '@id': 'https://habbits2grow.com/areas/hinjewadi#localbusiness',
            url: 'https://habbits2grow.com/areas/hinjewadi',
            telephone: '+91-8239059640',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Rajiv Gandhi Infotech Park, Hinjewadi',
              addressLocality: 'Hinjewadi',
              addressRegion: 'Maharashtra',
              postalCode: '411057',
              addressCountry: 'IN',
            },
            areaServed: {
              '@type': 'City',
              name: 'Hinjewadi',
              sameAs: 'https://en.wikipedia.org/wiki/Hinjawadi',
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              opens: '09:00',
              closes: '19:00',
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
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Areas',
                item: 'https://habbits2grow.com/areas/hinjewadi',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Hinjewadi',
                item: 'https://habbits2grow.com/areas/hinjewadi',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Based near Hinjewadi IT Park, we specialize in corporate employee relocations, township moves, and local home shifting. Serving Phase 1-3, Maan, Mulshi, and surrounding areas with 15+ years of experience.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why We're the Best Choice for Hinjewadi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">IT Park Proximity</h3>
                <p className="text-slate-600">Our base near Rajiv Gandhi Infotech Park means we're minutes from your office or apartment. Zero travel time, zero hidden surcharge for IT employees and corporate relocations anywhere in Hinjewadi Phase 1-3.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Corporate Relocation Experts</h3>
                <p className="text-slate-600">We handle bulk employee transfers for IT companies — coordinated weekend moves, corporate invoicing, and dedicated move managers. Your HR team gets a single point of contact and our team handles everything from packing to setup.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Township Familiarity</h3>
                <p className="text-slate-600">Blue Ridge, Life Republic, Xion Township, and Megapolis — we know every major township in Hinjewadi. Society gate procedures, service-lift bookings, and moving-hour restrictions are all handled before moving day for a seamless experience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Weekend Move Availability</h3>
                <p className="text-slate-600">We schedule moves on Saturdays and Sundays for working professionals. No need to take leave — we handle your Saturday morning packing and Sunday move-in so you're settled before Monday. Available for both local and intercity relocations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Areas We Cover in Hinjewadi</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {microAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <MapPin className="shrink-0 text-blue-950" size={18} />
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Landmarks Near Our Office</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {landmarks.map((lm) => (
              <div key={lm.name} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-5">
                <lm.icon className="mt-1 shrink-0 text-orange-500" size={24} />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{lm.name}</h3>
                  <p className="text-sm text-slate-600">{lm.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-lg border border-slate-200 bg-slate-50">
                <summary className="cursor-pointer px-5 py-4 text-lg font-semibold">{faq.q}</summary>
                <p className="px-5 pb-4 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <QuoteForm
            title="Get Quote for Hinjewadi"
            subtitle="IT employee or township resident — we're minutes away. Call us or fill the form for a free survey and estimate. Weekend moves available."
            ctaText="Get Free Hinjewadi Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
