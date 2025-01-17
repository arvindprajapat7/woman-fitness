import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Inner_banner from '../components/inner-banner/Inner_banner';
import { GoDotFill } from "react-icons/go";
import NewsCard from '../components/Latest_news/NewsCard';
import { IoSearch } from "react-icons/io5";
import { useAppContext } from '../context/AppContext';
import Newsletter from '../components/newsletter/Newsletter';


const Blog_details = () => {
  const {newsList} = useAppContext();
  const [blogDetail, setBlogDetail] = useState(null); // Initialize as null
  const { id } = useParams();

  const uniqueCat = [...new Set(newsList.map((catItem)=> catItem.category))]
  const fetchBlogDetails = async () => {
    const res = newsList.find((blog) => blog.id == id); 
    if(res){
      setBlogDetail(res);
    }else{
      console.log('blog detail not found')
    }
  };

  useEffect(() => {
    if(newsList.length){
      fetchBlogDetails();
    }
  }, [id, newsList]); // No need to include newsList in the dependency array
  if (!blogDetail) {
    return <p>Loading service details...</p>;
  }

  return (
    <>
        <Inner_banner title={blogDetail.newTitle} />
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <figure>
                  <img src={blogDetail.news_image} alt={blogDetail.newTitle} className='img-fluid'/>
                </figure>
                <div className=''>
                  <div className='author-detail'>
                    <img src={blogDetail.author.img} width='40px' height='40px' className='rounded-circle me-3' />
                    <span>By {blogDetail.author.name}</span>
                    <span className='mx-3'>
                      <GoDotFill className='me-2'/>
                      {blogDetail.posted_date}
                    </span>
                    <span className=''>
                      <GoDotFill className='me-2'/>
                      3 Comments
                    </span>
                  </div>
                  <h3 className='secTitle2 fw-bold my-3'>{blogDetail.newTitle}</h3>
                  <p className='text-muted'>{blogDetail.description}</p>
                  <div className='cat-desc-card p-4 p-md-5'>
                    <p className='desc'>{blogDetail.category_description}</p>
                    <h5 className='title'>- {blogDetail.category}</h5>
                  </div>
                  <p className='my-3 text-muted'>{blogDetail.more_description}</p>
                  <ul>
                    {
                      blogDetail.newsFeature.map((fea)=>{
                        return <li className='small mb-2 text-muted'>{fea.feature}</li>
                      })
                    }
                  </ul>
                </div>
                <div className='related-blogs mt-5'>
                  <h3 className='fw-bold'>Related Blog</h3>
                  <div className='row mt-5'>
                    
                    {
                    newsList?.slice(0,2).map((newsItem, index)=>{
                        return <div className='col-md-6'><NewsCard key={newsItem.id} newsItem={newsItem}/></div>
                    })
                }
                    
                  </div>
                </div>
              </div>
              <div className='col-lg-4 ps-lg-5'>
                <div className='right-sidebar'>
                  <h4 className='fw-bold text-black'>Search</h4>
                  <div className='d-flex justify-content-between search-box'>
                    <input type='text' placeholder='Search...' className='border-0 w-100 p-3'/>
                    <button className='icon-btn ms-n1'>
                      <IoSearch/>
                    </button>
                  </div>
                  <div className='mt-5'>
                    <h4 className='fw-bold text-black'>Categories</h4>
                    <ul className='pt-2'>
                    {
                      uniqueCat?.map((cat)=>{
                        return <li className='my-2 cp'>{cat}</li>
                      })
                    }
                    </ul>
                  </div>
                  <div className='mt-5'>
                    <h4 className='fw-bold text-black'>Recent Blog</h4>
                    <ul className='list-unstyled'>
                      {
                        newsList?.slice(0, 4).map((newsItem, index)=>{
                          return <li key={newsItem.id} className='d-flex py-2 border-bottom'>
                            <div className='me-2'>
                              <img src={newsItem.news_image} width={80} height={80} className='obj_cover'/>
                            </div>
                            <div>
                              <p className='h6 fw-bold'>{newsItem.newTitle}</p>
                              <p className='mt-2 small'>{newsItem.posted_date}</p>
                            </div>
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Newsletter/>
    </>
  );
};

export default Blog_details;
