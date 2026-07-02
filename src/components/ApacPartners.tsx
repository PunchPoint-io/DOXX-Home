export default function ApacPartners() {
  return (
    <section className="bg-[#FCFCFC] border-b border-frame overflow-hidden">
      <div className="border-b border-frame pb-3.5">
        <span
          className="inline-block bg-violet-brand text-white text-lg lg:text-[26px] font-semibold pl-7 lg:pl-[3.8rem] pr-12 lg:pr-[3.4rem] py-5 lg:py-[2.1rem]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
        >
          Global presence
        </span>
      </div>

      <div className="pl-6 lg:pl-16 grid lg:grid-cols-[1fr_1.82fr] gap-6 items-start">
        <h2
          className="mt-8 lg:mt-[4.5rem] font-display font-extrabold text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] lg:leading-[0.93]"
          style={{ fontStretch: '87%' }}
        >
          <span className="whitespace-nowrap">More than <span className="text-grass">500+</span></span><br />
          <span className="whitespace-nowrap">partnering brand</span><br />
          <span className="whitespace-nowrap">outlets across</span><br />
          <span className="text-grass whitespace-nowrap">Asia Pacific</span>
        </h2>
        <img src="/assets/countries.png" alt="DO-XX partner countries across Asia Pacific" className="w-full" />
      </div>

      <img src="/assets/partners-grid.jpg" alt="Partner brand logos" className="w-full mt-2 lg:mt-8" />
      <p className="mt-6 mb-10 pr-6 lg:pr-16 text-right text-violet-brand font-semibold text-[17px]">And many more!</p>
    </section>
  )
}
