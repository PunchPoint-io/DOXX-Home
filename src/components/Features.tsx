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
    <section className="bg-white border-b border-frame">
      <div className="px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          <img src="/assets/mascot.png" alt="" className="w-20 sm:w-24 lg:w-28 shrink-0" />
          <h2 className="font-display font-extrabold [font-stretch:87%] text-2xl sm:text-4xl lg:text-[3.4375rem] leading-tight lg:leading-none">
            Unlock <span className="text-grass">Unlimited Marketing Possibilities</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.tag} className={`${f.bg} relative rounded-3xl ring-1 ring-black/5 overflow-hidden flex flex-col min-h-[460px]`}>
              <span className="self-start bg-violet-brand text-white text-base font-semibold pl-5 pr-9 py-2.5 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">{f.tag}</span>
              <div className="px-7 pb-8 pt-6 flex flex-col flex-1">
                <h3 className="text-[1.7rem] font-extrabold leading-tight tracking-tight">{f.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{f.body}</p>
                <img src={`/assets/${f.img}`} alt="" loading="lazy" className="mt-auto pt-6 h-52 object-contain mx-auto" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
