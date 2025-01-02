import { createRoutesFromElements, Route } from 'react-router'
import App from './App'
import Layout from './Layouts'
import Second from './Second'

export const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<App />}></Route>
    <Route path="/second" element={<Second />}></Route>
  </Route>
)
