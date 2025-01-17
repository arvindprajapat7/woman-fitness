import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import TrainerCard from '../components/trainer-card/TrainerCard'
import { useAppContext } from '../context/AppContext';
import Newsletter from '../components/newsletter/Newsletter';

const Team = () => {
    const {trainerData} = useAppContext();
    
  return (
    <>
        <Inner_banner title="Our Team"/>
        <section className='py-5'>
            <div className='container'>
                <div className='row'>
                {
                    trainerData?.map((trainer, index)=> 
                        // console.log(trainer)
                        <TrainerCard trainer={trainer} key={index}/>
                     )
                }
                </div>
            </div>
        </section>
        <Newsletter/>
    </>
  )
}

export default Team