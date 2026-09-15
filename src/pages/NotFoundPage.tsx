import { useContent } from '@/i18n/LanguageContext'
import { LinkButton } from '@/components/ui/LinkButton'

export function NotFoundPage() {
  const t = useContent()

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="text-gradient font-heading text-7xl font-bold">404</span>
      <p className="mt-4 max-w-sm text-(--color-ink-muted)">
        {t.hero.name} · {t.hero.tagline}
      </p>
      <LinkButton href="/" className="mt-8">
        {t.nav.about}
      </LinkButton>
    </section>
  )
}
