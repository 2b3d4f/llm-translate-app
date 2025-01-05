import Versions from '../components/Versions'
import electronLogo from '../assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img
        alt="logo"
        className="mb-5 h-32 w-32 will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_1.2em_#6988eeaa]"
        src={electronLogo}
      />
      <div className="text-sm font-semibold mb-3 text-zinc-400">Powered by electron-vite</div>
      <div className="text-3xl font-bold text-center my-2 px-4 text-zinc-300">
        Build an Electron app with{' '}
        <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-blue-500 bg-clip-text text-transparent">
          React
        </span>
        &nbsp;and{' '}
        <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-yellow-300 bg-clip-text text-transparent">
          TypeScript
        </span>
      </div>
      <p className="text-base font-semibold text-zinc-400">
        Please try pressing{' '}
        <code className="font-mono font-bold px-1 py-[2px] bg-zinc-800 rounded-sm">F12</code> to
        open the devTool
      </p>
      <div className="flex pt-8 -m-2 flex-wrap justify-start">
        <div className="flex-shrink-0 p-2">
          <a
            href="https://electron-vite.org/"
            target="_blank"
            rel="noreferrer"
            className="text-sm cursor-pointer inline-block font-semibold leading-10 px-5 rounded-full bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-zinc-200"
          >
            Documentation
          </a>
        </div>
        <div className="flex-shrink-0 p-2">
          <button
            onClick={ipcHandle}
            className="text-sm cursor-pointer inline-block font-semibold leading-10 px-5 rounded-full bg-zinc-700 hover:bg-zinc-600 text-zinc-300 hover:text-zinc-200"
          >
            Send IPC
          </button>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
