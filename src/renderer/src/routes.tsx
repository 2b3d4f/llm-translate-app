import { createRoutesFromElements, Route } from 'react-router'

import App from './routes/App'

const routes = createRoutesFromElements(
  <>
    <Route path="/">
      <Route index element={<App />} />
    </Route>
  </>
)

export default routes
