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
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Lakshya Logistic Packers | Packers and Movers Across India',
      },
      {
        name: 'description',
        content:
          'Safe, fast, and reliable packers and movers services for home shifting, office relocation, vehicle transport, and warehouse storage.',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
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
