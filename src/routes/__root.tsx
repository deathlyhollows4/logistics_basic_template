/// <reference types="vite/client" />

import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import appCss from '../styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'Lakshya Logistic Packers | Packers and Movers in Pune, Nigdi & PCMC',
      },
      {
        name: 'description',
        content:
          'Trusted packers and movers in Pune, Nigdi, Bhosari & Pimpri-Chinchwad. Home shifting, office relocation, vehicle transport & warehousing. Transparent pricing, insured moves. Call +91 8239059640.',
      },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: 'Lakshya Logistic Packers' },
      { property: 'og:locale', content: 'en_IN' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image',
        content:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://images.unsplash.com' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      { rel: 'dns-prefetch', href: 'https://habbits2grow.com' },
      {
        rel: 'preload',
        as: 'image',
        href: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
        fetchpriority: 'high',
      },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://habbits2grow.com' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-100 font-sans text-slate-900 antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
