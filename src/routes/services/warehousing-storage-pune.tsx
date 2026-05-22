import { createFileRoute, Link } from '@tanstack/react-router'
import {
  Box,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  HardDrive,
  Package,
  Shield,
} from 'lucide-react'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'
import { QuoteForm } from '../../components/QuoteForm'

export const Route = createFileRoute('/services/warehousing-storage-pune')({
  component: WarehousingStoragePage,
})

const storageTypes = [
  {
    icon: Clock,
    title: 'Short-Term Storage',
    desc: '1 to 3 months. Ideal during home renovation, temporary relocation, or while waiting for new accommodation. Flexible extension and quick access to your goods.',
  },
  {
    icon: Calendar,
    title: 'Long-Term Storage',
    desc: '3 to 12+ months. Perfect for expats, extended travel, or storing belongings you don\'t need daily. Discounted rates for annual contracts.',
  },
  {
    icon: Building2,
    title: 'Business Inventory',
    desc: 'Dedicated commercial bays for e-commerce stock, raw materials, finished goods, and office furniture. FIFO/LIFO handling with SKU-level tracking.',
  },
  {
    icon: Package,
    title: 'Seasonal Storage',
    desc: 'Store seasonal inventory, festive stock, exhibition materials, or machinery used only part of the year. Pay only for the months you use.',
  },
]

const facilityFeatures = [
  '24/7 security with armed guards and biometric access',
  'CCTV surveillance with 90-day recording backup',
  'Fire safety systems — smoke detectors, sprinklers, fire extinguishers',
  'Integrated pest control with monthly fumigation',
  'Climate-controlled units for temperature-sensitive goods',
  'Heavy-duty pallet racking system (up to 1,000 kg per pallet)',
  'Forklift and hydraulic stacker access for easy loading/unloading',
  'Dedicated loading docks with dock levelers',
]

const faqs = [
  {
    q: 'What are the access timings for the warehouse?',
    a: 'Our Nigdi warehouse is accessible Monday to Saturday, 8:00 AM to 8:00 PM. For business clients with regular dispatch requirements, we provide 24/7 access with prior scheduling. Sunday access is available on request for urgent needs.',
  },
  {
    q: 'What is the minimum storage period?',
    a: 'The minimum storage period is 1 month. After the first month, billing is pro-rated weekly. You can extend or vacate with just 7 days\' notice. No long-term lock-in contracts are required.',
  },
  {
    q: 'Are goods insured while in the warehouse?',
    a: 'Yes, all goods stored in our facility are covered under a blanket warehousing insurance policy against fire, theft, water damage, and natural calamities. You can also declare specific high-value items for additional coverage.',
  },
  {
    q: 'Can I store perishable goods?',
    a: 'We do not store perishable food items, plants, or live animals. However, we can store packaged FMCG goods, pharmaceuticals (non-cold-chain), and canned products. For cold storage requirements, we can connect you with our partner facilities.',
  },
  {
    q: 'Is there vehicle parking at the facility?',
    a: 'Yes, our Nigdi facility has a secure parking area for customers visiting the warehouse. Car and two-wheeler parking is available. We can also store vehicles (cars and bikes) as part of our vehicle storage service with battery maintenance.',
  },
]

function WarehousingStoragePage() {
  return (
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Warehousing & Storage Services in Pune — Secure, Flexible Space
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Short-term, long-term, business inventory, and seasonal storage solutions in Nigdi, Pune. 10,000+ sq ft of clean, secure warehouse space with 24/7 security, climate control, and professional inventory management.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Storage Types</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {storageTypes.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:shadow-lg">
                <item.icon className="mb-4 text-orange-500" size={36} />
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Shield className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Facility Features</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {facilityFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                <CheckCircle className="mt-0.5 shrink-0 text-green-600" size={20} />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <Building2 className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">For Businesses</h2>
          </div>
          <p className="mb-8 max-w-3xl text-lg leading-7 text-slate-600">
            We understand supply chain needs. Our warehouse management system supports FIFO, LIFO, batch tracking, and real-time inventory visibility for your business operations.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Inventory Management</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />FIFO, LIFO, and FEFO handling methods</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />SKU-level tracking with barcode scanning</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Monthly stock audit reports</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Real-time stock visibility via dashboard</li>
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold">Goods Handling</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Goods receipt note (GRN) at every inbound delivery</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Dispatch documentation with e-way bill support</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Quality check on inbound/outbound goods</li>
                <li className="flex items-start gap-2"><CheckCircle className="mt-1 shrink-0 text-green-600" size={16} />Bonded warehouse options for import/export cargo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center gap-3">
            <HardDrive className="text-orange-500" size={32} />
            <h2 className="text-3xl font-bold">Security & Access</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
              <Shield className="mx-auto mb-3 text-blue-950" size={40} />
              <h3 className="mb-2 text-lg font-semibold">Access Control</h3>
              <p className="text-sm text-slate-600">Biometric entry, visitor log, and escorted access for non-registered personnel. Each bay has individual lock and key.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
              <HardDrive className="mx-auto mb-3 text-blue-950" size={40} />
              <h3 className="mb-2 text-lg font-semibold">Inventory System</h3>
              <p className="text-sm text-slate-600">Cloud-based WMS with barcode scanning. View your stock levels, inbound/outbound history, and storage charges from any device.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 text-center">
              <Box className="mx-auto mb-3 text-blue-950" size={40} />
              <h3 className="mb-2 text-lg font-semibold">Insurance Cover</h3>
              <p className="text-sm text-slate-600">Blanket warehousing policy covering fire, burglary, water damage, and natural calamities. Value declaration option for high-worth goods.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold">Pricing Guide</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 font-semibold">Storage Type</th>
                  <th className="px-4 py-3 font-semibold">Unit</th>
                  <th className="px-4 py-3 font-semibold">Rate (per month)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">General Storage</td>
                  <td className="px-4 py-3">Per sq ft</td>
                  <td className="px-4 py-3">Rs 15 – 25</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium">Pallet Storage</td>
                  <td className="px-4 py-3">Per pallet (standard 48"×40")</td>
                  <td className="px-4 py-3">Rs 250 – 400</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Commercial Bay</td>
                  <td className="px-4 py-3">Per 100 sq ft block</td>
                  <td className="px-4 py-3">Rs 2,000 – 3,500</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 font-medium">Vehicle Storage (Car)</td>
                  <td className="px-4 py-3">Per vehicle</td>
                  <td className="px-4 py-3">Rs 3,000 – 5,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium">Vehicle Storage (Bike)</td>
                  <td className="px-4 py-3">Per vehicle</td>
                  <td className="px-4 py-3">Rs 800 – 1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm text-slate-600"><strong>Minimum duration:</strong> 1 month. <strong>Security deposit:</strong> 1 month rent (refundable). <strong>Billing:</strong> Monthly in advance. GST extra as applicable. Volume discounts available for spaces over 500 sq ft.</p>
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
            title="Book Storage Space"
            subtitle="Tell us your storage needs — type of goods, approximate volume, and duration. We'll send a customized quote within an hour."
            ctaText="Get Storage Quote"
          />
        </div>
      </section>

      <PageFooter />
      <MobileBar />
    </div>
  )
}
