import fs from 'node:fs/promises'
import path from 'node:path'
import { createClient } from '@supabase/supabase-js'
import { getSupabaseConfig } from './env.server'
import type { Booking, BookingInput, BookingStatus } from './types'

type SupabaseBooking = {
  id: string
  name: string
  pickup_location: string
  drop_location: string
  contact_number: string
  email: string
  message: string | null
  status: BookingStatus
  created_at: string
}

const localDataPath = path.join(process.cwd(), 'data', 'bookings.json')

export async function createBooking(input: BookingInput) {
  const booking: Omit<Booking, 'id' | 'createdAt'> = {
    ...input,
    status: 'new',
  }

  const config = getSupabaseConfig()

  if (config.enabled) {
    const { data, error } = await getSupabase()
      .from('bookings')
      .insert({
        name: booking.name,
        pickup_location: booking.pickupLocation,
        drop_location: booking.dropLocation,
        contact_number: booking.contactNumber,
        email: booking.email,
        message: booking.message,
        status: booking.status,
      })
      .select('*')
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return fromSupabase(data as SupabaseBooking)
  }

  const bookings = await readLocalBookings()
  const localBooking: Booking = {
    ...booking,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }

  bookings.unshift(localBooking)
  await writeLocalBookings(bookings)
  return localBooking
}

export async function listBookings(since?: Date) {
  const config = getSupabaseConfig()

  if (config.enabled) {
    let query = getSupabase().from('bookings').select('*').order('created_at', {
      ascending: false,
    })

    if (since) {
      query = query.gte('created_at', since.toISOString())
    }

    const { data, error } = await query

    if (error) {
      throw new Error(error.message)
    }

    return (data as SupabaseBooking[]).map(fromSupabase)
  }

  const bookings = await readLocalBookings()
  return since
    ? bookings.filter((booking) => new Date(booking.createdAt) >= since)
    : bookings
}

export async function updateBookingStatus(id: string, status: BookingStatus) {
  const config = getSupabaseConfig()

  if (config.enabled) {
    const { data, error } = await getSupabase()
      .from('bookings')
      .update({ status })
      .eq('id', id)
      .select('*')
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return fromSupabase(data as SupabaseBooking)
  }

  const bookings = await readLocalBookings()
  const index = bookings.findIndex((booking) => booking.id === id)

  if (index === -1) {
    return null
  }

  bookings[index] = {
    ...bookings[index],
    status,
  }

  await writeLocalBookings(bookings)
  return bookings[index]
}

function getSupabase() {
  const config = getSupabaseConfig()

  return createClient(config.url, config.serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

function fromSupabase(booking: SupabaseBooking): Booking {
  return {
    id: booking.id,
    name: booking.name,
    pickupLocation: booking.pickup_location,
    dropLocation: booking.drop_location,
    contactNumber: booking.contact_number,
    email: booking.email,
    message: booking.message || '',
    status: booking.status,
    createdAt: booking.created_at,
  }
}

async function readLocalBookings() {
  try {
    const raw = await fs.readFile(localDataPath, 'utf8')
    return JSON.parse(raw) as Booking[]
  } catch {
    return []
  }
}

async function writeLocalBookings(bookings: Booking[]) {
  await fs.mkdir(path.dirname(localDataPath), { recursive: true })
  await fs.writeFile(localDataPath, JSON.stringify(bookings, null, 2))
}
