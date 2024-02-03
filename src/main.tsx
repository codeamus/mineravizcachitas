import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { HelmetProvider } from 'react-helmet-async'
import Route from './routes'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <HelmetProvider>
        <Route />
      </HelmetProvider>
    </NextUIProvider>
  </React.StrictMode>
)
