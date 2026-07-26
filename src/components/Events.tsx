import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'

type EventSlide = { img: string; title: string; date: string; text: string }

// Slide content + galleries pulled from the DOXX Figma (per-event IMAGES-* frames).
const events: EventSlide[] = [
  {
    img: 'ev-ledger.png',
    title: 'Ledger\n@ TOKEN2049',
    date: '1-2 October 2025',
    text: 'Designed and delivered a premium exhibition booth for Ledger at TOKEN2049 Singapore, creating an engaging environment through modern spatial design, interactive product experiences, and bold visual branding.',
  },
  {
    img: 'ev-rialo.png',
    title: 'Rialo by Subzero Labs\n@ TOKEN2049',
    date: '1-2 October 2025',
    text: 'An immersive booth experience for Rialo by Subzero Labs at TOKEN2049 Singapore, blending contemporary spatial design, illuminated branding, and interactive touchpoints to maximize visibility and audience engagement.',
  },
  {
    img: 'ev-continuity.png',
    title: 'Continuity, Fluidity\nand Unity',
    date: '8 October 2025',
    text: 'A thoughtfully curated private art exhibition at Artspace@Helutrans, combining refined spatial design, immersive storytelling, and gallery experiences to celebrate contemporary art and creative dialogue.',
  },
  {
    img: 'ev-biochar.png',
    title: 'The Biochar Effect',
    date: '20 May 2026',
    text: 'A compelling premiere experience for The Biochar Effect Singapore at the ArtScience Museum, combining creative spatial design, immersive branding, and sustainable storytelling to spotlight the future of carbon innovation.',
  },
  {
    img: 'ev-redefining.png',
    title: '(Re)Defining\nSingapore',
    date: '10 April 2026',
    text: 'From concept to execution, we delivered the launch of (Re)Defining Singapore at the National Gallery Singapore, creating an elegant event experience through immersive spatial design, premium branding, and seamless production.',
  },
  {
    img: 'ev-sandhouse.png',
    title: 'SANDHOUSE\n@ TOKEN2049',
    date: '1 October 2025',
    text: 'A premium Web3 community experience executed for SandHouse by The Sandbox at TOKEN2049 Singapore — delivering seamless production, immersive brand environments, and meaningful networking experiences.',
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
    <section className="bg-white border-b border-frame px-4 sm:px-6 lg:px-10 py-4 lg:py-6">
      <div className="rounded-[28px] lg:rounded-[40px] bg-[#141414] text-white p-7 lg:p-12 overflow-hidden" style={{ backgroundImage: 'linear-gradient(115deg, #2e2e2e 0%, #191919 35%, #141414 100%)' }}>
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="font-display font-medium tracking-[-0.045em] text-3xl sm:text-4xl lg:text-[3.75rem] lg:leading-none">Events Management</h2>
            <p className="mt-2 text-lime-brand font-medium text-sm">We design and deliver immersive brand experiences that demand attention.</p>
          </div>
          <a href="#contact" className="lime-btn rounded-full text-sm font-bold px-6 py-3">Learn More</a>
        </div>

        <div className="panel-slider mt-8 min-w-0">
          <Slider ref={sliderRef} {...settings}>
            {events.map((e) => (
              <div key={e.img}>
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 items-center">
                  <img src={`/assets/${e.img}`} alt={`DO-XX event — ${e.title.replace('\n', ' ')}`} loading="lazy" className="w-full aspect-[1400/916] object-cover" />
                  <div>
                    <h3 className="font-display tracking-[-0.03em] text-2xl lg:text-[2.5rem] font-semibold leading-tight lg:leading-none whitespace-pre-line">{e.title}</h3>
                    <p className="mt-2 text-lime-brand font-bold text-sm lg:text-lg">{e.date}</p>
                    <p className="mt-4 font-light text-white/75 leading-relaxed text-sm">{e.text}</p>
                    <div className="mt-7 flex items-center gap-3">
                      <button
                        type="button"
                        disabled={idx === 0}
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="rounded-full text-sm font-semibold px-6 py-2.5 ring-1 ring-white/40 text-white transition hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        disabled={idx === last}
                        onClick={() => sliderRef.current?.slickNext()}
                        className={`rounded-full text-sm font-semibold px-7 py-2.5 transition ${idx === last ? 'bg-[#3a3a3a] text-white/45 cursor-default' : 'lime-btn hover:brightness-105'}`}
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
