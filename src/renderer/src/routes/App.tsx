import { Outlet } from 'react-router'
import { Titlebar } from '../components/Titlebar'

function App(): JSX.Element {
  return (
    <>
      <Titlebar />
      <Outlet />
    </>
  )
}

export default App
