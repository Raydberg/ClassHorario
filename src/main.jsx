import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Horario } from './page/Horario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Horario />
  </StrictMode>,
)
