import { createRoutesFromElements, Route } from 'react-router'

import App from './routes/App'

const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />} />
  </Route>
)

export default routes
