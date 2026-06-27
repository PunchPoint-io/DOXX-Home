export default function ApacPartners() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-14 lg:py-20">
        <span className="inline-block rounded-md bg-violet-brand text-white text-xs font-semibold px-3 py-1.5 [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] pr-5">Global presence</span>
        <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            More than <span className="text-lime-deep">500+</span><br /> partnering brand<br /> outlets across <span className="text-lime-deep">Asia Pacific</span>
          </h2>
          <img src="/assets/countries.png" alt="DO-XX partner countries across Asia Pacific" className="w-full" />
        </div>

        <div className="mt-14">
          <img src="/assets/partners.png" alt="Partner brand logos" className="w-full" />
          <p className="mt-4 text-right text-violet-brand font-semibold text-sm">And many more!</p>
        </div>
      </div>
    </section>
  )
}
