import { createFileRoute, Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Box,
  CheckCircle,
  ChevronDown,
  Home,
  MapPin,
  Package,
  Shield,
  Truck,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/services/home-shifting-pune')({
  head: () => ({
    meta: [
      {
        title:
          'Home Shifting Services in Pune — Safe Residential Relocation | Lakshya Logistic Packers Pune',
      },
      {
        name: 'description',
        content:
          'Professional home shifting services in Pune. 1BHK to 4BHK relocation, quality packing materials, transit insurance, unpacking. Serving Nigdi, PCMC & all Pune areas. Free estimate. Call +91 8239059640.',
      },
      {
        name: 'keywords',
        content:
          'home shifting services Pune, house shifting Pune, residential relocation Pune, household shifting Pune, flat shifting services Pune, domestic shifting services Pune, local home shifting Pune, apartment shifting Pune',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Home Shifting Services in Pune — Safe Residential Relocation | Lakshya Logistic Packers Pune',
      },
      {
        property: 'og:description',
        content:
          'Professional home shifting services in Pune. 1BHK to 4BHK relocation, quality packing materials, transit insurance, unpacking. Serving Nigdi, PCMC & all Pune areas. Free estimate.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/services/home-shifting-pune',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Home Shifting Services in Pune — Safe Residential Relocation | Lakshya Logistic Packers Pune',
      },
      {
        name: 'twitter:description',
        content:
          'Professional home shifting services in Pune. 1BHK to 4BHK relocation, quality packing materials, transit insurance, unpacking. Serving Nigdi, PCMC & all Pune areas. Free estimate.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://habbits2grow.com/services/home-shifting-pune',
      },
    ],
  }),
  component: HomeShiftingPune,
})

const bhkData = [
  { bhk: '1 BHK', truck: 'Tata 407 / 14 ft', team: '2–3', hours: '3–5 hrs' },
  { bhk: '2 BHK', truck: 'Tata 709 / 17 ft', team: '3–4', hours: '5–8 hrs' },
  { bhk: '3 BHK', truck: 'Eicher 20 ft', team: '4–6', hours: '8–12 hrs' },
  { bhk: '4 BHK / Villa', truck: 'Eicher 24 ft or 2 trucks', team: '6–8', hours: '12–18 hrs' },
]

const packingItems = [
  {
    room: 'Kitchen',
    items:
      'Fragile item wrapping (double-layer bubble wrap), specially sized boxes for plates and glasses, appliance packing for mixers, microwaves, and refrigerators, spice and grocery cartons with sealed lids.',
  },
  {
    room: 'Bedroom',
    items:
      'Wardrobe boxes for hanging clothes, mattress covers (waterproof), shoe boxes with dividers, jewellery and valuables pouch with tamper-proof seal, bed frame disassembly and headboard wrap.',
  },
  {
    room: 'Living Room',
    items:
      'Bubble wrap for TV, soundbar, and electronics, sofa and cushion protective covers, wooden furniture corner guards and shrink wrap, framed artwork and mirror packing with foam sheets.',
  },
  {
    room: 'Bathroom & Utility',
    items:
      'Leak-proof packing for toiletries and liquids, separate cartons for cleaning supplies, towel and linen bags, water purifier disconnection and secure packing.',
  },
]

const areaLinks = [
  { name: 'Nigdi', slug: 'nigdi' },
  { name: 'Bhosari', slug: 'bhosari' },
  { name: 'Pimpri-Chinchwad', slug: 'pimpri-chinchwad' },
  { name: 'Hinjewadi', slug: 'hinjewadi' },
  { name: 'Wakad', slug: 'wakad' },
  { name: 'Baner', slug: 'baner' },
  { name: 'Aundh', slug: 'aundh' },
]

