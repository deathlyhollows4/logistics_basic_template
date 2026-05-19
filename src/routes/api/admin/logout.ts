import { createFileRoute } from '@tanstack/react-router'
import { clearAdminCookie } from '../../../lib/auth.server'

export const Route = createFileRoute('/api/admin/logout')({
  server: {
    handlers: {
      POST: async () => {
        return Response.json(
          { message: 'Signed out.' },
          {
            headers: {
              'Set-Cookie': clearAdminCookie(),
            },
          },
        )
      },
    },
  },
})
