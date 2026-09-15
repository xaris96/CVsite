import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const t = useContent()

  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.about.kicker} heading={t.about.heading} />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="grid grid-cols-3 gap-4 lg:grid-cols-1">
              {t.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5"
                >
                  <dt className="text-gradient font-heading text-3xl font-bold">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-(--color-ink-muted)">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
