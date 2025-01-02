import { Outlet } from 'react-router'

export default function Layout(): JSX.Element {
  return (
    <>
      <main className="h-full">
        <Outlet />
      </main>
    </>
  )
}
