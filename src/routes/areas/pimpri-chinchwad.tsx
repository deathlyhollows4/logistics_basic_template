import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Briefcase,
  Building2,
  Car,
  CheckCircle,
  Clock,
  Home,
  MapPin,
  Monitor,
  Package,
  Star,
  Truck,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/pimpri-chinchwad')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Pimpri-Chinchwad, Pune — Full-Service Relocation | Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Packers and movers in Pimpri-Chinchwad, Pune. Covering Pimple Saudagar, Rahatani, Kalewadi, Thergaon. Home shifting, office relocation, vehicle transport. PCMC natives. Free quote. Call +91 8239059640.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Pimpri-Chinchwad, home shifting Pimpri-Chinchwad, office relocation Pimpri-Chinchwad, bike transport Pimpri-Chinchwad, top movers Pimpri Chinchwad',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Pimpri-Chinchwad, Pune — Full-Service Relocation | Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Packers and movers in Pimpri-Chinchwad, Pune. Covering Pimple Saudagar, Rahatani, Kalewadi, Thergaon. Home shifting, office relocation, vehicle transport. PCMC natives. Free quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/pimpri-chinchwad',
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
          'Packers and Movers in Pimpri-Chinchwad, Pune — Full-Service Relocation | Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Packers and movers in Pimpri-Chinchwad, Pune. Covering Pimple Saudagar, Rahatani, Kalewadi, Thergaon. Home shifting, office relocation, vehicle transport. PCMC natives. Free quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://habbits2grow.com/areas/pimpri-chinchwad',
      },
    ],
  }),
  component: PimpriChinchwadAreaPage,
})

const coverageZones = [
  'Pimpri Camp', 'Chinchwad Gaon', 'Pimple Saudagar',
  'Pimple Nilakh', 'Pimple Gurav', 'Rahatani',
  'Kalewadi', 'Thergaon',
]

const faqs = [
  {
    q: 'What is the cost of 1BHK shifting in Pimpri?',
    a: 'A 1BHK shift within Pimpri-Chinchwad typically costs Rs 4,000–7,000 depending on the volume of goods, floor level, and whether your building has lift access. This includes packing materials, loading, transport, and unloading. 2BHK costs Rs 7,000–11,000 and 3BHK costs Rs 11,000–16,000.',
  },
  {
    q: 'Do you serve Pimple Saudagar and surrounding areas?',
    a: 'Yes, we serve all of Pimple Saudagar including Kunal Aspire, Roseland Residency, and all major societies. We also cover Pimple Nilakh, Pimple Gurav, Rahatani, Kalewadi, and Thergaon. Being PCMC natives, we know every society layout and entry procedure.',
  },
  {
    q: 'What office shifting experience do you have in PCMC?',
    a: 'We have relocated IT offices in Talawade IT Park, manufacturing units in Chinchwad MIDC, and commercial offices across Pimpri Camp and Chinchwad Gaon. We handle server rooms, cubicles, conference equipment, and after-hours moving to avoid business disruption.',
  },
  {
    q: 'How fast can you reach for a survey?',
    a: '15-30 minutes anywhere in Pimpri-Chinchwad. Our team is based nearby and knows all the chowks, shortcuts, and traffic patterns. Same-day surveys and next-day packing are often possible for local moves.',
  },
  {
    q: 'Do you provide packing materials?',
    a: 'Yes, we provide all packing materials — corrugated boxes (small/medium/large), bubble wrap, packing paper, stretch wrap, packing tape, wardrobe cartons for hanging clothes, and wooden crates for fragile electronics and glass items.',
  },
]

const landmarks = [
  { name: 'Near Chinchwad Railway Station', desc: 'Major transit hub — easy access for outstation loading/unloading with ample truck parking' },
  { name: 'Near Pimpri Chowk', desc: 'Central junction of Pimpri — well-known landmark for residential and commercial moves' },
  { name: 'Near Jagtap Dairy', desc: 'Prominent PCMC landmark near Pimple Saudagar serving all surrounding residential societies' },
  { name: 'Near Elpro Mall', desc: 'Well-known Chinchwad landmark — convenient meeting point for pre-move surveys' },
]

const commercialServices = [
  { title: 'Talawade IT Park', desc: 'Server room relocation, workstation cubicle dismantling/reassembly, IT asset tagging and inventory. After-hours and weekend moves to ensure zero business downtime.' },
  { title: 'Chinchwad MIDC', desc: 'Small to medium manufacturing unit relocation. Machine tools, assembly lines, raw material stock, and office furniture moved in a single coordinated operation.' },
  { title: 'Pimpri-Chinchwad Industrial Belt', desc: 'Coverage of the entire PCMC industrial corridor from Pimpri to Chinchwad. ODC cargo permits and factory gate pass handling included.' },
]

