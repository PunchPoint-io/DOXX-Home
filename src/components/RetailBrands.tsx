import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'
import Pagination from './Pagination'

type Brand = { logo: string; name: string; text: string; shots: string }

// `shots` is the per-slide photo mosaic. Only Springleaf ships a mosaic in the
// design source; the other brands fall back to it until their own exports land.
const brands: Brand[] = [
  {
    logo: 'logo-springleaf.png',
    name: 'Springleaf\nPrata Place',
    shots: 'retail.png',
    text: 'Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.',
  },
  {
    logo: 'logo-forest.png',
    name: 'Forest\nDarts Cafe',
    shots: 'retail.png',
    text: 'A community-driven darts cafe where casual hobby meets competitive passion. Digital displays keep leagues, menus, and events in sync across every corner of the venue.',
  },
  {
    logo: 'logo-sauna.png',
    name: 'Sauna\nBath House',
    shots: 'retail.png',
    text: 'A moment of stillness in the heart of Singapore’s busiest district. Calm, curated screen content guides guests through rituals, bookings, and wellness programmes.',
  },
  {
    logo: 'logo-curry.png',
    name: 'Hong Lim\nCurry Puff',
    shots: 'retail.png',
    text: 'Balancing traditional snacks with a modern retail experience. Menu boards and promotions update across outlets in one click, keeping heritage flavours front and centre.',
  },
  {
    logo: 'logo-tr.png',
    name: "Jalan Kayu's\nTR",
    shots: 'retail.png',
    text: 'Authentic Indian Muslim cuisine at any hour of the day or night. Round-the-clock digital menus and offers match the kitchen’s always-on service.',
  },
  {
    logo: 'logo-ledger.png',
    name: 'Ledger\nConcept Store',
    shots: 'retail.png',
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
    <section className="bg-[#FCFCFC] overflow-hidden border-b border-frame">
      <div className="px-5 frame:px-0 py-10 frame:pt-[68px] frame:pb-[15px]">
        <div className="bg-white rounded-2xl frame:rounded-[14px] ring-1 ring-black/[0.07] overflow-hidden pt-9 frame:pt-[59px] pb-8 frame:pb-[32px]">
          <div className="flex items-start justify-between gap-6 px-6 frame:px-[60px]">
            <div>
              <h2 className="font-display font-extrabold [font-stretch:87%] text-3xl sm:text-4xl frame:text-[60px] leading-[0.95] frame:leading-none text-ink">Retail Brands</h2>
              <p className="mt-2.5 frame:mt-[19px] text-violet-brand font-semibold text-base frame:text-[19px]">Designed to attract attention. Built to drive engagement and sales.</p>
            </div>
            <a
              href="#contact"
              className="shrink-0 mt-1 frame:mt-0 inline-flex items-center justify-center rounded-full bg-violet-brand text-white font-semibold text-sm frame:text-[17px] px-8 py-3 frame:p-0 frame:h-[48px] frame:w-[219px] hover:bg-violet-soft transition"
            >
              Learn More
            </a>
          </div>

          {/* The mosaic lives inside the slider so image and copy change together. */}
          <div className="panel-slider mt-7 frame:mt-[38px] min-w-0">
            <Slider ref={sliderRef} {...settings}>
              {brands.map((b) => (
                <div key={b.logo}>
                  <div className="grid frame:grid-cols-[1053px_1fr] items-stretch">
                    <img src={`/assets/${b.shots}`} alt={`DO-XX displays at ${b.name.replace('\n', ' ')}`} loading="lazy" className="w-full self-start select-none" />
                    <div className="px-6 frame:pl-[34px] frame:pr-[60px] flex flex-col min-w-0">
                      <img src={`/assets/${b.logo}`} alt="" loading="lazy" className="h-[4.4rem] frame:h-[72px] w-auto object-contain object-left" />
                      <div className="mt-3.5 frame:mt-[26px] border-t border-black/10" />
                      <h3 className="mt-4 frame:mt-[30px] font-display [font-stretch:87%] text-[2.15rem] frame:text-[40px] leading-none frame:leading-[42px] font-extrabold text-ink whitespace-pre-line">{b.name}</h3>
                      <p className="mt-3.5 frame:mt-[24px] text-ink/70 leading-[1.55] frame:leading-[26px] text-[0.98rem] frame:text-[17px]">{b.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <div className="mt-8 frame:mt-[36px] px-6 frame:px-[60px]">
            <Pagination
              count={brands.length}
              index={idx}
              onPrev={() => sliderRef.current?.slickPrev()}
              onNext={() => sliderRef.current?.slickNext()}
              onGo={(i) => sliderRef.current?.slickGoTo(i)}
              label="brand"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
