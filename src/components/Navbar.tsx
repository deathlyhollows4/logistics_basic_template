import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  to: string
}

const servicesLinks: NavLink[] = [
  { label: 'Home Shifting', to: '/services/home-shifting-pune' },
  { label: 'Office Relocation', to: '/services/office-relocation-pune' },
  { label: 'Car & Bike Transport', to: '/services/car-bike-transport-pune' },
  { label: 'Warehousing & Storage', to: '/services/warehousing-storage-pune' },
]

const areasLinks: NavLink[] = [
  { label: 'Nigdi', to: '/areas/nigdi' },
  { label: 'Bhosari', to: '/areas/bhosari' },
  { label: 'Pimpri-Chinchwad', to: '/areas/pimpri-chinchwad' },
  { label: 'Hinjewadi', to: '/areas/hinjewadi' },
  { label: 'Wakad', to: '/areas/wakad' },
  { label: 'Baner', to: '/areas/baner' },
  { label: 'Aundh', to: '/areas/aundh' },
]

const blogLinks: NavLink[] = [
  { label: 'Packers & Movers Charges', to: '/blog/packers-movers-charges-pune' },
  { label: 'How to Choose Packers', to: '/blog/how-to-choose-packers-movers' },
  { label: 'Packing Tips', to: '/blog/packing-tips-for-moving' },
  { label: 'Vehicle Transport Documents', to: '/blog/documents-for-vehicle-transport' },
  { label: 'Monsoon Moving Tips', to: '/blog/moving-during-monsoon-pune' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="inline-flex shrink-0 items-center">
          <img src="/logo.webp" alt="Lakshya Logistic Packers" width="160" height="40" className="h-9 w-auto" />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 md:flex"
        >
          <Link
            to="/"
            className="px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-950"
          >
            Home
          </Link>

          <DesktopDropdown label="Services" links={servicesLinks} />
          <DesktopDropdown label="Areas" links={areasLinks} />
          <DesktopDropdown label="Blog" links={blogLinks} />

          <Link
            to="/contact"
            className="ml-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Contact
          </Link>
        </nav>

        <button
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col divide-y divide-slate-100">
            <Link
              to="/"
              className="px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <MobileLinkGroup
              label="Services"
              links={servicesLinks}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileLinkGroup
              label="Areas"
              links={areasLinks}
              onNavigate={() => setMobileOpen(false)}
            />
            <MobileLinkGroup
              label="Blog"
              links={blogLinks}
              onNavigate={() => setMobileOpen(false)}
            />

            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-orange-500 transition hover:bg-slate-50"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}

function DesktopDropdown({ label, links }: { label: string; links: NavLink[] }) {
  return (
    <div className="group relative">
      <button
        aria-expanded={false}
        aria-haspopup="true"
        className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 transition hover:text-blue-950 focus-visible:text-blue-950 focus-visible:outline-none"
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className="transition group-hover:rotate-180"
          size={14}
        />
      </button>
      <div
        className="pointer-events-none absolute left-1/2 top-full z-40 mt-1 w-56 -translate-x-1/2 rounded-lg border border-slate-200 bg-white py-1.5 opacity-0 shadow-lg transition-opacity duration-150 focus-within:pointer-events-auto focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
        role="menu"
      >
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="block px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-950"
            role="menuitem"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function MobileLinkGroup({
  label,
  links,
  onNavigate,
}: {
  label: string
  links: NavLink[]
  onNavigate: () => void
}) {
  return (
    <div>
      <div className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </div>
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="block px-8 py-2.5 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-blue-950"
          onClick={onNavigate}
        >
          {link.label}
        </Link>
      ))}
    </div>
  )
}