const faqs = [
  {
    q: 'How much does home shifting cost in Pune?',
    a: 'Cost depends on BHK size, distance, and packing needs. A 1BHK local shift starts around ₹3,000–₹5,000, while a 3BHK with full packing ranges ₹10,000–₹18,000. Get an exact quote using the form below.',
  },
  {
    q: 'How long does a typical home shift take?',
    a: 'A 1BHK takes 3–5 hours, 2BHK takes 5–8 hours, and 3BHK typically takes a full day (8–12 hours). Intercity moves may take 1–3 days depending on distance.',
  },
  {
    q: 'Is packing included in the charges?',
    a: 'Yes, we offer both full packing and partial packing options. Full packing includes all materials, labour, and unpacking at the destination. You can also choose transport-only if you prefer to pack yourself.',
  },
  {
    q: 'How do you handle fragile items?',
    a: 'Fragile items like glassware, electronics, and artwork receive double-layer bubble wrap, are placed in specially padded cartons, and marked "FRAGILE". Our team is trained in handling delicate items with zero-damage techniques.',
  },
  {
    q: 'Is my goods insured during transit?',
    a: 'Absolutely. Every move includes complimentary transit insurance up to ₹1 lakh. Additional coverage is available for high-value items like furniture, electronics, and artwork upon request.',
  },
  {
    q: 'Can you do weekend moves?',
    a: 'Yes, we operate 7 days a week including weekends and public holidays. Weekend slots tend to fill quickly, so we recommend booking at least 3–5 days in advance.',
  },
]

