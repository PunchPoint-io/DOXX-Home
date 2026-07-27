import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'
import Pagination from './Pagination'

type EventSlide = { img: string; title: string; date: string; text: string }

const events: EventSlide[] = [
  {
    img: 'events-collage.jpg',
    title: 'Ledger\n@ TOKEN2049',
    date: '1-2 October 2025',
    text: 'Designed and delivered a premium exhibition booth for Ledger at TOKEN2049 Singapore, creating an engaging environment through modern spatial design, interactive product experiences, and bold visual branding.',
  },
  {
    img: 'events.png',
    title: 'Ledger\n@ TOKEN2049',
    date: 'Booth highlights',
    text: 'Interactive product showcases, an integrated lounge, and a bold spatial identity brought the Ledger brand to life on the show floor across both event days.',
  },
]

export default function Events() {
  const sliderRef = useRef<SliderInstance>(null)
  const [idx, setIdx] = useState(0)

  const settings: Settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current, next) => setIdx(next),
  }

  return (
    <section className="bg-white border-b border-frame">
      <div
        className="text-white p-7 frame:p-0 frame:pt-[42px] frame:pb-[64px] overflow-hidden"
        style={{
          background:
            'radial-gradient(58% 70% at 6% 4%, #3c3c3c 0%, rgba(30,30,30,0) 62%),' +
            'radial-gradient(45% 55% at 96% 100%, #262626 0%, rgba(20,20,20,0) 70%), #151515',
        }}
      >
        <div className="flex items-start justify-between flex-wrap gap-4 px-0 frame:px-[60px]">
          <div>
            <h2 className="font-display font-extrabold [font-stretch:87%] text-3xl sm:text-4xl frame:text-[60px] frame:leading-none">Events Management</h2>
            <p className="mt-2 frame:mt-[16px] text-lime-brand font-medium text-sm frame:text-[19px]">We design and deliver immersive brand experiences that demand attention.</p>
          </div>
          <a
            href="#contact"
            className="lime-btn inline-flex items-center justify-center rounded-full text-sm frame:text-[17px] font-bold px-6 py-3 frame:p-0 frame:h-[50px] frame:w-[219px]"
          >
            Learn More
          </a>
        </div>

        <div className="panel-slider mt-8 frame:mt-[62px] min-w-0">
          <Slider ref={sliderRef} {...settings}>
            {events.map((e) => (
              <div key={e.img}>
                <div className="grid frame:grid-cols-[1056px_1fr] gap-8 frame:gap-0 items-start">
                  <img
                    src={`/assets/${e.img}`}
                    alt={`DO-XX exhibition booth — ${e.title.replace('\n', ' ')}`}
                    loading="lazy"
                    className="w-full aspect-[1800/1192] object-cover"
                  />
                  <div className="frame:pl-[26px] frame:pr-[60px]">
                    <h3 className="font-display [font-stretch:87%] text-2xl frame:text-[40px] font-extrabold leading-tight frame:leading-[42px] whitespace-pre-line">{e.title}</h3>
                    <p className="mt-2 frame:mt-[18px] text-lime-brand font-bold text-sm frame:text-[20px]">{e.date}</p>
                    <p className="mt-4 frame:mt-[26px] text-white/70 leading-relaxed text-sm frame:text-[17px] frame:leading-[26px]">{e.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mt-8 frame:mt-[40px] px-0 frame:px-[60px]">
          <Pagination
            count={events.length}
            index={idx}
            onPrev={() => sliderRef.current?.slickPrev()}
            onNext={() => sliderRef.current?.slickNext()}
            onGo={(i) => sliderRef.current?.slickGoTo(i)}
            finite
            tone="dark"
            label="event"
          />
        </div>
      </div>
    </section>
  )
}
