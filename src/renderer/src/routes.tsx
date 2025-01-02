import { createRoutesFromElements, Route } from 'react-router'
import App from '@renderer/routes/App'
import Layout from '@renderer/layouts/Layout'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<App />}></Route>
  </Route>
)
