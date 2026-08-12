// Straight vertical strands packing tighter toward the right edge
// (client annotation 2026-08-12: "use back this straight lines from previous version").
const STRANDS = Array.from({ length: 44 }, (_, i) => {
  const t = i / 43
  // ease the spacing so lines crowd the right-hand edge
  const x = 30 + 510 * Math.pow(t, 0.78)
  return `M ${x} 0 L ${x} 644`
})

export default function QuoteBanner() {
  return (
    <section className="bg-[#F6F6FB] border-b border-frame py-10 frame:pt-[69px] frame:pb-[70px]">
      <div className="quote-grad relative overflow-hidden rounded-[10px] px-8 frame:px-[60px] py-14 frame:py-[70px] frame:min-h-[645px]">
        <svg
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-[70%] frame:w-[38%]"
          viewBox="0 0 540 644"
          preserveAspectRatio="none"
          aria-hidden
        >
          {STRANDS.map((d, i) => (
            <path key={i} d={d} fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        <div className="relative grid frame:block gap-8 frame:gap-0 items-center h-full">
          <div className="text-white frame:pt-[168px] frame:max-w-[770px]">
            <p className="font-display font-light tracking-[-0.03em] text-white/90 text-lg sm:text-2xl frame:text-[30px] frame:leading-none">There are lines that one should never cross</p>
            <p className="mt-3 frame:mt-[42px] font-display font-medium tracking-[-0.03em] text-2xl sm:text-3xl frame:text-[54px] leading-snug frame:leading-[58px]">
              At DO-XX Studio, we tamper lines. In fact, we'd like to <span className="text-lime-brand">own</span> those lines
            </p>
          </div>
          <div className="flex justify-center frame:block frame:absolute frame:left-[868px] frame:top-[212px]">
            <img src="/assets/mascot-smile.png" alt="" loading="lazy" className="w-40 sm:w-64 frame:w-[331px] frame:-translate-x-[30px] frame:-translate-y-[123px] frame:rotate-[13deg] drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
