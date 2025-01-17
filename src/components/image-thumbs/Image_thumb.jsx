import React from 'react'
import './Image_thumb.css'
import { CiPlay1 } from "react-icons/ci";

const Image_thumb = ({imgUrl, imgDirection}) => {
  return (
    <div className='d-flex'>
        <div className={`image-card ${imgDirection==='left'?'me-auto':'ms-auto leftOrigin'} w-75 position-relative`}>
            <figure className='mb-0'>
                <img src={imgUrl} className='img-fluid ' />
                <figcaption className={`p-2 `} style={{left: imgDirection === 'left' ? '82%' : '-26%'}}>
                    <div className='cap_content'>
                        <CiPlay1/>
                        High Quality video
                    </div>
                </figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Image_thumb