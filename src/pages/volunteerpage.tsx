import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { VolunteerComponent } from "../components/Volunteers";
import { OurVolunteersPageData } from "../data";

// Renamed the imported component to avoid conflict

interface Props {
  volunteersData: OurVolunteersPageData;
}

const VolunteerPage: NextPage<Props> = ({ volunteersData }) => {
  return (
    <div>
      <Layout>
        <VolunteerComponent volunteersData={volunteersData} />
      </Layout>
    </div>
  );
};

export default VolunteerPage;

export const getStaticProps: GetStaticProps = async () => {
  const ourvolunteerTeamPageDataRes = await fetch(
    "https://db-json-three.vercel.app/VolunteerPage"
  );
  const ourvolunteerTeamData: OurVolunteersPageData =
    await ourvolunteerTeamPageDataRes.json();

  return {
    props: {
      volunteersData: ourvolunteerTeamData,
    },
  };
};
