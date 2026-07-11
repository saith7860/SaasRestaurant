import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './context/AuthContext.tsx'
import { RestaurantProvider } from './context/RestaurantContext.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <RestaurantProvider>
    <App />
    </RestaurantProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
