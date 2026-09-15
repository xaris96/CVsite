interface SectionHeadingProps {
  kicker: string
  heading: string
  subheading?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ kicker, heading, subheading, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <span className="font-mono text-xs font-medium tracking-[0.2em] text-(--color-accent-2) uppercase">
        {kicker}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-semibold text-(--color-ink) sm:text-4xl">{heading}</h2>
      {subheading && (
        <p
          className={`mt-4 max-w-2xl text-base text-(--color-ink-muted) ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
