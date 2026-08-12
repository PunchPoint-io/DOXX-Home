import { useEffect } from 'react'

type Props = {
  open: boolean
  section: string
  onClose: () => void
}

// Download modal per the website draft (p2, "MODAL - RETAIL" / "MODAL - EVENT"):
// deck cover artwork + lead form. "Almost there. Tell us a little about
// yourself, and we'll send you straight to our latest Retail Deck."
const DECK_BY_SECTION: Record<string, { deck: string; cover: string }> = {
  'Retail Brands': { deck: 'Retail Deck', cover: '/assets/deck-cover-retail.jpg' },
  'Events Management': { deck: 'Activation Deck', cover: '/assets/deck-cover-activation.jpg' },
  Products: { deck: 'Retail Deck', cover: '/assets/deck-cover-retail.jpg' }, // no modal mock in draft for Products — reuse Retail
}

export default function InquiryModal({ open, section, onClose }: Props) {
  const info = DECK_BY_SECTION[section] ?? { deck: 'Retail Deck', cover: '/assets/deck-cover-retail.jpg' }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = fd.get('name') as string
    const email = fd.get('email') as string
    const company = fd.get('company') as string
    const subject = encodeURIComponent(`${info.deck} download — ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || '—'}\nRequested: ${info.deck}`)
    window.location.href = `mailto:hello@doxx.studio?subject=${subject}&body=${body}`
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div
        className="relative w-full max-w-[1000px] rounded-2xl bg-white ring-1 ring-black/10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/60 hover:text-ink shadow-sm transition"
        >
          ✕
        </button>

        <div className="grid sm:grid-cols-[1fr_1.1fr]">
          <div className="hidden sm:flex items-center justify-center p-6 bg-[#F7F7FA]">
            <img
              src={info.cover}
              alt=""
              aria-hidden
              className="w-full rounded-[10px] ring-1 ring-black/5 select-none"
            />
          </div>
          <div className="px-8 py-8 sm:px-10 sm:py-10 text-center sm:text-left">
            <span className="inline-flex items-center rounded-full bg-violet-brand/10 text-violet-brand font-semibold text-xs frame:text-[13px] px-3 py-1">
              {section}
            </span>
            <h3 id="inquiry-title" className="mt-3 font-display font-medium tracking-[-0.02em] text-3xl frame:text-[32px] leading-none text-ink">
              Almost there.
            </h3>
            <p className="mt-2 text-ink/70 text-sm frame:text-[15px] leading-snug">
              Tell us a little about yourself, and we&rsquo;ll send you straight to our latest {info.deck}.
            </p>

            <form className="mt-5 flex flex-col gap-3.5" onSubmit={handleSubmit}>
              <label className="flex flex-col gap-1.5 text-sm frame:text-[14px] font-semibold text-ink">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-[10px] border border-black/10 bg-[#FCFCFC] px-4 py-3 text-[15px] font-normal outline-none focus:border-violet-brand/60 focus:ring-2 focus:ring-violet-brand/15 transition"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm frame:text-[14px] font-semibold text-ink">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-[10px] border border-black/10 bg-[#FCFCFC] px-4 py-3 text-[15px] font-normal outline-none focus:border-violet-brand/60 focus:ring-2 focus:ring-violet-brand/15 transition"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm frame:text-[14px] font-semibold text-ink">
                Company <span className="font-normal text-ink/40">(optional)</span>
                <input
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="rounded-[10px] border border-black/10 bg-[#FCFCFC] px-4 py-3 text-[15px] font-normal outline-none focus:border-violet-brand/60 focus:ring-2 focus:ring-violet-brand/15 transition"
                />
              </label>
              <button
                type="submit"
                className="lime-btn mt-1 inline-flex items-center justify-center rounded-full font-bold text-[15px] px-8 py-3.5"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
