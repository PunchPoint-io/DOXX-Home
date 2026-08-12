import { useState } from 'react'
import InquiryModal from './InquiryModal'

export default function Products() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section className="relative bg-white overflow-hidden border-b border-frame">
      {/* Yellow bloom top-right and green bloom along the foot, per the design. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(30% 34% at 74% 0%, rgba(226,232,140,.85) 0%, rgba(236,240,180,.35) 45%, rgba(240,244,200,0) 75%),' +
            'radial-gradient(38% 30% at 50% 102%, rgba(150,200,110,.55) 0%, rgba(200,225,165,0) 72%)',
        }}
      />
      <div className="relative px-6 frame:px-[20px] frame:min-h-[642px] frame:pt-[12px]">
        <div className="grid items-center lg:grid-cols-2 frame:grid-cols-[670px_1fr] frame:gap-[90px] frame:items-start">
          <div className="prod-panel rounded-[14px] ring-1 ring-black/[0.06] py-10 frame:py-0 frame:mt-[19px] frame:min-h-[623px] flex items-center justify-center">
            <img
              src="/assets/product.png"
              alt="DO-XX central control panel on tablets"
              loading="lazy"
              className="w-full max-w-[440px] frame:w-[721px] frame:max-w-none frame:shrink-0 frame:-my-[10px] frame:-translate-y-[20px] select-none"
            />
          </div>
          <div className="pt-10 frame:pt-[165px]">
            <h2 className="font-display font-medium tracking-[-0.03em] text-4xl sm:text-5xl frame:text-[57px] leading-[1.0] frame:leading-[57px]">
              DO-XX Products<br />and Services
            </h2>
            <p className="mt-6 frame:mt-[36px] text-ink/70 text-base frame:text-[19px] leading-relaxed frame:leading-[30px] max-w-[25rem] frame:max-w-[460px]">
              Central control panel for all your digital screens. Launch marketing and promotional content across all stores in 1 click.
            </p>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="lime-btn mt-7 frame:mt-[38px] inline-flex items-center justify-center rounded-full font-bold text-base frame:text-[17px] px-[3.3rem] py-3.5 frame:p-0 frame:h-[52px] frame:w-[219px]"
            >Learn More</button>
          </div>
        </div>
      </div>
          <InquiryModal open={modalOpen} section="Products" onClose={() => setModalOpen(false)} />
</section>
  )
}
