import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Languages } from 'lucide-react'
import { useContent, useLanguage } from '@/i18n/LanguageContext'

export function NavBar() {
  const t = useContent()
  const { locale, toggleLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  const links: { id: string; label: string }[] = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    ...(t.experience.items.length > 0 ? [{ id: 'experience', label: t.nav.experience }] : []),
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-bg)/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link to="/#top" className="flex items-center gap-2 font-heading text-sm font-semibold text-(--color-ink)">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-(--color-accent) to-(--color-accent-2) font-mono text-xs font-bold text-(--color-bg)">
            CH
          </span>
          <span className="hidden sm:inline">{t.hero.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className="text-sm text-(--color-ink-muted) transition-colors hover:text-(--color-ink)"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 rounded-full border border-(--color-border) px-3 py-1.5 font-mono text-xs text-(--color-ink-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-ink)"
            aria-label="Toggle language"
          >
            <Languages size={14} />
            {locale === 'en' ? 'EN' : 'GR'}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--color-border) text-(--color-ink) md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-(--color-border) px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-(--color-ink-muted) hover:bg-(--color-surface) hover:text-(--color-ink)"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
