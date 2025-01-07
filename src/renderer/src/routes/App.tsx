import { Outlet } from 'react-router'
import { Titlebar } from '../components/Titlebar'
import { ThemeProvider } from '../components/theme-provider'

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Titlebar />
        <Outlet />
      </ThemeProvider>
    </>
  )
}

export default App
