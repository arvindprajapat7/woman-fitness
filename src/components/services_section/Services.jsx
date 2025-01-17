import React from 'react'
import './services.css'
import servicesList from '../../assets/data/servicesList'
import Fill_btn from '../btns/Fill_btn'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <section className='py-5'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-7'>
                    <div className='sectionHead ps-5 position-relative'>
                        <h6 className='upTitle text-uppercase'>OUR SERVICES</h6>
                        <h2 className='secTitle'>Bring Your Fitness Ideas To Life</h2>
    
                    </div>                        
                </div>
                <div className='col-lg-5 d-none d-lg-block'>
                    <div className='d-flex justify-content-end'>
                        <Fill_btn text="View All" href="#" />
                    </div>
                </div>
            </div>
            <div className='row mt-5 pt-5'>
                {
                    servicesList.slice(0,4).map((ser_item, index)=>{
                        return (
                            <ServiceCard key={index} ser_item={ser_item}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Services