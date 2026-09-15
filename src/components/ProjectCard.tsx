import { ArrowUpRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/i18n/types'
import { Badge } from '@/components/ui/Badge'

export function ProjectCard({ project, viewCase }: { project: Project; viewCase: string }) {
  const shownTech = project.tech.slice(0, 4)
  const extra = project.tech.length - shownTech.length

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-all duration-300 hover:-translate-y-1 hover:border-(--color-accent)/50 hover:bg-(--color-surface-hover)"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-xs font-medium tracking-wide text-(--color-accent-2)">
          {project.category}
        </span>
        {project.featured && (
          <Star size={14} className="shrink-0 fill-(--color-accent) text-(--color-accent)" />
        )}
      </div>
      <h3 className="mt-3 font-heading text-xl font-semibold text-(--color-ink)">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-(--color-ink-muted)">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {shownTech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {extra > 0 && <Badge>{`+${extra}`}</Badge>}
      </div>

      <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-ink) transition-colors group-hover:text-(--color-accent)">
        {viewCase}
        <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
