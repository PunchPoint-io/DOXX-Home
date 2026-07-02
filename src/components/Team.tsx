type Member = { id: string; name: string; tagline: string; alt?: boolean }

const team: Member[] = [
  { id: 'vyrie', name: 'Vyrie', tagline: 'Certified degen turned builder' },
  { id: 'soda', name: 'Soda', tagline: 'Ideas + Caffeine = BUSINESS', alt: true },
  { id: 'saturn', name: 'Saturn', tagline: 'I create therefore I am', alt: true },
  { id: 'bibliophile', name: 'Bibliophile', tagline: 'Exploring new worlds', alt: true },
]

export default function Team() {
  return (
    <section className="bg-lav border-b border-frame">
      <div className="px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-start justify-between gap-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">The Team</h2>
          <img src="/assets/team-doxx-logo.png" alt="DO-XX Studio" className="h-12 w-auto mt-1 select-none" />
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <article
              key={m.id}
              className={`${m.alt ? 'team-card--alt' : 'team-card'} relative rounded-2xl overflow-hidden ring-1 ring-black/[0.05] shadow-sm flex flex-col min-h-[420px]`}
            >
              <div className="self-start bg-[#ABDCE0] pl-6 pr-12 py-3 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)]">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-ink">{m.name}</span>
              </div>
              <div className="flex-1 flex items-center justify-center px-5 py-6">
                <img
                  src={`/assets/team-${m.id}.png`}
                  alt={m.name}
                  className="max-h-[250px] w-auto object-contain drop-shadow-sm"
                />
              </div>
              <p className="text-center font-semibold text-ink/90 text-[0.95rem] pb-7 px-4">{m.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
