import { createFileRoute, redirect } from '@tanstack/react-router'
import { Eye, RefreshCw } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { AdminShell } from '../../components/AdminShell'
import { checkAdminAuth } from '../../lib/admin-auth.functions'
import type { Booking, BookingStatus, ExportRange } from '../../lib/types'
import { exportRanges } from '../../lib/validation'

export const Route = createFileRoute('/admin/')({
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
  component: AdminBookings,
})

const statusLabels: BookingStatus[] = ['new', 'contacted', 'completed', 'cancelled']

function AdminBookings() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [range, setRange] = useState<ExportRange>('24h')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  async function loadBookings(nextRange = range) {
    setIsLoading(true)
    setError('')

    const response = await fetch(`/api/admin/bookings?range=${nextRange}`)

    if (response.status === 401) {
      window.location.href = '/admin/login'
      return
    }

    if (!response.ok) {
      setError('Unable to load bookings.')
      setIsLoading(false)
      return
    }

    const result = (await response.json()) as { bookings: Booking[] }
    setBookings(result.bookings)
    setIsLoading(false)
  }

  async function updateStatus(id: string, status: BookingStatus) {
    const response = await fetch('/api/admin/bookings', {
      body: JSON.stringify({ id, status }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    })

    if (response.status === 401) {
      window.location.href = '/admin/login'
      return
    }

    if (!response.ok) {
      setError('Unable to update booking status.')
      return
    }

    await loadBookings()
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  useEffect(() => {
    void loadBookings()
  }, [])

  const totals = useMemo(() => {
    return statusLabels.map((status) => ({
      label: status,
      total: bookings.filter((booking) => booking.status === status).length,
    }))
  }, [bookings])

  return (
    <AdminShell onLogout={logout} title="Booking Management">
      <div className="mb-6 grid gap-4 md:grid-cols-4">
        {totals.map((item) => (
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={item.label}>
            <p className="text-sm font-semibold capitalize text-slate-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-blue-950">{item.total}</p>
          </div>
        ))}
      </div>

      <section className="rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">
          <div>
            <h2 className="text-xl font-bold text-blue-950">Recent Bookings</h2>
            <p className="text-sm text-slate-500">Filtered by creation time.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select
              className="rounded-lg border border-slate-300 px-3 py-2"
              value={range}
              onChange={(event) => {
                const nextRange = event.target.value as ExportRange
                setRange(nextRange)
                void loadBookings(nextRange)
              }}
            >
              {Object.entries(exportRanges).map(([value, option]) => (
                <option key={value} value={value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              type="button"
              onClick={() => void loadBookings()}
            >
              <RefreshCw aria-hidden="true" size={16} />
              Refresh
            </button>
          </div>
        </div>

        {error ? <p className="p-5 text-sm text-red-700">{error}</p> : null}

        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Route</th>
                <th className="px-5 py-3">Contact</th>
                <th className="px-5 py-3">Created</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Details</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td className="px-5 py-8 text-center text-slate-500" colSpan={6}>
                    Loading bookings...
                  </td>
                </tr>
              ) : bookings.length ? (
                bookings.map((booking) => (
                  <tr className="border-t border-slate-100" key={booking.id}>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-slate-900">{booking.name}</p>
                      <p className="text-slate-500">{booking.email}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p>{booking.pickupLocation}</p>
                      <p className="text-slate-500">to {booking.dropLocation}</p>
                    </td>
                    <td className="px-5 py-4">{booking.contactNumber}</td>
                    <td className="px-5 py-4">{formatDate(booking.createdAt)}</td>
                    <td className="px-5 py-4">
                      <select
                        className="rounded-lg border border-slate-300 px-3 py-2 capitalize"
                        value={booking.status}
                        onChange={(event) =>
                          void updateStatus(booking.id, event.target.value as BookingStatus)
                        }
                      >
                        {statusLabels.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-700 transition hover:bg-slate-50"
                        type="button"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <Eye aria-hidden="true" size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-5 py-8 text-center text-slate-500" colSpan={6}>
                    No bookings found for this range.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {selectedBooking ? (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-xl rounded-lg bg-white p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-blue-950">{selectedBooking.name}</h3>
                <p className="text-sm text-slate-500">{formatDate(selectedBooking.createdAt)}</p>
              </div>
              <button
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold"
                type="button"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </button>
            </div>
            <dl className="grid gap-3 text-sm">
              <Detail label="Pickup" value={selectedBooking.pickupLocation} />
              <Detail label="Drop" value={selectedBooking.dropLocation} />
              <Detail label="Contact" value={selectedBooking.contactNumber} />
              <Detail label="Email" value={selectedBooking.email} />
              <Detail label="Status" value={selectedBooking.status} />
              <Detail label="Message" value={selectedBooking.message || 'No message provided'} />
            </dl>
          </div>
        </div>
      ) : null}
    </AdminShell>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-slate-50 p-3">
      <dt className="font-semibold text-slate-500">{label}</dt>
      <dd className="mt-1 text-slate-900">{value}</dd>
    </div>
  )
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(value))
}
