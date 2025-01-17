import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import { Link } from 'react-router-dom'

const WeightCalculator = () => {
  return (
    <>
        <Inner_banner title="Weight Calculator" />
        <section className='my-5'>
            <div className='container'>
                <div className='row'>
                    <div  className='col-lg-6'>
                        <h3 className='secTitle'>Body Mass Index</h3>
                        <p>Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo mauris, ac volutpat dui. Nullam eget enim ut .</p>
                        <div className='row mt-4'>
                            <div className='col-md-6 mb-5'>
                                <div className='d-flex flex-column'>
                                    <label className='label mb-2 small text-capitalize'>height</label>
                                    <input type='number' placeholder='Height / Cm' className='py-2 border-0 border-bottom'/>
                                </div>
                            </div>
                            <div className='col-md-6 mb-5'>
                                <div className='d-flex flex-column'>
                                    <label className='label mb-2 small text-capitalize'>Weight / Kg</label>
                                    <input type='number' placeholder='Height / Cm' className='py-2 border-0 border-bottom'/>
                                </div>
                            </div>
                            <div className='col-md-6 mb-5'>
                                <div className='d-flex flex-column'>
                                    <label className='label mb-2 small text-capitalize'>Age</label>
                                    <input type='number' placeholder='Height / Cm' className='py-2 border-0 border-bottom'/>
                                </div>
                            </div>
                            <div className='col-md-6 mb-5'>
                                <div className='d-flex flex-column'>
                                    <label className='label mb-2 small text-capitalize'>Gender</label>
                                    <select className='py-2 border-0 border-bottom text-muted'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <Link className='fill_btn py-2 text-white px-5'><span></span>Calculate BMI</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WeightCalculator