import { createContext, useContext, useEffect, useRef, useState } from 'react'
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react'
import { MotionConfig, motion, useReducedMotion } from 'motion/react'
import { additionalWork, credentials, experience, getProject, normalizePath, pageMeta, principles, profile, projectPath, projects, technologies, toolkit } from './data'
import type { Project } from './data'
import { ProjectVisual } from './components/ProjectVisual'

type Router = { path: string; navigate: (href: string) => void }
const RouterContext = createContext<Router | null>(null)

function Link({ href = '/', onClick, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const router = useContext(RouterContext)
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target || props.download !== undefined) return
    if (href.startsWith('/') || href.startsWith('#')) { event.preventDefault(); router?.navigate(href) }
  }
  return <a href={href} onClick={handleClick} {...props} />
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span> }
function ExternalLink({ href, children, className = '' }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow diagonal /></a>
}
function Tags({ items }: { items: string[] }) { return <ul className="tags" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul> }
function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow mono">{children}</p> }
function SectionHeading({ number, title, children }: { number: string; title: ReactNode; children?: ReactNode }) {
  return <div className="section-heading"><div><Eyebrow>{number} / {children ? 'SELECTED WORK' : 'ENGINEERING NOTES'}</Eyebrow><h2>{title}</h2></div>{children}</div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const router = useContext(RouterContext)
  const button = useRef<HTMLButtonElement>(null)
  const nav = [['Work', 'work'], ['About', 'about'], ['Experience', 'experience'], ['Toolkit', 'toolkit'], ['Contact', 'contact']]
  useEffect(() => { setOpen(false) }, [router?.path])
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus() } }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [open])
  return <header className="site-header"><div className="header-inner">
    <Link href="/#top" className="brand" aria-label="Nuwanga Wijamuni — home"><span className="brand-mark" aria-hidden="true">NW</span><span>NUWANGA WIJAMUNI<small>AI ENGINEER</small></span></Link>
    <button ref={button} className="menu-button mono" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}<span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="primary-navigation" className={'site-nav' + (open ? ' is-open' : '')} aria-label="Main navigation">
      {nav.map(([label, id]) => <Link key={id} href={'/#' + id} onClick={() => setOpen(false)}>{label}</Link>)}
      <a className="mobile-cv" href={profile.cv} download>Download CV<Arrow diagonal /></a>
    </nav>
    <a className="header-cv mono" href={profile.cv} download>Download CV<Arrow diagonal /></a>
  </div></header>
}

function Hero() {
  return <section className="hero section-shell" aria-labelledby="hero-title">
    <div className="hero-copy">
      <Eyebrow>AI ENGINEER / AGENTIC AI / RAG</Eyebrow>
      <h1 id="hero-title">Knowledge.<br />Into action<span className="hero-period">.</span></h1>
      <p className="hero-description">I’m Nuwanga. I build AI systems that connect business knowledge to useful actions.</p>
      <div className="hero-actions"><Link href="/#work" className="button button-dark">Explore my work<Arrow /></Link><a className="text-link" href={'mailto:' + profile.email}>Let’s talk<Arrow diagonal /></a></div>
    </div>
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-header"><span className="mono">CONTEXT → ACTION</span><img src="/assets/graphics/globe.svg" width="24" height="24" alt="" /></div>
      <img className="hero-dots" src="/assets/graphics/dot-grid.svg" width="104" height="104" alt="" />
      <img className="hero-crosshair" src="/assets/graphics/crosshair.svg" width="38" height="38" alt="" />
      <div className="brain-wrapper"><img className="hero-brain" src="/assets/stickers/ai-brain.png" width="700" height="700" alt="" fetchPriority="high" /></div>
      <div className="hero-binary"><img src="/assets/graphics/binary-matrix.svg" width="145" height="127" alt="" /></div>
      <span className="hero-art-note mono">RETRIEVE.<br />REASON.<br />BUILD.</span>
      <div className="hero-art-footer mono"><span className="outline-pill">HUMAN IN THE LOOP</span><span>NW / 2026</span></div>
    </div>
    <div className="hero-bottom mono"><span><span className="location-dot" aria-hidden="true" />{profile.location}</span><span className="hero-opportunity">OPEN TO INTERNATIONAL OPPORTUNITIES</span><div className="hero-socials">{profile.socials.map(s => <ExternalLink key={s.name} href={s.url}>{s.name}</ExternalLink>)}</div></div>
  </section>
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const reduce = useReducedMotion()
  return <motion.article className={'project-card' + (featured ? ' featured-project' : '')} whileHover={reduce ? undefined : { y: -4 }} transition={{ duration: .22 }}>
    <ProjectVisual project={project} large={featured} />
    <div className="project-card-copy">
      <Eyebrow>{project.number} / {project.category}</Eyebrow>
      <h3><Link href={projectPath(project)}>{project.name}</Link></h3>
      <p>{project.description}</p><span className="outline-pill project-scope">{project.scope}</span>
      <Tags items={featured ? project.tags : project.tags.slice(0, 4)} />
      <div className="project-actions"><Link href={projectPath(project)} className="text-link">View case study<Arrow /></Link><ExternalLink href={project.repo} className="mono github-link">GitHub</ExternalLink></div>
    </div>
  </motion.article>
}

