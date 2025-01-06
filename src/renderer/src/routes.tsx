import { createRoutesFromElements, Route } from 'react-router'

import App from './routes/App'
import Hello from './routes/Hello'
import Translator from './routes/Translator'

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Translator />} />
      <Route path="hello" element={<Hello />} />
    </Route>
  </>
)

export default routes
