import React from "react";
import { HomePageData } from "../data";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

interface NewsSectionData {
  newsSectionData: HomePageData;
}

export const NewsSection: React.FC<NewsSectionData> = ({ newsSectionData }) => {
  return (
    <div className="container-fluid news-section my-5">
      <h1 className="news-title mx-5 px-5">
        {newsSectionData.news_section.title}
      </h1>
      <div className="row d-flex align-items-center justify-content-center px-5 mx-4">
        <div className="col-3">
          <div className="cards position-relative">
            <img
              className="img-fluid"
              src={newsSectionData.news_section.card1}
              style={{ width: "491px", height: "464px", objectFit: "cover" }}
            />
            <div className="image-text d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <h5
                  className="eco-action-text mx-1 px-1 mb-0"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  AКТИВНОСТ ECO-ACTION
                </h5>
                <FaCalendar
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    marginLeft: "8px",
                  }}
                />
                <p
                  className="date-text mb-0"
                  style={{ color: "white", marginLeft: "8px" }}
                >
                  25.08.2023
                </p>
              </div>
              <h5 className="additional-text" style={{ margin: "8px 0" }}>
                <p className="text-start text-card">
                  Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis
                  id.
                </p>
              </h5>
              <button className="card-button text-start">
                Види повеќе <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cards position-relative">
            <img
              className="img-fluid"
              src={newsSectionData.news_section.card2}
              style={{ width: "491px", height: "464px", objectFit: "cover" }}
            />
            <div className="image-text d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <h5
                  className="eco-action-text mx-1 px-1 mb-0"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  ESC Volunteers
                </h5>
                <FaCalendar
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    marginLeft: "8px",
                    marginBottom: "2px",
                  }}
                />
                <p
                  className="date-text mb-0"
                  style={{
                    color: "white",
                    marginLeft: "8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  15.08.2023-21.08.2023
                </p>
              </div>
              <h5 className="additional-text" style={{ margin: "8px 0" }}>
                <p className="text-start text-card">
                  Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis
                  id.
                </p>
              </h5>
              <button className="card-button text-start">
                Види повеќе <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cards position-relative">
            <img
              className="img-fluid"
              src={newsSectionData.news_section.card3}
              style={{ width: "491px", height: "464px", objectFit: "cover" }}
            />
            <div className="image-text d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <h5
                  className="eco-action-text mx-1 px-1 mb-0"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  BUILD YOUR STRENGTH
                </h5>
                <FaCalendar
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    marginLeft: "8px",
                  }}
                />
                <p
                  className="date-text mb-0"
                  style={{ color: "white", marginLeft: "8px" }}
                >
                  07.07.2023
                </p>
              </div>
              <h5 className="additional-text" style={{ margin: "8px 0" }}>
                <p className="text-start text-card">
                  Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis
                  id.
                </p>
              </h5>
              <button className="card-button text-start">
                Види повеќе <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cards position-relative">
            <img
              className="img-fluid"
              src={newsSectionData.news_section.card4}
              style={{ width: "491px", height: "464px", objectFit: "cover" }}
            />
            <div className="image-text d-flex flex-column">
              <div className="d-flex align-items-center mb-2">
                <h5
                  className="eco-action-text mx-1 px-1 mb-0"
                  style={{ width: "100%", overflow: "hidden" }}
                >
                  ЛЕТЕН КАМП
                </h5>
                <FaCalendar
                  style={{
                    width: "24px",
                    height: "24px",
                    color: "white",
                    marginLeft: "8px",
                  }}
                />
                <p
                  className="date-text mb-0"
                  style={{ color: "white", marginLeft: "8px" }}
                >
                  25.08.2023
                </p>
              </div>
              <h5 className="additional-text" style={{ margin: "8px 0" }}>
                <p className="text-start text-card">
                  Lorem ipsum dolor sit amet consectetur. Curabitur cursus quis
                  id.
                </p>
              </h5>
              <button className="card-button text-start">
                Види повеќе <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="custom-hr" />
      <div className="row text-end">
        <div className="col-12">
          <button className="btn-month">Види за цел месец</button>
        </div>
      </div>
    </div>
  );
};
