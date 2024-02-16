// pages/servicePage.tsx
import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { VolunteerNowSec } from "../components/VolunteerNowSection";

interface Props {}

const ServicePage: NextPage<Props> = ({}) => {
  return (
    <div>
      <Layout>
        <VolunteerNowSec />
      </Layout>
    </div>
  );
};

export default ServicePage;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
