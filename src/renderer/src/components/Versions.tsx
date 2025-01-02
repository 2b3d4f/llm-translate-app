import { trpcReact } from '@renderer/trpc'

function Versions(): JSX.Element {
  const versionsQuery = trpcReact.versions.useQuery()

  const versions = versionsQuery.data ?? {
    electron: '0.0.0',
    chrome: '0.0.0',
    node: '0.0.0'
  }

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
    </ul>
  )
}

export default Versions
