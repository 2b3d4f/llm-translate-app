import { createRoutesFromElements, Route } from 'react-router'

import App from './routes/App'
import Hello from './routes/Hello'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Hello />} />
    </Route>
  </>
)

export default routes
