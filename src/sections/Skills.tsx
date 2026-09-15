import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'

export function Skills() {
  const t = useContent()

  return (
    <section id="skills" className="border-t border-(--color-border) py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.skills.kicker} heading={t.skills.heading} />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.skills.groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-colors hover:border-(--color-accent)/40">
                <h3 className="font-heading text-sm font-semibold text-(--color-ink)">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
