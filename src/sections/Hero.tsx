import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useContent } from '@/i18n/LanguageContext'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { LinkButton } from '@/components/ui/LinkButton'
import { Avatar } from '@/components/ui/Avatar'

export function Hero() {
  const t = useContent()

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        aria-hidden
        className="bg-grid pointer-events-none absolute inset-0"
        style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #000 60%, transparent 100%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-(--color-accent)/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-(--color-accent-2)/10 blur-[120px]"
      />

      <Container className="relative grid items-center gap-16 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:py-0">
        <Reveal>
          <p className="font-mono text-sm text-(--color-accent-2)">{t.hero.greeting}</p>
          <h1 className="mt-4 font-heading text-5xl leading-[1.05] font-bold text-(--color-ink) sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{t.hero.name}</span>
          </h1>
          <p className="mt-6 text-xl font-medium text-(--color-ink) sm:text-2xl">{t.hero.tagline}</p>
          <p className="mt-4 max-w-xl text-base text-(--color-ink-muted) sm:text-lg">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href="#projects" icon={<ArrowRight size={16} />}>
              {t.hero.ctaProjects}
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              {t.hero.ctaContact}
            </LinkButton>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <Avatar name={t.hero.name} src="/avatar.jpg" />
        </Reveal>
      </Container>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-[11px] tracking-widest text-(--color-ink-faint) uppercase">
          {t.hero.scrollHint}
        </span>
        <div className="h-9 w-5 rounded-full border border-(--color-border) p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-(--color-accent-2)" />
        </div>
      </motion.div>
    </section>
  )
}
