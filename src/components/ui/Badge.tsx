export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1 font-mono text-xs text-(--color-ink-muted)">
      {children}
    </span>
  )
}
