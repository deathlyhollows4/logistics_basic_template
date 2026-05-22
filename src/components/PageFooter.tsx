import { ShieldCheck } from 'lucide-react'

export function PageFooter() {
  return (
    <footer className="bg-black px-6 py-6 text-center text-slate-400">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-sm">© 2026 Lakshya Logistic Packers. All Rights Reserved.</p>
        <a
          aria-label="Admin login"
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition hover:border-slate-500 hover:text-white"
          href="/admin/login"
        >
          <ShieldCheck aria-hidden="true" size={18} />
        </a>
      </div>
    </footer>
  )
}
