export default function FooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-[2.9fr_1.1fr] items-stretch">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 px-6 py-16 lg:py-24 text-center sm:text-left">
          <img src="/assets/mascot-smile.png" alt="" className="w-40 sm:w-56 shrink-0 select-none" />
          <div>
            <p className="font-display font-extrabold text-2xl sm:text-[2rem] leading-[1.15] tracking-tight">
              <span className="text-grass">We</span> Discuss • Talk • Listen •<br />
              Collaborate • Partner • Hire<br />
              <span className="text-grass">Do You?</span>
            </p>
            <a href="mailto:hello@doxx.studio" className="lime-btn mt-7 inline-block rounded-full font-bold text-base px-12 py-3.5">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 lg:py-16 lg:border-l lg:border-frame">
          <img src="/assets/ig-glyph.png" alt="Instagram" className="w-28 h-28 select-none" />
          <p className="mt-5 font-bold text-ink text-base leading-snug max-w-[13rem]">Follow our latest work, ideas, and experiments.</p>
          <a href="#" className="mt-5 rounded-full ring-1 ring-violet-brand/50 text-violet-brand font-bold text-sm px-6 py-2.5 hover:bg-violet-brand hover:text-white transition">doxx_studio</a>
        </div>
      </div>
    </section>
  )
}
