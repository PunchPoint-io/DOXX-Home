type Member = { id: string; name: string; tagline: string; alt?: boolean }

const team: Member[] = [
  { id: 'vyrie', name: 'Vyrie', tagline: 'Certified degen turned builder' },
  { id: 'soda', name: 'Soda', tagline: 'Ideas + Caffeine = BUSINESS', alt: true },
  { id: 'saturn', name: 'Saturn', tagline: 'I create therefore I am', alt: true },
  { id: 'bibliophile', name: 'Bibliophile', tagline: 'Exploring new worlds', alt: true },
]

export default function Team() {
  return (
    <section className="bg-[#F6F6FB] border-b border-frame">
      <div className="px-6 frame:px-[20px] py-16 frame:pt-[59px] frame:pb-[37px]">
        <div className="flex items-start justify-between gap-4 frame:px-[41px]">
          <h2 className="font-display font-extrabold [font-stretch:87%] text-4xl frame:text-[60px] frame:leading-none">The Team</h2>
          {/* h-9 = the design's 36px; the old PNG had the crop baked in. */}
          <img src="/assets/logo-doxx-dark.png" alt="DO-XX Studio" className="h-9 w-auto mt-1 frame:mt-[9px] select-none" />
        </div>

        <div className="mt-10 frame:mt-[38px] grid grid-cols-2 lg:grid-cols-4 gap-5 frame:gap-[14px]">
          {team.map((m) => (
            <article
              key={m.id}
              className={`${m.alt ? 'team-card--alt' : 'team-card'} relative rounded-2xl frame:rounded-[14px] overflow-hidden ring-1 ring-black/[0.05] shadow-sm flex flex-col min-h-[420px] frame:h-[491px]`}
            >
              <div className="self-start bg-[#ABDCE0] pl-6 frame:pl-[30px] pr-12 frame:pr-[56px] py-3 frame:py-[13px] [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">
                <span className="font-display font-extrabold text-xl sm:text-2xl frame:text-[25px] text-ink">{m.name}</span>
              </div>
              <div className="flex-1 flex items-center justify-center px-5 py-6 frame:px-[36px] frame:pt-[18px] frame:pb-[10px]">
                <img
                  src={`/assets/team-${m.id}.png`}
                  alt={m.name}
                  loading="lazy"
                  className="max-h-[250px] frame:max-h-[268px] w-auto object-contain drop-shadow-sm"
                />
              </div>
              <p className="text-center font-semibold text-ink/90 text-[0.95rem] frame:text-[15px] pb-7 frame:pb-[42px] px-4">{m.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
