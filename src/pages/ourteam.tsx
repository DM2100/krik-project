import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { OurTeamPageData } from "../data";

// Renamed the imported component to avoid conflict
import { OurTeam as OurTeamComponent } from "../components/OurTeam";
import { TeamMembers } from "../components/TeamMembers";

interface Props {
  ourteamPage: OurTeamPageData;
  teamMembers: OurTeamPageData;
}

const OurTeamPage: NextPage<Props> = ({ ourteamPage }) => {
  return (
    <div>
      <Layout>
        <OurTeamComponent ourteamPage={ourteamPage} />
        <TeamMembers teamMembers={ourteamPage} />
      </Layout>
    </div>
  );
};

export default OurTeamPage;

export const getStaticProps: GetStaticProps = async () => {
  const ourteamSectionPageDataRes = await fetch(
    "https://db-json-three.vercel.app/OurTeamPage"
  );
  const ourteamPageData: OurTeamPageData =
    await ourteamSectionPageDataRes.json();

  const teamMembersBlockDataRes = await fetch(
    "https://db-json-three.vercel.app/OurTeamPage"
  );
  const teamMembersData: OurTeamPageData = await teamMembersBlockDataRes.json();

  return {
    props: {
      ourteamPage: ourteamPageData,
      teamMembers: teamMembersData,
    },
  };
};
