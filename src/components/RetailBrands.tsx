export default function RetailBrands() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-start justify-between gap-6 px-6 lg:px-[3.5rem]">
          <div>
            <h2 className="font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[0.95] tracking-[-0.035em] text-ink">Retail Brands</h2>
            <p className="mt-2.5 text-violet-brand font-semibold text-base lg:text-[1.12rem]">Designed to attract attention. Built to drive engagement and sales.</p>
          </div>
          <a href="#" className="shrink-0 mt-1.5 rounded-full bg-violet-brand text-white font-semibold text-base px-9 py-3.5 hover:bg-violet-soft transition">Learn More</a>
        </div>

        <div className="mt-7 grid lg:grid-cols-[2.855fr_1fr] items-stretch">
          <img src="/assets/retail.png" alt="DO-XX displays in retail outlets" className="w-full self-start select-none" />
          <div className="px-6 lg:pl-[30px] lg:pr-[2.4rem] flex flex-col">
            <img src="/assets/logo-springleaf.png" alt="Springleaf Prata Place" className="h-[4.4rem] w-auto object-contain object-left" />
            <div className="mt-3.5 border-t border-black/10" />
            <h3 className="mt-4 text-[2.15rem] leading-[1.06] font-extrabold tracking-tight text-ink">Springleaf<br />Prata Place</h3>
            <p className="mt-3.5 text-ink/70 leading-[1.55] text-[0.98rem]">Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.</p>
            <div className="mt-auto pt-8 flex items-center gap-3">
              <button className="rounded-full ring-1 ring-violet-brand text-violet-brand text-sm font-semibold px-7 py-2.5 hover:bg-violet-brand/5 transition">Previous</button>
              <button className="rounded-full ring-1 ring-violet-brand text-violet-brand text-sm font-semibold px-9 py-2.5 hover:bg-violet-brand/5 transition">Next</button>
            </div>
            <div className="mt-5 flex items-center gap-1.5">
              <span className="h-1 w-6 rounded-full bg-black/15" />
              <span className="h-1 w-7 rounded-full bg-grass" />
              <span className="h-1 w-6 rounded-full bg-black/15" />
              <span className="h-1 w-6 rounded-full bg-black/15" />
              <span className="h-1 w-6 rounded-full bg-black/15" />
              <span className="h-1 w-6 rounded-full bg-black/15" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
