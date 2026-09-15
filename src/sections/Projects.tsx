import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectCard } from '@/components/ProjectCard'

export function Projects() {
  const t = useContent()
  const items = [...t.projects.items].sort((a, b) => (a.featured ?? Infinity) - (b.featured ?? Infinity))

  return (
    <section id="projects" className="border-t border-(--color-border) py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            kicker={t.projects.kicker}
            heading={t.projects.heading}
            subheading={t.projects.subheading}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} viewCase={t.projects.viewCase} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
