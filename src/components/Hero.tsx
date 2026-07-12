export default function Hero() {
  return (
    <section className="hero-grad relative overflow-hidden">
      <div className="mx-auto max-w-wide px-6 lg:px-8 pt-40 pb-24 lg:pt-56 lg:pb-40">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-8 items-center">
          <h1 className="font-display font-medium tracking-[-0.04em] leading-[1.02] lg:leading-none text-4xl sm:text-6xl lg:text-[5.625rem]">
            <span className="block whitespace-nowrap text-[#F3FFD4]">Retail Digital Displays</span>
            <span className="block whitespace-nowrap text-white">Content Management</span>
            <span className="block text-white">System</span>
          </h1>
          <div className="relative z-10 flex justify-center lg:justify-end lg:translate-y-0 lg:-mr-24">
            <div className="relative">
              <img src="/assets/mascot-front.png" alt="DO-XX mascot" className="relative z-10 w-56 sm:w-72 lg:w-[40rem] select-none" />
              <div className="absolute left-1/2 -translate-x-1/2 bottom-1 lg:bottom-2 w-3/4 h-6 rounded-[50%] bg-black/25 blur-md" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 lg:h-56 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  )
}
