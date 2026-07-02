export default function Hero() {
  return (
    <section className="hero-grad relative overflow-hidden">
      <div className="mx-auto max-w-wide px-6 lg:px-8 pt-36 pb-32 lg:pt-44 lg:pb-44">
        <div className="grid lg:grid-cols-[1.32fr_0.68fr] gap-8 items-center">
          <h1 className="font-display font-semibold leading-none tracking-[-0.04em] text-4xl sm:text-5xl lg:text-[3.6rem]">
            <span className="block whitespace-nowrap text-[#F3FFD4]">Retail Digital Displays</span>
            <span className="block whitespace-nowrap text-white">Content Management</span>
            <span className="block text-white">System</span>
          </h1>
          <div className="flex justify-center lg:justify-end">
            <img src="/assets/mascot.png" alt="DO-XX mascot" className="w-56 sm:w-72 lg:w-[22rem] drop-shadow-2xl select-none" />
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 lg:h-40 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  )
}
