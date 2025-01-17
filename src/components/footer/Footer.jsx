import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin,FaInstagram } from "react-icons/fa";
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 mb-4 mb-lg-0'>
                    <img src='../../images/logo.svg'/>
                    <p className='mt-3'>A Wonderful Serenity Has Taken Possession Of My Entire Soul, Like These.</p>

                    <h5 className='fw-bold mt-4'>Follow Us</h5>
                    <ul className='list-unstyled social_icons d-flex '>
                        <li>
                            <Link><FaFacebook/></Link>
                        </li>
                        <li>
                            <Link><FaTwitter/></Link>
                        </li>
                        <li>
                            <Link><FaLinkedin/></Link>
                        </li>
                        <li>
                            <Link><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3 mb-4 mb-lg-0'>
                    <h3 className='fw-bold'>Blog Post</h3>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to="" className='text-dark'>Tips for making a good fitness even.</Link>
                            <p>August 28, 2022
                            </p>
                        </li>
                        <li>
                            <Link to="" className='text-dark'>Tips for making a good fitness even.</Link>
                            <p>August 28, 2022
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-3 mb-4 mb-lg-0'>
                    <h3 className='fw-bold'>Quick Links</h3>
                    <ul className='list-unstyled'>
                        <li>
                            <Link to={`team`} onClick={()=>scrollTo(0,0)} className='text-dark'>Our Team</Link>
                        </li>
                        <li>
                            <Link to={`faq`} onClick={()=>scrollTo(0,0)} className='text-dark'>FAQ</Link>
                        </li>
                        <li>
                            <Link to={`pricing`} onClick={()=>scrollTo(0,0)} className='text-dark'>Pricing</Link>
                        </li>
                        <li>
                            <Link to={`weight-calculator`} onClick={()=>scrollTo(0,0)} className='text-dark'>Weight Calculator</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer