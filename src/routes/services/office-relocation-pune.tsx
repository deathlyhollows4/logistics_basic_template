import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Building2,
  CheckCircle,
  ChevronDown,
  Clock,
  HardDrive,
  Monitor,
  Server,
  Shield,
  Users,
  Wrench,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/services/office-relocation-pune')({
  head: () => ({
    meta: [
      {
        title:
          'Office Relocation Services Pune — Commercial & Corporate Moving | Lakshya Logistic Packers Pune',
      },
      {
        name: 'description',
        content:
          'Office shifting services in Pune with minimal downtime. IT equipment handling, furniture disassembly, weekend/night moves. Serving Hinjewadi, Kharadi, PCMC IT hubs. Free office move quote.',
      },
      {
        name: 'keywords',
        content:
          'office relocation Pune, office shifting services Pune, commercial moving services Pune, corporate relocation Pune, industrial shifting Pune, factory relocation Pune, shop shifting Pune',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Office Relocation Services Pune — Commercial & Corporate Moving | Lakshya Logistic Packers Pune',
      },
      {
        property: 'og:description',
        content:
          'Office shifting services in Pune with minimal downtime. IT equipment handling, furniture disassembly, weekend/night moves. Serving Hinjewadi, Kharadi, PCMC IT hubs. Free office move quote.',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/services/office-relocation-pune',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content:
          'Office Relocation Services Pune — Commercial & Corporate Moving | Lakshya Logistic Packers Pune',
      },
      {
        name: 'twitter:description',
        content:
          'Office shifting services in Pune with minimal downtime. IT equipment handling, furniture disassembly, weekend/night moves. Serving Hinjewadi, Kharadi, PCMC IT hubs. Free office move quote.',
      },
      {
        name: 'twitter:image',
        content:
          'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop',
      },
    ],
    links: [
      {
        rel: 'canonical',
        href: 'https://habbits2grow.com/services/office-relocation-pune',
      },
    ],
  }),
  component: OfficeRelocationPune,
})

const officeTypes = [
  {
    type: 'Startup / Small Office',
    desks: '2–10 desks',
    team: '2–3 staff',
    time: '4–6 hours',
    desc: 'Light furniture, few workstations, minimal IT. Perfect for co-working space moves or early-stage startup relocations. Same-day completion.',
  },
  {
    type: 'Mid-Size Office',
    desks: '10–50 desks',
    team: '4–6 staff',
    time: '1–2 days',
    desc: 'Standard IT infrastructure, modular workstations, meeting rooms, and cabin furniture. Includes IT decommission and re-setup. Completed over a weekend.',
  },
  {
    type: 'Enterprise / Large Office',
    desks: '50+ desks',
    team: '8+ staff',
    time: '2–5 days',
    desc: 'Servers, networking, heavy furniture, multiple departments. Dedicated project manager on site. Phased move plan to ensure business continuity.',
  },
]

const industries = [
  {
    name: 'IT / Software',
    icon: <Monitor aria-hidden="true" size={28} />,
    desc: 'Server rooms, developer workstations, networking equipment, UPS systems, and delicate electronics handled by IT relocation specialists.',
  },
  {
    name: 'Manufacturing',
    icon: <Wrench aria-hidden="true" size={28} />,
    desc: 'Heavy machinery, assembly line equipment, raw material inventory, and warehouse stock transported with industrial-grade handling.',
  },
  {
    name: 'Retail',
    icon: <Building2 aria-hidden="true" size={28} />,
    desc: 'Store fixtures, POS systems, display units, inventory transfer, and overnight moves to avoid disrupting business hours.',
  },
  {
    name: 'Healthcare',
    icon: <Shield aria-hidden="true" size={28} />,
    desc: 'Medical equipment, patient records (confidential handling), lab instruments, and clinic furniture with temperature-controlled transport if needed.',
  },
  {
    name: 'Education',
    icon: <Users aria-hidden="true" size={28} />,
    desc: 'Library collections, classroom furniture, laboratory equipment, computer labs, and administrative office relocation during holidays.',
  },
]

