import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowerRouter} from "react-router-dom"
import RouterCustom from './router.jsx'

createRoot(document.getElementById('root')).render( 
    <BrowerRouter>
    <RouterCustom/>
    </BrowerRouter>
)
