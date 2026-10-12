import { StrictMode } from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { hydrateRoot } from 'react-dom/client'
import { readFileSync } from 'node:fs'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { App } from '../App'

beforeEach(() => {
  window.history.replaceState(null, '', '/')
  document.head.innerHTML = '<title>Portfolio</title><meta name="description" content="" /><meta property="og:title" content="" /><meta property="og:description" content="" />'
})

describe('Portfolio navigation and contact', () => {
  it('opens the menu and closes it with Escape, returning focus', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menu = screen.getByRole('button', { name: 'Menu' })
    await user.click(menu)
    expect(menu.getAttribute('aria-expanded')).toBe('true')
    expect(document.getElementById('primary-navigation')?.classList.contains('is-open')).toBe(true)
    await user.keyboard('{Escape}')
    expect(menu.getAttribute('aria-expanded')).toBe('false')
    expect(document.activeElement).toBe(menu)
  })

  it('navigates to a case study and returns to selected work', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('link', { name: 'View case study' })[0])
    expect(window.location.pathname).toBe('/projects/skyward/')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Skyward')
    expect(document.title).toBe('Skyward | Nuwanga Wijamuni')
    await user.click(screen.getByRole('link', { name: 'Back to selected work' }))
    expect(window.location.pathname).toBe('/')
    expect(window.location.hash).toBe('#work')
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Knowledge.')
  })

  it('follows the next case study and supports browser Back', async () => {
    window.history.replaceState(null, '', '/projects/skyward/')
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('link', { name: 'Gourmet Express' }))
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Gourmet Express')
    await act(async () => { window.history.back(); await new Promise(resolve => setTimeout(resolve, 30)) })
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Skyward'))
  })

  it('closes the menu after a section is selected', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Menu' }))
    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByRole('button', { name: 'Menu' }).getAttribute('aria-expanded')).toBe('false')
    expect(window.location.hash).toBe('#about')
  })

  it('copies the address and announces success', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } })
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(writeText).toHaveBeenCalledWith('nuwanga69@gmail.com')
    expect(screen.getByRole('status').textContent).toBe('Email copied.')
  })

  it('keeps a useful contact path when copying is unavailable', async () => {
    const user = userEvent.setup()
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error('Unavailable')) } })
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Copy email' }))
    expect(screen.getByRole('status').textContent).toContain('Use the email link')
    expect(screen.getByRole('link', { name: 'nuwanga69@gmail.com' }).getAttribute('href')).toBe('mailto:nuwanga69@gmail.com')
  })

  it('renders the not-found page for an unknown route', () => {
    window.history.replaceState(null, '', '/missing-page/')
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('isn’t here')
    expect(screen.getByRole('link', { name: 'Explore projects' }).getAttribute('href')).toBe('/#work')
  })

  it('handles a popstate route change', async () => {
    render(<App />)
    window.history.pushState(null, '', '/projects/document-rag/')
    fireEvent(window, new PopStateEvent('popstate'))
    await waitFor(() => expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Document RAG'))
  })
})

describe('Production hydration', () => {
  it('hydrates the actual pre-rendered homepage without recovering from a mismatch', async () => {
    const html = readFileSync('dist/index.html', 'utf8')
    const parsed = new DOMParser().parseFromString(html, 'text/html')
    document.head.innerHTML = parsed.head.innerHTML
    document.body.innerHTML = parsed.body.innerHTML
    const container = document.getElementById('root')!
    const onRecoverableError = vi.fn()
    let root: ReturnType<typeof hydrateRoot> | undefined
    await act(async () => { root = hydrateRoot(container, <StrictMode><App /></StrictMode>, { onRecoverableError }) })
    expect(onRecoverableError).not.toHaveBeenCalled()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toContain('Knowledge.')
    await act(async () => root?.unmount())
    document.body.innerHTML = ''
  })
})
