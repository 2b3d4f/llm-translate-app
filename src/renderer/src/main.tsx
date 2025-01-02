import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router'
import App from './App'
import Second from './Second'
import { Link } from 'react-router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
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
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
