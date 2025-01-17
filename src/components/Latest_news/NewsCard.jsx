import React from 'react'
import './Latest_news.css'
import { LuDot } from "react-icons/lu";
import Fill_btn from '../btns/Fill_btn'

const NewsCard = ({newsItem}) => {
  return (
    <div>
        <div className='newsCard p-3 shadow my-4'>
            <div className='contentWrapper'>
                <div className='card-img'>
                    <img src={newsItem.news_image} className='img-fluid' alt={newsItem.newTitle}/>
                </div>
                <div className='news_details py-3 h-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='authorDetail d-flex align-items-center'>
                            <div className='img me-2'>
                                <img src={newsItem.author.img} alt={newsItem.author.name} className='rounded-circle'/>
                            </div>
                            <p className='author-name small mb-0 noWrap'> {newsItem.author.name}</p>
                        </div>
                        <div className='posted_date d-flex  align-items-center'>
                            <LuDot/>
                            <p className='mb-0 small noWrap'>{newsItem.posted_date}</p>
                        </div>
                    </div>
                    <h3 className='news_title mt-3'>{newsItem.newTitle.slice(0,40)}</h3>
                    <p className='description'>{newsItem.description.slice(0, 100)+ '...'}</p>
                </div>
                <div className='card-footer pb-4'>
                    <Fill_btn text="Read More" href={`/blog/${newsItem.id}`}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsCard