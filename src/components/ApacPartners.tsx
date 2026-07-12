export default function ApacPartners() {
  return (
    <section className="bg-[#FCFCFC] border-b border-frame">
      <div className="border-b border-frame pb-3.5">
        <span
          className="inline-block bg-violet-brand text-white text-lg font-semibold px-7 lg:px-8 py-3 lg:py-3.5"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)' }}
        >
          Global presence
        </span>
      </div>

      <div className="pl-6 lg:pl-16 grid lg:grid-cols-[1fr_1.82fr] gap-6 items-start">
        <h2 className="mt-8 lg:mt-[3.7rem] font-display font-medium tracking-[-0.045em] text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.75rem] leading-[1.15] xl:leading-none">
          <span className="whitespace-nowrap">More than <span className="text-grass">500+</span></span><br />
          <span className="whitespace-nowrap">partnering brand</span><br />
          <span className="whitespace-nowrap">outlets across</span><br />
          <span className="text-grass whitespace-nowrap">Asia Pacific</span>
        </h2>
        <img src="/assets/countries.png" alt="DO-XX partner countries across Asia Pacific" loading="lazy" className="w-full" />
      </div>

      {/* Design shows logos at a fixed size bleeding off the right edge (grid spans
          x120–x2300 in the 1920 frame). Hold that scale via min-width + clip instead
          of squeezing every column into narrow viewports. */}
      <div className="mt-2 overflow-hidden">
        <img
          src="/assets/partners-grid.jpg"
          alt="Partner brand logos"
          loading="lazy"
          className="w-full min-w-[1680px] max-w-none"
        />
      </div>
      <p className="mt-7 lg:mt-10 mb-10 pr-6 lg:pr-16 text-right text-violet-brand font-semibold text-[17px]">And many more!</p>
    </section>
  )
}
