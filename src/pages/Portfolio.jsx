import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import { portfolio } from '../assets/data/portfolio'
import Newsletter from '../components/newsletter/Newsletter'

const Portfolio = () => {
  return (
    <>
        <Inner_banner title="Portfolio "/>
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    {
                        portfolio?.map((portfolio_item, index)=>{
                            return <div className='col-md-6 col-lg-4 mb-4'>
                                <div className='portfolio_card'>
                                    <div className='portfolio_img'>
                                        <img src={portfolio_item.url} className='img-fluid' alt={portfolio_item.title}/>
                                    </div>
                                    <div className='py-2'>
                                        <h5 className='fw-bold'>{portfolio_item.title}</h5>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
        <Newsletter/>
    </>
  )
}

export default Portfolio