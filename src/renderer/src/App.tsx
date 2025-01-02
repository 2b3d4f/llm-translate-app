import ActionButton from './components/ActionButton'
// import electronLogo from './assets/electron.svg'
import Versions from './components/Versions'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      {/* <img src={electronLogo} alt="logo" /> */}
      <div>Powered by electron-vite</div>
      <div>Build an Electron app with React, Typescript, React Router, Tailwind CSS</div>
      <p>
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div>
        <ActionButton onClick={ipcHandle}>Send IPC</ActionButton>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
