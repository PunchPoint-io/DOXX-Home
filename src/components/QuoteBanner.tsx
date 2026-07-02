export default function QuoteBanner() {
  return (
    <section className="bg-lav border-b border-frame py-10 lg:py-14">
      <div className="quote-grad relative overflow-hidden px-8 lg:px-14 py-14 lg:py-24">
        <div className="quote-lines pointer-events-none absolute inset-y-0 right-0 w-3/5" />
        <div className="relative grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
          <div className="text-white">
            <p className="text-white/80 text-sm sm:text-base">There are lines that one should never cross</p>
            <p className="mt-3 font-extrabold text-2xl sm:text-3xl lg:text-[2.4rem] leading-snug tracking-tight">
              At DO-XX Studio, we tamper lines. In fact, we'd like to <span className="text-lime-brand">own</span> those lines
            </p>
          </div>
          <div className="flex justify-center lg:justify-end lg:pr-10">
            <img src="/assets/mascot-closed.png" alt="" className="w-40 sm:w-56 drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
