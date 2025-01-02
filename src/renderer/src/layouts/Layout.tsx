import { Link, Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to="/second">Second page</Link>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
