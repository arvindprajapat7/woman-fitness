import React from 'react'
import CountUp from 'react-countup'
const Counter = ({number, title}) => {
  return (
    <div>
        <CountUp duration={10} className="counter" end={number} />
        <h5 className='counterTitle'>{title}</h5>
    </div>
  )
}

export default Counter