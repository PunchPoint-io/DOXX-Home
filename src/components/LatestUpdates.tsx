import SliderImport from 'react-slick'
import type { Settings } from 'react-slick'

// react-slick ships as CJS; under Vite's esbuild interop the default can arrive
// wrapped as { default: Slider }. Unwrap so <Slider> is always the component.
const Slider = ((SliderImport as unknown as { default?: typeof SliderImport })
  .default ?? SliderImport) as typeof SliderImport

type Update = {
  logo: string
  bg: string
  logoClass: string
  category: string
  text: string
  date: string
  border?: boolean
}

const updates: Update[] = [
  { logo: 'logo-forest.png', bg: '#14241f', logoClass: 'max-h-24', category: 'Forest Darts Cafe', text: 'Transform a casual hobby into a competitive passion with the right community support.', date: '2 January 2026' },
  { logo: 'logo-sauna.png', bg: '#5a4632', logoClass: 'max-h-24', category: 'Sauna Bath House', text: "Finding a moment of stillness in the heart of Singapore's busiest district has never been more accessible.", date: '2 January 2026' },
  { logo: 'logo-curry.png', bg: '#f4efe6', logoClass: 'max-h-28', category: 'Hong Lim Curry Puff', text: 'Finding the perfect balance between traditional snacks and a modern retail experience has never been more rewarding.', date: '2 January 2026' },
  { logo: 'logo-tr.png', bg: '#ffffff', logoClass: 'max-h-28', category: 'TIR', text: 'Satisfy your cravings for authentic Indian Muslim cuisine at any hour of the day.', date: '2 January 2026', border: true },
]

type ArrowProps = { dir: 'prev' | 'next'; className?: string; onClick?: () => void }

function Arrow({ dir, className, onClick }: ArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className={`${className ?? ''} !flex items-center justify-center rounded-full bg-violet-brand text-white shadow-lg shadow-violet-brand/30 hover:bg-violet-soft transition`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  )
}

export default function LatestUpdates() {
  const settings: Settings = {
    dots: true,
    dotsClass: 'lu-dots',
    customPaging: () => <span />,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  }

  return (
    <section className="bg-[#f6f4fb]">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight flex items-center gap-3">
            <img src="/assets/ig-glyph.png" alt="" className="w-9 h-9" /> Latest Updates
          </h2>
          <p className="text-sm text-ink/60">
            Follow us
            <a href="#" className="ml-2 inline-block rounded-full ring-1 ring-violet-brand/40 text-violet-brand font-semibold px-4 py-1.5">@doxx_studio</a>
          </p>
        </div>

        <div className="lu-slider relative mt-10 px-1 sm:px-6">
          <Slider {...settings}>
            {updates.map((u) => (
              <div key={u.category}>
                <article className="h-full rounded-2xl bg-white ring-1 ring-black/5 overflow-hidden shadow-sm flex flex-col">
                  <div className={`h-44 flex items-center justify-center p-6 ${u.border ? 'border-b border-black/5' : ''}`} style={{ background: u.bg }}>
                    <img src={`/assets/${u.logo}`} alt={u.category} className={`${u.logoClass} object-contain`} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="self-start inline-block text-[11px] font-semibold text-white bg-violet-brand rounded px-2 py-1">{u.category}</span>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">{u.text}</p>
                    <div className="mt-auto pt-4 flex items-center justify-between text-xs">
                      <a href="#" className="font-semibold text-violet-brand">View post →</a>
                      <span className="text-ink/40">{u.date}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
