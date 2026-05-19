import { createFileRoute } from '@tanstack/react-router'
import { createBooking } from '../../lib/bookings.server'
import { checkBookingRateLimit } from '../../lib/rate-limit.server'
import { validateBookingInput } from '../../lib/validation'

export const Route = createFileRoute('/api/bookings')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!checkBookingRateLimit(request)) {
          return Response.json(
            { message: 'Too many requests. Please try again in a few minutes.' },
            { status: 429 },
          )
        }

        const payload = await request.json().catch(() => null)
        const validation = validateBookingInput(payload)

        if (!validation.data) {
          return Response.json(
            { message: validation.error || 'Please check the booking details.' },
            { status: 400 },
          )
        }

        try {
          const booking = await createBooking(validation.data)
          return Response.json(
            {
              booking: {
                id: booking.id,
                createdAt: booking.createdAt,
              },
              message: 'Booking request received.',
            },
            { status: 201 },
          )
        } catch {
          return Response.json(
            { message: 'Unable to save the booking right now.' },
            { status: 500 },
          )
        }
      },
    },
  },
})
