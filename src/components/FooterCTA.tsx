export default function FooterCTA() {
  return (
    <section id="contact" className="bg-white">
      <div className="grid lg:grid-cols-[2.9fr_1.1fr] frame:grid-cols-[1066px_1fr] items-stretch">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 frame:gap-[44px] px-6 py-16 frame:py-[120px] text-center sm:text-left">
          <img src="/assets/mascot-smile.png" alt="" loading="lazy" className="w-40 sm:w-56 frame:w-[287px] frame:-my-[18px] frame:translate-x-[14px] frame:-translate-y-[37px] shrink-0 select-none" />
          <div>
            <p className="font-display font-extrabold [font-stretch:87%] text-2xl sm:text-[2rem] frame:text-[38px] leading-[1.15] frame:leading-[40px]">
              <span className="text-grass">We</span> Discuss • Talk • Listen •<br />
              Collaborate • Partner • Hire<br />
              <span className="text-grass">Do You?</span>
            </p>
            <a href="mailto:hello@doxx.studio" className="lime-btn mt-7 frame:mt-[30px] inline-flex items-center justify-center rounded-full font-bold text-base frame:text-[17px] px-12 py-3.5 frame:p-0 frame:h-[54px] frame:w-[219px]">Contact Us</a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center px-6 py-10 frame:py-[100px] lg:border-l lg:border-frame">
          <img src="/assets/ig-glyph.png" alt="Instagram" loading="lazy" className="w-28 h-28 frame:w-[131px] frame:h-[131px] select-none" />
          <p className="mt-5 frame:mt-[20px] font-bold text-ink text-base frame:text-[17px] leading-snug frame:leading-[24px] max-w-[13rem] frame:max-w-[186px]">Follow our latest work, ideas, and experiments.</p>
          <a href="https://www.instagram.com/doxx_studio/" target="_blank" rel="noopener noreferrer" className="mt-5 frame:mt-[24px] inline-flex items-center justify-center rounded-full ring-1 ring-violet-brand/50 text-violet-brand font-bold text-sm frame:text-[16px] px-6 py-2.5 frame:p-0 frame:h-[48px] frame:w-[169px] hover:bg-violet-brand hover:text-white transition">doxx_studio</a>
        </div>
      </div>
    </section>
  )
}
