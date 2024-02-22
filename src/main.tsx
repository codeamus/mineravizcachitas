import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import Route from './routes'
import '@fontsource-variable/montserrat'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Route />
    </HelmetProvider>
  </React.StrictMode>
)
