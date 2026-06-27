export default function Events() {
  return (
    <section className="bg-white pb-4">
      <div className="mx-auto max-w-wide px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[#121016] text-white p-7 lg:p-10 overflow-hidden">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">Events Management</h2>
              <p className="mt-2 text-lime-brand font-medium text-sm">We design and deliver immersive brand experiences that demand attention.</p>
            </div>
            <a href="#" className="lime-btn rounded-full text-sm font-bold px-6 py-3">Learn More</a>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <img src="/assets/events.png" alt="DO-XX exhibition booth for Ledger at TOKEN2049" className="w-full rounded-2xl object-cover" />
            <div>
              <h3 className="text-2xl font-extrabold leading-tight">Ledger<br />@ TOKEN2049</h3>
              <p className="mt-2 text-lime-brand font-bold text-sm">1-2 October 2025</p>
              <p className="mt-4 text-white/70 leading-relaxed text-sm">Designed and delivered a premium exhibition booth for Ledger at TOKEN2049 Singapore, creating an engaging environment through modern spatial design, interactive product experiences, and bold visual branding.</p>
              <div className="mt-7 flex items-center gap-3">
                <button className="rounded-full ring-1 ring-white/25 text-sm font-semibold px-6 py-2.5 hover:bg-white/10 transition">Previous</button>
                <button className="lime-btn rounded-full text-sm font-bold px-7 py-2.5">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
