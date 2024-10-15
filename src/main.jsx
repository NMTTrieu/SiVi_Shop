import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import {BrowserRouter} from "react-router-dom"
import RouterCustom from './router.jsx'
import './style/style.scss'
import './style/pages/_all.scss'
import {formatter} from './utils/formatter'

createRoot(document.getElementById('root')).render( 
<StrictMode>
   <BrowserRouter>
    <RouterCustom/>
  </BrowserRouter>
</StrictMode>
)
