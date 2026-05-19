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
  const forwardedFor = request.headers.get('x-forwarded-for')

  if (forwardedFor) {
    return forwardedFor.split(',')[0]?.trim() || 'unknown'
  }

  return request.headers.get('cf-connecting-ip') || request.headers.get('x-real-ip') || 'unknown'
}
