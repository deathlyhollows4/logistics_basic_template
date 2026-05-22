import { createFileRoute } from '@tanstack/react-router'
import { storeMessage } from '../../lib/contact.server'
import { checkContactRateLimit } from '../../lib/rate-limit.server'
import { validateContactInput } from '../../lib/validation'

export const Route = createFileRoute('/api/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!checkContactRateLimit(request)) {
          return Response.json(
            { message: 'Too many requests. Please try again in a few minutes.' },
            { status: 429 },
          )
        }

        const payload = await request.json().catch(() => null)
        const validation = validateContactInput(payload)

        if (!validation.data) {
          return Response.json(
            { message: validation.error || 'Please check the contact form.' },
            { status: 400 },
          )
        }

        try {
          const contact = await storeMessage(validation.data)
          return Response.json(
            {
              contact: {
                id: contact.id,
                createdAt: contact.createdAt,
              },
              message: 'Your message has been sent. Our team will get back to you shortly.',
            },
            { status: 201 },
          )
        } catch {
          return Response.json(
            { message: 'Unable to send your message right now.' },
            { status: 500 },
          )
        }
      },
    },
  },
})