function Work() {
  return <section className="section-shell work-section" id="work">
    <SectionHeading number="01" title={<>From a question<br />to a working system.</>}><ExternalLink href="https://github.com/Nuwanga-Wijamuni?tab=repositories" className="text-link all-work">All repositories</ExternalLink></SectionHeading>
    <ProjectCard project={projects[0]} featured /><div className="project-grid">{projects.slice(1).map(project => <ProjectCard project={project} key={project.slug} />)}</div>
  </section>
}

function About() {
  return <section className="section-shell about-section" id="about">
    <figure className="portrait-block"><div className="portrait-frame"><img src="/assets/portrait.webp" width="800" height="800" alt="Portrait of Nuwanga Wijamuni" loading="lazy" /><span className="portrait-corner corner-tl" aria-hidden="true" /><span className="portrait-corner corner-br" aria-hidden="true" /></div><figcaption className="mono">NUWANGA / NEGOMBO, SRI LANKA<span aria-hidden="true">＋</span></figcaption></figure>
    <div className="about-copy"><Eyebrow>02 / THE PERSON BEHIND THE WORK</Eyebrow><h2>AI engineering,<br />grounded in data.</h2>
      <p>I’m an AI Engineer bringing together language models, business data, and application engineering to build systems people can use and inspect.</p>
      <p>At <strong>HSB Marine Constructions</strong>, I develop company knowledge applications and automation with clear approval points. Before that, I worked in data engineering at <strong>One Billion Tech</strong> and data science at <strong>MAS Holdings</strong>.</p>
      <p>That background shapes my approach: start with the data and the user’s task, make the workflow observable, and build the infrastructure to reproduce the result.</p>
      <a className="text-link" href={profile.cv} download>Get the full picture — download my CV<Arrow diagonal /></a>
    </div>
  </section>
}

function Experience() {
  return <section className="section-shell experience-section" id="experience"><Eyebrow>03 / EXPERIENCE</Eyebrow><h2>Different disciplines.<br />One connected practice.</h2>
    <div className="experience-list">{experience.map(item => <article className="experience-row" key={item.company}>
      <div className="experience-meta"><span className="mono experience-number">{item.number}</span><p className="mono">{item.dates}</p><h3>{item.company}</h3><span className="mono muted">{item.type}</span></div>
      <div className="experience-copy"><h4>{item.role}</h4><p>{item.summary}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul><Tags items={item.tags} /></div>
    </article>)}</div>
  </section>
}

function Approach() {
  return <section className="section-shell approach-section"><Eyebrow>04 / HOW I BUILD</Eyebrow><h2>Useful outputs.<br />Inspectable workflows.</h2>
    <div className="principle-grid">{principles.map(principle => <article className="principle" key={principle.number}><div className="principle-top"><span className="mono">{principle.number}</span><img src={'/assets/graphics/' + principle.graphic + '.svg'} width="64" height="56" alt="" aria-hidden="true" loading="lazy" /></div><h3>{principle.title}</h3><p>{principle.text}</p></article>)}</div>
  </section>
}

function Toolkit() {
  return <section className="section-shell toolkit-section" id="toolkit"><div className="toolkit-heading"><div><Eyebrow>05 / TECHNICAL TOOLKIT</Eyebrow><h2>The tools behind<br />the systems.</h2></div><img className="toolkit-cloud" src="/assets/stickers/cloud.png" width="700" height="700" alt="" aria-hidden="true" loading="lazy" /></div>
    <ul className="technology-grid" aria-label="Primary technologies">{technologies.map(([slug, name]) => <li key={slug}><img src={'/assets/technologies/icons/' + slug + '.svg'} width="36" height="36" alt="" loading="lazy" /><span>{name}</span></li>)}</ul>
    <div className="toolkit-groups">{toolkit.map(group => <div className="toolkit-group" key={group.title}><h3>{group.title}</h3><p>{group.tools}</p></div>)}</div>
  </section>
}

