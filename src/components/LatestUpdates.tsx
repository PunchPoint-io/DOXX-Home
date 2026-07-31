import { useEffect, useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'
import Pagination from './Pagination'

type Update = {
  logo: string
  category: string
  text: string
  date: string
  cover?: boolean
}

const updates: Update[] = [
  { logo: 'logo-forest.png', cover: true, category: 'Forest Darts Cafe', text: 'Transform a casual hobby into a competitive passion with the right community support.', date: '2 January 2026' },
  { logo: 'logo-sauna.png', category: 'Sauna Bath House', text: "Finding a moment of stillness in the heart of Singapore's busiest district has never been more accessible.", date: '2 January 2026' },
  { logo: 'logo-curry.png', category: 'Hong Lim Curry Puff', text: 'Finding the perfect balance between traditional snacks and a modern retail experience has never been more sea...', date: '2 January 2026' },
  { logo: 'logo-tr.png', category: "Jalan Kayu's TR", text: 'Satisfy your cravings for authentic Indian Muslim cuisine at any hour of the day or night.', date: '2 January 2026' },
  { logo: 'logo-ledger-t.png', cover: true, category: 'Ledger', text: 'A modern space where great coffee meets thoughtful design and a welcoming everyday community.', date: '2 January 2026' },
  { logo: 'logo-springleaf.png', category: 'Springleaf', text: 'Bringing the neighbourhood together with fresh flavours and a warm, welcoming atmosphere.', date: '2 January 2026' },
]

// react-slick's `responsive` config breaks under React StrictMode (media
// handlers are torn down by the double mount), so drive slidesToShow manually.
function slidesForWidth() {
  const w = window.innerWidth
  return w < 640 ? 1 : w < 1024 ? 2 : w < 1280 ? 3 : 4
}

export default function LatestUpdates() {
  const sliderRef = useRef<SliderInstance>(null)
  const [slidesToShow, setSlidesToShow] = useState(slidesForWidth)
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const onResize = () => setSlidesToShow(slidesForWidth())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    beforeChange: (_current, next) => setIdx(next),
  }

  return (
    <section className="bg-white border-b border-frame">
      <div className="px-6 frame:px-[20px] py-16 frame:pt-[68px] frame:pb-[52px]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="font-display font-extrabold [font-stretch:87%] text-3xl sm:text-[2.5rem] frame:text-[44px] leading-none flex items-center gap-3 frame:gap-[18px]">
            <img src="/assets/ig-glyph.png" alt="" className="w-10 h-10 frame:w-[70px] frame:h-[70px]" /> Latest Updates
          </h2>
          <div className="flex items-center gap-3 frame:gap-[22px]">
            <span className="text-base frame:text-[20px] text-ink/70">Follow us</span>
            <a
              href="https://www.instagram.com/doxx_studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full ring-1 ring-violet-brand/60 text-violet-brand font-semibold px-5 py-2 frame:p-0 frame:h-[50px] frame:w-[168px] frame:text-[17px] hover:bg-violet-brand hover:text-white transition"
            >
              doxx_studio
            </a>
          </div>
        </div>

        <div className="lu-slider relative mt-10 frame:mt-[37px]">
          <Slider ref={sliderRef} {...settings}>
            {updates.map((u) => (
              <div key={u.category}>
                <article className="h-full rounded-2xl frame:rounded-[14px] bg-[#F6F6FB] ring-1 ring-black/[0.07] overflow-hidden flex flex-col">
                  {/* Cover artwork fills the frame; its own label is baked in, so no tag
                      element here -- rendering one produced the doubled "Forest Darts Cafe". */}
                  <div className={`relative aspect-square frame:aspect-[335/420] flex items-center justify-center ${u.cover ? 'lu-cover' : 'bg-white p-8'}`}>
                    <img
                      src={`/assets/${u.logo}`}
                      alt={u.category}
                      loading="lazy"
                      className={u.cover ? 'w-full h-full object-cover' : 'max-h-full max-w-full object-contain'}
                    />
                  </div>
                  <div className="px-5 frame:px-[20px] pt-5 frame:pt-[17px] pb-5 frame:pb-[16px] flex flex-col flex-1 border-t border-black/[0.06]">
                    <p className="text-[0.95rem] frame:text-[14px] text-ink/80 leading-relaxed frame:leading-[19.5px]">{u.text}</p>
                    <div className="mt-auto pt-6 frame:pt-[26px] flex items-center justify-between text-sm frame:text-[12px]">
                      <span className="text-ink/40">{u.date}</span>
                      <a href="https://www.instagram.com/doxx_studio/" target="_blank" rel="noopener noreferrer" className="font-semibold text-violet-brand hover:underline frame:text-[13px]">View post</a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>

          <div className="mt-8 frame:mt-[43px]">
            <Pagination
              count={updates.length}
              index={idx}
              onPrev={() => sliderRef.current?.slickPrev()}
              onNext={() => sliderRef.current?.slickNext()}
              onGo={(i) => sliderRef.current?.slickGoTo(i)}
              label="update"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
