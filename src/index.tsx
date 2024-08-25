import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "@/ui/app";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <div className="flex h-screen w-screen">
    <StrictMode>
      <App />
    </StrictMode>
  </div >
)
