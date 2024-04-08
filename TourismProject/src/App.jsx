import React from 'react'
import Home from './Pages/Home'
import Booking from './Pages/Booking'
import Information from './Pages/Information'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'

export default function App() {
  return (
    <div className=''>
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/info' element={<Information/>}/>
      
    </Routes>
    </Router>
    </div>
  )
}
