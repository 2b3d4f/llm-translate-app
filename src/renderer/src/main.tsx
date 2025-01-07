import './assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { ipcLink } from 'electron-trpc/renderer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpcReact } from './trpc'

const queryClient = new QueryClient()
const trpcClinent = trpcReact.createClient({
  links: [ipcLink()]
})

import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <trpcReact.Provider client={trpcClinent} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpcReact.Provider>
  </React.StrictMode>
)
