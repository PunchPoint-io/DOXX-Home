export default function ClientBar() {
  return (
    <section className="bg-white border-b border-frame">
      <div className="overflow-hidden py-6 frame:pt-[11px] frame:pb-[32px] frame:pl-[45px]">
        <div className="cb-marquee flex items-center w-max">
          <img src="/assets/clientbar.png" alt="Trusted by leading retail brands" className="h-10 frame:h-[78px] w-auto max-w-none pr-20" />
          <img src="/assets/clientbar.png" alt="" aria-hidden="true" className="h-10 frame:h-[78px] w-auto max-w-none pr-20" />
        </div>
      </div>
    </section>
  )
}
