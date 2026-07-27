export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-wide px-6 frame:px-0 h-24 frame:h-[133px] flex items-center justify-between">
        <a href="#" className="inline-block">
          <img src="/assets/logo-doxx-white.png" alt="DO-XX Studio" className="h-7 frame:h-[41px] w-auto select-none" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-full border border-white/70 text-white text-sm frame:text-[15px] font-semibold px-7 py-2.5 frame:p-0 frame:h-[54px] frame:w-[165px] hover:bg-white hover:text-ink transition"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}
