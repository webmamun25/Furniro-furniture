import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Router/router.jsx'
import Container from './Components/ui/Container.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
  <RouterProvider router={router} >
  <React.StrictMode>
  
    <App />
   
    
  </React.StrictMode>
 </RouterProvider>
 </Container>
)
