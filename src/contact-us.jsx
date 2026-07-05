import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import './index.css'
import ContactUs from './components/ContactUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>,
)
