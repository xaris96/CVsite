import { Mail } from 'lucide-react'
import { useContent } from '@/i18n/LanguageContext'
import { socials } from '@/i18n/content'
import { Container } from '@/components/ui/Container'
import { GithubMark } from '@/components/ui/BrandIcons'

export function Footer() {
  const t = useContent()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-(--color-border) py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-(--color-ink-faint)">
          © {year} {t.hero.name} — {t.footer.rights}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-ink-muted) transition-colors hover:text-(--color-accent)"
            aria-label="GitHub"
          >
            <GithubMark size={18} />
          </a>
          <a
            href="#contact"
            className="text-(--color-ink-muted) transition-colors hover:text-(--color-accent)"
            aria-label="Contact"
          >
            <Mail size={18} />
          </a>
        </div>
        <p className="font-mono text-xs text-(--color-ink-faint)">{t.footer.builtWith}</p>
      </Container>
    </footer>
  )
}
