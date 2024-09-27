import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import {BrowserRouter} from "react-router-dom"
import RouterCustom from './router.jsx'
import HomePage from './pages/users/homePage/index.jsx'

createRoot(document.getElementById('root')).render( 
<StrictMode>
   <BrowserRouter>
    <RouterCustom/>
  </BrowserRouter>
</StrictMode>
)
