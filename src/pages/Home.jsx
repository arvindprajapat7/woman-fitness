import React from 'react'
import Hero from '../components/hero/Hero'
import Perfect_trainer from '../components/perfect-trainer/Perfect_trainer'
import CounterSection from '../components/couter/CounterSection'
import AboutUs from '../components/aboutUs/AboutUs'
import Services from '../components/services_section/Services'
import Feature_slider from '../components/Slider/Feature_slider'
import Testimonial from '../components/Testimonial/Testimonial'
import Latest_news from '../components/Latest_news/Latest_news'
import Newsletter from '../components/newsletter/Newsletter'
const Home = () => {
  return (
    <>
        <Hero/>
        <Perfect_trainer/>
        <CounterSection/>
        <AboutUs/>
        <Services/>
        <Feature_slider/>
        <Testimonial/>
        <Latest_news/>
        <Newsletter/>
    </>
  )
}

export default Home