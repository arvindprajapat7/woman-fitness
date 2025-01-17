import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import AboutUs from '../components/aboutUs/AboutUs'
import FeatureSlider from '../components/Slider/Feature_slider'
import Latest_news from '../components/Latest_news/Latest_news'
import Newsletter from '../components/newsletter/Newsletter'

const About = () => {
  return (
    <>
      <Inner_banner title="About Us"/>
      <AboutUs/>
      <FeatureSlider/>
      <Latest_news/>
      <Newsletter/>
    </>
  )
}

export default About