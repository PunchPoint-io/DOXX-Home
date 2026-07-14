import { useRef, useState } from 'react'
import Slider from './slick'
import type { Settings, SliderInstance } from './slick'

type Brand = { collage: string; logo: string; name: string; text: string }

// Slide content + galleries pulled from the DOXX Figma (Section "Updated Website",
// per-brand IMAGES-* frames). Springleaf Prata Place leads the carousel to match
// the design's default slide; the remaining brands follow.
const brands: Brand[] = [
  {
    collage: 'rb-springleaf.png',
    logo: 'logo-springleaf2.png',
    name: 'Springleaf\nPrata Place',
    text: 'Founded in 2003, Springleaf Prata Place is a renowned halal Indian restaurant brand in Singapore, famous for the innovative prata creations such as Ultimate Murtabak, Murtaburger, and authentic South Indian cuisine.',
  },
  {
    // NOTE: Figma pairs a "Yew Kee Group" paragraph with Chicha San Chen logo +
    // photos. Logo/gallery (and the hero client bar) say Chicha San Chen, so we
    // use that. Client to confirm final copy for this slide.
    collage: 'rb-yewkee.png',
    logo: 'logo-yewkee.png',
    name: 'Chicha\nSan Chen',
    text: 'Chicha San Chen is a premium Taiwanese tea brand serving freshly brewed, made-to-order teas, bringing authentic tea culture and a modern in-store experience to outlets across Singapore.',
  },
  {
    collage: 'rb-sushi.png',
    logo: 'logo-sushi.png',
    name: 'Sushi Express',
    text: 'One of the biggest conveyor belt sushi brands in Asia, offering more than 80 different variations of sushi from $1.50++ per plate — consistently providing quality and innovative products at competitive prices.',
  },
  {
    collage: 'rb-jinjja.png',
    logo: 'logo-jinjja.png',
    name: 'Jinjja Chicken',
    text: 'JINJJA Chicken is a halal-certified Korean fast-casual brand, best known for its signature Korean Fried Chicken and Jjajangmyeon. Inspired by South Korea’s street food culture, with outlets across Singapore, Malaysia, and Indonesia.',
  },
  {
    collage: 'rb-hainan.png',
    logo: 'logo-hainan.png',
    name: 'The Hainan\nStory',
    text: 'The Hainan Story is a Singapore heritage dining brand renowned for its authentic Hainanese cuisine — signature Hainanese Chicken Rice, Kaya Toast, and nostalgic local flavors with a modern take on the city’s rich culinary heritage.',
  },
  {
    collage: 'rb-koufu.png',
    logo: 'logo-koufu.png',
    name: 'Koufu Group',
    text: 'Koufu Group is one of Singapore’s leading F&B groups, operating an extensive network of food courts, coffee shops, and restaurants. Since 2002 it has built a trusted portfolio of dining brands serving millions of customers.',
  },
  {
    collage: 'rb-beechoo.png',
    logo: 'logo-beechoo.png',
    name: 'Bee Choo Origin',
    text: 'Bee Choo Origin is a trusted herbal hair and scalp care brand, specializing in natural treatments for hair loss and scalp health. Since 2000 the brand has expanded across Asia through its signature herbal solutions.',
  },
  {
    collage: 'rb-westernunion.png',
    logo: 'logo-westernunion.png',
    name: 'Western Union',
    text: 'Western Union is a global leader in cross-border money transfers and payment services, connecting customers across more than 200 countries and territories through secure, fast, and reliable financial solutions.',
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
              <h2 className="font-display font-medium tracking-[-0.045em] text-3xl sm:text-4xl lg:text-[3.75rem] leading-[0.95] lg:leading-none text-ink">Retail Brands</h2>
              <p className="mt-2.5 text-violet-brand font-semibold text-base">Designed to attract attention. Built to drive engagement and sales.</p>
            </div>
            <a href="#contact" className="shrink-0 mt-1 rounded-full bg-violet-brand text-white font-semibold text-sm px-8 py-3 hover:bg-violet-soft transition">Learn More</a>
          </div>

          <div className="mt-7 grid lg:grid-cols-[2.855fr_1fr] items-stretch">
            <div className="px-6 lg:px-0 self-start">
              <img
                key={brands[idx].collage}
                src={`/assets/${brands[idx].collage}`}
                alt={`DO-XX displays at ${brands[idx].name.replace('\n', ' ')}`}
                className="w-full select-none rounded-lg lg:rounded-none"
              />
            </div>
            <div className="px-6 lg:pl-[30px] lg:pr-[2.4rem] flex flex-col min-w-0">
              <div className="panel-slider flex-1 min-w-0">
                <Slider ref={sliderRef} {...settings}>
                  {brands.map((b) => (
                    <div key={b.collage}>
                      <img src={`/assets/${b.logo}`} alt="" loading="lazy" className="h-[4.4rem] w-auto max-w-[15rem] object-contain object-left" />
                      <div className="mt-3.5 border-t border-black/10" />
                      <h3 className="mt-4 font-display tracking-[-0.03em] text-[2.15rem] lg:text-[2.5rem] leading-none font-semibold text-ink whitespace-pre-line">{b.name}</h3>
                      <p className="mt-3.5 font-light text-ink/70 leading-[1.6] text-base">{b.text}</p>
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
                  className="rounded-full bg-violet-brand text-white text-sm font-semibold px-8 py-2 hover:bg-violet-soft transition"
                >
                  Next
                </button>
              </div>
              <div className="mt-5 flex items-center gap-1.5">
                {brands.map((b, i) => (
                  <button
                    key={b.collage}
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