const serviceCards = [
  {
    icon: Home,
    title: 'Home Shifting',
    desc: 'Packing, loading, transport, and unpacking for apartments and bungalows across PCMC. Branded materials and trained crew.',
    to: '/services/home-shifting-pune',
  },
  {
    icon: Briefcase,
    title: 'Office Relocation',
    desc: 'IT and commercial office shifting across Pimpri-Chinchwad with after-hours service to keep your business running.',
    to: '/services/office-relocation-pune',
  },
  {
    icon: Car,
    title: 'Vehicle Transport',
    desc: 'Secure car and bike transport from PCMC to anywhere in India. GPS tracked, fully insured, door-to-door delivery.',
    to: '/services/car-bike-transport-pune',
  },
  {
    icon: Package,
    title: 'Storage Services',
    desc: 'Warehousing near Nigdi for residents and businesses in Pimpri-Chinchwad. Short and long-term with inventory tracking.',
    to: '/services/warehousing-storage-pune',
  },
]

function PimpriChinchwadAreaPage() {
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
            '@id':
              'https://habbits2grow.com/areas/pimpri-chinchwad#localbusiness',
            url: 'https://habbits2grow.com/areas/pimpri-chinchwad',
            telephone: '+91-8239059640',
            priceRange: '₹₹',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Near Nigdi Bus Stop, Sector 23, Transport Nagar',
              addressLocality: 'Nigdi',
              addressRegion: 'Maharashtra',
              postalCode: '411044',
              addressCountry: 'IN',
            },
            areaServed: {
              '@type': 'City',
              name: 'Pimpri-Chinchwad',
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
                item: 'https://habbits2grow.com/areas/pimpri-chinchwad',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Pimpri-Chinchwad',
                item: 'https://habbits2grow.com/areas/pimpri-chinchwad',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Pimpri-Chinchwad, Pune — Full-Service Relocation
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Covering Pimpri Camp, Chinchwad Gaon, Pimple Saudagar, Pimple Nilakh, Pimple Gurav, Rahatani, Kalewadi, Thergaon — the heart of PCMC. All types of relocation with PCMC-native expertise and a multi-vehicle fleet ready for any size move.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why PCMC Trusts Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">PCMC Natives</h3>
                <p className="text-slate-600">Born and raised in Pimpri-Chinchwad. We've seen PCMC grow from small towns to a bustling industrial and IT hub. We know every chowk, every society, and every gali — not from GPS, but from growing up here.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Truck className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Multi-Vehicle Fleet</h3>
                <p className="text-slate-600">From Tata Ace tempos for narrow Pimpri Camp lanes to 32-foot Eicher container trucks for full-load intercity moves. The right vehicle for every job — no compromises on safety or efficiency.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Clock className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Weekend Availability</h3>
                <p className="text-slate-600">We know most PCMC residents work Monday to Friday in IT parks and factories. We schedule moves on Saturdays and Sundays so you don't need to take leave. Evening surveys available on weekdays.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Transparent Pricing</h3>
                <p className="text-slate-600">Detailed written estimate before the move, not after. Every charge itemized — packing material, labour, transport, unloading. No surprise costs, no hidden fuel surcharge, no last-minute add-ons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Coverage Zones in Pimpri-Chinchwad</h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {coverageZones.map((zone) => (
              <div key={zone} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3">
                <MapPin className="shrink-0 text-blue-950" size={18} />
                <span className="font-medium">{zone}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold">Commercial & Industrial Moves</h2>
          <p className="mb-10 max-w-3xl text-lg text-slate-600">Pimpri-Chinchwad is home to Maharashtra's largest industrial belt. We bring specialized equipment and experience for every type of commercial relocation in PCMC.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {commercialServices.map((svc) => (
              <div key={svc.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:shadow-lg">
                <Building2 className="mb-4 text-orange-500" size={32} />
                <h3 className="mb-2 text-lg font-semibold">{svc.title}</h3>
                <p className="text-sm text-slate-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Our Services in Pimpri-Chinchwad</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((svc) => (
              <Link
                key={svc.title}
                to={svc.to}
                className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-6 transition hover:border-orange-500 hover:shadow-lg"
              >
                <svc.icon className="mt-1 shrink-0 text-orange-500" size={32} />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">{svc.title}</h3>
                  <p className="text-slate-600">{svc.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Landmarks Near Pimpri-Chinchwad</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {landmarks.map((lm) => (
              <div key={lm.name} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <MapPin className="mt-1 shrink-0 text-orange-500" size={24} />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{lm.name}</h3>
                  <p className="text-sm text-slate-600">{lm.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-lg border border-slate-200 bg-white">
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
            title="Get Quote for Pimpri-Chinchwad"
            subtitle="Born and raised in PCMC — we know every corner. Fill the form and our Pimpri crew will reach you for a free survey, evenings and weekends included."
            ctaText="Get Free PCMC Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
