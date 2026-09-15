import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/LinkButton'
import { ProjectCard } from '@/components/ProjectCard'

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const t = useContent()
  const project = t.projects.items.find((item) => item.slug === slug)

  useEffect(() => {
    if (!project) return
    const previous = document.title
    document.title = `${project.title} — ${t.hero.name}`
    return () => {
      document.title = previous
    }
  }, [project, t.hero.name])

  if (!project) return <Navigate to="/" replace />

  const otherProjects = t.projects.items.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-4xl">
        <Reveal>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-(--color-ink-muted) transition-colors hover:text-(--color-accent)"
          >
            <ArrowLeft size={15} />
            {t.projects.backToProjects}
          </Link>

          <span className="mt-8 block font-mono text-xs font-medium tracking-wide text-(--color-accent-2)">
            {project.category}
          </span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-(--color-ink) sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-(--color-ink-muted)">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <LinkButton key={link.href} href={link.href} variant="ghost" icon={<ArrowUpRight size={15} />}>
                {link.label}
              </LinkButton>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <p className="text-base leading-relaxed text-(--color-ink-muted) sm:text-lg">
                {project.narrative}
              </p>

              <div>
                <h2 className="font-heading text-sm font-semibold tracking-wide text-(--color-ink) uppercase">
                  {t.projects.highlightsLabel}
                </h2>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-(--color-ink-muted) sm:text-base">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-(--color-accent-2)" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 lg:sticky lg:top-28">
              <h2 className="font-heading text-sm font-semibold tracking-wide text-(--color-ink) uppercase">
                {t.projects.stackLabel}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-24 border-t border-(--color-border) pt-16">
            <h2 className="font-heading text-xl font-semibold text-(--color-ink)">{t.projects.heading}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((item) => (
                <ProjectCard key={item.slug} project={item} viewCase={t.projects.viewCase} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  )
}
