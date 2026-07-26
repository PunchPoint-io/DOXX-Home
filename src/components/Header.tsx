export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-wide px-6 lg:px-8 h-28 flex items-center justify-between">
        <a href="#" className="inline-block">
          <img src="/assets/logo-doxx-white.png" alt="DO-XX Studio" className="h-7 lg:h-8 w-auto select-none" />
        </a>
        <a href="#contact" className="rounded-full border border-white/70 text-white text-base font-medium px-8 py-3 hover:bg-white hover:text-ink transition">Contact Us</a>
      </div>
    </header>
  )
}
