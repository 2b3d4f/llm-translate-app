import { Outlet } from 'react-router'
import TitleBar from '../components/TitleBar'

function App(): JSX.Element {
  return (
    <>
      <TitleBar />
      <Outlet />
    </>
  )
}

export default App
