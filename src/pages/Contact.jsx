import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import Contact_form from '../components/contact_form/Contact_form'

const Contact = () => {
  return (
    <>
        <Inner_banner title="Contact Us"/>
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 mx-auto'>
                        <h3 className='fw-bold mb-4 text-center'>Fill the Contact Details</h3>
                        <Contact_form/>
                    </div>
                </div>
            </div>
        </section>
        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491618396!2d77.30126131735639!3d12.95445953778702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723490834024!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </>
  )
}

export default Contact