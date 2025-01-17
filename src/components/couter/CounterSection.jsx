import React from 'react'
import Counter from './Counter'
import './Counter.css'
const CounterSection = () => {
  return (
    <section className='counterSection'>
        <div className='container'>
          <div className='counterCard'>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <div className='card p-5 bg-transparent border-0'>
                      <Counter number={105} title="Happy Clients"/>
                    </div>
                </div>
                <div className='col-md-4 text-center'>
                    <div className='card p-5 bg-transparent border-0'>
                      <Counter number={855} title="Cup of Tea"/>
                    </div>
                </div>
                <div className='col-md-4 text-center'>
                    <div className='card p-5 bg-transparent border-0'>
                      <Counter number={1050} title="Online Session Done"/>
                    </div>
                </div>
            </div>
            <span className='topShape'>
              <svg class="triangle1" width="250" height="70" viewBox="0 0 250 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M250 32L0 70L40 0L250 32Z" fill="url(#paint0_linear_58_264)"></path>
                <defs>
                  <linearGradient id="paint0_linear_58_264" x1="131.123" y1="34.448" x2="-0.36495" y2="34.448" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stop-color="var(--primary-dark)">
                    <stop offset="1" stop-color="var(--primary)">
                  </stop></stop></linearGradient>
                </defs>
              </svg>
            </span>
            <span className='bottomShape'>
              <svg class="triangle2" width="250" height="71" viewBox="0 0 250 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 38.3735L250 0.373535L210 70.3735L0 38.3735Z" fill="url(#paint0_linear_58_261)"></path>
                <defs>
                  <linearGradient id="paint0_linear_58_261" x1="118.877" y1="35.9255" x2="250.365" y2="35.9255" gradientUnits="userSpaceOnUse">
                    <stop offset="1" stop-color="var(--primary-dark)">
                    <stop offset="1" stop-color="var(--primary)">
                  </stop></stop></linearGradient>
                </defs>
              </svg>
            </span>
          </div>
            
        </div>
    </section>
  )
}

export default CounterSection