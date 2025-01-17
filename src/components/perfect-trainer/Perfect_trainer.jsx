import React from 'react'
import { cate } from '../../assets/data/perfect_trainer'
import './perfect_trainer.css'
import Fill_btn from '../btns/Fill_btn'
const Perfect_trainer = () => {
  return (
    <>
        <section className='perfect_trainer'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <figure className='mb-0'>
                            <img src='../../images/trainer.png' alt='trainer image' className='img-fluid'/>
                        </figure>
                    </div>
                    <div className='col-lg-6'>
                        <h6 className='upTitle text-uppercase'>GET YOUR PERFECT WORKOUT</h6>
                        <h2 className='secTitle'>Perfect <span>Trainer</span></h2>
                        <p>Nunc vulputate urna ut erat posuere accumsan. Curabitur ut commodo mauris, ac volutpat dui. Nullam eget enim ut mi bibendum ultrices. Pellentesque non feugiat nisi. Nam aliquam accumsan ante, ut accumsan risus.</p>
                        <div className='row'>
                            {
                                cate.map((item)=>{
                                    return(
                                        <div className='col-md-6 mb-4' key={item.id}>
                                            <div className='card border-0 shadow-sm p-3 h-100 rounded-0'>
                                                <div className='d-flex align-items-center wrapper'>
                                                    <img src={item.icon} width="40px" className='me-4'/>
                                                    <h5>{item.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='mt-5'>
                            <Fill_btn text="About Trainer" href="#" />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Perfect_trainer