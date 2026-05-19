import { Link } from '@tanstack/react-router'
import { Download, Inbox, LogOut } from 'lucide-react'

export function AdminShell({
  children,
  onLogout,
  title,
}: {
  children: React.ReactNode
  onLogout: () => void
  title: string
}) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">Admin</p>
            <h1 className="text-2xl font-bold text-blue-950">{title}</h1>
          </div>
          <nav className="flex items-center gap-2">
            <Link
              activeProps={{ className: 'bg-blue-950 text-white' }}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              to="/admin"
            >
              <Inbox aria-hidden="true" size={16} />
              Bookings
            </Link>
            <Link
              activeProps={{ className: 'bg-blue-950 text-white' }}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              to="/admin/export"
            >
              <Download aria-hidden="true" size={16} />
              Export
            </Link>
            <button
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              type="button"
              onClick={onLogout}
            >
              <LogOut aria-hidden="true" size={16} />
              Logout
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-8">{children}</main>
    </div>
  )
}
