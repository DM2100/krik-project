import { HomePageData } from "../data";
import { MdArrowForward } from "react-icons/md";

interface ServicesSectionData {
  servicesData: HomePageData;
}

export const ServicesSection: React.FC<ServicesSectionData> = ({
  servicesData,
}) => {
  return (
    <div className="container-fluid services mb-5">
      <h1 className="mx-5 px-5">{servicesData.services_section.title}</h1>
      <div className="row mx-5 px-5 align-items-center justify-content-center">
        <div className="col-6">
          <img
            src={servicesData.services_section.img1}
            alt=""
            width={"748px"}
            height={"616px"}
          />
        </div>
        <div className="col-6 d-flex flex-column services-text">
          <div className="d-flex align-items-center mb-3">
            <h5>{servicesData.services_section.text01}</h5>
            <MdArrowForward
              style={{
                color: "white",
                backgroundColor: "black",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginLeft: "10px", // Add margin for spacing
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr style={{ borderTop: "2px solid #191919", width: "100%" }} />
          <div className="d-flex align-items-center mb-3">
            <h5>{servicesData.services_section.text02}</h5>
            <MdArrowForward
              style={{
                color: "white",
                backgroundColor: "black",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginLeft: "10px",
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr style={{ borderTop: "2px solid #191919", width: "100%" }} />
          <div className="d-flex align-items-center">
            <h5>{servicesData.services_section.text03}</h5>
            <MdArrowForward
              style={{
                color: "white",
                backgroundColor: "black",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                marginLeft: "10px",
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Non at at risus dolor
            accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus
            volutpat.
          </p>
          <hr style={{ borderTop: "2px solid #191919", width: "100%" }} />
        </div>
      </div>
    </div>
  );
};
