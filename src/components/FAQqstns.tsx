import React, { useEffect } from "react";
import { AboutUsPageData } from "../data";

interface FAQqstData {
  faqsData: AboutUsPageData;
}

const FAQSection: React.FC<FAQqstData> = ({ faqsData }) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-12 my-4">
          <h1>{faqsData.faq_Section.heading}</h1>
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12">
          <h2>{faqsData.faq_Section.text01}</h2>
          <p>{faqsData.faq_Section.description01}</p>
        </div>
        <div className="col-12">
          <h2>{faqsData.faq_Section.text01}</h2>
          <p>{faqsData.faq_Section.description01}</p>
        </div>
        <div className="col-12">
          <h2>{faqsData.faq_Section.text01}</h2>
          <p>{faqsData.faq_Section.description01}</p>
        </div>
          <div className="col-12">
          <h2>{faqsData.faq_Section.text01}</h2>
          <p>{faqsData.faq_Section.description01}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
