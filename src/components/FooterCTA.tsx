export default function FooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8">
        <div className="grid lg:grid-cols-[3.5fr_1fr] items-stretch">
          <div className="flex items-center gap-5 sm:gap-8 py-16 lg:py-[8.25rem] lg:pr-12">
            <img src="/assets/mascot-smile.png" alt="" className="w-48 sm:w-60 shrink-0 select-none" />
            <div>
              <p className="font-display font-extrabold text-[1.85rem] sm:text-[2.25rem] leading-[1.1] tracking-tight">
                <span className="text-grass">We</span> Discuss • Talk • Listen •<br />
                Collaborate • Partner • Hire<br />
                <span className="text-grass">Do You?</span>
              </p>
              <a href="mailto:hello@doxx.studio" className="lime-btn mt-7 inline-block rounded-full font-bold text-base px-12 py-3.5">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col justify-center py-10 lg:py-20 lg:border-l lg:border-black/10 lg:pl-12">
            <img src="/assets/ig-glyph.png" alt="Instagram" className="w-[132px] h-[132px] select-none" />
            <p className="mt-5 font-bold text-ink text-lg leading-snug max-w-[12rem]">Follow our latest work, ideas, and experiments.</p>
            <a href="#" className="mt-5 self-start rounded-full ring-1 ring-violet-brand/50 text-violet-brand font-bold text-sm px-6 py-2.5 hover:bg-violet-brand hover:text-white transition">doxx_studio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
