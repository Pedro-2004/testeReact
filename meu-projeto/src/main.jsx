import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './compose/TextVisualization/index.jsx';
import Button from './compose/ButtonTest/index.jsx';
import Titulo from './compose/Title/index.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
