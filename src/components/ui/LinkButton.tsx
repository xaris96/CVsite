import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface LinkButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  icon?: ReactNode
  className?: string
}

const base =
  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200'

const variants = {
  primary:
    'bg-gradient-to-r from-(--color-accent) to-(--color-accent-2) text-(--color-bg) hover:brightness-110 hover:shadow-[0_0_24px_-4px_var(--color-accent)]',
  ghost:
    'border border-(--color-border) text-(--color-ink) hover:border-(--color-accent) hover:text-(--color-accent)',
}

export function LinkButton({ href, children, variant = 'primary', icon, className = '' }: LinkButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`
  const isExternal = /^https?:\/\//.test(href) || href.startsWith('mailto:')
  const isHash = href.startsWith('#')

  if (isHash) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    )
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        {icon}
      </a>
    )
  }

  return (
    <Link to={href} className={classes}>
      {children}
      {icon}
    </Link>
  )
}
