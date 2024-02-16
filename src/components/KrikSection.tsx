import React from "react";
import { AboutUsPageData } from "../data";

interface ForKrikData {
  krikData: AboutUsPageData;
}
export const KrikSection: React.FC<ForKrikData> = ({ krikData }) => {
  return (
    <div className="container-fluid">
      <div className="krik-text mx-5 px-5">
        <h1>{krikData.krik_Section.title}</h1>
      </div>
      <div className="row my-4 text-start  ">
        <div className="col-2 border1 py-4">
          <h1 className="mx-5 px-5" style={{ color: 'red' }} >{krikData.krik_Section.text1}</h1>
        </div>
        <div className="col-10 border1 py-4">
          <p className="mx-3 px-3  my-2   align-items-center justify-content-center d-flex">{krikData.krik_Section.description1}</p>
        </div>
        <div className="col-2 border1 py-4">
          <h1 className="mx-5 px-5" style={{ color: 'red' }}>{krikData.krik_Section.text2}</h1>
        </div>
        <div className="col-10 border1 py-4">
          <p className="mx-3 px-3  my-2   align-items-center justify-content-center d-flex">{krikData.krik_Section.description2}</p>
        </div>
        <div className="col-2 border1 py-4">
          <h1 className="mx-5 px-5 " style={{ color: 'red' }}>{krikData.krik_Section.text3}</h1>
        </div>
        <div className="col-10 border1 py-4">
          <p className="mx-5 px-5 my-2 align-items-center justify-content-center d-flex">{krikData.krik_Section.description3}</p>
        </div>
      </div>
    </div>
  );
};
