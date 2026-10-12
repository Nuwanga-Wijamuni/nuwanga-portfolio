import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { loadEnv } from 'vite'
import { render, paths } from '../.prerender/entry-server.js'

const root = process.cwd()
const dist = join(root, 'dist')
const template = await readFile(join(dist, 'index.html'), 'utf8')
if (!template.includes('<!--app-html-->')) throw new Error('Prerender placeholder is missing')
const env = { ...loadEnv('production', root, ''), ...process.env }
let site = (env.VITE_SITE_URL || '').trim().replace(/\/+$/, '')
if (site) {
  const parsed = new URL(site)
  if (!['https:', 'http:'].includes(parsed.protocol) || parsed.pathname !== '/' || parsed.search || parsed.hash || parsed.username || parsed.password) throw new Error('VITE_SITE_URL must be a plain http(s) origin, without a path, query, or credentials')
  site = parsed.origin
}
function escape(value) { return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;') }
function page(path, notFound = false) {
  const result = render(path)
  const url = site + path
  const metadata = [
    notFound ? '<meta name="robots" content="noindex" />' : '',
    site && !notFound ? '<link rel="canonical" href="' + escape(url) + '" /><meta property="og:url" content="' + escape(url) + '" />' : '',
    site ? '<meta property="og:image" content="' + escape(site + '/assets/portrait.png') + '" /><meta name="twitter:image" content="' + escape(site + '/assets/portrait.png') + '" />' : '',
  ].join('')
  return template
    .replace('<!--app-html-->', result.html)
    .replace(/<title>.*?<\/title>/, '<title>' + escape(result.title) + '</title>')
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, '<meta name="description" content="' + escape(result.description) + '" />')
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, '<meta property="og:title" content="' + escape(result.title) + '" />')
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, '<meta property="og:description" content="' + escape(result.description) + '" />')
    .replace('<!--page-metadata-->', metadata)
}
for (const path of paths) {
  const file = join(dist, path.slice(1), 'index.html')
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(path))
}
await writeFile(join(dist, '404.html'), page('/404/', true))
if (site) {
  const urls = paths.map(path => '<url><loc>' + escape(site + path) + '</loc></url>').join('')
  await writeFile(join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>')
}
await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n' + (site ? '\nSitemap: ' + site + '/sitemap.xml\n' : ''))
await writeFile(join(dist, '_redirects'), '# Pages are pre-rendered into real directories. Netlify Pretty URLs handles trailing slashes.\n')
// A manual Netlify Drop upload also receives the same headers as a Git deployment.
await writeFile(join(dist, '_headers'), [
  '/*',
  '  X-Content-Type-Options: nosniff',
  '  Referrer-Policy: strict-origin-when-cross-origin',
  '  Permissions-Policy: camera=(), microphone=(), geolocation=()',
  "  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
  '/assets/*',
  '  Cache-Control: public, max-age=3600',
  '',
].join('\n'))
await rm(join(root, '.prerender'), { recursive: true, force: true })
console.log('Pre-rendered homepage, ' + (paths.length - 1) + ' case studies, and a 404 page.')
console.log(site ? 'Canonical metadata and sitemap generated for ' + site : 'Set VITE_SITE_URL when your domain is known to enable canonical metadata and the sitemap.')
