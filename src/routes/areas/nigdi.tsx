import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Briefcase,
  Building2,
  Car,
  CheckCircle,
  Home,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Star,
  Truck,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/nigdi')({
  component: NigdiAreaPage,
})

const microAreas = [
  'Sector 21', 'Sector 22', 'Sector 23', 'Sector 24',
  'Sector 25', 'Sector 26', 'Sector 27', 'Transport Nagar',
  'Pradhikaran', 'Akurdi Railway Station Area', 'Bijlinagar',
]

const landmarks = [
  { icon: MapPin, name: 'Near Akurdi Railway Station', desc: '2 min from the station — easy access for outstation moves' },
  { icon: MapPin, name: 'Near Transport Nagar, Sector 23', desc: 'Our office is right inside Transport Nagar — your neighborhood movers' },
  { icon: MapPin, name: 'Near Bhakti Shakti Chowk', desc: 'Central junction connecting Nigdi to PCMC and Pune city' },
  { icon: MapPin, name: 'Near Pradhikaran Garden', desc: 'Well-known landmark for all Pradhikaran area residents' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Nigdi?',
    a: 'A 1BHK shift within Nigdi typically costs Rs 4,000–6,000, a 2BHK costs Rs 6,000–9,000, and a 3BHK costs Rs 9,000–14,000. These include packing material, loading, transport, and unloading. Final pricing depends on the volume of goods and floor level with or without lift access.',
  },
  {
    q: 'Do you do local shifting within Nigdi only?',
    a: 'Yes, we handle both intra-Nigdi shifting (e.g., Sector 23 to Sector 26) and intercity moves from Nigdi to anywhere in India. Being based in Nigdi means zero travel time and zero travel surcharge for local moves.',
  },
  {
    q: 'How quickly can you start after I call?',
    a: 'We can reach your location for a free survey within 15–30 minutes of your call in Nigdi. Same-day packing can often be arranged for local moves. For intercity moves, we typically need 1–2 days for planning and vehicle arrangement.',
  },
  {
    q: 'Is parking available for your trucks in Nigdi societies?',
    a: 'Most societies in sectors 21–27 and Pradhikaran have adequate parking or service lanes. Our team is familiar with every society\'s layout. For societies with restricted access, we use smaller tempos and shuttle the load to the main truck parked nearby.',
  },
]

const serviceCards = [
  {
    icon: Home,
    title: 'Home Shifting',
    desc: '1BHK, 2BHK, 3BHK, and villa shifting within Nigdi and across India. Professional packing with branded materials.',
    to: '/services/home-shifting-pune',
  },
  {
    icon: Briefcase,
    title: 'Office Relocation',
    desc: 'IT, manufacturing, and retail office shifting with minimal downtime. Cubicle dismantling and server room handling.',
    to: '/services/office-relocation-pune',
  },
  {
    icon: Car,
    title: 'Car/Bike Transport',
    desc: 'Open and enclosed carriers for all vehicle types. Fully insured with GPS tracking from Nigdi to your destination.',
    to: '/services/car-bike-transport-pune',
  },
  {
    icon: Package,
    title: 'Storage Services',
    desc: 'Secure warehousing in Nigdi\'s Transport Nagar. Short-term and long-term storage with inventory management.',
    to: '/services/warehousing-storage-pune',
  },
]

function NigdiAreaPage() {
  return (
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Nigdi, Pune — Lakshya Logistic Packers
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Located in Nigdi, we're your neighborhood packers and movers serving Sector 21-27, Transport Nagar, Pradhikaran, Akurdi Station zone, and Bijlinagar. Local expertise, faster response, and no travel surcharge for Nigdi residents.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why We're the Best Choice for Nigdi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <MapPin className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">We're Locals</h3>
                <p className="text-slate-600">Our office is right here in Transport Nagar, Sector 23, Nigdi. We live here, our families are here, and we know every lane, sector, and society like the back of our hand. No middlemen — deal directly with us.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Fastest Response</h3>
                <p className="text-slate-600">We reach your doorstep in 15-30 minutes for a free pre-move survey anywhere in Nigdi. No waiting for someone to travel from Pune city — we're already here, ready to start packing today.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Building2 className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Area Knowledge</h3>
                <p className="text-slate-600">We know every sector layout, society gate rules, lift dimensions, and traffic patterns. Whether it's Oxy Homez in Sector 27 or Kunal Icon in Pradhikaran, we've moved families in and out of nearly every Nigdi society.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Local Discounts</h3>
                <p className="text-slate-600">Nigdi residents get preferential rates because there's zero travel time for our crew. No hidden travel surcharge, no fuel levy — just honest pricing because you're our neighbor. Free survey, no obligation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Our Services in Nigdi</h2>
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
          <h2 className="mb-10 text-3xl font-bold">Areas We Cover in Nigdi</h2>
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
            title="Get Quote for Nigdi"
            subtitle="We're your neighbors in Transport Nagar. Call us or fill the form for a free home survey and estimate — same-day visit guaranteed."
            ctaText="Get Free Nigdi Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  )
}
