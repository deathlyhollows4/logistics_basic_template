import type { BookingInput, BookingStatus, ContactInput, ExportFormat, ExportRange } from './types'

const statusValues = ['new', 'contacted', 'completed', 'cancelled'] as const

export const exportRanges: Record<ExportRange, { label: string; fileLabel: string }> = {
  '1h': { label: '1 hour', fileLabel: '1-hour' },
  '6h': { label: '6 hours', fileLabel: '6-hours' },
  '12h': { label: '12 hours', fileLabel: '12-hours' },
  '24h': { label: '24 hours', fileLabel: '24-hours' },
  '1w': { label: '1 week', fileLabel: '1-week' },
  '1m': { label: '1 month', fileLabel: '1-month' },
  '6m': { label: '6 months', fileLabel: '6-months' },
}

export function isExportRange(value: string | null): value is ExportRange {
  return Boolean(value && value in exportRanges)
}

export function parseExportRange(value: string | null): ExportRange {
  return isExportRange(value) ? value : '24h'
}

export function parseExportFormat(value: string | null): ExportFormat {
  return value === 'xlsx' ? 'xlsx' : 'csv'
}

export function getSinceForRange(range: ExportRange, now = new Date()) {
  const since = new Date(now)

  if (range === '1h') since.setHours(since.getHours() - 1)
  if (range === '6h') since.setHours(since.getHours() - 6)
  if (range === '12h') since.setHours(since.getHours() - 12)
  if (range === '24h') since.setDate(since.getDate() - 1)
  if (range === '1w') since.setDate(since.getDate() - 7)
  if (range === '1m') since.setMonth(since.getMonth() - 1)
  if (range === '6m') since.setMonth(since.getMonth() - 6)

  return since
}

export function normalizeStatus(status: unknown): BookingStatus | null {
  return typeof status === 'string' && statusValues.includes(status as BookingStatus)
    ? (status as BookingStatus)
    : null
}

export function validateBookingInput(payload: unknown): {
  data?: BookingInput
  error?: string
} {
  if (!payload || typeof payload !== 'object') {
    return { error: 'Please complete the booking form.' }
  }

  const source = payload as Record<string, unknown>

  if (typeof source.company === 'string' && source.company.trim()) {
    return { error: 'Unable to submit this request.' }
  }

  const data = {
    name: clean(source.name),
    pickupLocation: clean(source.pickupLocation),
    dropLocation: clean(source.dropLocation),
    contactNumber: clean(source.contactNumber),
    email: clean(source.email).toLowerCase(),
    message: clean(source.message),
  }

  if (!data.name || !data.pickupLocation || !data.dropLocation || !data.contactNumber || !data.email) {
    return { error: 'Name, locations, contact number, and email are required.' }
  }

  if (data.name.length < 2 || data.name.length > 80) {
    return { error: 'Please enter a valid name.' }
  }

  if (data.pickupLocation.length > 160 || data.dropLocation.length > 160) {
    return { error: 'Please keep locations under 160 characters.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { error: 'Please enter a valid email address.' }
  }

  if (!/^[+\d][\d\s()-]{8,19}$/.test(data.contactNumber)) {
    return { error: 'Please enter a valid contact number.' }
  }

  if (data.message.length > 1000) {
    return { error: 'Please keep the message under 1000 characters.' }
  }

  return { data }
}


export function validateContactInput(payload: unknown): {
  data?: ContactInput
  error?: string
} {
  if (!payload || typeof payload !== 'object') {
    return { error: 'Please complete the contact form.' }
  }

  const source = payload as Record<string, unknown>

  if (typeof source.company === 'string' && source.company.trim()) {
    return { error: 'Unable to submit this request.' }
  }

  const data = {
    name: clean(source.name),
    mobileNumber: clean(source.mobileNumber || source.mobile_number),
    email: clean(source.email).toLowerCase(),
    subject: clean(source.subject),
    message: clean(source.message),
  }

  if (!data.name || !data.mobileNumber || !data.email || !data.message) {
    return { error: 'Name, mobile number, email, and message are required.' }
  }

  if (data.name.length < 2 || data.name.length > 80) {
    return { error: 'Please enter a valid name.' }
  }

  if (!/^[+\d][\d\s()-]{8,19}$/.test(data.mobileNumber)) {
    return { error: 'Please enter a valid mobile number.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { error: 'Please enter a valid email address.' }
  }

  if (data.subject.length > 160) {
    return { error: 'Please keep the subject under 160 characters.' }
  }

  if (data.message.length < 1 || data.message.length > 2000) {
    return { error: 'Please keep the message between 1 and 2000 characters.' }
  }

  return { data }
}

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : ''
}
