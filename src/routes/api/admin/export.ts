import { createFileRoute } from '@tanstack/react-router'
import { listBookings } from '../../../lib/bookings.server'
import { bookingsToCsv, bookingsToXlsx, exportFileName } from '../../../lib/export.server'
import { requireAdmin } from '../../../lib/auth.server'
import {
  getSinceForRange,
  parseExportFormat,
  parseExportRange,
} from '../../../lib/validation'

export const Route = createFileRoute('/api/admin/export')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const session = requireAdmin(request)

        if (!session) {
          return Response.json({ message: 'Unauthorized.' }, { status: 401 })
        }

        const url = new URL(request.url)
        const range = parseExportRange(url.searchParams.get('range'))
        const format = parseExportFormat(url.searchParams.get('format'))
        const bookings = await listBookings(getSinceForRange(range))

        if (format === 'xlsx') {
          const workbook = await bookingsToXlsx(bookings)
          return new Response(new Uint8Array(workbook), {
            headers: {
              'Cache-Control': 'no-store',
              'Content-Disposition': `attachment; filename="${exportFileName(range, 'xlsx')}"`,
              'Content-Type':
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              Vary: 'Cookie',
            },
          })
        }

        return new Response(bookingsToCsv(bookings), {
          headers: {
            'Cache-Control': 'no-store',
            'Content-Disposition': `attachment; filename="${exportFileName(range, 'csv')}"`,
            'Content-Type': 'text/csv; charset=utf-8',
            Vary: 'Cookie',
          },
        })
      },
    },
  },
})
