import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Locale } from './types'
import { content } from './content'

const STORAGE_KEY = 'cvsite-locale'

interface LanguageContextValue {
  locale: Locale
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'gr' ? 'gr' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === 'gr' ? 'el' : 'en'
  }, [locale])

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      toggleLocale: () => setLocale((current) => (current === 'en' ? 'gr' : 'en')),
    }),
    [locale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

export function useContent() {
  const { locale } = useLanguage()
  return content[locale]
}
