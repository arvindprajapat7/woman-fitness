import React from 'react'
import { Link } from 'react-router-dom'
import "./btn.css"
const Fill_btn = ({text, href}) => {
  return (
    <Link className='fill_btn ps-4 pe-5 py-2 text-white' to={href} onClick={()=>scrollTo(0,0)}><span></span>{text}</Link>
  )
}

export default Fill_btn