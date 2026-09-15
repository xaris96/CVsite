import { Mail, MapPin } from 'lucide-react'
import { useContent } from '@/i18n/LanguageContext'
import { socials } from '@/i18n/content'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/LinkButton'
import { GithubMark, LinkedinMark } from '@/components/ui/BrandIcons'

export function Contact() {
  const t = useContent()

  return (
    <section id="contact" className="border-t border-(--color-border) py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading kicker={t.contact.kicker} heading={t.contact.heading} align="center" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-(--color-ink-muted) sm:text-lg">
            {t.contact.blurb}
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <LinkButton href={socials.github} icon={<GithubMark size={16} />}>
              {t.contact.githubLabel}
            </LinkButton>
            {t.contact.email && (
              <LinkButton href={`mailto:${t.contact.email}`} variant="ghost" icon={<Mail size={16} />}>
                {t.contact.emailLabel}
              </LinkButton>
            )}
            {t.contact.linkedin && (
              <LinkButton href={t.contact.linkedin} variant="ghost" icon={<LinkedinMark size={16} />}>
                LinkedIn
              </LinkButton>
            )}
          </div>
        </Reveal>

        {t.contact.location && (
          <Reveal delay={0.28}>
            <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-(--color-ink-faint)">
              <MapPin size={14} />
              {t.contact.location}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  )
}
