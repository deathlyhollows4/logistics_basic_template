import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, CheckCircle, MapPin, Star } from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/wakad')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Wakad, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Lakshya Logistic Packers in Wakad, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Kaspate Wasti, Datta Mandir, Kalewadi Phata, Thergaon. Call +91 8239059640 for free quote.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Wakad, home shifting Wakad, office shifting Wakad, vehicle transport Wakad, best movers Wakad, relocation services Wakad',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Wakad, Pune — Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Lakshya Logistic Packers in Wakad, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Kaspate Wasti, Datta Mandir, Kalewadi Phata, Thergaon. Free quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/wakad',
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
          'Packers and Movers in Wakad, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Lakshya Logistic Packers in Wakad, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Kaspate Wasti, Datta Mandir, Kalewadi Phata, Thergaon. Free quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://habbits2grow.com/areas/wakad' }],
  }),
  component: WakadAreaPage,
})

const microAreas = [
  'Kaspate Wasti', 'Datta Mandir Road', 'Kalewadi Phata',
  'Thergaon', 'Rahatani', 'Tathawade', 'Wakad Chowk',
]

const landmarks = [
  { icon: MapPin, name: 'Near Datta Mandir', desc: 'Central landmark of Wakad — easy to locate us for home surveys' },
  { icon: MapPin, name: 'Near Pune-Bangalore Highway', desc: 'Direct highway access for intercity and outstation moves' },
  { icon: MapPin, name: 'Near Kaspate Wasti', desc: 'Core residential area of Wakad with high-rise apartments and societies' },
  { icon: MapPin, name: 'Near Sayaji Hotel', desc: 'Well-known hotel and landmark on the highway, close to Wakad junction' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Wakad?',
    a: 'A 1BHK shift within Wakad typically costs Rs 4,000–7,000, a 2BHK costs Rs 7,000–11,000, and a 3BHK costs Rs 11,000–18,000. These include packing material, loading, transport, and unloading. Final pricing depends on the volume of goods and floor level with or without lift access.',
  },
  {
    q: 'Do you have experience with high-rise apartment moves?',
    a: 'Yes, we move families in and out of Wakad\'s high-rise societies daily. Our team is trained in elevator protocols, service-lift booking, society rules for moving hours, and protecting common areas during the move. We handle everything from studio apartments to large 4BHK penthouses.',
  },
  {
    q: 'Can you do intercity moves from Wakad?',
    a: 'Absolutely — our location right off the Pune-Bangalore Highway gives us a major advantage for intercity moves. We can dispatch trucks to Mumbai, Bangalore, Hyderabad, and across India faster from Wakad than from most other Pune locations. Highway access means no city traffic delays.',
  },
  {
    q: 'Is same-day shifting available in Wakad?',
    a: 'Yes, we offer same-day packing and moving for local shifts within Wakad and nearby areas like Thergaon, Rahatani, and Tathawade. Call us by 10 AM and we can have a team at your doorstep within the hour for a survey, with packing starting the same day.',
  },
]


function WakadAreaPage() {
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
            '@id': 'https://habbits2grow.com/areas/wakad#localbusiness',
            url: 'https://habbits2grow.com/areas/wakad',
            telephone: '+91-8239059640',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Datta Mandir, Wakad',
              addressLocality: 'Wakad',
              addressRegion: 'Maharashtra',
              postalCode: '411057',
              addressCountry: 'IN',
            },
            areaServed: {
              '@type': 'City',
              name: 'Wakad',
              sameAs: 'https://en.wikipedia.org/wiki/Wakad',
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
                item: 'https://habbits2grow.com/areas/wakad',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Wakad',
                item: 'https://habbits2grow.com/areas/wakad',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Wakad, Pune — Lakshya Logistic Packers
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Your trusted packers and movers serving Wakad and surrounding areas. Expert in high-rise apartment moves, society-compliant packing, and fast intercity relocation via the Pune-Bangalore Highway.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why We're the Best Choice for Wakad</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">High-Rise Experts</h3>
                <p className="text-slate-600">Wakad is known for its high-rise apartments and townships. We've moved families in and out of nearly every major society — from service-lift bookings to society gate rules, we know it all. No surprises on moving day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Highway Access Advantage</h3>
                <p className="text-slate-600">Located right off the Pune-Bangalore Highway, we dispatch intercity trucks faster than any other area. No city traffic bottlenecks — your goods hit the highway in minutes, cutting hours off Mumbai, Bangalore, and outstation transit times.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Society Familiarity</h3>
                <p className="text-slate-600">We know the moving policies of every major society in Wakad — from Kaspate Wasti to Datta Mandir Road to Tathawade. Society gate passes, service-lift access hours, and packing-in-advance rules are all handled before moving day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Fast Intercity Dispatch</h3>
                <p className="text-slate-600">Need to move to Mumbai, Bangalore, or Hyderabad? Our highway-adjacent location saves you hours. We load, dispatch, and track your shipment with the fastest turnaround time of any mover serving the Wakad area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Areas We Cover in Wakad</h2>
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
            title="Get Quote for Wakad"
            subtitle="Fastest intercity dispatch from Wakad. Call us or fill the form for a free home survey and estimate — same-day visit available."
            ctaText="Get Free Wakad Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
