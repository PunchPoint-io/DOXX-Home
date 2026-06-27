export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-wide px-6 lg:px-8 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="logo-wm text-2xl">DO<span className="text-lime-brand">-</span>XX</span>
          <span className="text-[10px] tracking-[0.45em] font-semibold mt-1 opacity-80">STUDIO</span>
        </a>
        <a href="#contact" className="rounded-full bg-ink/90 text-white text-sm font-semibold px-6 py-3 hover:bg-ink transition shadow-lg shadow-black/10">Contact Us</a>
      </div>
    </header>
  )
}
