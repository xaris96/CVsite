export type Locale = 'en' | 'gr'

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  category: string
  title: string
  summary: string
  highlights: string[]
  narrative: string
  tech: string[]
  links: ProjectLink[]
  featured?: boolean
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  location?: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period?: string
  details: string[]
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    skills: string
    projects: string
    experience: string
    education: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    tagline: string
    subtitle: string
    ctaProjects: string
    ctaContact: string
    scrollHint: string
  }
  about: {
    kicker: string
    heading: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  skills: {
    kicker: string
    heading: string
    groups: SkillGroup[]
  }
  projects: {
    kicker: string
    heading: string
    subheading: string
    viewCase: string
    backToProjects: string
    highlightsLabel: string
    stackLabel: string
    items: Project[]
  }
  experience: {
    kicker: string
    heading: string
    items: ExperienceItem[]
  }
  education: {
    kicker: string
    heading: string
    items: EducationItem[]
  }
  contact: {
    kicker: string
    heading: string
    blurb: string
    emailLabel: string
    githubLabel: string
    locationLabel: string
    email?: string
    location?: string
    linkedin?: string
  }
  footer: {
    rights: string
    builtWith: string
  }
}
