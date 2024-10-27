import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router';
import Home from './Pages/Home/Home';
import Typo from './Pages/Typo/Typo';
import Auth from './Pages/Auth/Auth';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <div>404</div>,

    element:  <Router/>,
    children: [
      { 
        path: "/", 
        element: <Home />
       },
       { 
        path: "/about", 
        element: <div>about</div>
       },
       { 
        path: "/contact", 
        element: <div>contact</div>
       },
       { 
        path: "/login", 
        element: <Auth /> 
       },
       { 
        path: "/register", 
        element: <div>register</div>
       },{
        path: "/typo",
        element: <Typo /> , 
       }
    
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
