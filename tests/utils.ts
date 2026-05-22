import crypto from 'node:crypto'

const SESSION_SECRET = 'lakshya-prod-session-secret-2026-do-not-expose'
const ADMIN_EMAIL = 'vidhantomar2004@gmail.com'
const COOKIE_NAME = 'lakshya_admin_session'

export function generateAdminCookie(ttlHours = 8) {
  const session = {
    email: ADMIN_EMAIL,
    expiresAt: Date.now() + ttlHours * 60 * 60 * 1000,
  }
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  const signature = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url')
  const token = `${payload}.${signature}`

  return {
    name: COOKIE_NAME,
    value: token,
    domain: '127.0.0.1',
    path: '/',
    httpOnly: true,
    sameSite: 'Lax' as const,
  }
}
