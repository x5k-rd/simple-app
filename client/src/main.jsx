import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// wrap app with browser router
import {BrowserRouter as Router} from 'react-router-dom'

// wrapped app with router by adding <Router> tag to use them
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
)
