export default function ApacPartners() {
  return (
    <section className="bg-[#FCFCFC] border-b border-frame">
      <div className="border-b border-frame pb-3.5">
        <span
          className="inline-block bg-violet-brand text-white text-lg font-semibold pl-7 lg:pl-[3.75rem] pr-12 lg:pr-[7.5rem] py-5 lg:py-9 lg:min-w-[360px]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
        >
          Global presence
        </span>
      </div>

      <div className="pl-6 lg:pl-16 grid lg:grid-cols-[1fr_1.82fr] gap-6 items-start">
        <h2 className="mt-8 lg:mt-[3.7rem] font-display font-extrabold [font-stretch:87%] text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.75rem] leading-[1.15] xl:leading-none">
          <span className="whitespace-nowrap">More than <span className="text-grass">500+</span></span><br />
          <span className="whitespace-nowrap">partnering brand</span><br />
          <span className="whitespace-nowrap">outlets across</span><br />
          <span className="text-grass whitespace-nowrap">Asia Pacific</span>
        </h2>
        <img src="/assets/countries.png" alt="DO-XX partner countries across Asia Pacific" loading="lazy" className="w-full" />
      </div>

      <img
        src="/assets/partners-grid.jpg"
        alt="Partner brand logos"
        loading="lazy"
        className="relative left-1/2 -translate-x-1/2 w-screen max-w-none mt-2"
      />
      <p className="mt-7 lg:mt-10 mb-10 pr-6 lg:pr-16 text-right text-violet-brand font-semibold text-[17px]">And many more!</p>
    </section>
  )
}
