export default function FooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-[2.9fr_1.1fr] items-stretch">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 px-6 py-16 lg:py-28 text-center sm:text-left">
          <img src="/assets/mascot-smile.png" alt="" loading="lazy" className="w-44 sm:w-64 lg:w-[18rem] shrink-0 select-none" />
          <div>
            <p className="font-display font-medium tracking-[-0.03em] text-2xl sm:text-[2rem] lg:text-[2.5rem] leading-[1.15] lg:leading-none">
              <span className="text-grass">We</span> Discuss • Talk • Listen •<br />
              Collaborate • Partner • Hire<br />
              <span className="text-grass">Do You?</span>
            </p>
            <a href="mailto:hello@doxx.studio" className="lime-btn mt-8 inline-block rounded-full font-bold text-lg px-12 py-3.5">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-12 lg:py-20 lg:border-l lg:border-frame">
          <img src="/assets/ig-glyph.png" alt="Instagram" loading="lazy" className="w-32 h-32 lg:w-36 lg:h-36 select-none" />
          <p className="mt-6 font-medium text-ink text-xl leading-snug max-w-[14rem]">Follow our latest work, ideas, and experiments.</p>
          <a href="https://www.instagram.com/doxx_studio/" target="_blank" rel="noopener noreferrer" className="mt-5 rounded-full ring-1 ring-violet-brand/50 text-violet-brand font-bold text-sm px-6 py-2.5 hover:bg-violet-brand hover:text-white transition">doxx_studio</a>
        </div>
      </div>
    </section>
  )
}
