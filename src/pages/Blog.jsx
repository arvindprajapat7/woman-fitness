import React from 'react'
import Inner_banner from '../components/inner-banner/Inner_banner'
import NewsCard from '../components/Latest_news/NewsCard'
import { useAppContext } from '../context/AppContext'
const Blog = () => {
  const {newsList} = useAppContext();
  return (
    <>
        <Inner_banner title="Blog"/>
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
             {
                    newsList?.map((newsItem, index)=>{
                        return (
                          <div className='col-md-6 col-lg-4 mb-4' key={newsItem.id}>
                             <NewsCard  newsItem={newsItem} />
                          </div>
                        )
                    })
                }
            </div>
          </div>
        </section>
    </>
  )
}

export default Blog