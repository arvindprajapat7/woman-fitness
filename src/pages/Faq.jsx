import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import { useAppContext } from '../context/AppContext'
import AccordionItem from '../components/accordion-item/AccordionItem';

const Faq = () => {
    const {faqData}= useAppContext();
  return (
    <>
        <Inner_banner title="FAQ"/>
        <section className='py-5'>
            <div className='container'>
                <div className="accordion" id="accordionExample">
                    <div className='row'>
                        <ul className='list-unstyled faq-ul'>
                            
                        {
                            faqData?.map((faqItem, index)=>{
                                return <li key={index}><AccordionItem faqItem={faqItem} /></li>
                            })
                        }
                                                </ul>

                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default Faq