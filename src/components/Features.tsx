import type { ReactNode } from 'react'

type Feature = {
  tag: string
  title: ReactNode
  body: ReactNode
  img: string
}

const features: Feature[] = [
  {
    tag: 'Storage',
    title: <>Unlimited Cloud<br />Storage</>,
    body: <>Store, manage, and deploy <span className="text-violet-brand font-semibold">unlimited content</span> without restrictions. From daily promotions to large-scale campaigns.</>,
    img: 'feat-storage.png',
  },
  {
    tag: 'Features',
    title: <>SME &amp; Enterprise<br />Level</>,
    body: <>Built to scale with your business. Whether you're running a single outlet or managing thousands across regions.</>,
    img: 'feat-features.png',
  },
  {
    tag: 'Dashboard',
    title: <>Mobile &amp; Desktop<br />Interface</>,
    body: <>Full control at your fingertips. Update screens, schedule content, and monitor performance from any device, anytime.</>,
    img: 'feat-dashboard.png',
  },
]

export default function Features() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          <img src="/assets/mascot.png" alt="" className="w-20 sm:w-24 lg:w-28 shrink-0" />
          <h2 className="font-extrabold text-2xl sm:text-4xl lg:text-[2.7rem] tracking-tight leading-tight">
            Unlock <span className="text-grass">Unlimited Marketing Possibilities</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.tag} className="feat-card relative rounded-3xl ring-1 ring-black/5 overflow-hidden flex flex-col">
              <span className="self-start bg-violet-brand text-white text-sm font-semibold pl-5 pr-8 py-2 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">{f.tag}</span>
              <div className="px-7 pb-7 pt-5 flex flex-col flex-1">
                <h3 className="text-2xl font-extrabold leading-snug">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.body}</p>
                <img src={`/assets/${f.img}`} alt="" className="mt-auto pt-8 h-32 object-contain mx-auto" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
