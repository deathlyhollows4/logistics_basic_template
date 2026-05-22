import { Mail, MessageCircle, Phone } from 'lucide-react'

export function MobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 border-t border-white/10 bg-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        className="flex flex-col items-center justify-center gap-1 bg-green-600 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
        href="https://wa.me/918239059640"
        rel="noreferrer"
        target="_blank"
      >
        <MessageCircle aria-hidden="true" size={18} />
        WhatsApp
      </a>
      <a
        className="flex flex-col items-center justify-center gap-1 bg-orange-500 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
        href="tel:+918239059640"
      >
        <Phone aria-hidden="true" size={18} />
        Call
      </a>
      <a
        className="flex flex-col items-center justify-center gap-1 bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        href="mailto:lakshyalogisticpackers@gmail.com"
      >
        <Mail aria-hidden="true" size={18} />
        Email
      </a>
    </div>
  )
}
