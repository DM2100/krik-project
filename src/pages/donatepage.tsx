import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { DonatePageData } from "../data";
import DonateComp from "../components/DonateComponent";

interface Props {
  donateSection: DonatePageData;
}

const DonatePage: NextPage<Props> = ({ donateSection }) => {
  return (
    <div>
      <Layout>
        <DonateComp donateSection={donateSection} />
      </Layout>
    </div>
  );
};

export default DonatePage;

export const getStaticProps: GetStaticProps = async () => {
  const donateDataRes = await fetch(
    "https://db-json-three.vercel.app/DonatePage"
  );
  const donateSection: DonatePageData = await donateDataRes.json();

  return {
    props: {
      donateSection, // Corrected assignment here
    },
  };
};
