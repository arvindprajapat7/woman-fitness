import React from 'react'
import './About.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CallUs from '../call-us/CallUs';
import Image_thumb from '../image-thumbs/Image_thumb';

const AboutUs = () => {
  return (
    <section className='aboutUs'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <h6 className='upTitle text-uppercase'>ABOUT US</h6>
                    <h2 className='secTitle'>We Help To Get  <span>Fitness </span>Goal</h2>
                    <p className='sec_subtitle'>We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight</p>
                    
                    <div className='tabs_area'>
                        <div className='d-flex'>
                            <ul class="nav nav-tabs p-2" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><span>Our Mission</span> </button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><span>Our Vision</span></button>
                                </li>
                              
                            </ul>
                        </div>
                        <div class="tab-content pt-4    " id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>
                                We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend.

                                </p>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p>
                                We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to loose weight, tone up, build bulk or gain weight we can put together a gym programme or recommend.


                                </p>
                            </div>
                        </div>
                    </div>
                    <CallUs/>
                </div>
                <div className='col-lg-6 position-relative imageCol'>
                    <Image_thumb imgUrl="../../public/images/couple-workout1.jpg" imgDirection="left" />
                    <br/><br/>
                    <Image_thumb imgUrl="../../public/images/couple-workout2.jpg" imgDirection="right" />
                    <div className='behind-circle'>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs