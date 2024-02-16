// components/SvcPageBlock.tsx
import React from "react";
import { ServicesPageData } from "../data";

interface ServicePageBlockProps {
  svcsblockPage: ServicesPageData;
}

export const ServicePageBlock: React.FC<ServicePageBlockProps> = ({
  svcsblockPage,
}) => {
  return (
    <div className="container  my-4 mb-5">
      <h1 className="gallery-title mb-4">
        {svcsblockPage.service_Block.title}
      </h1>
      <div className="row justify-content-center">
        <div className="col-5 my-2">
          <img
            src={svcsblockPage.service_Block.image1}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-7 my-2">
          <img
            src={svcsblockPage.service_Block.image2}
            alt=""
            className="img-fluid  gray-image"
            style={{
              height: "440px",
            }}
          />
        </div>
        <div className="col-4 my-2 ">
          <img
            src={svcsblockPage.service_Block.image3}
            alt=""
            className="img-fluid gray-image"
          />
        </div>
        <div className="col-4 my-2">
          <img
            src={svcsblockPage.service_Block.image4}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="col-4 my-2">
          <img
            src={svcsblockPage.service_Block.image5}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
