// import electronLogo from './assets/electron.svg'
import Versions from '@renderer/components/Versions'
import { Button } from '@renderer/components/ui/button'
import { ModeToggle } from '@renderer/components/mode-toggle'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <ModeToggle />
      {/* <img src={electronLogo} alt="logo" /> */}
      <div>Powered by electron-vite</div>
      <div>
        Build an Electron app with React, Typescript, React Router, Tailwind CSS and shadcn/ui
      </div>
      <p>
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div>
        <Button asChild>
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </Button>
        <Button onClick={ipcHandle}>Send IPC</Button>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
