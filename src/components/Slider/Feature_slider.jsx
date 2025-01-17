// src/FeatureSlider.js
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Feature_slider.css'

const FeatureSlider = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef1.current && sliderRef2.current) {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
    }
  }, []);

  return (
    <section className='feature_slider position-relative'>
      <div className='container'>
        <Slider {...settings} asNavFor={nav2} ref={sliderRef1}>
          <div className="item">
            <img src="images/couple-workout1.jpg" className='img-fluid' alt="1" />
            <div className='overlayText'>
              <h3 className='slide-text'>What Can You Do About Fitness.</h3>
              </div>
          </div>
          <div className="item">
            <img src="images/couple-workout1.jpg" className='img-fluid' alt="2" />
            <div className='overlayText'>
              <h3 className='slide-text'>What Can You Do About Fitness.</h3>
              </div>
          </div>
          <div className="item">
            <img src="images/couple-workout1.jpg" className='img-fluid' alt="3" />
            <div className='overlayText'>
              <h3 className='slide-text'>What Can You Do About Fitness.</h3>
              </div>
          </div>
          <div className="item">
            <img src="images/couple-workout1.jpg" className='img-fluid' alt="4" />
            <div className='overlayText'>
              <h3 className='slide-text'>What Can You Do About Fitness.</h3>
              </div>
          </div>
          <div className="item">
            <img src="images/couple-workout1.jpg" className='img-fluid' alt="5" />
            <div className='overlayText'>
              <h3 className='slide-text'>What Can You Do About Fitness.</h3>
              </div>
          </div>
        </Slider>
      </div>
      <span className='shape-top'>
        <svg class="shape-up" width="635" height="107" viewBox="0 0 635 107" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M577 0L-16 107L635 45L577 0Z" fill="var(--primary-dark)"></path>
        </svg>
      </span>
      <span className='shape-bottom'>
      <svg class="shape-down" width="673" height="109" viewBox="0 0 673 109" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M682 0L0 56L682 109V0Z" fill="var(--primary)"></path>
			</svg>
      </span>
    </section>
  );
};

export default FeatureSlider;
