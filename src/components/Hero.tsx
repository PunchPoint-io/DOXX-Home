export default function Hero() {
  return (
    <section className="hero-grad relative overflow-hidden min-h-[520px] lg:min-h-[660px]">
      <div className="mx-auto max-w-wide px-6 lg:px-10 pt-44 pb-28 lg:pt-[14.5rem] lg:pb-[11rem]">
        <div className="grid lg:grid-cols-[1.6fr_1fr] items-center gap-8">
          <h1 className="font-display font-semibold tracking-[-0.04em] leading-[1.0] text-4xl sm:text-6xl lg:text-[5.625rem]">
            <span className="block whitespace-nowrap text-[#F3FFD4]">Retail Digital Displays</span>
            <span className="block whitespace-nowrap text-white">Content Management</span>
            <span className="block text-white">System</span>
          </h1>
          <div className="relative z-10 flex justify-center lg:justify-end lg:translate-y-6">
            <div className="relative">
              <img src="/assets/mascot-front.png" alt="DO-XX mascot" className="relative z-10 w-48 sm:w-64 lg:w-[24rem] select-none" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-1 lg:bottom-2 w-3/4 h-5 rounded-[50%] bg-black/25 blur-md" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 lg:h-48 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  )
}
