import React from 'react'
import Fill_btn from '../btns/Fill_btn'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ser_item}) => {
  const navigate = useNavigate();
  return (
    <div className='col-md-6 col-lg-3 service-card-col'>
        <div className='card serviceCard border-0 p-4 h-100'>
            <div className='iconImg d-flex justify-content-center align-items-center'>
                <img src={ser_item.iconImg} alt={ser_item.service_title} width="60"/>
            </div>
            <div className='ser_details'>
                <h4>{ser_item.service_title}</h4>
                <p>{ser_item.description}</p>
                <Fill_btn text="Read More" href={`/services/${ser_item.category}`} />
            </div>
        </div>
    </div>
  )
}

export default ServiceCard