const faqs = [
  {
    q: 'How much downtime should we expect?',
    a: 'We plan moves over weekends, nights, or holidays to ensure zero business disruption. A typical mid-size office (10–50 desks) is moved and set up between Saturday morning and Sunday evening, ready for Monday.',
  },
  {
    q: 'How do you handle IT equipment and servers?',
    a: 'Our IT relocation team follows a documented process: data backup verification, orderly server shutdown, anti-static packing, cable labelling, and re-racking at the destination. We have moved over 200 server rooms with zero data loss.',
  },
  {
    q: 'Can you do weekend or night moves?',
    a: 'Yes, most office relocations are scheduled for weekends or after business hours (8 PM–6 AM) to avoid any impact on your operations. Night moves attract a small premium for staff overtime.',
  },
  {
    q: 'Is electronics insurance included?',
    a: 'Yes. Office moves include comprehensive transit insurance covering IT equipment, servers, workstations, and office furniture. Additional all-risk policies are available for high-value enterprise hardware.',
  },
  {
    q: 'What factors affect office shifting cost?',
    a: 'Cost depends on the number of workstations, volume of furniture, IT complexity, floor count at both locations (lift availability), distance, and whether packing/decommission services are needed. Request a free audit for an exact quote.',
  },
]

function OfficeRelocationPune() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Office Relocation',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Lakshya Logistic Packers',
            },
            areaServed: { '@type': 'City', name: 'Pune' },
            description:
              'Office relocation services in Pune with minimal downtime. IT equipment handling, furniture disassembly, weekend/night moves.',
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
                item: 'https://habbits2grow.com/services/office-relocation-pune',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Office Relocation Pune',
                item: 'https://habbits2grow.com/services/office-relocation-pune',
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Office Relocation Services Pune — Commercial & Corporate Moving
          </h1>
          <p className="mb-4 text-lg leading-8 text-blue-100">
            Moving an office is not the same as moving a home — one wrong step and your business
            faces costly downtime. Lakshya Logistic Packers specializes in commercial relocation
            across Pune, Nigdi, PCMC, and the entire Western Maharashtra belt. We have moved
            startups, IT parks, manufacturing units, retail stores, and healthcare facilities —
            always with a focus on speed and safety.
          </p>
          <p className="mb-4 text-lg leading-8 text-blue-100">
            We understand that your servers contain critical data, your workstations keep your team
            productive, and your office furniture represents significant investment. That is why
            every office move is assigned a dedicated project manager who creates a custom move plan,
            coordinates IT decommission and recommission, and ensures your team walks into a
            fully-functional office on Monday morning.
          </p>
          <p className="text-lg leading-8 text-blue-100">
            Weekend and night moves are standard for us. We have completed 500+ office relocations
            with zero data loss and 98% on-time completion. Your business keeps running — we handle
            the lifting.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Office Relocation by Size</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
            From a 2-desk startup to a 200-desk enterprise, we scale our team and resources to
            match.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {officeTypes.map((ot) => (
              <div
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
                key={ot.type}
              >
                <h3 className="mb-3 text-lg font-bold text-blue-950">{ot.type}</h3>
                <ul className="mb-4 space-y-1 text-sm text-slate-600">
                  <li>
                    <strong>Scale:</strong> {ot.desks}
                  </li>
                  <li>
                    <strong>Team:</strong> {ot.team}
                  </li>
                  <li>
                    <strong>Duration:</strong> {ot.time}
                  </li>
                </ul>
                <p className="text-sm leading-6 text-slate-600">{ot.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Special Handling Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
              <Server aria-hidden="true" className="mx-auto mb-4 text-orange-500" size={36} />
              <h3 className="mb-2 text-lg font-bold">IT Equipment</h3>
              <p className="text-sm leading-6 text-slate-600">
                Servers racked in anti-static crates, workstations packed individually with cable
                labelling, networking switches catalogued, and UPS systems transported upright.
                Structured cabling at the destination included.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
              <Wrench aria-hidden="true" className="mx-auto mb-4 text-orange-500" size={36} />
              <h3 className="mb-2 text-lg font-bold">Furniture</h3>
              <p className="text-sm leading-6 text-slate-600">
                Modular workstations disassembled and reassembled by our carpentry team, executive
                cabin furniture wrapped in padded covers, ergonomic chairs stacked in dedicated
                cartons, and glass partitions crated separately.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
              <HardDrive aria-hidden="true" className="mx-auto mb-4 text-orange-500" size={36} />
              <h3 className="mb-2 text-lg font-bold">Documents & Files</h3>
              <p className="text-sm leading-6 text-slate-600">
                Lockable file cabinets moved with contents intact, confidential documents sealed in
                tamper-proof crates, archive boxes labelled by department and shelf, and shredding
                service available for obsolete records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Office Relocation Process</h2>
          <div className="space-y-5">
            {[
              {
                step: '1',
                title: 'Pre-Move Audit',
                desc: 'Our project manager visits your current office to catalogue all assets — furniture, IT, documents, and special items. We measure doorways, check lift availability, and plan parking for the moving truck.',
              },
              {
                step: '2',
                title: 'Asset Inventory & Labelling',
                desc: 'Every item receives a unique label with destination room/floor. Digital inventory is shared with you. This ensures nothing is lost and unpacking at the new office is systematic.',
              },
              {
                step: '3',
                title: 'IT Decommission',
                desc: 'Data backups verified. Servers shut down orderly, cables disconnected and labelled, workstations packed in anti-static bags. All hardware is ready for transport within 2–4 hours.',
              },
              {
                step: '4',
                title: 'Packing & Loading',
                desc: 'Furniture dismantled, electronics packed, files crated. Everything is loaded sector-wise so that the first items off the truck go directly to their designated rooms at the destination.',
              },
              {
                step: '5',
                title: 'Transport & Tracking',
                desc: 'GPS-tracked vehicles with air-ride suspension. The project manager escorts the convoy. Live location updates shared with your admin team via WhatsApp.',
              },
              {
                step: '6',
                title: 'Setup at Destination',
                desc: 'Furniture reassembled, workstations set up, servers re-racked, IT team tests network connectivity. Your office is ready for employees to walk in and start working.',
              },
            ].map((phase) => (
              <div
                className="flex gap-5 rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
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

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Industries We Serve</h2>
          <p className="mx-auto mb-10 max-w-2xl text-slate-600">
            Every industry has unique requirements. Our relocation plans are customized accordingly.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {industries.map((ind) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                key={ind.name}
              >
                <div className="mb-3 text-orange-500">{ind.icon}</div>
                <h3 className="mb-2 font-bold text-slate-900">{ind.name}</h3>
                <p className="text-xs leading-5 text-slate-600">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Case Study</h2>
          <div className="rounded-lg border border-slate-200 bg-blue-950 p-8 text-white shadow-lg">
            <p className="mb-4 text-sm uppercase tracking-wider text-blue-300">
              IT Company — Hinjewadi to Kharadi
            </p>
            <h3 className="mb-4 text-2xl font-bold">
              How We Moved a 50-Desk IT Office Over a Weekend With Zero Data Loss
            </h3>
            <p className="mb-4 leading-7 text-blue-100">
              A growing SaaS company with 52 employees needed to relocate from their 2,800 sq. ft.
              office in Hinjewadi Phase 2 to a larger 6,000 sq. ft. space in Kharadi. The challenge:
              they could not afford even a single day of downtime, and their development servers
              needed to be back online within 12 hours.
            </p>
            <p className="mb-4 leading-7 text-blue-100">
              We deployed a 10-member team on Friday at 7 PM. By Saturday noon, all 52 workstations,
              8 rack-mounted servers, networking equipment, 80+ modular desk units, boardroom
              furniture, and 200+ archive boxes were packed and loaded. The convoy reached Kharadi by
              2 PM. By 8 PM Saturday, servers were re-racked and the IT team verified all systems
              were operational. Furniture assembly and workstation setup continued through Sunday.
            </p>
            <p className="leading-7 text-blue-100">
              The team walked into a fully functional office on Monday at 9 AM. Total downtime: zero
              business hours. The client has since engaged us for two more office expansions.
            </p>
          </div>
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

      <section className="bg-blue-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <Building2 aria-hidden="true" className="mx-auto mb-4" size={36} />
          <h2 className="mb-3 text-3xl font-bold">Plan Your Office Move</h2>
          <p className="mb-8 text-lg text-blue-100">
            Tell us about your office size and requirements. Our team will create a customized move
            plan with a transparent quote within 2 hours.
          </p>
          <div className="mx-auto max-w-xl">
            <QuoteForm
              ctaText="Plan Your Office Move"
              subtitle="Share your office details and get a tailored relocation plan."
              title="Plan Your Office Move"
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
