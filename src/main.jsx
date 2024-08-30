import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

if (!localStorage.getItem('dark')) {
  localStorage.setItem('dark', 'false')
} else if (localStorage.getItem('dark') == 'true') {
  document.getElementsByTagName("html")[0].classList.toggle('dark');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
