import ExcelJS from 'exceljs'
import type { Booking, ExportRange } from './types'
import { exportRanges } from './validation'

const formatter = new Intl.DateTimeFormat('en-IN', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Asia/Kolkata',
})

export function formatIndiaDate(isoDate: string) {
  return formatter.format(new Date(isoDate))
}

export function exportFileName(range: ExportRange, extension: 'csv' | 'xlsx') {
  return `lakshya-bookings-${exportRanges[range].fileLabel}.${extension}`
}

export function bookingsToRows(bookings: Booking[]) {
  return bookings.map((booking) => ({
    ID: booking.id,
    Name: booking.name,
    'Pickup Location': booking.pickupLocation,
    'Drop Location': booking.dropLocation,
    'Contact Number': booking.contactNumber,
    Email: booking.email,
    Message: booking.message,
    Status: booking.status,
    'Created At (UTC)': booking.createdAt,
    'Created At (Asia/Kolkata)': formatIndiaDate(booking.createdAt),
  }))
}

export function bookingsToCsv(bookings: Booking[]) {
  const rows = bookingsToRows(bookings)
  const headers = Object.keys(rows[0] || {
    ID: '',
    Name: '',
    'Pickup Location': '',
    'Drop Location': '',
    'Contact Number': '',
    Email: '',
    Message: '',
    Status: '',
    'Created At (UTC)': '',
    'Created At (Asia/Kolkata)': '',
  })

  return [
    headers.map(escapeCsv).join(','),
    ...rows.map((row) => headers.map((header) => escapeCsv(String(row[header as keyof typeof row] ?? ''))).join(',')),
  ].join('\n')
}

export async function bookingsToXlsx(bookings: Booking[]) {
  const workbook = new ExcelJS.Workbook()
  workbook.creator = 'Lakshya Logistic Packers'
  workbook.created = new Date()

  const worksheet = workbook.addWorksheet('Bookings')
  worksheet.columns = [
    { header: 'ID', key: 'id', width: 38 },
    { header: 'Name', key: 'name', width: 24 },
    { header: 'Pickup Location', key: 'pickupLocation', width: 32 },
    { header: 'Drop Location', key: 'dropLocation', width: 32 },
    { header: 'Contact Number', key: 'contactNumber', width: 18 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Message', key: 'message', width: 44 },
    { header: 'Status', key: 'status', width: 14 },
    { header: 'Created At (UTC)', key: 'createdAtUtc', width: 28 },
    { header: 'Created At (Asia/Kolkata)', key: 'createdAtIndia', width: 28 },
  ]

  worksheet.addRows(
    bookings.map((booking) => ({
      contactNumber: booking.contactNumber,
      createdAtIndia: formatIndiaDate(booking.createdAt),
      createdAtUtc: booking.createdAt,
      dropLocation: booking.dropLocation,
      email: booking.email,
      id: booking.id,
      message: booking.message,
      name: booking.name,
      pickupLocation: booking.pickupLocation,
      status: booking.status,
    })),
  )

  worksheet.getRow(1).font = { bold: true }
  worksheet.getRow(1).fill = {
    fgColor: { argb: 'FFEFF6FF' },
    pattern: 'solid',
    type: 'pattern',
  }
  worksheet.views = [{ state: 'frozen', ySplit: 1 }]

  return workbook.xlsx.writeBuffer()
}

function escapeCsv(value: string) {
  const escaped = value.replace(/"/g, '""')
  return `"${escaped}"`
}
