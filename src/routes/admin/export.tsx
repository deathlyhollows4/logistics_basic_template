import { createFileRoute, redirect } from '@tanstack/react-router'
import { Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AdminShell } from '../../components/AdminShell'
import { checkAdminAuth } from '../../lib/admin-auth.functions'
import type { Booking, ExportFormat, ExportRange } from '../../lib/types'
import { exportRanges } from '../../lib/validation'

export const Route = createFileRoute('/admin/export')({
  beforeLoad: async ({ location }) => {
    const result = await checkAdminAuth()
    if (!result.authenticated) {
      throw redirect({
        to: '/admin/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  component: AdminExport,
})

function AdminExport() {
  const [range, setRange] = useState<ExportRange>('24h')
  const [bookings, setBookings] = useState<Booking[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isDownloading, setIsDownloading] = useState<ExportFormat | null>(null)
  const [error, setError] = useState('')

  async function loadPreview(nextRange = range) {
    setIsLoading(true)
    setError('')

    const response = await fetch(`/api/admin/bookings?range=${nextRange}`)

    if (response.status === 401) {
      window.location.href = '/admin/login'
      return
    }

    if (!response.ok) {
      setError('Unable to load export preview.')
      setIsLoading(false)
      return
    }

    const result = (await response.json()) as { bookings: Booking[] }
    setBookings(result.bookings)
    setIsLoading(false)
  }

  async function download(format: ExportFormat) {
    setIsDownloading(format)
    setError('')

    const response = await fetch(`/api/admin/export?range=${range}&format=${format}`)

    if (response.status === 401) {
      window.location.href = '/admin/login'
      return
    }

    if (!response.ok) {
      setError('Unable to generate export.')
      setIsDownloading(null)
      return
    }

    const blob = await response.blob()
    const disposition = response.headers.get('content-disposition') || ''
    const filename = disposition.match(/filename="([^"]+)"/)?.[1] || `lakshya-bookings.${format}`
    const href = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = href
    link.download = filename
    link.click()
    URL.revokeObjectURL(href)
    setIsDownloading(null)
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  useEffect(() => {
    void loadPreview()
  }, [])

  return (
    <AdminShell onLogout={logout} title="Export Bookings">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Download Booking Data</h2>
            <p className="mt-1 text-sm text-slate-500">
              Choose a time window, then download CSV or Excel.
            </p>
          </div>
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-slate-700">Time filter</span>
            <select
              className="min-w-48 rounded-lg border border-slate-300 px-3 py-2"
              value={range}
              onChange={(event) => {
                const nextRange = event.target.value as ExportRange
                setRange(nextRange)
                void loadPreview(nextRange)
              }}
            >
              {Object.entries(exportRanges).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Selected range</p>
            <p className="mt-2 text-2xl font-bold text-blue-950">{exportRanges[range].label}</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Matching bookings</p>
            <p className="mt-2 text-2xl font-bold text-blue-950">
              {isLoading ? '...' : bookings.length}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-500">Formats</p>
            <p className="mt-2 text-2xl font-bold text-blue-950">CSV + XLSX</p>
          </div>
        </div>

        {error ? <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

        <div className="flex flex-wrap gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-300"
            disabled={Boolean(isDownloading)}
            type="button"
            onClick={() => void download('csv')}
          >
            <Download aria-hidden="true" size={18} />
            {isDownloading === 'csv' ? 'Preparing CSV...' : 'Download CSV'}
          </button>
          <button
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
            disabled={Boolean(isDownloading)}
            type="button"
            onClick={() => void download('xlsx')}
          >
            <Download aria-hidden="true" size={18} />
            {isDownloading === 'xlsx' ? 'Preparing Excel...' : 'Download Excel'}
          </button>
        </div>
      </section>

      <section className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-blue-950">Export Preview</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.slice(0, 8).map((booking) => (
                <tr className="border-t border-slate-100" key={booking.id}>
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">
                    {booking.pickupLocation} to {booking.dropLocation}
                  </td>
                  <td className="px-4 py-3">{booking.contactNumber}</td>
                  <td className="px-4 py-3 capitalize">{booking.status}</td>
                </tr>
              ))}
              {!isLoading && bookings.length === 0 ? (
                <tr>
                  <td className="px-4 py-6 text-center text-slate-500" colSpan={4}>
                    No bookings found for this export window.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </AdminShell>
  )
}