function HomeShiftingPune() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Home Shifting',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Lakshya Logistic Packers',
            },
            areaServed: { '@type': 'City', name: 'Pune' },
            description:
              'Professional home shifting services in Pune. 1BHK to 4BHK residential relocation with quality packing materials, transit insurance, and unpacking.',
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
                item: 'https://habbits2grow.com/services/home-shifting-pune',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Home Shifting Pune',
                item: 'https://habbits2grow.com/services/home-shifting-pune',
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Home Shifting Services in Pune — Safe Residential Relocation
          </h1>
          <p className="mb-4 text-lg leading-8 text-blue-100">
            Moving your home can be overwhelming — but it does not have to be. Lakshya Logistic
            Packers provides complete home shifting services across Pune, Nigdi, PCMC, and nearby
            areas. Whether you are a family relocating to a larger apartment, a tenant switching
            rentals, or an individual moving into your first flat, we handle every detail so you can
            focus on settling in.
          </p>
          <p className="mb-4 text-lg leading-8 text-blue-100">
            We offer local shifting within Pune, intercity moves to Mumbai, Nashik, Bangalore, and
            beyond, with a fleet of well-maintained trucks and a trained packing team. Our service
            includes dismantling, packing, loading, transporting, unloading, and unpacking — all
            covered by transit insurance.
          </p>
          <p className="text-lg leading-8 text-blue-100">
            Serving Nigdi, Bhosari, Pimpri-Chinchwad, Hinjewadi, Wakad, Baner, Aundh, Kharadi,
            Hadapsar, Viman Nagar, and the entire Pune metropolitan region.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">BHK-wise Shifting Guide</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-blue-950 text-white">
                  <th className="p-4 font-semibold">Home Size</th>
                  <th className="p-4 font-semibold">Truck Size</th>
                  <th className="p-4 font-semibold">Team</th>
                  <th className="p-4 font-semibold">Estimated Time</th>
                </tr>
              </thead>
              <tbody>
                {bhkData.map((row, i) => (
                  <tr className={i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} key={row.bhk}>
                    <td className="p-4 font-medium">{row.bhk}</td>
                    <td className="p-4">{row.truck}</td>
                    <td className="p-4">{row.team} members</td>
                    <td className="p-4">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Timelines are estimates for local Pune moves. Intercity and complex moves may vary.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Room-by-Room Packing Checklist</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
            Every room gets dedicated packing materials and techniques. Here is what we use for each
            area of your home.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {packingItems.map((item) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                key={item.room}
              >
                <h3 className="mb-3 text-lg font-bold text-blue-950">{item.room}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Packing Materials We Use</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Corrugated boxes — 5 sizes (small to extra-large, double-walled for heavy items)',
              'Bubble wrap — industrial-grade rolls in small, medium, and large bubble sizes',
              'Packing paper — acid-free, ink-free newsprint for wrapping dishes and glassware',
              'Heavy-duty packing tape — extra-wide BOPP tape with branded seal',
              'Stretch wrap — for furniture, appliances, and securing loads on trolleys',
              'Wardrobe cartons — hanging garment boxes that keep clothes wrinkle-free',
              'Mattress covers — waterproof polyethylene covers in all standard mattress sizes',
              'Foam sheets and corner guards — for electronics, mirrors, and wooden furniture',
            ].map((item, i) => (
              <div className="flex gap-3 rounded-lg border border-slate-200 p-4 shadow-sm" key={i}>
                <Package className="mt-0.5 shrink-0 text-orange-500" size={20} />
                <span className="text-sm leading-5 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Shifting Process</h2>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Pre-Move Survey',
                desc: 'Our supervisor visits your home (free of cost) to assess the volume of goods, note fragile items, and confirm entry/exit points. We share a detailed quote with you within 24 hours.',
              },
              {
                step: '2',
                title: 'Packing Day',
                desc: 'A trained team arrives with all required materials. Rooms are packed one at a time — starting with the kitchen and living room. Every box is labelled with the room and contents.',
              },
              {
                step: '3',
                title: 'Loading',
                desc: 'Furniture is dismantled if needed, then all packed cartons and furniture are loaded systematically into the truck. Heavy items go first, fragile items are stacked safely on top.',
              },
              {
                step: '4',
                title: 'Transport',
                desc: 'Your goods are transported in a GPS-tracked, covered vehicle. A supervisor escorts the vehicle for larger moves. You receive live status updates throughout the journey.',
              },
              {
                step: '5',
                title: 'Unloading & Unpacking',
                desc: 'At the destination, the team unloads everything, reassembles furniture, unpacks boxes into designated rooms, and removes all packing debris. You inspect and sign off.',
              },
            ].map((phase) => (
              <div
                className="flex gap-5 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                key={phase.step}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-950 text-lg font-bold text-white">
                  {phase.step}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold">{phase.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Shield aria-hidden="true" className="mx-auto mb-4 text-orange-500" size={40} />
          <h2 className="mb-4 text-3xl font-bold">Transit Insurance — Your Belongings Are Protected</h2>
          <p className="mb-4 text-lg leading-8 text-slate-600">
            Every home shifting service includes complimentary transit insurance coverage up to ₹1
            lakh. This covers accidental damage, breakage, and loss during loading, transit, and
            unloading.
          </p>
          <p className="mb-4 text-lg leading-8 text-slate-600">
            For homes with high-value items — such as premium furniture, home theatre systems,
            designer wardrobes, or artwork — we offer additional coverage up to ₹10 lakhs. In the
            unlikely event of a claim, our dedicated claims team processes it within 7 working days.
            All you need is the signed inventory list and photographs of any damage.
          </p>
          <p className="text-lg leading-8 text-slate-600">
            We have a 99.7% damage-free record because we invest in training and quality materials.
            Insurance gives you peace of mind — and we are proud to offer it as standard.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                className="group rounded-lg border border-slate-200 bg-white shadow-sm"
                key={faq.q}
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-slate-900">
                  {faq.q}
                  <ChevronDown
                    aria-hidden="true"
                    className="text-slate-400 transition group-open:rotate-180"
                    size={20}
                  />
                </summary>
                <p className="border-t border-slate-200 px-5 pb-5 pt-4 text-sm leading-6 text-slate-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Areas We Serve for Home Shifting</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-600">
            We provide reliable home shifting in every corner of Pune and PCMC.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areaLinks.map((area) => (
              <a
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-500 hover:text-orange-600"
                key={area.slug}
                href={`/areas/${area.slug}`}
              >
                <MapPin aria-hidden="true" size={14} />
                {area.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <Home aria-hidden="true" className="mx-auto mb-4" size={36} />
          <h2 className="mb-3 text-3xl font-bold">Ready to Move Your Home?</h2>
          <p className="mb-8 text-lg text-blue-100">
            Fill in the details below and our team will get back to you with a free, no-obligation
            quote within 2 hours.
          </p>
          <div className="mx-auto max-w-xl">
            <QuoteForm
              ctaText="Get Your Home Shifting Estimate"
              subtitle="Tell us about your move and get a detailed estimate."
              title="Get Your Home Shifting Estimate"
            />
          </div>
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
    </>
  )
}
