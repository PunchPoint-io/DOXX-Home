import { useState } from 'react'
import TermsModal from './TermsModal'

export default function SiteFooter() {
  const [termsOpen, setTermsOpen] = useState(false)
  return (
    <footer className="bg-white border-t border-frame">
      <div className="px-6 frame:px-[60px] py-8 frame:py-[52px] flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm frame:text-[16px] font-semibold text-ink">2026 DO-XX Studio Pte Ltd.</p>
        <nav className="flex items-center gap-10 frame:gap-[49px] text-sm frame:text-[16px] font-semibold text-violet-brand">
          <button
            type="button"
            onClick={() => setTermsOpen(true)}
            className="hover:underline"
          >
            Terms of Use
          </button>
        </nav>
      </div>
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  )
}
