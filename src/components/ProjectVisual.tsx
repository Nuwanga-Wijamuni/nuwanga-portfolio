import { useId } from 'react'
import type { Project } from '../data'

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const gradient = 'foil-' + useId().replace(/[^a-zA-Z0-9_-]/g, '')
  const foil = 'url(#' + gradient + ')'
  return (
    <figure className={'project-visual visual-' + project.slug + (large ? ' visual-large' : '')}>
      <div className="visual-label mono"><span>{project.number} / SYSTEM SKETCH</span><span aria-hidden="true">＋</span></div>
      <svg viewBox="0 0 640 350" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c2f7ef" /><stop offset=".25" stopColor="#c9bdff" />
            <stop offset=".5" stopColor="#f5b4e8" /><stop offset=".7" stopColor="#f9efaf" /><stop offset="1" stopColor="#9eecee" />
          </linearGradient>
        </defs>
        {project.slug === 'skyward' && <>
          <text x="45" y="181" className="visual-airport">CMB</text><text x="439" y="181" className="visual-airport">SIN</text>
          <path d="M 219 163 Q 329 26 438 163" className="diagram-line" strokeDasharray="3 9" />
          <circle cx="228" cy="157" r="5" fill="currentColor" /><circle cx="429" cy="157" r="5" fill="currentColor" />
          <image href="/assets/stickers/cloud.png" x="267" y="8" width="140" height="140" />
          <text x="48" y="214" className="diagram-small">ILLUSTRATIVE JOURNEY</text><text x="439" y="214" className="diagram-small">ONE WAY</text>
          <g transform="translate(44 265)">
            {['EXTRACT', 'SEARCH', 'CONFIRM'].map((s, i) => <g key={s} transform={'translate(' + i * 189 + ' 0)'}>
              <rect width="168" height="48" rx="24" className="diagram-box" /><text x="84" y="30" textAnchor="middle" className="diagram-text">{s}</text>
            </g>)}
          </g>
        </>}
        {project.slug === 'gourmet-express' && <>
          <circle cx="199" cy="157" r="91" fill={foil} stroke="currentColor" strokeWidth="2" />
          <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
            <rect x="180" y="111" width="38" height="72" rx="19" />
            <path d="M 162 158 Q 162 206 199 206 Q 236 206 236 158 M 199 207 V 231 M 181 231 H 217" />
          </g>
          <path d="M 304 157 H 365" className="diagram-line" />
          <circle cx="375" cy="157" r="5" fill="currentColor" />
          <rect x="388" y="102" width="152" height="112" rx="8" className="diagram-box" />
          <text x="464" y="149" textAnchor="middle" className="diagram-text">TOOL CALL</text><text x="464" y="182" textAnchor="middle" className="diagram-small">MENU / CART</text>
          <text x="107" y="289" className="diagram-text">VOICE → ACTION</text>
        </>}
        {project.slug === 'document-rag' && <>
          <g transform="translate(108 50) rotate(-8 82 115)">
            <rect width="167" height="226" rx="4" fill={foil} stroke="currentColor" strokeWidth="2" />
            <text x="24" y="53" className="document-type">PDF</text>
            {[80, 106, 132, 158, 184].map((y, i) => <path key={y} d={'M 25 ' + y + ' H ' + (i % 2 ? 115 : 143)} className="diagram-line" />)}
          </g>
          <path d="M 302 164 H 355" className="diagram-line" strokeDasharray="4 6" />
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="462" cy="151" r="63" /><ellipse cx="462" cy="151" rx="63" ry="24" /><ellipse cx="462" cy="151" rx="25" ry="63" />
          </g>
          <circle cx="462" cy="151" r="6" fill="currentColor" />
          <text x="377" y="260" className="diagram-text">RETRIEVABLE</text><text x="415" y="288" className="diagram-text">CONTEXT</text>
        </>}
        {project.slug === 'medical-rag' && <>
          <path d="M 115 183 H 525" className="diagram-line" />
          {['2021', '2022', '2023'].map((year, i) => <g key={year} transform={'translate(' + (146 + i * 174) + ' 135)'}>
            <circle r="56" fill={foil} stroke="currentColor" strokeWidth="2" /><text y="8" textAnchor="middle" className="diagram-text">{year}</text>
            <path d="M 0 56 V 108" className="diagram-line" /><circle cy="118" r="6" fill="currentColor" />
          </g>)}
          <text x="320" y="303" textAnchor="middle" className="diagram-text">SOURCE / PAGE / YEAR / CHUNK</text>
        </>}
        {project.slug === 'focus-tracker' && <>
          <circle cx="219" cy="170" r="108" fill={foil} />
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="219" cy="161" rx="46" ry="63" /><path d="M 191 154 H 205 M 234 154 H 249 M 218 153 L 212 177 H 224 M 204 193 Q 219 202 234 193" />
            <path d="M 103 62 H 80 V 86 M 335 62 H 358 V 86 M 80 251 V 278 H 105 M 334 278 H 358 V 251" />
            <path d="M 219 36 V 54 M 219 286 V 303 M 59 170 H 76 M 362 170 H 379" />
          </g>
          <path d="M 404 96 H 568 M 404 170 H 568 M 404 244 H 568" className="diagram-line" />
          <text x="407" y="78" className="diagram-text">HEAD POSE</text><text x="407" y="152" className="diagram-text">STATE LABEL</text><text x="407" y="226" className="diagram-text">METRICS</text>
        </>}
      </svg>
      <figcaption className="mono">Illustrative system graphic · {project.category}</figcaption>
    </figure>
  )
}
