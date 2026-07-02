import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'

type Brand = { logo: string; name: string; text: string }

const brands: Brand[] = [
  {
    logo: 'logo-springleaf.png',
    name: 'Springleaf\nPrata Place',
    text: 'Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.',
  },
  {
    logo: 'logo-forest.png',
    name: 'Forest\nDarts Cafe',
    text: 'A community-driven darts cafe where casual hobby meets competitive passion. Digital displays keep leagues, menus, and events in sync across every corner of the venue.',
  },
  {
    logo: 'logo-sauna.png',
    name: 'Sauna\nBath House',
    text: 'A moment of stillness in the heart of Singapore\u2019s busiest district. Calm, curated screen content guides guests through rituals, bookings, and wellness programmes.',
  },
  {
    logo: 'logo-curry.png',
    name: 'Hong Lim\nCurry Puff',
    text: 'Balancing traditional snacks with a modern retail experience. Menu boards and promotions update across outlets in one click, keeping heritage flavours front and centre.',
  },
  {
    logo: 'logo-tr.png',
    name: "Jalan Kayu's\nTR",
    text: 'Authentic Indian Muslim cuisine at any hour of the day or night. Round-the-clock digital menus and offers match the kitchen\u2019s always-on service.',
  },
  {
    logo: 'logo-ledger.png',
    name: 'Ledger\nConcept Store',
    text: 'A modern space where great coffee meets thoughtful design. In-store screens pair product storytelling with a welcoming everyday community.',
  },
]

export default function RetailBrands() {
  const sliderRef = useRef<SliderInstance>(null)
  const [idx, setIdx] = useState(0)

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current, next) => setIdx(next),
  }

  return (
    <section className="bg-lav overflow-hidden border-b border-frame">
      <div className="px-5 lg:px-8 py-10 lg:py-14">
        <div className="bg-white rounded-2xl ring-1 ring-black/[0.07] overflow-hidden pt-9 pb-8">
          <div className="flex items-start justify-between gap-6 px-6 lg:px-[3.5rem]">
            <div>
              <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-[0.95] tracking-[-0.03em] text-ink">Retail Brands</h2>
              <p className="mt-2.5 text-violet-brand font-semibold text-base">Designed to attract attention. Built to drive engagement and sales.</p>
            </div>
            <a href="#" className="shrink-0 mt-1 rounded-full bg-violet-brand text-white font-semibold text-sm px-8 py-3 hover:bg-violet-soft transition">Learn More</a>
          </div>

          <div className="mt-7 grid lg:grid-cols-[2.855fr_1fr] items-stretch">
            <img src="/assets/retail.png" alt="DO-XX displays in retail outlets" className="w-full self-start select-none" />
            <div className="px-6 lg:pl-[30px] lg:pr-[2.4rem] flex flex-col min-w-0">
              <div className="panel-slider flex-1 min-w-0">
                <Slider ref={sliderRef} {...settings}>
                  {brands.map((b) => (
                    <div key={b.logo}>
                      <img src={`/assets/${b.logo}`} alt="" className="h-[4.4rem] w-auto object-contain object-left" />
                      <div className="mt-3.5 border-t border-black/10" />
                      <h3 className="mt-4 text-[2.15rem] leading-[1.06] font-extrabold tracking-tight text-ink whitespace-pre-line">{b.name}</h3>
                      <p className="mt-3.5 text-ink/70 leading-[1.55] text-[0.98rem]">{b.text}</p>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="mt-auto pt-8 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="rounded-full ring-1 ring-violet-brand text-violet-brand text-sm font-semibold px-6 py-2 hover:bg-violet-brand/5 transition"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="rounded-full ring-1 ring-violet-brand text-violet-brand text-sm font-semibold px-8 py-2 hover:bg-violet-brand/5 transition"
                >
                  Next
                </button>
              </div>
              <div className="mt-5 flex items-center gap-1.5">
                {brands.map((b, i) => (
                  <button
                    key={b.logo}
                    type="button"
                    aria-label={`Go to ${b.name.split('\n')[0]}`}
                    onClick={() => sliderRef.current?.slickGoTo(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-7 bg-grass' : 'w-5 bg-black/15 hover:bg-black/30'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
