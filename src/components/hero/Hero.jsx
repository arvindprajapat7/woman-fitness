import React from "react";
import Fill_btn from "../btns/Fill_btn";
import './Hero.css'
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="hero-title">We Always Focus On <span>Your Health</span></h2>
            <p className="subTitle">
              Whether your aim is to loose weight, tone up, gain weight we can
              put together a gym programme or recommend the right classes for
              you to attend in our studios.
            </p>
            <Fill_btn text="Get Started" href="#" />
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <figure>
              <img src="../../images/hero.png" alt="Trulli" className="img-fluid" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
