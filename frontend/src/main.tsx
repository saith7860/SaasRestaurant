import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { RestaurantProvider } from './context/RestaurantContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <RestaurantProvider>
    <App />
    </RestaurantProvider>
    </BrowserRouter>
  </StrictMode>,
)
