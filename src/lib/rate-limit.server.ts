const bookingHits = new Map<string, number[]>()
const loginHits = new Map<string, number[]>()

function checkLimit(
  store: Map<string, number[]>,
  windowMs: number,
  maxHits: number,
  request: Request,
) {
  const ip = getClientIp(request)
  const now = Date.now()
  const recentHits = (store.get(ip) || []).filter((timestamp) => now - timestamp < windowMs)

  if (recentHits.length >= maxHits) {
    store.set(ip, recentHits)
    return false
  }

  recentHits.push(now)
  store.set(ip, recentHits)
  return true
}

export function checkBookingRateLimit(request: Request) {
  return checkLimit(bookingHits, 10 * 60 * 1000, 5, request)
}

export function checkLoginRateLimit(request: Request) {
  return checkLimit(loginHits, 15 * 60 * 1000, 10, request)
}

const contactHits = new Map<string, number[]>()

export function checkContactRateLimit(request: Request) {
  return checkLimit(contactHits, 10 * 60 * 1000, 3, request)
}

function getClientIp(request: Request) {
  // Prefer headers injected by the trusted edge proxy.
  const cfIp = request.headers.get('cf-connecting-ip')
  if (cfIp) return cfIp
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp
  // Use the LAST entry of X-Forwarded-For (added by the trusted edge proxy),
  // never the first which is attacker-controlled.
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    const parts = forwardedFor.split(',')
    return parts[parts.length - 1]?.trim() || 'unknown'
  }
  return 'unknown'
}
