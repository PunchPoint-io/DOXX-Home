export default function Hero() {
  return (
    <section className="hero-grad relative overflow-hidden">
      {/* At >=1420px every offset below is measured off the 1420px design frame. */}
      <div className="relative mx-auto max-w-wide px-6 frame:px-0 pt-40 pb-24 frame:min-h-[846px] frame:pt-0 frame:pb-0">
        <h1 className="relative z-10 font-display font-bold [font-stretch:88%] leading-[1.02] frame:leading-none text-4xl sm:text-6xl frame:text-[5.625rem] frame:pt-[266px]">
          <span className="block whitespace-nowrap text-[#F3FFD4]">Retail Digital Displays</span>
          <span className="block whitespace-nowrap text-white">Content Management</span>
          <span className="block text-white">System</span>
        </h1>
        <div className="relative z-0 mt-10 flex justify-center frame:absolute frame:mt-0 frame:right-[-13px] frame:top-[229px] frame:w-[428px] frame:justify-start">
          <div className="relative">
            <img
              src="/assets/mascot.png"
              alt="DO-XX mascot"
              className="relative z-10 w-56 sm:w-72 frame:w-[428px] select-none"
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 frame:bottom-[-30px] w-3/4 frame:w-[72%] h-6 frame:h-[34px] rounded-[50%] bg-black/20 blur-lg" />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 frame:h-[347px] bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  )
}
