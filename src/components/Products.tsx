export default function Products() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src="/assets/product.png" alt="DO-XX central control panel on tablet" className="w-full max-w-lg mx-auto" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">DO-XX Products<br />and Services</h2>
            <p className="mt-5 text-ink/65 leading-relaxed max-w-md">Central control panel for all your digital screens. Launch marketing and promotional content across all stores in 1 click.</p>
            <a href="#" className="lime-btn mt-7 inline-block rounded-full font-bold text-sm px-7 py-3.5">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}
