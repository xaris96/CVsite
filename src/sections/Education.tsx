import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Timeline } from '@/components/Timeline'

export function Education() {
  const t = useContent()

  return (
    <section id="education" className="border-t border-(--color-border) py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.education.kicker} heading={t.education.heading} />
        </Reveal>
        <div className="mt-12">
          <Timeline
            items={t.education.items.map((item) => ({
              title: item.degree,
              subtitle: item.institution,
              period: item.period,
              bullets: item.details,
            }))}
          />
        </div>
      </Container>
    </section>
  )
}
