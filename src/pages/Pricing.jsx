import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import PricingCard from '../components/pricing-card/PricingCard'
import {useAppContext } from '../context/AppContext'
import Newsletter from '../components/newsletter/Newsletter'

const Pricing = () => {
    const {pricingData} = useAppContext([])
    return (
    <>
        <Inner_banner title="Our Pricing"/>
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                    {
                        pricingData?.map((plan)=>{
                            return <div className='col-lg-4 price-col' key={plan.id}>
                                <PricingCard plans={plan} />
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

export default Pricing