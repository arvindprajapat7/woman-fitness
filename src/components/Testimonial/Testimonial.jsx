import { FaStar } from "react-icons/fa";
import './Testimonial.css'

function Testimonial() {
  return (
    <section className="testimonial">
        <div className='container'>
            <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                    <h6 className='upTitle text-uppercase'>TESTIMONIAL</h6>
                    <h2 className='secTitle'>What Client Say’s</h2>                    
                </div>
            </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className='authorImg'>
                            <img src="images/author1.jpg" className="img-fluid w-100 h-100 obj_fit rounded-circle"/>
                        </div>
                        <div className="stars my-3">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem eligendi quo tempora accusantium alias error deleniti velit vero assumenda quidem dicta reiciendis qui labore, minima exercitationem optio cupiditate! Repudiandae.
                        </p>
                        <h5 className="authorName">Jack Porter</h5>
                        <p className="author_position">CEO</p>
                    </div>
                </div>
                <div className="carousel-item">
                
                    <div className="col-lg-8 mx-auto text-center">
                        <div className='authorImg'>
                                <img src="images/author1.jpg" className="img-fluid w-100 h-100 obj_fit rounded-circle"/>
                            </div>
                            <div className="stars my-3">
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem eligendi quo tempora accusantium alias error deleniti velit vero assumenda quidem dicta reiciendis qui labore, minima exercitationem optio cupiditate! Repudiandae.
                            </p>
                            <h5 className="authorName">Jack Porter</h5>
                            <p className="author_position">CEO</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="col-lg-8 mx-auto text-center">
                        <div className='authorImg'>
                            <img src="images/author1.jpg" className="img-fluid w-100 h-100 obj_fit rounded-circle"/>
                        </div>
                        <div className="stars my-3">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                        <p className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem eligendi quo tempora accusantium alias error deleniti velit vero assumenda quidem dicta reiciendis qui labore, minima exercitationem optio cupiditate! Repudiandae.
                        </p>
                        <h5 className="authorName">Jack Porter</h5>
                        <p className="author_position">CEO</p>
                    </div>
                </div>
            </div>
            <h3 className="feedback-text">FEEDBACK</h3>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <img src="images/author1.jpg" className="anim_author anim_author1"/>
        <img src="images/author2.png" className="anim_author anim_author2"/>
        <img src="images/author3.jpg" className="anim_author anim_author3"/>
        <img src="images/author4.jpg" className="anim_author anim_author4"/>
        <img src="images/author5.jpg" className="anim_author anim_author5"/>
    </section>
  );
}

export default Testimonial;