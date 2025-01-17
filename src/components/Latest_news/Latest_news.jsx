import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Latest_news.css'
import Fill_btn from '../btns/Fill_btn'
import newsList from '../../assets/data/news';
import NewsCard from './NewsCard';
const Latest_news = () => {
  
    var settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
     
    
  return (
    <section className='py-5 news-section'>
        <div className='container'>
            <div className="row align-items-center mb-5">
                <div className="col-lg-8">
                    <h2 className='secTitle'>Latest <span>News Feed</span></h2>                    
                </div>
                <div className='col-lg-4 text-end'>
                    <Fill_btn text="Show All" href="#"/>
                </div>
            </div>
            <Slider {...settings1}>
                {
                    newsList?.map((newsItem, index)=>{
                        return <NewsCard key={newsItem.id} newsItem={newsItem}/>
                    })
                }
                

            </Slider>
        </div>
    </section>
  )
}

export default Latest_news