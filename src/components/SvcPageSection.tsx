import React, { useState } from "react";
import { ServicesPageData } from "../data";

interface Props {
  servicesPage: ServicesPageData;
}

const ServicePageComponent: React.FC<Props> = ({ servicesPage }) => {
  const [selectedService, setSelectedService] = useState(1);

  const handleServiceClick = (serviceNumber: number) => {
    setSelectedService(serviceNumber);
  };

  return (
    <div className="container my-5 py-5">
      <div className="row my-4 text-center">
        {Array.from({ length: 3 }, (_, index) => (
          <div className="col-4 info-services" key={index}>
            <h3 onClick={() => handleServiceClick(index + 1)}>
              {
                servicesPage.serviceSection[
                  `title${
                    index + 1
                  }` as keyof typeof servicesPage.serviceSection
                ]
              }
            </h3>
          </div>
        ))}
      </div>
      <div className="row my-2">
        <div className="col-12">
          <hr
            style={{
              backgroundColor: "black",
              height: "3px",
              width: "100%",
              margin: "0 auto",
              borderWidth: selectedService ? "3px" : "0",
            }}
          />
        </div>
      </div>

      <div className="row my-5">
        <div className="col-12 info-heading">
          <h2>
            {
              servicesPage.serviceSection[
                `heading${selectedService}` as keyof typeof servicesPage.serviceSection
              ]
            }
          </h2>
          <p>
            {
              servicesPage.serviceSection[
                `text0${selectedService}` as keyof typeof servicesPage.serviceSection
              ]
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePageComponent;
