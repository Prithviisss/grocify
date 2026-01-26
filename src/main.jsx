import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './Context/WishlistContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
    <App />
    </WishlistProvider>
  </StrictMode>,
)
