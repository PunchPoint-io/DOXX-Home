type Props = {
  count: number
  index: number
  onPrev: () => void
  onNext: () => void
  onGo: (i: number) => void
  /** Events is a finite carousel — its chevrons dim at the ends. */
  finite?: boolean
  /** Dark sections need light chevrons. */
  tone?: 'light' | 'dark'
  label?: string
}

function Chevron({ dir }: { dir: 'prev' | 'next' }) {
  return (
    <svg width="26" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {dir === 'prev' ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  )
}

/**
 * One carousel control bar for the whole site: chevrons pinned to the container
 * edges and a centred dash bar. Measured off the design — 48px dashes, 6px gaps,
 * #962FFE active.
 */
export default function Pagination({ count, index, onPrev, onNext, onGo, finite, tone = 'light', label = 'slide' }: Props) {
  const atStart = finite && index === 0
  const atEnd = finite && index === count - 1
  const arrow = tone === 'dark' ? 'text-white/80 hover:text-white' : 'text-violet-brand hover:text-violet-soft'
  const idle = tone === 'dark' ? 'bg-white/25 hover:bg-white/45' : 'bg-black/[0.13] hover:bg-black/25'

  return (
    <div className="relative flex items-center justify-center">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        aria-label="Previous"
        className={`absolute left-0 ${arrow} transition disabled:opacity-30 disabled:cursor-default`}
      >
        <Chevron dir="prev" />
      </button>

      <div className="flex items-center gap-[6px]">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGo(i)}
            aria-label={`Go to ${label} ${i + 1}`}
            aria-current={i === index}
            className={`h-[5px] w-[48px] rounded-full transition-colors duration-300 ${i === index ? 'bg-[#962FFE]' : idle}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        aria-label="Next"
        className={`absolute right-0 ${arrow} transition disabled:opacity-30 disabled:cursor-default`}
      >
        <Chevron dir="next" />
      </button>
    </div>
  )
}
