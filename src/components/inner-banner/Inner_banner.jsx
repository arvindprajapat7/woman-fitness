import React from 'react'
import './Inner_banner.css'
import { Link } from 'react-router-dom'
const Inner_banner = ({title}) => {
  return (
    <section className='innerBanner'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 mx-auto text-center'>
                    <h2>{title}</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mt-3">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Inner_banner