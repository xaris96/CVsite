import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useContent } from '@/i18n/LanguageContext'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Education } from '@/sections/Education'
import { Contact } from '@/sections/Contact'

export function HomePage() {
  const location = useLocation()
  const t = useContent()

  useEffect(() => {
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [t])

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const target = document.getElementById(id)
    if (!target) return
    const timeout = setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    return () => clearTimeout(timeout)
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}
