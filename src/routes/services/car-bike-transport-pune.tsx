import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Car,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Shield,
  Truck,
  Wrench,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/services/car-bike-transport-pune')({
  head: () => ({
    meta: [
      {
        title:
          'Car & Bike Transport Services Pune — Safe Vehicle Relocation | Lakshya Logistic Packers Pune',
      },
      {
        name: 'description',
        content:
          'Car and bike transport in Pune with door-to-door service. Open/enclosed carriers, GPS tracking, transit insurance, all-India delivery. Free vehicle transport quote. Call +91 8239059640.',
      },
      {
        name: 'keywords',
        content:
          'car transport Pune, bike transport Pune, vehicle transport Pune, car shifting services Pune, bike shifting Pune, car carrier service Pune, two wheeler transport Pune',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Car & Bike Transport Services Pune — Safe Vehicle Relocation | Lakshya Logistic Packers Pune',
      },
      {
        property: 'og:description',
        content:
          'Car and bike transport in Pune with door-to-door service. Open/enclosed carriers, GPS tracking, transit insurance, all-India delivery. Free vehicle transport quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/services/car-bike-transport-pune',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Car & Bike Transport Services Pune — Safe Vehicle Relocation | Lakshya Logistic Packers Pune',
      },
      {
        name: 'twitter:description',
        content:
          'Car and bike transport in Pune with door-to-door service. Open/enclosed carriers, GPS tracking, transit insurance, all-India delivery. Free vehicle transport quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://habbits2grow.com/services/car-bike-transport-pune',
      },
    ],
  }),
  component: CarBikeTransportPage,
})

const faqs = [
  {
    q: 'What documents are needed for car transport?',
    a: 'You need the original RC Book, valid insurance papers, a self-attested copy of your ID proof (Aadhaar/PAN), and NOC if transporting interstate. For financed vehicles, a bank NOC is also required.',
  },
  {
    q: 'Is insurance included in the transport cost?',
    a: 'Basic transit insurance is included for all vehicle transport bookings. Additional comprehensive coverage up to the full vehicle value is available at a nominal extra charge. Claims are processed within 7 working days.',
  },
  {
    q: 'What is the difference between open and enclosed carriers?',
    a: 'Open carriers (80% cheaper) transport multiple vehicles on a flatbed — safe for most cars and bikes. Enclosed carriers are single-vehicle containers with full weather protection, recommended for luxury cars, vintage vehicles, or during monsoon.',
  },
  {
    q: 'How are bikes packed for transport?',
    a: 'Each bike is drained of fuel, mirrors and protruding parts are removed and wrapped separately, the chassis is crated in a wooden frame with foam padding, and the crate is strapped to the carrier bed. We use ISPM-15 certified wooden crates.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Local transport within Pune takes 1-2 days. Interstate delivery to metro cities like Mumbai/Bangalore takes 3-5 days, and to farther cities like Delhi/Hyderabad takes 5-7 days. GPS tracking lets you monitor progress in real time.',
  },
]

const intercityRoutes = [
  { label: 'Pune to Mumbai Car/Bike Transport', to: '#' },
  { label: 'Pune to Bangalore Vehicle Transport', to: '#' },
  { label: 'Pune to Delhi Car Transport', to: '#' },
  { label: 'Pune to Hyderabad Bike Transport', to: '#' },
]

function CarBikeTransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Vehicle Transport',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Lakshya Logistic Packers',
            },
            areaServed: { '@type': 'City', name: 'Pune' },
            description:
              'Car and bike transport services in Pune. Door-to-door, enclosed carriers, GPS tracking, transit insurance. All India delivery.',
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
                name: 'Services',
                item: 'https://habbits2grow.com/services/car-bike-transport-pune',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Car & Bike Transport Pune',
                item: 'https://habbits2grow.com/services/car-bike-transport-pune',
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Car & Bike Transport Services Pune — Safe Vehicle Relocation
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Door-to-door car and bike transport across Pune and all India. Fully insured, GPS-tracked, and handled by experienced professionals with 15+ years in vehicle logistics.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Car className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Car Transport</h2>
          </div>
          <p className="mb-8 max-w-3xl text-lg leading-7 text-slate-600">
            We move sedans, hatchbacks, SUVs, MUVs, and luxury cars anywhere in India. Choose between budget-friendly open carriers or premium enclosed containers with full weather and dust protection.
          </p>
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Open Carrier</h3>
              <p className="mb-3 text-slate-600">Multi-vehicle flatbed carrier. Best for standard cars, sedans, and SUVs. Cost-effective with secure strapping and wheel chocks.</p>
              <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">Economical</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Enclosed Carrier</h3>
              <p className="mb-3 text-slate-600">Single-vehicle container with full protection from rain, dust, and road debris. Ideal for luxury cars (BMW, Mercedes, Audi) and vintage vehicles.</p>
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">Premium Protection</span>
            </div>
          </div>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold">Vehicle Type</th>
                  <th className="px-4 py-3 font-semibold">Open Carrier</th>
                  <th className="px-4 py-3 font-semibold">Enclosed Carrier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Hatchback / Sedan</td>
                  <td className="px-4 py-3">Rs 5,000 – 7,000</td>
                  <td className="px-4 py-3">Rs 10,000 – 14,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium">SUV / MUV</td>
                  <td className="px-4 py-3">Rs 6,500 – 8,500</td>
                  <td className="px-4 py-3">Rs 12,000 – 16,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Luxury Car</td>
                  <td className="px-4 py-3">Rs 9,000 – 12,000</td>
                  <td className="px-4 py-3">Rs 15,000 – 22,000</td>
                </tr>
              </tbody>
            </table>
            <p className="px-4 py-2 text-xs text-slate-500">Rates shown for Pune city limits. Interstate transport calculated based on distance.</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Wrench className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Bike Transport</h2>
          </div>
          <p className="mb-8 max-w-3xl text-lg leading-7 text-slate-600">
            Professional two-wheeler packing and transport — scooters, motorcycles, superbikes. Each bike gets a custom wooden crate with foam padding for zero-scratch delivery.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">Fuel Drain & Prep</h3>
              <p className="text-slate-600">Fuel drained, battery terminals disconnected, mirrors and protruding parts removed and wrapped separately.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">Wooden Crating</h3>
              <p className="text-slate-600">ISPM-15 certified wooden crate built around the bike with high-density foam padding at all contact points.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">Crate Dimensions</h3>
              <p className="text-slate-600">Scooter crate: 6ft × 2.5ft × 3.5ft. Motorcycle crate: 7ft × 3ft × 4ft. Forklift-compatible pallet base.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <FileText className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Documents Required</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { doc: 'RC Book / Smart Card', detail: 'Original registration certificate — mandatory for transport' },
              { doc: 'Insurance Papers', detail: 'Valid third-party or comprehensive insurance copy' },
              { doc: 'ID Proof', detail: 'Self-attested copy of Aadhaar Card, PAN Card, or Passport' },
              { doc: 'NOC for Interstate', detail: 'No Objection Certificate from the RTO if moving across state lines' },
              { doc: 'Form 28', detail: 'Application for NOC — we assist with the RTO process' },
              { doc: 'Form 29/30', detail: 'Intimation of vehicle transfer — required for ownership change' },
            ].map((item) => (
              <div key={item.doc} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
                <CheckCircle className="mt-0.5 shrink-0 text-green-600" size={20} />
                <div>
                  <h4 className="font-semibold">{item.doc}</h4>
                  <p className="text-sm text-slate-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Truck className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Our Process</h2>
          </div>
          <div className="space-y-6">
            {[
              { step: 1, title: 'Vehicle Inspection', desc: 'Our team inspects your vehicle for existing dents, scratches, and mechanical condition. A detailed inspection report is signed by both parties with timestamped photos.' },
              { step: 2, title: 'Photography & Documentation', desc: '360-degree photography of your vehicle — exterior, interior, odometer reading, and underbody. All photos are shared on WhatsApp for your records.' },
              { step: 3, title: 'Loading & Securing', desc: 'Vehicle is loaded using hydraulic ramps onto the carrier. Wheel chocks, ratchet straps, and soft ties secure it at four anchor points to prevent any movement during transit.' },
              { step: 4, title: 'GPS-Tracked Transit', desc: 'Real-time GPS tracking link shared via WhatsApp. You can monitor your vehicle\'s location, speed, and estimated arrival time from your phone.' },
              { step: 5, title: 'Delivery & Re-inspection', desc: 'Vehicle is offloaded at the destination and re-inspected against the original report. You verify condition and sign the delivery receipt. Any damage claim is immediately documented.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Shield className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Insurance & Claims</h2>
          </div>
          <p className="mb-8 max-w-3xl text-lg leading-7 text-slate-600">
            Every transport booking includes basic transit insurance covering accidental damage, theft, and total loss. Upgrade to comprehensive coverage for full vehicle value protection.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Basic Transit Insurance</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Accidental damage during loading/unloading</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Theft of vehicle during transit</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Coverage: Up to Rs 5 lakhs</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Claim settlement within 7 working days</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Comprehensive Coverage</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Full vehicle IDV (Insured Declared Value)</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Natural calamity damage (flood, fire, earthquake)</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Glass and tyre damage coverage</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Zero-depreciation add-on available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Pricing Overview</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Vehicle Type</th>
                  <th className="px-4 py-3 font-semibold">Indicative Price Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium" rowSpan={2}>Car Transport (Local)</td>
                  <td className="px-4 py-3">Hatchback / Sedan</td>
                  <td className="px-4 py-3">Rs 5,000 – 7,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3">SUV / MUV</td>
                  <td className="px-4 py-3">Rs 6,500 – 8,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium" rowSpan={2}>Car Transport (Interstate)</td>
                  <td className="px-4 py-3">Hatchback / Sedan</td>
                  <td className="px-4 py-3">Rs 8,000 – 15,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3">SUV / Luxury</td>
                  <td className="px-4 py-3">Rs 12,000 – 20,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Bike Transport (Local)</td>
                  <td className="px-4 py-3">Scooter / Motorcycle</td>
                  <td className="px-4 py-3">Rs 2,000 – 4,000</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium">Bike Transport (Interstate)</td>
                  <td className="px-4 py-3">Scooter / Motorcycle</td>
                  <td className="px-4 py-3">Rs 4,000 – 10,000</td>
                </tr>
              </tbody>
            </table>
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

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Popular Intercity Routes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {intercityRoutes.map((route) => (
              <Link
                key={route.label}
                to={route.to}
                className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-5 transition hover:border-orange-500 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="text-orange-500" size={20} />
                  <span className="font-medium">{route.label}</span>
                </div>
                <ArrowRight className="text-slate-400" size={20} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <QuoteForm
            title="Transport Your Vehicle"
            subtitle="Get a free quote for car or bike transport. Share your pickup and drop locations and we'll respond within 30 minutes."
            ctaText="Get Vehicle Transport Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
    </>
  )
}
