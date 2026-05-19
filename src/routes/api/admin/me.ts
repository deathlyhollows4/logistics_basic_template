import { createFileRoute } from '@tanstack/react-router'
import { requireAdmin } from '../../../lib/auth.server'

export const Route = createFileRoute('/api/admin/me')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const session = requireAdmin(request)

        if (!session) {
          return Response.json({ message: 'Unauthorized.' }, { status: 401 })
        }

        return Response.json(
          { email: session.email },
          {
            headers: {
              'Cache-Control': 'no-store',
              Vary: 'Cookie',
            },
          },
        )
      },
    },
  },
})
