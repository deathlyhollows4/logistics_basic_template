import { createFileRoute, Link } from '@tanstack/react-router'
import { Building2, CheckCircle, MapPin, Star } from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/baner')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Baner, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Lakshya Logistic Packers in Baner, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Baner Road, Balewadi, Pan Card Club Road, Sus Road. Call +91 8239059640 for free quote.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Baner, home shifting Baner, office relocation Baner, vehicle transport Baner, best movers Baner, relocation services Baner',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Baner, Pune — Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Lakshya Logistic Packers in Baner, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Baner Road, Balewadi, Pan Card Club Road, Sus Road. Free quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/baner',
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
          'Packers and Movers in Baner, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Lakshya Logistic Packers in Baner, Pune. Home shifting, office relocation, vehicle transport & storage. Serving Baner Road, Balewadi, Pan Card Club Road, Sus Road. Free quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://habbits2grow.com/areas/baner' }],
  }),
  component: BanerAreaPage,
})

const microAreas = [
  'Baner Road', 'Balewadi', 'Pan Card Club Road', 'Sus Road',
  'Pashan Link Road', 'Baner Pashan Link Road', 'Mhalunge',
]

const landmarks = [
  { icon: MapPin, name: 'Near Balewadi Stadium', desc: 'Close to Shree Shiv Chhatrapati Sports Complex — major landmark for Baner-Balewadi area' },
  { icon: MapPin, name: 'Near Baner Hill', desc: 'Well-known natural landmark and residential area with premium societies' },
  { icon: MapPin, name: 'Near Orchid Hotel', desc: 'Prominent hotel and landmark on Baner Road, adjacent to major housing complexes' },
  { icon: MapPin, name: 'Near Pan Card Club', desc: 'Popular landmark connecting Baner to Pashan and Sus Road areas' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Baner?',
    a: 'A 1BHK shift within Baner typically costs Rs 5,000–8,000, a 2BHK costs Rs 8,000–12,000, and a 3BHK costs Rs 12,000–20,000. These include packing material, loading, transport, and unloading. Premium societies with larger apartments may be slightly higher due to volume and handling requirements.',
  },
  {
    q: 'Do you handle moves in premium societies?',
    a: 'Yes, we move families in and out of Baner\'s premium societies — Amanora, Rohan, Kolte Patil, Panchshil, and more. We are experienced with the stricter moving hours, service-lift booking rules, and common-area protection requirements these societies enforce. We coordinate with society management so your move is smooth and compliant.',
  },
  {
    q: 'Can you move me to or from Baner from other cities?',
    a: 'Absolutely. Baner\'s location gives us excellent highway connectivity for intercity moves. We regularly handle relocations between Baner and Mumbai, Bangalore, Hyderabad, Delhi NCR, and across India. Our team carefully packs and inventories every item for safe long-distance transport.',
  },
  {
    q: 'How do you handle fragile and luxury items?',
    a: 'We use specialised packing for luxury furniture, glassware, chandeliers, artwork, and high-value electronics. Our team is trained in handling premium belongings — double-layered bubble wrap, foam corner protectors, custom wooden crating for fragile items, and insurance coverage available on request.',
  },
]


function BanerAreaPage() {
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
            '@id': 'https://habbits2grow.com/areas/baner#localbusiness',
            url: 'https://habbits2grow.com/areas/baner',
            telephone: '+91-8239059640',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Balewadi Stadium, Baner Road',
              addressLocality: 'Baner',
              addressRegion: 'Maharashtra',
              postalCode: '411045',
              addressCountry: 'IN',
            },
            areaServed: {
              '@type': 'City',
              name: 'Baner',
              sameAs: 'https://en.wikipedia.org/wiki/Baner',
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
                item: 'https://habbits2grow.com/areas/baner',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Baner',
                item: 'https://habbits2grow.com/areas/baner',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Baner, Pune — Lakshya Logistic Packers
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Premium packers and movers in Baner, Pune — experienced with luxury apartment moves, premium society rules, and careful handling of high-value belongings from Baner, Balewadi, and Pashan.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why We're the Best Choice for Baner</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Premium Society Experience</h3>
                <p className="text-slate-600">We know the moving protocols of Baner\'s high-end societies — Amanora, Rohan Builders, Kolte Patil, Panchshil, and more. Society gate passes, moving hour restrictions, and service-lift bookings are all coordinated before your move day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Luxury Item Handling</h3>
                <p className="text-slate-600">From designer furniture to chandeliers, artwork, and premium electronics — our trained packers use double-layered bubble wrap, corner protectors, and custom crating. We treat every belonging as if it were our own, with insurance coverage available.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Intercity Highway Access</h3>
                <p className="text-slate-600">Baner\'s connectivity to the Mumbai-Bangalore Highway and Expressway means your intercity relocation gets on the road faster. Our central location cuts hours off Mumbai, Bangalore, and outstation transit times.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Flexible Scheduling</h3>
                <p className="text-slate-600">We work around your schedule — weekends, late evenings, and early mornings available. Moving from a premium Baner society often means respecting quiet hours; we plan ahead so your move is smooth and compliant with society rules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Areas We Cover in Baner</h2>
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
            title="Get Quote for Baner"
            subtitle="Premium packing for premium homes. Call us or fill the form for a free home survey and estimate — flexible scheduling for society moves."
            ctaText="Get Free Baner Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
