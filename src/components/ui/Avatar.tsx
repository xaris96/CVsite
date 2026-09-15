import { motion } from 'framer-motion'
import { useState } from 'react'

interface AvatarProps {
  src?: string
  initials?: string
  name: string
  size?: number
  zoom?: number
  focus?: string
}

export function Avatar({ src, initials = 'XN', name, size = 272, zoom = 1.75, focus = '50% 10%' }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const showPhoto = Boolean(src) && !failed

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full opacity-80 blur-md"
        style={{
          background: 'conic-gradient(from 0deg, var(--color-accent), var(--color-accent-2), var(--color-accent))',
        }}
      />
      <div className="relative h-full w-full rounded-full border border-(--color-border) bg-(--color-surface) p-2">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-(--color-surface) to-(--color-bg)">
          {showPhoto ? (
            <img
              src={src}
              alt={name}
              className="h-full w-full object-cover"
              style={{ objectPosition: focus, transform: `scale(${zoom})`, transformOrigin: focus }}
              onError={() => setFailed(true)}
            />
          ) : (
            <span className="text-gradient font-heading text-6xl font-bold">{initials}</span>
          )}
        </div>
      </div>
    </div>
  )
}
