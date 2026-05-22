import { createFileRoute } from '@tanstack/react-router'
import { MobileBar } from '../../components/MobileBar'
import { PageFooter } from '../../components/PageFooter'

export const Route = createFileRoute('/areas/hinjewadi')({
  head: () => ({
    meta: [
      {
        title:
          'Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers',
      },
      {
        name: 'description',
        content:
          'Lakshya Logistic Packers in Hinjewadi, Pune. Home shifting, office relocation, vehicle transport & storage. Call +91 8239059640 for free quote.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content:
          'Packers and Movers in Hinjewadi, Pune — Lakshya Logistic Packers',
      },
      {
        property: 'og:url',
        content: 'https://habbits2grow.com/areas/hinjewadi',
      },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'canonical', href: 'https://habbits2grow.com/areas/hinjewadi' },
    ],
  }),
  component: HinjewadiAreaPage,
})

function HinjewadiAreaPage() {
  return (
    <div className="min-h-screen bg-slate-100 pb-16 text-slate-900 md:pb-0">
      <section className="bg-blue-950 px-6 py-14 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Packers and Movers in Hinjewadi, Pune
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Reliable packers and movers serving Hinjewadi. Home shifting, office
            relocation, vehicle transport. Call +91 8239059640.
          </p>
        </div>
      </section>
      <PageFooter />
      <MobileBar />
    </div>
  )
}
