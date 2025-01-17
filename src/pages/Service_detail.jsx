import React, { useEffect, useState } from "react";
import Inner_banner from "../components/inner-banner/Inner_banner";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import ServiceCard from "../components/services_section/ServiceCard";
import { FaQuestionCircle } from "react-icons/fa";
import Fill_btn from "../components/btns/Fill_btn";
import Newsletter from "../components/newsletter/Newsletter";


const Service_detail = () => {
  const [ser_detail, setSer_detail] = useState(null);
  const { category } = useParams();
  const { servicesList } = useAppContext();
  const navigate = useNavigate();
  const fetchService = () => {
    const service = servicesList.find(
      (service) => service.category === category
    );
    if (service) {
      setSer_detail(service);
    } else {
      console.log("Service not found");
    }
  };
  const uniqueCat = [...new Set(servicesList.map((item) => item.category))];

  useEffect(() => {
    if (servicesList.length) {
      fetchService();
    }
  }, [category, servicesList]);
  if (!ser_detail) {
    return <p>Loading service details...</p>;
  }

  return (
    <>
      <Inner_banner title={ser_detail.service_title} />
      <section className="service-detail">
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-3">
              <ul className="list-unstyled cat-list py-4 pe-4">
                {uniqueCat?.map((cat) => {
                  return (
                    <li
                      onClick={() => {navigate(`/services/${cat}`); scrollTo(0,0);}}
                      className={`p-3 ps-5  mb-2 text-capitalize fw-bold cp text-white ${
                        category === cat ? "active" : ""
                      }`}
                    >
                      {cat}
                    </li>
                  );
                })}
              </ul>
              <span className="bottom-shape">
                <svg
                  width="250"
                  height="70"
                  viewBox="0 0 250 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 38L250 0L210 70L0 38Z"
                    fill="url(#paint0_linear_306_1296)"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_306_1296"
                      x1="118.877"
                      y1="35.552"
                      x2="250.365"
                      y2="35.552"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="1" stop-color="var(--primary)"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div className="help-card mt-5 p-4 text-center d-flex flex-column position-relative">
                  <FaQuestionCircle className="icon"/>
                  <h4 className="fw-bold text-white">Do you need any help?</h4>
                  <hr className="border-light"/>
                  <p className="mb-2"><Link to="#" className="text-white phNumber fw-bold">+91 12345 678 98</Link></p>
                  <p><Link to="#" className="text-white email">info@dexignzone.com
                  </Link></p>
                  <div className="d-flex justify-content-center mt-4">
                    <Fill_btn text="Contact Us" href='#' />
                  </div>

              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-6">
                  <figure>
                    <img
                      src={ser_detail.images.img1}
                      alt={ser_detail.service_title}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="col-6">
                  <figure>
                    <img
                      src={ser_detail.images.img2}
                      alt={ser_detail.service_title}
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
              <h3 className="fw-bold">{ser_detail.bigTitle}</h3>
              <p>{ser_detail.longDescription}</p>
              <h4 className="fw-bold mt-4">{ser_detail.title2}</h4>
              <p>{ser_detail.longDescription2}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <h4 className="pb-5 fw-bold">Related Services</h4>
          <div className="row mt-5">
            {servicesList.slice(0, 4).map((ser_item, index) => {
              return <ServiceCard key={index} ser_item={ser_item} />;
            })}
          </div>
        </div>
      </section>
      <Newsletter/>
    </>
  );
};

export default Service_detail;
