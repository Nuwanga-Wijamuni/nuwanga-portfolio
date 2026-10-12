import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import { App } from './App'
import { pageMeta, projects } from './data'

export function render(path: string) { return { html: renderToString(<StrictMode><App initialPath={path} /></StrictMode>), ...pageMeta(path) } }
export const paths = ['/', ...projects.map(p => '/projects/' + p.slug + '/')]
