import React from "react";
import Inner_banner from "../components/inner-banner/Inner_banner";
import { useAppContext } from "../context/AppContext";
import ServiceCard from "../components/services_section/ServiceCard";
import FeatureSlider from "../components/Slider/Feature_slider";
import Testimonial from "../components/Testimonial/Testimonial";
import Latest_news from "../components/Latest_news/Latest_news";
import Newsletter from "../components/newsletter/Newsletter";

const Services = () => {
    const { servicesList } = useAppContext(); 

  return (
    <>
      <Inner_banner title="Services" />
      <section className="py-5">
        <div className="container">
          
          <div className="row mt-5 pt-5">
            {servicesList?.map((ser_item, index) => {
              return <ServiceCard key={index} ser_item={ser_item} />;
            })}
          </div>
        </div>
      </section>
      <FeatureSlider/>
        <Testimonial/>
        <Latest_news/>
        <Newsletter/>
    </>
  );
};

export default Services;
