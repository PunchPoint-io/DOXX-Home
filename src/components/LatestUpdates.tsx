import Slider from './slick'
import type { Settings } from './slick'

type Update = {
  logo: string
  category: string
  text: string
  date: string
  cover?: boolean
  tag?: boolean
}

const updates: Update[] = [
  { logo: 'logo-forest-t.png', cover: true, tag: true, category: 'Forest Darts Cafe', text: 'Transform a casual hobby into a competitive passion with the right community support.', date: '2 January 2026' },
  { logo: 'logo-sauna.png', category: 'Sauna Bath House', text: "Finding a moment of stillness in the heart of Singapore's busiest district has never been more accessible.", date: '2 January 2026' },
  { logo: 'logo-curry.png', category: 'Hong Lim Curry Puff', text: 'Finding the perfect balance between traditional snacks and a modern retail experience has never been more sea...', date: '2 January 2026' },
  { logo: 'logo-tr.png', category: "Jalan Kayu's TR", text: 'Satisfy your cravings for authentic Indian Muslim cuisine at any hour of the day or night.', date: '2 January 2026' },
  { logo: 'logo-ledger-t.png', cover: true, category: 'Ledger', text: 'A modern space where great coffee meets thoughtful design and a welcoming everyday community.', date: '2 January 2026' },
  { logo: 'logo-springleaf.png', category: 'Springleaf', text: 'Bringing the neighbourhood together with fresh flavours and a warm, welcoming atmosphere.', date: '2 January 2026' },
]

type ArrowProps = { dir: 'prev' | 'next'; className?: string; onClick?: () => void }

function Arrow({ dir, className, onClick }: ArrowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}
      className={`${className ?? ''} !flex items-center justify-center text-violet-brand hover:text-violet-soft transition`}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <Arrow dir="prev" />,
    nextArrow: <Arrow dir="next" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  }

  return (
    <section className="bg-white border-b border-frame">
      <div className="px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-display font-extrabold text-3xl sm:text-[2.5rem] tracking-tight flex items-center gap-3">
            <img src="/assets/ig-glyph.png" alt="" className="w-10 h-10" /> Latest Updates
          </h2>
          <div className="flex items-center gap-3">
            <span className="text-base text-ink/70">Follow us</span>
            <a href="#" className="inline-block rounded-full ring-1 ring-violet-brand/50 text-violet-brand font-semibold px-5 py-2 hover:bg-violet-brand hover:text-white transition">doxx_studio</a>
          </div>
        </div>

        <div className="lu-slider relative mt-10">
          <Slider {...settings}>
            {updates.map((u) => (
              <div key={u.category}>
                <article className="h-full rounded-2xl bg-white ring-1 ring-black/[0.07] overflow-hidden shadow-sm flex flex-col">
                  <div className={`relative aspect-square flex items-center justify-center p-8 ${u.cover ? 'lu-cover' : 'bg-white'}`}>
                    <img src={`/assets/${u.logo}`} alt={u.category} className="max-h-full max-w-full object-contain" />
                    {u.tag && (
                      <span className="absolute left-0 bottom-5 bg-violet-brand text-white text-[13px] font-semibold pl-4 pr-7 py-1.5 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">{u.category}</span>
                    )}
                  </div>
                  <div className="px-5 pt-5 pb-5 flex flex-col flex-1 border-t border-black/[0.06]">
                    <p className="text-[0.95rem] text-ink/80 leading-relaxed">{u.text}</p>
                    <div className="mt-auto pt-6 flex items-center justify-between text-sm">
                      <span className="text-ink/40">{u.date}</span>
                      <a href="#" className="font-semibold text-violet-brand hover:underline">View post</a>
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
