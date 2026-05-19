export function getAdminEmail() {
  return process.env.ADMIN_EMAIL || 'vidhantomar2004@gmail.com'
}

export function getAdminPasswordHash() {
  return process.env.ADMIN_PASSWORD_HASH || ''
}

export function getAdminSessionSecret() {
  return process.env.ADMIN_SESSION_SECRET || ''
}

export function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL || ''
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || ''

  return {
    enabled: Boolean(url && serviceRoleKey),
    serviceRoleKey,
    url,
  }
}
