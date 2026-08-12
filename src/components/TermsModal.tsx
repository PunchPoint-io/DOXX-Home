import { useEffect } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

// "Terms of Use" opens a modal — client annotation 2026-08-12 (website draft p4).
// Same modal pattern as InquiryModal: backdrop, Esc, ✕, body scroll lock.
// Content is the factual company boilerplate; final legal text is the client's to provide.
export default function TermsModal({ open, onClose }: Props) {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-title"
    >
      <div
        className="relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl bg-white ring-1 ring-black/10 shadow-2xl px-6 py-7 frame:px-8 frame:py-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink/50 hover:text-ink hover:bg-black/5 transition"
        >
          ✕
        </button>

        <h3 id="terms-title" className="font-display font-medium tracking-[-0.02em] text-3xl frame:text-[32px] leading-none text-ink">
          Terms of Use
        </h3>

        <div className="mt-4 flex flex-col gap-3.5 text-[15px] leading-relaxed text-ink/80">
          <p>
            This website is operated by <span className="font-semibold text-ink">DO-XX Studio Pte Ltd</span>.
            It presents our retail digital display and content management solutions, along with case studies,
            brand outlets and event work across Asia Pacific.
          </p>
          <p>
            All content on this site — including imagery of retail brands, events and exhibition booths — is
            shown for portfolio and informational purposes only. Nothing on this site constitutes an offer,
            warranty or binding commitment unless agreed in writing.
          </p>
          <p>
            Product decks and pricing are available on request. Contact us at{' '}
            <a href="mailto:hello@doxx.studio" className="text-violet-brand font-semibold hover:underline">
              hello@doxx.studio
            </a>{' '}
            for further information.
          </p>
          <p className="text-sm text-ink/50">© 2026 DO-XX Studio Pte Ltd. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
