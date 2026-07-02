export default function Products() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-frame">
      <div
        className="pointer-events-none absolute -top-16 right-0 w-[48%] h-[65%]"
        style={{ background: 'radial-gradient(55% 55% at 80% 25%, rgba(226, 240, 172, .95) 0%, rgba(232, 241, 201, .4) 55%, rgba(232, 241, 201, 0) 78%)' }}
      />
      <div className="relative mx-auto grid items-center lg:grid-cols-2">
        <div className="order-2 lg:order-1 px-6 lg:px-12 py-10">
          <img src="/assets/product.png" alt="DO-XX central control panel on tablets" loading="lazy" className="w-full select-none" />
        </div>
        <div className="order-1 lg:order-2 px-6 lg:pl-16 lg:pr-12 pt-10 lg:pt-0">
          <h2 className="font-display font-extrabold [font-stretch:87%] text-4xl sm:text-5xl xl:text-[3.75rem] leading-[1.0]">DO-XX Products<br />and Services</h2>
          <p className="mt-6 text-ink/65 text-base leading-relaxed max-w-[25rem]">Central control panel for all your digital screens. Launch marketing and promotional content across all stores in 1 click.</p>
          <a href="#contact" className="lime-btn mt-7 inline-block rounded-full font-bold text-base px-[3.3rem] py-3.5">Learn More</a>
        </div>
      </div>
    </section>
  )
}
