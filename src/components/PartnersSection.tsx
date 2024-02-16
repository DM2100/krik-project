import React from 'react';
import { HomePageData } from '../data';

interface  partnerSectionData {
  partnersData: HomePageData
}

export const PartnerSection: React.FC<partnerSectionData> = ({ partnersData }) => {
 
  return (
    <div className='container-fluid my-5' style={{ height: '200px' }} >
      <h1 className='partner-text mx-5 px-5'>{partnersData.partnersSection.description}</h1>
      <div className="row d-flex align-items-center justify-content-center partners-img text-center">
        <div className="col-3">
          <img src={partnersData.partnersSection.img1}/>
        </div>
        <div className="col-3">
          <img src={partnersData.partnersSection.img2}/>
        </div>
        <div className="col-3">
          <img src={partnersData.partnersSection.img3}/>
        </div>
        <div className="col-3">
          <img src={partnersData.partnersSection.img4}/>
        </div>
      </div>
    </div>
  );
};
