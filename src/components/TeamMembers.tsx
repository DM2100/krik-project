import React from "react";
import { OurTeamPageData } from "../data";

interface memberDataProps {
  teamMembers: OurTeamPageData;
}

export const TeamMembers: React.FC<memberDataProps> = ({ teamMembers }) => {
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center member-heading-text">
        {teamMembers.teamMembers.heading}
      </h1>
      <div className="row border1 py-3 align-items-center justify-content-center">
        <div className="col-4 text-center">
          <img src={teamMembers.teamMembers.image2} alt="" className="img-fluid mx-auto mb-2" />
        </div>
        <div className="col-4">
          <h3 className="team-member-title">{teamMembers.teamMembers.title}</h3>
          <h4 className="team-member-text">{teamMembers.teamMembers.text}</h4>
          <p className="team-member-description">
            {teamMembers.teamMembers.description}
          </p>
        </div>
      </div>
      <div className="row border1 py-3 align-items-center justify-content-center">
        <div className="col-4 text-center">
          <img src={teamMembers.teamMembers.image1} alt="" className="img-fluid mx-auto mb-2" />
        </div>
        <div className="col-4">
          <h3 className="team-member-title">{teamMembers.teamMembers.title}</h3>
          <h4 className="team-member-text">{teamMembers.teamMembers.text}</h4>
          <p className="team-member-description">
            {teamMembers.teamMembers.description}
          </p>
        </div>
      </div>
      <div className="row border1 py-3 align-items-center justify-content-center">
        <div className="col-4 text-center">
          <img src={teamMembers.teamMembers.image3} alt="" className="img-fluid mx-auto mb-2" />
        </div>
        <div className="col-4 ">
          <h3 className="team-member-title">{teamMembers.teamMembers.title}</h3>
          <h4 className="team-member-text">{teamMembers.teamMembers.text}</h4>
          <p className="team-member-description">
            {teamMembers.teamMembers.description}
          </p>
        </div>
      </div>
    </div>
  );
};
