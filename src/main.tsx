import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import './styles.css'
import { App } from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Portfolio root is missing')
const app = <StrictMode><App /></StrictMode>
if (container.querySelector('[data-app]')) hydrateRoot(container, app)
else createRoot(container).render(app)
