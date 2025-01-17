import React, { useState } from 'react'
import './trainer.css'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const TrainerCard = ({trainer}) => {
    const {name, image, trainerType, socialMediaLinks} = trainer;
    // console.log('name :' , name , " ----- image : ", image , ' ------ socialMediaLinks :' , socialMediaLinks )
  return (
    <div className='col-md-6 col-lg-4'>
        <div className='trainer-card' >
            <div className='trainer-image position-relative'>
                <img src={image} alt={name} className='img-fluid'/>
                <div className='social-links tr1'>
                    <ul className='list-unstyled'>
                       <li>
                            <Link className='tr1' to={socialMediaLinks.facebook}><FaFacebook/></Link>
                       </li>
                       <li>
                            <Link className='tr1' to={socialMediaLinks.instagram}><FaInstagram/></Link>
                       </li>
                       <li>
                            <Link className='tr1' to={socialMediaLinks.twitter}><FaTwitter/></Link>
                       </li>
                    </ul>
                </div>
            </div>
            <div className='trainer-details text-end'>
                <h4 className='trainer-name  p-3 m-0 tr1'>{name}</h4>
                <p className='trainer-type p-3 mb-0 tr1 ms-3'>{trainerType}</p>
            </div>
        </div>
    </div>
  )
}

export default TrainerCard