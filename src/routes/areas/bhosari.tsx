import { createFileRoute, Link } from '@tanstack/react-router'
import {
  CheckCircle,
  Factory,
  Home,
  MapPin,
  Star,
  Wrench,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/areas/bhosari')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Bhosari, Pune — Industrial & Residential Shifting | Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Packers and movers in Bhosari, Pune. Specialized in MIDC industrial moving, factory machinery, residential shifting for Bhosari Gaon, vehicle transport. Near Moshi, Chikhali. Free estimate.',
      },
      {
        name: 'keywords',
        content:
          'packers and movers Bhosari, residential shifting Bhosari, commercial movers Bhosari, vehicle shifting Bhosari, best packers Bhosari, industrial moving Bhosari MIDC',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Bhosari, Pune — Industrial & Residential Shifting | Lakshya Logistic Packers',
      },
      {
        property: 'og:description',
        content:
          'Packers and movers in Bhosari, Pune. Specialized in MIDC industrial moving, factory machinery, residential shifting for Bhosari Gaon, vehicle transport. Near Moshi, Chikhali. Free estimate.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/bhosari',
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
          'Packers and Movers in Bhosari, Pune — Industrial & Residential Shifting | Lakshya Logistic Packers',
      },
      {
        name: 'twitter:description',
        content:
          'Packers and movers in Bhosari, Pune. Specialized in MIDC industrial moving, factory machinery, residential shifting for Bhosari Gaon, vehicle transport. Near Moshi, Chikhali. Free estimate.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [
      { rel: 'canonical', href: 'https://habbits2grow.com/areas/bhosari' },
    ],
  }),
  component: BhosariAreaPage,
})

const faqs = [
  {
    q: 'Do you have experience with factory shifting?',
    a: 'Yes, we have completed over 50 factory and industrial relocations from Bhosari MIDC, including CNC machines, injection molding lines, assembly conveyors, and heavy presses. Our team includes certified riggers and craning specialists for loads up to 40 tonnes.',
  },
  {
    q: 'What is the cost of home shifting within Bhosari?',
    a: 'A 1BHK shift within Bhosari typically costs Rs 4,000–6,000, a 2BHK costs Rs 6,000–10,000, and a 3BHK costs Rs 10,000–15,000. Costs vary based on volume, floor level, and whether lift access is available in your building.',
  },
  {
    q: 'Can you handle heavy machinery like CNC and injection molding?',
    a: 'Absolutely. We use hydraulic gantries, mobile cranes, and air-float skates for precision equipment. Every machine is laser-aligned after reassembly. We provide vibration and shock monitoring during transit for sensitive equipment.',
  },
  {
    q: 'Do you know the MIDC entry and exit procedures?',
    a: 'Yes, we handle all MIDC gate pass requirements, including Form 12, gate entry applications, weighbridge slips, and escort vehicle arrangements. Our team is well-versed in MIDC security protocols and timings (8 AM to 6 PM for heavy vehicles).',
  },
]

const residentialAreas = [
  { name: 'Bhosari Gaon', desc: 'Old Bhosari village area with narrow lanes and traditional homes. We use smaller tempos for tight access.' },
  { name: 'Indrayani Nagar', desc: 'Large residential colony near the Bhosari-Moshi road. Wide roads with easy truck access for full-load moves.' },
  { name: 'Sant Nagar', desc: 'Well-planned residential zone with modern apartment complexes and lift access in most buildings.' },
  { name: 'Landewadi', desc: 'Growing residential pocket near the Bhosari-Chikhali belt. Mixed housing with plots and apartment buildings.' },
]

const landmarks = [
  { name: 'Near Bhosari MIDC Main Gate', desc: 'Our most frequent industrial pickup and delivery point' },
  { name: 'Near Moshi Toll Naka', desc: 'Key transit point connecting Bhosari to Nashik Highway' },
  { name: 'Near Chikhali', desc: 'Adjacent industrial area we serve regularly from Bhosari base' },
  { name: 'Near Alandi Road', desc: 'Main arterial road for residential moves in eastern Bhosari' },
]


