import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Timeline } from '@/components/Timeline'

export function Experience() {
  const t = useContent()
  if (t.experience.items.length === 0) return null

  return (
    <section id="experience" className="border-t border-(--color-border) py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.experience.kicker} heading={t.experience.heading} />
        </Reveal>
        <div className="mt-12">
          <Timeline
            items={t.experience.items.map((item) => ({
              title: item.role,
              subtitle: item.location ? `${item.org} · ${item.location}` : item.org,
              period: item.period,
              bullets: item.bullets,
            }))}
          />
        </div>
      </Container>
    </section>
  )
}
