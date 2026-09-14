import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Latin subsets only. The site never sets another script, so the CSS bundle
// stops carrying @font-face blocks for cyrillic, greek, and vietnamese.
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-800.css'
import './index.css'
import { installCalendlyLoader } from './calendly.js'
import App from './App.jsx'

installCalendlyLoader()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