function Research() {
  return <section className="section-shell research-section" id="research">
    <div className="research-feature"><div><Eyebrow>06 / NVIDIA + LOCAL COMPUTE</Eyebrow><h2>Exploring local<br />intelligence.</h2><p className="research-lead">A research direction: an enterprise AI workbench for documents, multimodal understanding, and tool-using agents.</p><p>I evaluated <strong>NVIDIA DGX Spark</strong> for company AI workloads involving documents, images, audio, and video. The research covered laptop connectivity, model requirements, and hardware considerations.</p><div className="research-tags"><span className="outline-pill">INFRASTRUCTURE RESEARCH</span><span className="outline-pill">NVIDIA NIM</span></div><a className="text-link" href={'mailto:' + profile.email + '?subject=DGX%20Spark%20AI%20research'}>Discuss this research<Arrow diagonal /></a></div>
      <div className="research-art" aria-hidden="true"><img src="/assets/stickers/agent-network.png" width="700" height="700" alt="" loading="lazy" /><span className="mono">DOCUMENTS / IMAGES / AUDIO / VIDEO</span></div>
    </div>
    <div className="additional-heading"><h3>Beyond the public demos.</h3><p className="mono muted">INTERNAL WORK / PROJECT NOTES</p></div>
    <div className="additional-list">{additionalWork.map(item => <details key={item.name}><summary><span><small className="mono">{item.type}</small>{item.name}</span><span className="detail-toggle" aria-hidden="true">+</span></summary><div className="additional-copy"><p>{item.text}</p><Tags items={item.tags} /><a className="text-link" href={'mailto:' + profile.email + '?subject=' + encodeURIComponent(item.name)}>Discuss this work<Arrow diagonal /></a></div></details>)}</div>
  </section>
}

function Education() {
  return <section className="section-shell education-section" id="education"><Eyebrow>07 / EDUCATION & CREDENTIALS</Eyebrow><h2>A foundation to build on.</h2>
    <div className="education-grid"><article className="degree-card"><span className="mono">SLIIT / 2020 — 2024</span><h3>Bachelor of<br />Information Technology</h3><p>Specialization in Data Science</p><p className="muted">Sri Lanka Institute of Information Technology<br />February 2020 — March 2024</p><div className="degree-rule" aria-hidden="true" /><span className="mono">DATA ENGINEERING / AI / CLOUD COMPUTING</span></article>
      <div className="credentials">{credentials.map(item => <article className="credential" key={item.number}><img src={'/assets/technologies/icons/' + item.icon + '.svg'} width="42" height="42" alt="" loading="lazy" /><div><h3>{item.title}</h3><p className="mono">{item.subtitle}</p></div></article>)}<div className="awards"><Eyebrow>RECOGNITION</Eyebrow><p><strong>SLIIT Datathon 2022</strong><br />Finalist & merit award · AI-based monkeypox detection model</p><p><strong>ML Nexus Quiz Competition</strong><br />Second Runner-Up · University of Colombo</p></div></div>
    </div>
  </section>
}

function Contact() {
  const [copyState, setCopyState] = useState('')
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current) }, [])
  async function copyEmail() {
    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(profile.email); setCopyState('Email copied.')
    } catch { setCopyState('Copy unavailable. Use the email link or select the address.') }
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopyState(''), 5000)
  }
  return <section className="contact-section" id="contact"><div className="section-shell contact-inner"><Eyebrow>08 / LET’S CONNECT</Eyebrow><h2>Let’s build<br />useful AI<span className="contact-dot">.</span></h2>
    <p>Interested in agentic workflows, retrieval systems, or conversational applications? I’m open to international remote opportunities and relocation.</p>
    <div className="email-row"><a className="email-link" href={'mailto:' + profile.email}>{profile.email}<Arrow diagonal /></a><button className="copy-email mono" type="button" onClick={copyEmail}>Copy email</button></div><p className="copy-status mono" role="status" aria-live="polite">{copyState}</p>
    <div className="contact-socials">{profile.socials.map(s => <ExternalLink key={s.name} href={s.url}>{s.name}</ExternalLink>)}<a href={profile.cv} download>Download CV<Arrow diagonal /></a></div>
    <footer className="site-footer mono"><span>NUWANGA WIJAMUNI / AI ENGINEER</span><span>© {new Date().getFullYear()}</span><Link href="/#top">Back to top ↑</Link></footer>
  </div></section>
}

function Home() { return <><Hero /><Work /><About /><Experience /><Approach /><Toolkit /><Research /><Education /><Contact /></> }

