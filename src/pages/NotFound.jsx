import React from 'react'
import { Navbar } from 'react-bootstrap'
import Fill_btn from '../components/btns/Fill_btn'

const NotFound = () => {
  return (
    <>
        <section className='error-page d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='col-lg-8 mx-auto text-center'>
                    <h3 className='error-title'>404</h3>
                    <h4 className='error-subtitle'>We are sorry. But the page you are looking for cannot be found.
                    </h4>
                    <div className='d-flex justify-content-center mt-5'>
                        <Fill_btn text="Go to Home page" href='/'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default NotFound