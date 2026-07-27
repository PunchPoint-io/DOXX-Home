const COUNTRIES = [
  { flag: 'sg', name: 'Singapore' },
  { flag: 'my', name: 'Malaysia' },
  { flag: 'th', name: 'Thailand' },
  { flag: 'ph', name: 'Philippines' },
  { flag: 'tw', name: 'Taiwan' },
  { flag: 'au', name: 'Australia' },
  { flag: 'nz', name: 'New Zealand' },
  { flag: 'jp', name: 'Japan' },
]

// 75 partner logos exported from the design source, dealt into five rows that
// scroll independently — the marquee treatment the client asked for.
const LOGOS = Array.from({ length: 75 }, (_, i) => `/assets/partners/p${String(i).padStart(2, '0')}.png`)
const ROWS = [0, 1, 2, 3, 4].map((r) => LOGOS.filter((_, i) => i % 5 === r))
const DURATIONS = ['46s', '54s', '50s', '58s', '44s']

export default function ApacPartners() {
  return (
    <section className="relative bg-[#FCFCFC] border-b border-frame overflow-hidden">
      {/* dotted world map sits behind the country cards */}
      <img
        src="/assets/world-dots.png"
        alt=""
        aria-hidden
        className="hidden frame:block pointer-events-none absolute left-[310px] top-[59px] w-[1110px] opacity-[0.14]"
      />
      <div className="relative border-b border-frame pb-3.5 frame:pb-0">
        <span
          className="inline-block bg-violet-brand text-white text-lg frame:text-[19px] font-semibold pl-7 frame:pl-[60px] pr-12 frame:pr-[80px] py-5 frame:py-0 frame:h-[92px] frame:leading-[92px] frame:min-w-[319px]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)' }}
        >
          Global presence
        </span>
      </div>

      <div className="relative pl-6 frame:pl-[60px] frame:pr-[20px] grid frame:grid-cols-[1fr_804px] gap-6 frame:gap-0 items-start">
        <h2 className="mt-8 frame:mt-[92px] font-display font-extrabold [font-stretch:87%] text-3xl sm:text-4xl frame:text-[60px] leading-[1.15] frame:leading-[58px]">
          <span className="whitespace-nowrap">More than <span className="text-grass">500+</span></span><br />
          <span className="whitespace-nowrap">partnering brand</span><br />
          <span className="whitespace-nowrap">outlets across</span><br />
          <span className="text-grass whitespace-nowrap">Asia Pacific</span>
        </h2>

        <div className="relative grid grid-cols-2 gap-3 frame:gap-x-[12px] frame:gap-y-[14px] frame:pt-[42px]">
          {COUNTRIES.map((c) => (
            <div
              key={c.flag}
              className="flex items-center gap-4 frame:gap-[22px] rounded-[10px] bg-white/95 ring-1 ring-black/[0.06] shadow-[0_2px_10px_-4px_rgba(30,20,60,0.12)] px-4 frame:px-[26px] py-3 frame:py-0 frame:h-[107px]"
            >
              <img src={`/assets/flag-${c.flag}.png`} alt="" loading="lazy" className="w-9 h-9 frame:w-[52px] frame:h-[52px] shrink-0" />
              <span className="font-semibold text-ink text-sm frame:text-[21px]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Partner logo rows — the sliding carousel replaces the flattened grid. */}
      <div className="relative mt-8 frame:mt-[54px] flex flex-col gap-2 frame:gap-[9px]">
        {ROWS.map((row, r) => (
          <div key={r} className="overflow-hidden">
            <div
              className="cb-marquee flex items-center w-max"
              style={{ animationDuration: DURATIONS[r], animationDirection: r % 2 ? 'reverse' : 'normal' }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center shrink-0">
                  {row.map((src) => (
                    <img key={src} src={src} alt="" aria-hidden loading="lazy" className="h-14 frame:h-[68px] w-auto object-contain px-4 frame:px-[4px]" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-7 frame:mt-[32px] mb-10 frame:mb-[36px] pr-6 frame:pr-[60px] text-right text-violet-brand font-semibold text-[17px]">And many more!</p>
    </section>
  )
}
