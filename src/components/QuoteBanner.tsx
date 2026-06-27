export default function QuoteBanner() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-wide px-6 lg:px-8">
        <div className="quote-grad relative rounded-[2rem] overflow-hidden px-8 lg:px-14 py-14 lg:py-16">
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
            <div className="text-white">
              <p className="text-white/80 text-sm sm:text-base">There are lines that one should never cross.</p>
              <p className="mt-3 font-extrabold text-2xl sm:text-3xl lg:text-[2.4rem] leading-snug tracking-tight">
                At DO-XX Studio, we tamper lines. In fact, we'd like to <span className="text-lime-brand">own</span> those lines
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src="/assets/mascot.png" alt="" className="w-40 sm:w-52 drop-shadow-2xl" />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-10 inset-y-0 w-1/2 opacity-30"
            style={{ background: 'radial-gradient(circle at 70% 50%, rgba(255,255,255,.4), transparent 60%)' }}
          />
        </div>
      </div>
    </section>
  )
}