function CaseStudy({ project }: { project: Project }) {
  const index = projects.findIndex(p => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  return <><section className="section-shell case-heading"><Link href="/#work" className="text-link back-link"><span aria-hidden="true">←</span>Back to selected work</Link><Eyebrow>{project.number} / {project.category}</Eyebrow><h1>{project.name}</h1><p className="case-subtitle">{project.subtitle}</p><div className="case-meta"><span className="outline-pill">{project.scope}</span><ExternalLink className="text-link" href={project.repo}>Explore repository</ExternalLink></div><Tags items={project.tags} /></section>
    <div className="section-shell case-visual"><ProjectVisual project={project} large /></div>
    <div className="section-shell case-body"><aside className="case-index mono" aria-label="Case study sections"><a href="#problem">01 / THE PROBLEM</a><a href="#built">02 / WHAT I BUILT</a><a href="#workflow">03 / THE WORKFLOW</a><a href="#decisions">04 / KEY DECISIONS</a><a href="#scope">05 / SCOPE</a></aside>
      <div className="case-copy">
        <section id="problem"><Eyebrow>01 / THE PROBLEM</Eyebrow><h2>{project.slug === 'medical-rag' ? 'Keep the answer connected to its evidence.' : 'Start with a concrete task.'}</h2><p>{project.problem}</p></section>
        <section id="built"><Eyebrow>02 / WHAT I BUILT</Eyebrow><h2>{project.subtitle}</h2>{project.built.map(p => <p key={p}>{p}</p>)}<ul className="feature-list">{project.features.map(feature => <li key={feature}><span aria-hidden="true">＋</span>{feature}</li>)}</ul></section>
        <section id="workflow"><Eyebrow>03 / SYSTEM FLOW</Eyebrow><h2>How the pieces connect.</h2><ol className="workflow-list">{project.flow.map((step, i) => <li key={step}><span className="mono">{String(i + 1).padStart(2, '0')}</span><strong>{step}</strong><span aria-hidden="true">↓</span></li>)}</ol></section>
        <section id="decisions"><Eyebrow>04 / KEY DECISIONS</Eyebrow><h2>The engineering behind it.</h2><div className="decision-list">{project.decisions.map(decision => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.text}</p></article>)}</div></section>
        <section id="scope"><Eyebrow>05 / SCOPE & NEXT STEPS</Eyebrow><h2>A clear boundary matters.</h2><p>{project.boundaries}</p><div className="source-note"><span className="mono">CONTENT BASIS</span><p>{project.source}</p><ExternalLink href={project.repo} className="text-link">Inspect the source</ExternalLink></div></section>
      </div>
    </div>
    <div className="section-shell next-project"><span className="mono">NEXT CASE STUDY</span><Link href={projectPath(next)}><h2>{next.name}</h2><Arrow /></Link></div><Contact />
  </>
}

function NotFound() {
  return <section className="section-shell not-found"><Eyebrow>404 / A DIFFERENT PATH</Eyebrow><h1>This page<br />isn’t here.</h1><p>There’s plenty of work to explore back on the portfolio.</p><Link href="/#work" className="button button-dark">Explore projects<Arrow /></Link></section>
}

export function App({ initialPath }: { initialPath?: string }) {
  const [path, setPath] = useState(() => initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname))
  const pendingScroll = useRef(false)
  function navigate(href: string) {
    const url = new URL(href, window.location.origin)
    window.history.pushState(null, '', url.pathname + url.search + url.hash)
    pendingScroll.current = true
    if (normalizePath(url.pathname) === normalizePath(path)) {
      requestAnimationFrame(() => { const target = url.hash ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null; target ? target.scrollIntoView() : window.scrollTo(0, 0) })
    } else { setPath(url.pathname) }
  }
  useEffect(() => {
    const pop = () => { pendingScroll.current = true; setPath(window.location.pathname) }
    window.addEventListener('popstate', pop)
    return () => window.removeEventListener('popstate', pop)
  }, [])
  useEffect(() => {
    const meta = pageMeta(path); document.title = meta.title
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]']) document.querySelector(selector)?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    const site = import.meta.env.VITE_SITE_URL?.replace(/\/+$/, '')
    if (site) {
      const url = site + (normalizePath(path) === '/' ? '/' : normalizePath(path) + '/')
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', url)
    }
    if (pendingScroll.current || window.location.hash) {
      pendingScroll.current = false
      requestAnimationFrame(() => { const hash = window.location.hash.slice(1); const target = hash ? document.getElementById(decodeURIComponent(hash)) : null; target ? target.scrollIntoView() : window.scrollTo(0, 0) })
    }
  }, [path])
  const project = getProject(path)
  return <MotionConfig reducedMotion="user"><RouterContext.Provider value={{ path, navigate }}>
    <div data-app="" id="top"><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{normalizePath(path) === '/' ? <Home /> : project ? <CaseStudy project={project} key={project.slug} /> : <NotFound />}</main></div>
  </RouterContext.Provider></MotionConfig>
}
