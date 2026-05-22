import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, CheckCircle, MapPin, Star } from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/aundh')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Aundh, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Lakshya Logistic Packers in Aundh, Pune. Home shifting, office relocation, vehicle transport & storage. Serving ITI Road, Bremen Chowk, Parihar Chowk, Sangvi. Call +91 8239059640 for free quote.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Aundh, home shifting Aundh, office relocation Aundh, vehicle transport Aundh, best movers Aundh, relocation services Aundh',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Aundh, Pune — Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Lakshya Logistic Packers in Aundh, Pune. Home shifting, office relocation, vehicle transport & storage. Serving ITI Road, Bremen Chowk, Parihar Chowk, Sangvi. Free quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/aundh',
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
          'Packers and Movers in Aundh, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Lakshya Logistic Packers in Aundh, Pune. Home shifting, office relocation, vehicle transport & storage. Serving ITI Road, Bremen Chowk, Parihar Chowk, Sangvi. Free quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://habbits2grow.com/areas/aundh' }],
  }),
  component: AundhAreaPage,
})

const microAreas = [
  'ITI Road', 'Bremen Chowk', 'Parihar Chowk', 'Sangvi',
  'Bopodi', 'Range Hills', 'Khadki',
]

const landmarks = [
  { icon: MapPin, name: 'Near Bremen Chowk', desc: 'Central junction of Aundh — easy to navigate for our moving trucks' },
  { icon: MapPin, name: 'Near Medipoint Hospital', desc: 'Well-known medical landmark on Aundh Road, close to major residential pockets' },
  { icon: MapPin, name: 'Near Parihar Chowk', desc: 'Busy intersection connecting Aundh to ITI Road, Sangvi, and University Circle' },
  { icon: MapPin, name: 'Near Aundh ITI', desc: 'Industrial Training Institute area landmark with dense residential neighborhoods' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Aundh?',
    a: 'A 1BHK shift within Aundh typically costs Rs 4,000–7,000, a 2BHK costs Rs 7,000–11,000, and a 3BHK costs Rs 11,000–17,000. These include packing material, loading, transport, and unloading. Final pricing depends on the volume of goods and floor level with or without lift access.',
  },
  {
    q: 'Do you handle moves in old Aundh buildings?',
    a: 'Yes, we have extensive experience with Aundh\'s mix of old bungalows, independent houses, and newer apartments. Our team is skilled at navigating narrow staircases, buildings without lifts, and tight lanes — challenges that larger corporate movers often avoid.',
  },
  {
    q: 'Are you familiar with the Army area and Range Hills?',
    a: 'Absolutely. We regularly move families in and out of the Khadki, Range Hills, and NCC-proximate areas of Aundh. We understand the gate protocols, visitor passes, and specific timings required for moves in and around these defence and institutional zones.',
  },
  {
    q: 'Can you do a fast local move within Aundh?',
    a: 'Yes, intra-Aundh moves are our quickest service. Because we are based locally, there is minimal travel time and no travel surcharge. From ITI Road to Sangvi, from Parihar Chowk to Bopodi — we can often complete a local Aundh move start-to-finish the same day.',
  },
]


function AundhAreaPage() {
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
            '@id': 'https://habbits2grow.com/areas/aundh#localbusiness',
            url: 'https://habbits2grow.com/areas/aundh',
            telephone: '+91-8239059640',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Bremen Chowk, Aundh',
              addressLocality: 'Aundh',
              addressRegion: 'Maharashtra',
              postalCode: '411007',
              addressCountry: 'IN',
            },
            areaServed: {
              '@type': 'City',
              name: 'Aundh',
              sameAs: 'https://en.wikipedia.org/wiki/Aundh,_Pune',
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
                item: 'https://habbits2grow.com/areas/aundh',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Aundh',
                item: 'https://habbits2grow.com/areas/aundh',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Aundh, Pune — Lakshya Logistic Packers
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Your neighborhood packers and movers in Aundh, Pune. Expert in both old Aundh bungalow moves and new high-rise relocations. Serving ITI Road, Sangvi, Range Hills, and Khadki for over 15 years.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why We're the Best Choice for Aundh</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Old & New Building Expertise</h3>
                <p className="text-slate-600">Aundh has a unique mix — heritage bungalows and modern high-rises. We've mastered both. From navigating narrow staircases and no-lift buildings to coordinating with society management in newer complexes, no property type is new to us.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Narrow Lane Navigation</h3>
                <p className="text-slate-600">Aundh's inner lanes, especially in the old part of town and near ITI Road, can be tight. We use appropriately sized vehicles and have mapped every accessible route. If a large truck can't fit, we use shuttle tempos — no move is too tricky.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Central Location Advantage</h3>
                <p className="text-slate-600">Aundh's central position connects us easily to the University area, Shivajinagar, Pashan, and PCMC. This means faster response times for surveys and moves — we're never coming from the far end of the city.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Fast Local Moves</h3>
                <p className="text-slate-600">Intra-Aundh moves are our fastest service — minimal travel time and zero travel surcharge. From Bremen Chowk to Sangvi, from ITI Road to Range Hills, a same-day start-to-finish move is standard for most local relocations in Aundh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Areas We Cover in Aundh</h2>
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
            title="Get Quote for Aundh"
            subtitle="Your neighborhood movers near Bremen Chowk. Call us or fill the form for a free home survey and estimate — same-day visit for Aundh residents."
            ctaText="Get Free Aundh Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
