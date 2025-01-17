import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import './Callus.css'

const CallUs = () => {
  return (
    <div className='call-us'>
        <div className='d-flex'>
            <div className='call-icon d-flex align-items-center justify-content-center'>
                <IoCallOutline />
            </div>
            <div className='call-details ms-3'>
                <h6>Call us for help</h6>
                <h2><a href='tel:12 452 1505' className='tr1'>12 452 1505</a></h2>
            </div>
        </div>
    </div>
  )
}

export default CallUs