function BhosariAreaPage() {
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
            '@id': 'https://habbits2grow.com/areas/bhosari#localbusiness',
            url: 'https://habbits2grow.com/areas/bhosari',
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
              name: 'Bhosari',
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
                item: 'https://habbits2grow.com/areas/bhosari',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Bhosari',
                item: 'https://habbits2grow.com/areas/bhosari',
              },
            ],
          }),
        }}
      />
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Bhosari, Pune — Industrial & Residential Shifting
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Specialized in both industrial machinery relocation for Bhosari MIDC and residential shifting for Bhosari Gaon, Indrayani Nagar, Sant Nagar, and Landewadi. One team, dual expertise — 50+ factory moves completed across Pune's largest industrial belt.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Why Bhosari Chooses Us</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Factory className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">MIDC Expertise</h3>
                <p className="text-slate-600">We specialize in factory and plant relocations — CNC machines, SPMs, injection molding lines, heavy presses, and full assembly line disassembly/reassembly. Our rigging team is trained and certified for loads up to 40 tonnes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Star className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">10-Minute Local Response</h3>
                <p className="text-slate-600">Our nearest crew station is minutes from Bhosari MIDC. We can reach any Bhosari location for an urgent survey or estimate within 10-15 minutes — essential when factory deadlines are tight.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <CheckCircle className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">MIDC Gate Pass Handling</h3>
                <p className="text-slate-600">We manage all MIDC gate pass documentation — Form 12, entry gate applications, weighbridge slips, and escort vehicle coordination. No delays at security, no paperwork hassles for you.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Wrench className="mt-1 shrink-0 text-orange-500" size={28} />
              <div>
                <h3 className="mb-2 text-xl font-semibold">Dual Capability</h3>
                <p className="text-slate-600">Most movers do only residential OR industrial. We do both — factory machines by day, home furniture by evening. Single vendor, single point of contact for mixed industrial + residential moves.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-3xl font-bold">Industrial Relocation — Bhosari MIDC Specialist</h2>
          <p className="mb-10 max-w-3xl text-lg text-slate-600">50+ factory moves completed. From single machines to complete production lines, we handle the entire process safely and systematically.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: 'ODC Machinery Transport', desc: 'Over-dimensional cargo (ODC) transport for large presses, boilers, and tanks. Special permits, route surveys, and escort vehicles arranged.' },
              { title: 'Full Factory Relocation', desc: 'Complete plant shutdown-to-restart service. Disassembly, crating, transport, reassembly, and commissioning at the new location.' },
              { title: 'Heavy Equipment Moving', desc: 'Hydraulic gantries, mobile cranes (up to 60T), forklifts (up to 16T), and air-float skates for precision machine placement.' },
              { title: 'Industrial Rigging & Craning', desc: 'Certified riggers, slings, shackles, and spreader bars. Laser alignment and vibration monitoring for sensitive CNC equipment.' },
              { title: 'Assembly Line Relocation', desc: 'Conveyor systems, overhead gantries, testing stations, and QC equipment — disassembled, labeled, packed, and reassembled to specification.' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-5">
                <CheckCircle className="mt-0.5 shrink-0 text-green-600" size={20} />
                <div>
                  <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Residential Shifting in Bhosari</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {residentialAreas.map((area) => (
              <div key={area.name} className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5">
                <Home className="mt-1 shrink-0 text-orange-500" size={28} />
                <div>
                  <h3 className="mb-1 text-xl font-semibold">{area.name}</h3>
                  <p className="text-slate-600">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Landmarks Near Bhosari</h2>
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
            title="Get Quote for Bhosari"
            subtitle="Whether it's a factory machine or a 2BHK home, we handle both. Fill the form and our Bhosari crew will reach you within 10 minutes for a free survey."
            ctaText="Get Free Bhosari Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  </>)
}
