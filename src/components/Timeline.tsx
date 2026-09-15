import { Reveal } from '@/components/ui/Reveal'

export interface TimelineItem {
  title: string
  subtitle: string
  period?: string
  bullets: string[]
}

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-10 border-l border-(--color-border) pl-8">
      {items.map((item, i) => (
        <Reveal key={`${item.title}-${item.subtitle}`} delay={i * 0.08}>
          <div className="relative">
            <span className="absolute top-1.5 -left-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-(--color-accent-2) shadow-[0_0_0_4px_var(--color-bg)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-heading text-lg font-semibold text-(--color-ink)">{item.title}</h3>
              {item.period && (
                <span className="font-mono text-xs text-(--color-ink-faint)">{item.period}</span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-(--color-accent-2)">{item.subtitle}</p>
            {item.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-(--color-ink-muted)">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-(--color-ink-faint)" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
