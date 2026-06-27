export default function Hero() {
  return (
    <section className="hero-grad relative overflow-hidden">
      <div className="mx-auto max-w-wide px-6 lg:px-8 pt-36 pb-28 lg:pt-44 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <h1 className="text-white font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Retail Digital<br className="hidden sm:block" /> Displays Content<br className="hidden sm:block" /> Management System
          </h1>
          <div className="flex justify-center lg:justify-end">
            <img src="/assets/mascot.png" alt="DO-XX mascot" className="w-56 sm:w-72 lg:w-80 drop-shadow-2xl select-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
