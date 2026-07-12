export default function ClientBar() {
  return (
    <section className="bg-white border-b border-frame">
      <div className="overflow-hidden py-8 lg:py-9">
        <div className="cb-marquee flex items-center w-max">
          <img src="/assets/clientbar.png" alt="Trusted by leading retail brands" className="h-11 lg:h-16 w-auto max-w-none pr-24" />
          <img src="/assets/clientbar.png" alt="" aria-hidden="true" className="h-11 lg:h-16 w-auto max-w-none pr-24" />
        </div>
      </div>
    </section>
  )
}
