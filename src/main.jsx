import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import CurrencyConverter from './pages/CurrencyConverter.jsx'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
import {Home,About,CurrencyConverter}from './pages/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/currency-convertion",
        element: <CurrencyConverter />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
