import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style/index.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import { ToastContainer } from 'react-toastify';
import Header from './Components/Header/Header'


function App() {
  return (
    <div>
      <div className='bgImage'>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App