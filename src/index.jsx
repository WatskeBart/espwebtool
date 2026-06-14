import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import GlobalStyles from '@mui/material/GlobalStyles'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles styles={{ body: { margin: 0 } }} />
    <App />
  </React.StrictMode>
)
