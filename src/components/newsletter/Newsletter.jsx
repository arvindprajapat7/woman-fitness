import React from 'react'
import Fill_btn from '../btns/Fill_btn'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <section className='newsletter'>
        <div className='container '>
            <div className='newsletter_card p-5 shadow'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <h2 className='newsletter_title'>Subscribe To our newsletter</h2>
                        <p>It is a long established fact that a reader will distracted.</p>
                    </div>
                    <div className='col-lg-6'>
                        <div className='newsletter_form d-flex justify-content-between align-items-center flex-column flex-md-row'>
                            <div className='inputWrapper bg-white mb-2 mb-md-0'>
                                <input type="text" placeholder='Enter Your Email Address...' className='border-0 px-3 py-2 me-2 w-100'/>
                            </div>
                            <Fill_btn text="Subscribe Now" href="#"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter