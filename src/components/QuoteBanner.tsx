export default function QuoteBanner() {
  return (
    <section className="bg-lav border-b border-frame py-10 lg:py-14">
      <div className="quote-grad relative overflow-hidden px-8 lg:px-14 py-16 lg:py-28">
        <div className="quote-lines pointer-events-none absolute inset-y-0 right-0 w-3/5" />
        <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
          <div className="text-white">
            <p className="font-display font-light tracking-[-0.03em] text-white/85 text-lg sm:text-2xl xl:text-[2.5rem] xl:leading-none">There are lines that one should never cross</p>
            <p className="mt-3 xl:mt-8 font-display font-medium tracking-[-0.03em] text-2xl sm:text-3xl lg:text-[2.6rem] xl:text-[3.75rem] leading-snug xl:leading-none">
              At DO-XX Studio, we tamper lines. In fact, we'd like to <span className="text-lime-brand">own</span> those lines
            </p>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-10">
            <img src="/assets/mascot-closed.png" alt="" loading="lazy" className="w-52 sm:w-72 lg:w-96 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
