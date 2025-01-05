import './assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
