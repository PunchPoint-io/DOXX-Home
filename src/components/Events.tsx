import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'

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
  const last = events.length - 1

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
      <div className="bg-[#141414] text-white p-7 lg:p-12 overflow-hidden" style={{ backgroundImage: 'linear-gradient(115deg, #2e2e2e 0%, #191919 35%, #141414 100%)' }}>
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">Events Management</h2>
            <p className="mt-2 text-lime-brand font-medium text-sm">We design and deliver immersive brand experiences that demand attention.</p>
          </div>
          <a href="#" className="lime-btn rounded-full text-sm font-bold px-6 py-3">Learn More</a>
        </div>

        <div className="panel-slider mt-8 min-w-0">
          <Slider ref={sliderRef} {...settings}>
            {events.map((e) => (
              <div key={e.img}>
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                  <img src={`/assets/${e.img}`} alt={`DO-XX exhibition booth \u2014 ${e.title.replace('\n', ' ')}`} className="w-full object-cover" />
                  <div>
                    <h3 className="text-2xl font-extrabold leading-tight whitespace-pre-line">{e.title}</h3>
                    <p className="mt-2 text-lime-brand font-bold text-sm">{e.date}</p>
                    <p className="mt-4 text-white/70 leading-relaxed text-sm">{e.text}</p>
                    <div className="mt-7 flex items-center gap-3">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => sliderRef.current?.slickPrev()}
                        className={`rounded-full text-sm font-semibold px-6 py-2.5 transition ${idx === 0 ? 'bg-[#3a3a3a] text-white/45 cursor-default' : 'ring-1 ring-white/35 text-white hover:bg-white/10'}`}
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        disabled={idx === last}
                        onClick={() => sliderRef.current?.slickNext()}
                        className={`rounded-full text-sm font-semibold px-7 py-2.5 transition ${idx === last ? 'bg-[#3a3a3a] text-white/45 cursor-default' : 'ring-1 ring-lime-brand text-white hover:bg-lime-brand/10'}`}
                      >
                        Next
                      </button>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5">
                      {events.map((ev, i) => (
                        <button
                          key={ev.img}
                          type="button"
                          aria-label={`Go to slide ${i + 1}`}
                          onClick={() => sliderRef.current?.slickGoTo(i)}
                          className={`h-1 rounded-full transition-all duration-300 ${i === idx ? 'w-6 bg-lime-brand' : 'w-5 bg-white/20 hover:bg-white/35'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
