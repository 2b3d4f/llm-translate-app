import '@renderer/assets/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router'
import { routes } from '@renderer/routes'
import { ThemeProvider } from '@renderer/components/theme-provider'
const router = createHashRouter(routes)
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ipcLink } from 'electron-trpc/renderer'
import { trpcReact } from '@renderer/trpc'

const queryClient = new QueryClient()
const trpcClinent = trpcReact.createClient({
  links: [ipcLink()]
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <trpcReact.Provider client={trpcClinent} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </trpcReact.Provider>
  </React.StrictMode>
)
