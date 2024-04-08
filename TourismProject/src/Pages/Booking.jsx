import React from 'react'
import Form from '../Components/Booking/Form'
import Navbar from '../Components/Navbar'

export default function Booking() {
  return (
    <div className='h-screen '>
        <Navbar/>
        <div className='mt-5 py-5 border-2 border-black w-full'>
            <Form/>
        </div>
       
    </div>
  )
}
