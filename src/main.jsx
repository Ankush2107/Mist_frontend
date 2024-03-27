import './index.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  // Activated routing in the application
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
