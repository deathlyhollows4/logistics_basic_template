import { createFileRoute } from '@tanstack/react-router'
import { createAdminCookie, getAdminEmail, verifyAdminCredentials } from '../../../lib/auth.server'

export const Route = createFileRoute('/api/admin/login')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const payload = (await request.json().catch(() => null)) as {
          email?: string
          password?: string
        } | null

        const email = payload?.email || ''
        const password = payload?.password || ''

        // Bound input lengths to prevent CPU DoS via scrypt with very large inputs.
        if (email.length > 254 || password.length > 1024) {
          return Response.json({ message: 'Invalid admin credentials.' }, { status: 401 })
        }

        if (!verifyAdminCredentials(email, password)) {
          return Response.json({ message: 'Invalid admin credentials.' }, { status: 401 })
        }

        return Response.json(
          {
            email: getAdminEmail(),
            message: 'Signed in.',
          },
          {
            headers: {
              'Set-Cookie': createAdminCookie(getAdminEmail()),
            },
          },
        )
      },
    },
  },
})
