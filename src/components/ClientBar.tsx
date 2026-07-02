export default function ClientBar() {
  return (
    <section className="bg-white border-b border-frame">
      <div className="overflow-hidden py-6">
        <div className="cb-marquee flex items-center w-max">
          <img src="/assets/clientbar.png" alt="Trusted by leading retail brands" className="h-10 lg:h-14 w-auto max-w-none pr-20" />
          <img src="/assets/clientbar.png" alt="" aria-hidden="true" className="h-10 lg:h-14 w-auto max-w-none pr-20" />
        </div>
      </div>
    </section>
  )
}
