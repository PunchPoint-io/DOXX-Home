import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'
import Pagination from './Pagination'
import InquiryModal from './InquiryModal'

type Brand = { logo: string; name: string; text: string; shots: string }

// `shots` is the per-slide photo mosaic, so image and copy advance together.
const brands: Brand[] = [
  {
    logo: 'logo-springleaf2.png',
    name: 'Springleaf\nPrata Place',
    shots: 'rb-springleaf.jpg',
    text: 'Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.',
  },
  {
    // Brand logo and group label are intentionally different (Q3 2026 Retail
    // Deck p8/p17/p18/p29). Do not "correct" the pairing.
    logo: 'logo-yewkee.png',
    name: 'Chicha\nSan Chen',
    shots: 'rb-yewkee.jpg',
    text: 'Chicha San Chen is a premium Taiwanese tea brand serving freshly brewed, made-to-order teas, bringing authentic tea culture and a modern in-store experience to outlets across Singapore.',
  },
  {
    logo: 'logo-sushi.png',
    name: 'Sushi Express',
    shots: 'rb-sushi.jpg',
    text: 'One of the biggest conveyor belt sushi brands in Asia, offering more than 80 different variations of sushi from $1.50++ per plate — consistently providing quality and innovative products at competitive prices.',
  },
  {
    logo: 'logo-jinjja.png',
    name: 'Jinjja Chicken',
    shots: 'rb-jinjja.jpg',
    text: 'JINJJA Chicken is a halal-certified Korean fast-casual brand, best known for its signature Korean Fried Chicken and Jjajangmyeon. Inspired by South Korea’s street food culture, with outlets across Singapore, Malaysia, and Indonesia.',
  },
  {
    logo: 'logo-hainan.png',
    name: 'The Hainan\nStory',
    shots: 'rb-hainan.jpg',
    text: 'The Hainan Story is a Singapore heritage dining brand renowned for its authentic Hainanese cuisine — signature Hainanese Chicken Rice, Kaya Toast, and nostalgic local flavors with a modern take on the city’s rich culinary heritage.',
  },
  {
    logo: 'logo-koufu.png',
    name: 'Koufu Group',
    shots: 'rb-koufu.jpg',
    text: 'Koufu Group is one of Singapore’s leading F&B groups, operating an extensive network of food courts, coffee shops, and restaurants. Since 2002 it has built a trusted portfolio of dining brands serving millions of customers.',
  },
  {
    logo: 'logo-beechoo.png',
    name: 'Bee Choo Origin',
    shots: 'rb-beechoo.jpg',
    text: 'Bee Choo Origin is a trusted herbal hair and scalp care brand, specializing in natural treatments for hair loss and scalp health. Since 2000 the brand has expanded across Asia through its signature herbal solutions.',
  },
  {
    logo: 'logo-westernunion.png',
    name: 'Western Union',
    shots: 'rb-westernunion.jpg',
    text: 'Western Union is a global leader in cross-border money transfers and payment services, connecting customers across more than 200 countries and territories through secure, fast, and reliable financial solutions.',
  },
]

export default function RetailBrands() {
  const sliderRef = useRef<SliderInstance>(null)
  const [idx, setIdx] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

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
              <h2 className="font-display font-medium tracking-[-0.045em] text-3xl sm:text-4xl frame:text-[58px] leading-[0.95] frame:leading-none text-ink">Retail Brands</h2>
              <p className="mt-2.5 frame:mt-[19px] text-violet-brand font-semibold text-base frame:text-[19px]">Designed to attract attention. Built to drive engagement and sales.</p>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="shrink-0 mt-1 frame:mt-0 inline-flex items-center justify-center rounded-full bg-violet-brand text-white font-semibold text-sm frame:text-[17px] px-8 py-3 frame:p-0 frame:h-[48px] frame:w-[219px] hover:bg-violet-soft transition"
            >
              Learn More
            </button>
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
                      <h3 className="mt-4 frame:mt-[30px] font-display font-semibold tracking-[-0.03em] text-[2.15rem] frame:text-[40px] leading-none frame:leading-[42px] text-ink whitespace-pre-line">{b.name}</h3>
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
          <InquiryModal open={modalOpen} section="Retail Brands" onClose={() => setModalOpen(false)} />
</section>
  )
}
