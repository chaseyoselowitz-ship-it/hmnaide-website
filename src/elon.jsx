import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import './index.css'
import './elon.css'
import ElonOptin from './components/ElonOptin.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ElonOptin />
  </StrictMode>,
)
