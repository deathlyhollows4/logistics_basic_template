export type BookingStatus = 'new' | 'contacted' | 'completed' | 'cancelled'

export type BookingInput = {
  name: string
  pickupLocation: string
  dropLocation: string
  contactNumber: string
  email: string
  message: string
}

export type Booking = BookingInput & {
  id: string
  status: BookingStatus
  createdAt: string
}

export type ExportRange = '1h' | '6h' | '12h' | '24h' | '1w' | '1m' | '6m'

export type ExportFormat = 'csv' | 'xlsx'
