import React from "react";
import { OurVolunteersPageData } from "../data";

interface VolunteersData {
  volunteersData: OurVolunteersPageData;
}

export const VolunteerComponent: React.FC<VolunteersData> = ({
  volunteersData,
}) => {
  return (
    <div className="container align-items-center justify-content-center my-5">
      <h1 className="text-center my-5 volunteer-heading">
        {volunteersData.ourVolunteer_section.heading}
      </h1>
      <div className="row text-center">
        <div className="col-6">
          <h3 className="volunteer-titles">{volunteersData.ourVolunteer_section.title1}</h3>
        </div>
        <div className="col-6">
          <h3 className="volunteer-titles">{volunteersData.ourVolunteer_section.title2}</h3>
        </div>
      </div>
      <div className="col-12">
    <hr style={{ borderTop: '2px solid #ccc' }} />
  </div>
      <div className="row my-5">
        <div className="col-3 ">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image01}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name1}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description01}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image02}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name2}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description02}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image03}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name3}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description03}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image04}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name4}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description04}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image05}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name5}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description05}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image06}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name6}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description06}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image07}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name7}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description07}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image08}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name8}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description08}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image09}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name9}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description09}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image10}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name10}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description10}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image11}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name11}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description11}
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card" style={{ borderRadius: "40px" }}>
            <img
              src={volunteersData.ourVolunteer_section.image12}
              alt=""
              className="card-img-top img-fluid"
              style={{
                width: "362px",
                height: "312px",
                borderRadius: " 40px 40px 0px 0px",
              }}
            />
            <div
              className="card-body mx-3"
              style={{ borderRadius: "0px 0px 40px 40px" }}
            >
              <h3 className="card-title volunteer-names">
                {volunteersData.ourVolunteer_section.name12}
              </h3>
              <p className="card-text volunteer-description">
                {volunteersData.ourVolunteer_section.description12}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
