const hits = new Map<string, number[]>()
const windowMs = 10 * 60 * 1000
const maxHits = 5

export function checkBookingRateLimit(request: Request) {
  const ip = getClientIp(request)
  const now = Date.now()
  const recentHits = (hits.get(ip) || []).filter((timestamp) => now - timestamp < windowMs)

  if (recentHits.length >= maxHits) {
    hits.set(ip, recentHits)
    return false
  }

  recentHits.push(now)
  hits.set(ip, recentHits)
  return true
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
