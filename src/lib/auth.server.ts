import crypto from 'node:crypto'
import { getAdminEmail, getAdminPasswordHash, getAdminSessionSecret } from './env.server'

const sessionCookieName = 'lakshya_admin_session'
const sessionMaxAgeSeconds = 60 * 60 * 8

type AdminSession = {
  email: string
  expiresAt: number
}

export function verifyAdminCredentials(email: string, password: string) {
  const expectedEmail = getAdminEmail().toLowerCase()
  const passwordHash = getAdminPasswordHash()

  if (!passwordHash) {
    return false
  }

  return email.trim().toLowerCase() === expectedEmail && verifyPassword(password, passwordHash)
}

export function createAdminCookie(email: string) {
  const token = createSessionToken({
    email,
    expiresAt: Date.now() + sessionMaxAgeSeconds * 1000,
  })

  return serializeCookie(sessionCookieName, token, {
    httpOnly: true,
    maxAge: sessionMaxAgeSeconds,
    sameSite: 'Lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

export function clearAdminCookie() {
  return serializeCookie(sessionCookieName, '', {
    httpOnly: true,
    maxAge: 0,
    sameSite: 'Lax',
    secure: process.env.NODE_ENV === 'production',
  })
}

export function getAdminSession(request: Request): AdminSession | null {
  const cookies = parseCookies(request.headers.get('cookie') || '')
  const token = cookies[sessionCookieName]

  if (!token) {
    return null
  }

  return verifySessionToken(token)
}

export function requireAdmin(request: Request) {
  const session = getAdminSession(request)

  if (!session) {
    return null
  }

  return session
}

function verifyPassword(password: string, encodedHash: string) {
  const [scheme, cost, salt, hash] = encodedHash.split(':')

  if (scheme !== 'scrypt' || !cost || !salt || !hash) {
    return false
  }

  const expected = Buffer.from(hash, 'hex')
  const actual = crypto.scryptSync(password, salt, expected.length, {
    N: Number(cost),
  })

  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual)
}

function createSessionToken(session: AdminSession) {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url')
  const signature = sign(payload)

  return `${payload}.${signature}`
}

function verifySessionToken(token: string): AdminSession | null {
  const [payload, signature] = token.split('.')

  if (!payload || !signature || signature !== sign(payload)) {
    return null
  }

  try {
    const session = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as AdminSession
    const expectedEmail = getAdminEmail().toLowerCase()

    if (session.email.toLowerCase() !== expectedEmail || session.expiresAt < Date.now()) {
      return null
    }

    return session
  } catch {
    return null
  }
}

function sign(payload: string) {
  const secret = getAdminSessionSecret()

  if (!secret) {
    throw new Error('ADMIN_SESSION_SECRET is not configured.')
  }

  return crypto.createHmac('sha256', secret).update(payload).digest('base64url')
}

function parseCookies(cookieHeader: string) {
  return cookieHeader
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((cookies, part) => {
      const [name, ...value] = part.split('=')
      cookies[name] = decodeURIComponent(value.join('='))
      return cookies
    }, {})
}

function serializeCookie(
  name: string,
  value: string,
  options: {
    httpOnly: boolean
    maxAge: number
    sameSite: 'Lax' | 'Strict' | 'None'
    secure: boolean
  },
) {
  const parts = [
    `${name}=${encodeURIComponent(value)}`,
    'Path=/',
    `Max-Age=${options.maxAge}`,
    `SameSite=${options.sameSite}`,
  ]

  if (options.httpOnly) parts.push('HttpOnly')
  if (options.secure) parts.push('Secure')

  return parts.join('; ')
}
