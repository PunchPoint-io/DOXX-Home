export default function Products() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto grid items-center lg:grid-cols-2 max-w-[1280px]">
        <div className="order-2 lg:order-1">
          <img src="/assets/product.png" alt="DO-XX central control panel on tablets" className="w-full select-none" />
        </div>
        <div className="order-1 lg:order-2 px-6 lg:pl-16 lg:pr-12">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.0] tracking-tight">DO-XX Products<br />and Services</h2>
          <p className="mt-6 text-ink/65 text-base leading-relaxed max-w-[25rem]">Central control panel for all your digital screens. Launch marketing and promotional content across all stores in 1 click.</p>
          <a href="#" className="lime-btn mt-7 inline-block rounded-full font-bold text-base px-[3.3rem] py-3.5">Learn More</a>
        </div>
      </div>
    </section>
  )
}
