import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

import CurrencyConverter from './pages/CurrencyConverter.jsx'
import Navbar from './components/Navbar.jsx'

function App() {


  return (
    <div className='w-full block'>
      <Navbar />
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <main>
        <Outlet />
      </main>
    </div>
  )

};

export default App
