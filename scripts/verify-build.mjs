import assert from 'node:assert/strict'
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const dist = resolve('dist')
assert(existsSync(join(dist, 'index.html')), 'Build first: npm run build')
const slugs = ['skyward', 'gourmet-express', 'document-rag', 'medical-rag', 'focus-tracker']
const pages = [['/', 'index.html'], ...slugs.map(slug => ['/projects/' + slug + '/', 'projects/' + slug + '/index.html']), ['/404/', '404.html']]
let checkedLinks = 0
for (const [urlPath, file] of pages) {
  const html = readFileSync(join(dist, file), 'utf8')
  assert(html.includes('data-app=""'), file + ': missing pre-rendered content')
  assert(html.includes('id="main-content"'), file + ': missing skip-link target')
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, file + ': expected one h1')
  assert(html.includes('<title>') && html.includes('name="description"'), file + ': missing metadata')
  assert(!html.includes('<!--app-html-->'), file + ': unrendered placeholder')
  assert(!html.includes('GEMINI_API_KEY') && !html.includes('GROQ_API_KEY'), file + ': unrelated API configuration in page')
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&')
    if (/^(https?:|mailto:|data:)/.test(href)) continue
    const url = new URL(href, 'https://portfolio.test' + urlPath)
    const path = decodeURIComponent(url.pathname)
    const target = join(dist, path.replace(/^\/+/, ''))
    const candidate = href.startsWith('#') ? join(dist, file) : path === '/' ? join(dist, 'index.html') : (existsSync(target) && statSync(target).isDirectory() ? join(target, 'index.html') : target)
    assert(existsSync(candidate), file + ': missing local target ' + href)
    if (url.hash && candidate.endsWith('.html')) {
      const content = readFileSync(candidate, 'utf8')
      const id = decodeURIComponent(url.hash.slice(1))
      assert(content.includes('id="' + id + '"'), file + ': missing anchor ' + href)
    }
    checkedLinks++
  }
}
const home = readFileSync(join(dist, 'index.html'), 'utf8')
for (const id of ['work', 'about', 'experience', 'toolkit', 'research', 'education', 'contact']) assert(home.includes('id="' + id + '"'), 'Missing homepage section: ' + id)
assert(readFileSync(join(dist, 'Nuwanga_Wijamuni_AIEngineer.pdf')).subarray(0, 5).toString() === '%PDF-', 'CV is not a PDF')
assert(existsSync(join(dist, '_headers')) && existsSync(join(dist, '_redirects')), 'Missing Netlify Drop configuration')
const scripts = readdirSync(join(dist, 'assets')).filter(file => file.endsWith('.js'))
assert(scripts.length > 0, 'Missing application JavaScript')
console.log('PASS: 7 pre-rendered pages, ' + checkedLinks + ' local links/assets, all homepage anchors, CV download, and Netlify configuration.')
