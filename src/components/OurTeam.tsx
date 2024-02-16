import React from "react";
import { OurTeamPageData } from "../data";
import { FaAngleRight } from "react-icons/fa";

interface OurTeamPageProps {
  ourteamPage: OurTeamPageData;
}

export const OurTeam: React.FC<OurTeamPageProps> = ({ ourteamPage }) => {
  const imageSizeStyle = {
    width: "100%",
    height: "auto", 
    borderRadius: "30px"
  };

  return (
    <div className="container">
      <h1 className="my-5 heading">{ourteamPage.meetour_Team.heading}</h1>
      <div className="row text-center">
        <div className="col-4">
          <img
            src={ourteamPage.meetour_Team.image1}
            alt=""
            style={imageSizeStyle}
          />
          <h2 className="team-names">{ourteamPage.meetour_Team.name1}</h2>
          <p className="team-description">{ourteamPage.meetour_Team.description1}</p>
        </div>
        <div className="col-4">
          <img
            src={ourteamPage.meetour_Team.image2}
            alt=""
            style={imageSizeStyle}
          />
          <h2 className="team-names">{ourteamPage.meetour_Team.name2}</h2>
          <p className="team-description">{ourteamPage.meetour_Team.description2}</p>
        </div>
        <div className="col-4">
          <img
            src={ourteamPage.meetour_Team.image3}
            alt=""
            style={imageSizeStyle}
          />
          <h2 className="team-names">{ourteamPage.meetour_Team.name3}</h2>
          <p className="team-description">{ourteamPage.meetour_Team.description3}</p>
        </div>
      </div>
      <button className="team-button my-4 mx-auto">
        LinkedIn <FaAngleRight />
      </button>
    </div>
  );
};
