import React from "react";
import './accordion.css'
const AccordionItem = ({ faqItem }) => {
  return (

      <div className="accordion-item border-0 mb-4">
        <h2 className="accordion-header " id={`heading${faqItem.id}`}>
          <button
            className="accordion-button fw-bold px-4 py-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${faqItem.id}`}
            aria-expanded="true"
            aria-controls={`collapse${faqItem.id}`}
          >
            {faqItem.faqTitle}
          </button>
        </h2>
        <div
          id={`collapse${faqItem.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${faqItem.id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body"><p>{faqItem.faqDescription}</p></div>
        </div>
      </div>
  );
};

export default AccordionItem;
