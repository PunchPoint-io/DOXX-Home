export default function FooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-16">
        <div className="rounded-[2rem] ring-1 ring-black/5 shadow-[0_30px_70px_-45px_rgba(0,0,0,.35)] p-8 lg:p-12">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div className="flex items-center gap-6">
              <img src="/assets/mascot.png" alt="" className="w-28 sm:w-36 shrink-0" />
              <div>
                <p className="font-extrabold text-2xl sm:text-3xl leading-snug tracking-tight">
                  <span className="text-lime-deep">We</span> Discuss • Talk • Listen<br />
                  Collaborate • Partner • Hire<br />
                  <span className="text-ink">Do You?</span>
                </p>
                <a href="mailto:hello@doxx.studio" className="lime-btn mt-6 inline-block rounded-full font-bold text-sm px-8 py-3.5">Contact Us</a>
              </div>
            </div>
            <div className="lg:border-l lg:border-black/10 lg:pl-10">
              <img src="/assets/ig-glyph.png" alt="Instagram" className="w-12 h-12" />
              <p className="mt-4 text-ink/65 text-sm leading-relaxed max-w-xs">Follow our latest work, ideas, and experiments.</p>
              <a href="#" className="mt-4 inline-block rounded-full ring-1 ring-violet-brand/40 text-violet-brand font-semibold text-sm px-5 py-2">@doxx_studio</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
