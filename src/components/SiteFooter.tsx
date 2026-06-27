export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-black/5">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-8 flex items-center justify-between flex-wrap gap-4">
        <p className="text-sm text-ink/55">2026 DO-XX Studio Pte Ltd.</p>
        <nav className="flex items-center gap-7 text-sm font-medium text-violet-brand">
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Press</a>
          <a href="#" className="hover:underline">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
