import { createRoutesFromElements, Route } from 'react-router'
import App from '@renderer/routes/App'
import Layout from '@renderer/layouts/Layout'
import Second from '@renderer/routes/Second'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<App />}></Route>
    <Route path="/second" element={<Second />}></Route>
  </Route>
)
