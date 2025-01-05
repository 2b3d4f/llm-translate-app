import { useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  return (
    <ul className="absolute bottom-8 mx-auto py-4 inline-flex overflow-hidden items-center rounded-full backdrop-blur-xl bg-zinc-800 font-mono">
      <li className="block float-left border-zinc-700 border-r-2 text-zinc-300 text-sm leading-4 last:border-none px-5">
        Electron v{versions.electron}
      </li>
      <li className="block float-left border-zinc-700 border-r-2 text-zinc-300 text-sm leading-4 last:border-none px-5">
        Chromium v{versions.chrome}
      </li>
      <li className="block float-left border-zinc-700 border-r-2 text-zinc-300 text-sm leading-4 last:border-none px-5">
        Node v{versions.node}
      </li>
    </ul>
  )
}

export default Versions
