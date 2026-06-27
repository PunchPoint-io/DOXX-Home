export default function Team() {
  return (
    <section className="bg-[#f6f4fb]">
      <div className="mx-auto max-w-wide px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex items-center justify-between">
          <h2 className="font-extrabold text-3xl sm:text-4xl tracking-tight">The Team</h2>
          <span className="logo-wm text-xl text-ink/80">DO<span className="text-violet-brand">-</span>XX</span>
        </div>
        <img src="/assets/team.png" alt="The DO-XX team: Vyrie, Soda, Saturn, Bibliophile" className="mt-10 w-full" />
      </div>
    </section>
  )
}
