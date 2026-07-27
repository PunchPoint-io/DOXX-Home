import type { ReactNode } from 'react'

type Feature = {
  tag: string
  title: ReactNode
  body: ReactNode
  img: string
  bg: string
}

const features: Feature[] = [
  {
    tag: 'Storage',
    title: <>Unlimited Cloud<br />Storage</>,
    body: <>Store, manage, and deploy <span className="text-violet-brand font-semibold">unlimited content</span> without restrictions. From daily promotions to large-scale campaigns.</>,
    img: 'feat-storage.png',
    bg: 'feat-card-pink',
  },
  {
    tag: 'Features',
    title: <>SME &amp; Enterprise<br />Level</>,
    body: <>Built to scale with your business. Whether you're running a single outlet or managing thousands across regions.</>,
    img: 'feat-features.png',
    bg: 'feat-card-lav',
  },
  {
    tag: 'Dashboard',
    title: <>Mobile &amp; Desktop<br />Interface</>,
    body: <>Full control at your fingertips. Update screens, schedule content, and monitor performance from any device, anytime.</>,
    img: 'feat-dashboard.png',
    bg: 'feat-card-lav',
  },
]

export default function Features() {
  return (
    <section className="relative bg-white border-b border-frame overflow-hidden">
      {/* Pink→violet bloom that saturates into the section's bottom edge. */}
      <div className="feat-bloom pointer-events-none absolute inset-x-0 bottom-0 h-[380px] frame:h-[540px]" />

      <div className="relative px-6 frame:px-[20px] pt-20 frame:pt-0 pb-20 frame:pb-[21px]">
        <div className="flex items-center justify-center gap-4 sm:gap-5 frame:gap-[33px] frame:min-h-[231px]">
          <img src="/assets/mascot.png" alt="" className="w-20 sm:w-24 frame:w-[215px] shrink-0" />
          <h2 className="font-display font-extrabold [font-stretch:87%] text-2xl sm:text-4xl frame:text-[3.4375rem] leading-tight frame:leading-none">
            Unlock <span className="text-grass">Unlimited Marketing Possibilities</span>
          </h2>
        </div>

        <div className="mt-14 frame:mt-0 grid md:grid-cols-3 gap-6 frame:gap-[12px]">
          {features.map((f) => (
            <article
              key={f.tag}
              className={`${f.bg} relative rounded-3xl frame:rounded-[24px] ring-1 ring-black/[0.06] shadow-[0_2px_18px_-8px_rgba(80,40,120,0.16)] overflow-hidden flex flex-col min-h-[460px] frame:min-h-[571px]`}
            >
              <span className="self-start bg-violet-brand text-white text-base frame:text-[19px] font-semibold pl-5 frame:pl-[42px] pr-9 frame:pr-[56px] py-2.5 frame:py-[15px] [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">{f.tag}</span>
              <div className="px-7 frame:pl-[40px] frame:pr-[70px] pb-8 frame:pb-[74px] pt-6 frame:pt-[43px] flex flex-col flex-1">
                <h3 className="font-display font-extrabold [font-stretch:87%] text-[1.7rem] frame:text-[40px] leading-tight frame:leading-[43px] tracking-tight frame:tracking-normal">{f.title}</h3>
                <p className="mt-4 frame:mt-[19px] text-[0.95rem] frame:text-[19.5px] leading-relaxed frame:leading-[30px] text-ink/70">{f.body}</p>
                <img src={`/assets/${f.img}`} alt="" loading="lazy" className="mt-auto pt-6 frame:pt-0 h-52 frame:h-[131px] w-auto object-contain mx-auto" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
