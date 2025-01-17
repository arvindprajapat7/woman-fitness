import React, { useState, useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import Fill_btn from '../btns/Fill_btn';
import './pricing.css'

const PricingCard = ({plans}) => {
  
  return (
    <div className={`pricing-card px-4 pb-4 ${plans.planName === 'ultra' ? 'active' : ''}` }  >
      
        <div className='d-flex'><p className='plan-name px-4 py-2 text-capitalize'>{plans.planName}</p></div>
        <div >
            <h4 className='price py-2'>${plans.price} <sub>/Month</sub></h4>
            <p>{plans.shortDesc}</p>
            <hr/>
            <ul className='list-unstyled'>
                {
                    plans.details?.map((detail,index)=>{
                        return <li className='py-2'>
                        <span className='me-2 icon'><FaCheckCircle/></span>
                        <span className='text'>{detail.listItem}</span>
    
                    </li>
                    })
                }
            </ul>
            <Fill_btn href={`/contact`} text="contact us"/>
        </div>
    </div>
  )
}

export default PricingCard