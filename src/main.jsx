import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import Blog_details from './pages/Blog_details.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Service_detail from './pages/Service_detail.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import NotFound from './pages/NotFound.jsx'
import Team from './pages/Team.jsx'
import Faq from './pages/Faq.jsx'
import Pricing from './pages/Pricing.jsx'
import WeightCalculator from './pages/WeightCalculator.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    errorElement:<NotFound/>,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'contact',
        element:<Contact/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'blog/:id',
        element:<Blog_details/>
      },
      {
        path:'portfolio',
        element:<Portfolio/>
      },
      {
        path:'about', 
        element:<About/>
      },
      {
        path:'services', 
        element:<Services/>
      },
      {
        path:'services/:category', 
        element:<Service_detail/>
      },
      {
        path:'team',
        element:<Team/>
      },
      {
        path:'faq',
        element:<Faq/>
      },
      {
        path:'pricing',
        element:<Pricing/>
      },
      {
        path:'weight-calculator',
        element:<WeightCalculator/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
    <RouterProvider router={router}/>
    </AppContextProvider>
  </React.StrictMode>,
)
