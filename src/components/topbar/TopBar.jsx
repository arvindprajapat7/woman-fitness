import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaRegClock,FaPhoneAlt } from "react-icons/fa";
import './topbar.css'

const TopBar = () => {
  return (
    <div className='topbar py-2 d-none d-md-block'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-md-4'>
                    <Link to='' className='d-flex align-items-center'>
                        <MdOutlineEmail/>
                        info@example.com
                    </Link>
                </div>
                <div className='col-md-8 text-right'>
                    <div className='d-flex justify-content-end'>
                        <Link to='' className='me-4 d-flex align-items-center'>
                            <FaRegClock/>
                            Time 6:00 AM To 08:00PM
                        </Link>
                        <Link to='' className='d-flex align-items-center'>
                            <FaPhoneAlt/>
                            +91-123456789
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default TopBar