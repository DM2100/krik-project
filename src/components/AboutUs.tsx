import React from "react";
import { AboutUsPageData } from "../data";

interface aboutusData {
  aboutUsData: AboutUsPageData;
}
export const AboutUs: React.FC<aboutusData> = ({ aboutUsData }) => {
  return (
    <div className="container-fluid my-5 px-5">
      <div className="row px-5 aboutUS">
        <div className="col-6 px-5 my-4">
          <img className="mt-5" src={aboutUsData.about_section.image} />
        </div>
        <div className="col-6 my-5">
          <h1>{aboutUsData.about_section.title}</h1>
          <p>{aboutUsData.about_section.description}</p>
        </div>
      </div>
    </div>
  );
};
