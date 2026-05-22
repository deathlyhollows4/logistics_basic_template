import fs from 'node:fs/promises'
import path from 'node:path'
import { createClient } from '@supabase/supabase-js'
import { getSupabaseConfig } from './env.server'
import type { ContactInput } from './types'

type SupabaseContact = {
  id: string
  name: string
  mobile_number: string
  email: string
  subject: string | null
  message: string
  created_at: string
}

export type StoredContact = ContactInput & {
  id: string
  createdAt: string
}

const localDataPath = path.join(process.cwd(), 'data', 'contacts.json')

export async function storeMessage(input: ContactInput) {
  const config = getSupabaseConfig()

  if (config.enabled) {
    const { data, error } = await getSupabase()
      .from('contacts')
      .insert({
        name: input.name,
        mobile_number: input.mobileNumber,
        email: input.email,
        subject: input.subject || null,
        message: input.message,
      })
      .select('*')
      .single()

    if (error) {
      throw new Error(error.message)
    }

    return fromSupabase(data as SupabaseContact)
  }

  const contacts = await readLocalContacts()
  const stored: StoredContact = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }

  contacts.unshift(stored)
  await writeLocalContacts(contacts)
  return stored
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

function fromSupabase(contact: SupabaseContact): StoredContact {
  return {
    id: contact.id,
    name: contact.name,
    mobileNumber: contact.mobile_number,
    email: contact.email,
    subject: contact.subject || '',
    message: contact.message,
    createdAt: contact.created_at,
  }
}

async function readLocalContacts() {
  try {
    const raw = await fs.readFile(localDataPath, 'utf8')
    return JSON.parse(raw) as StoredContact[]
  } catch {
    return []
  }
}

async function writeLocalContacts(contacts: StoredContact[]) {
  await fs.mkdir(path.dirname(localDataPath), { recursive: true })
  await fs.writeFile(localDataPath, JSON.stringify(contacts, null, 2))
}
