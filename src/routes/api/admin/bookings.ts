import { createFileRoute } from '@tanstack/react-router'
import { listBookings, updateBookingStatus } from '../../../lib/bookings.server'
import { requireAdmin } from '../../../lib/auth.server'
import { getSinceForRange, normalizeStatus, parseExportRange } from '../../../lib/validation'

export const Route = createFileRoute('/api/admin/bookings')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const session = requireAdmin(request)

        if (!session) {
          return Response.json({ message: 'Unauthorized.' }, { status: 401 })
        }

        const url = new URL(request.url)
        const range = parseExportRange(url.searchParams.get('range'))
        const bookings = await listBookings(getSinceForRange(range))

        return Response.json(
          { bookings },
          {
            headers: {
              'Cache-Control': 'no-store',
              Vary: 'Cookie',
            },
          },
        )
      },
      PATCH: async ({ request }) => {
        const session = requireAdmin(request)

        if (!session) {
          return Response.json({ message: 'Unauthorized.' }, { status: 401 })
        }

        const payload = (await request.json().catch(() => null)) as {
          id?: string
          status?: string
        } | null

        const status = normalizeStatus(payload?.status)
        const id = typeof payload?.id === 'string' ? payload.id : ''

        if (!id || !status) {
          return Response.json({ message: 'Invalid booking status update.' }, { status: 400 })
        }

        const booking = await updateBookingStatus(id, status)

        if (!booking) {
          return Response.json({ message: 'Booking not found.' }, { status: 404 })
        }

        return Response.json({ booking })
      },
    },
  },
})
