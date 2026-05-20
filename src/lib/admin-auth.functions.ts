import { createServerFn } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { requireAdmin } from './auth.server'

export const checkAdminAuth = createServerFn({ method: 'GET' }).handler(async () => {
  const request = getRequest()
  const session = requireAdmin(request)
  if (!session) {
    return { authenticated: false as const }
  }
  return { authenticated: true as const, email: session.email }
})