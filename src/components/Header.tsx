export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-wide px-6 lg:px-8 h-24 flex items-center justify-between">
        <a href="#" className="inline-flex flex-col leading-none text-white">
          <span className="font-display font-extrabold text-2xl tracking-tight">DO-XX</span>
          <span className="text-[9px] tracking-[0.5em] font-semibold self-end mt-1 opacity-90">STUDIO</span>
        </a>
        <a href="#contact" className="rounded-full border border-white/70 text-white text-sm font-semibold px-6 py-2.5 hover:bg-white hover:text-ink transition">Contact Us</a>
      </div>
    </header>
  )
}
