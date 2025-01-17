import React from 'react'
import Fill_btn from '../btns/Fill_btn'

const Contact_form = () => {
  return (
    <div className='row'>
        <div className='col-lg-6'>
            <input type='text' className='w-100 mb-3 border p-2' placeholder='Enter First Name'/>
        </div>
        <div className='col-lg-6'>
            <input type='text' className='w-100 mb-3 border p-2' placeholder='Enter Last Name'/>
        </div>
        <div className='col-lg-6'>
            <input type='text' className='w-100 mb-3 border p-2' placeholder='Enter Email'/>
        </div>
        <div className='col-lg-6'>
            <input type='text' className='w-100 mb-3 border p-2' placeholder='Enter Phone Number'/>
        </div>
        <div className='col-lg-12'>
            <textarea className='w-100 mb-3 border p-2' placeholder='Message' rows="4"></textarea>
        </div>
        <div className='d-flex justify-content-center'>
            <Fill_btn text="submit" href="#"/>
        </div>
    </div>
  )
}

export default Contact_form