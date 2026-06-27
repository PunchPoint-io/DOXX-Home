export default function RetailBrands() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8 pb-8">
        <div className="rounded-[2rem] bg-white ring-1 ring-black/5 shadow-[0_30px_70px_-40px_rgba(0,0,0,.3)] p-7 lg:p-10">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">Retail Brands</h2>
              <p className="mt-2 text-violet-brand font-medium text-sm">Designed to attract attention. Built to drive engagement and sales.</p>
            </div>
            <a href="#" className="rounded-full bg-violet-brand text-white text-sm font-semibold px-6 py-3 hover:bg-violet-soft transition">Learn More</a>
          </div>

          <div className="mt-8 grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
            <img src="/assets/retail.png" alt="DO-XX displays in retail outlets" className="w-full rounded-2xl object-cover" />
            <div>
              <img src="/assets/logo-springleaf.png" alt="Springleaf Prata Place" className="h-12 object-contain object-left" />
              <h3 className="mt-5 text-2xl font-extrabold">Springleaf Prata Place</h3>
              <p className="mt-3 text-ink/65 leading-relaxed text-sm">Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.</p>
              <div className="mt-7 flex items-center gap-3">
                <button className="rounded-full ring-1 ring-black/15 text-sm font-semibold px-6 py-2.5 hover:bg-black/5 transition">Previous</button>
                <button className="rounded-full bg-violet-brand text-white text-sm font-semibold px-7 py-2.5 hover:bg-violet-soft transition">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
