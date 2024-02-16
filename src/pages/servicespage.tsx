// pages/servicePage.tsx
import React from "react";
import Layout from "../components/Layout";
import ServicePageComponent from "../components/SvcPageSection";
import { GetStaticProps, NextPage } from "next";
import { ServicesPageData } from "../data";
import { ServicePageBlock } from "../components/SvcPageBlock";

interface Props {
  servicesPage: ServicesPageData;
  svcsblockPage: ServicesPageData; // Add this line
}

const ServicePage: NextPage<Props> = ({ servicesPage, svcsblockPage }) => {
  return (
    <div>
      <Layout>
        <ServicePageComponent servicesPage={servicesPage} />
        <ServicePageBlock svcsblockPage={svcsblockPage} />
      </Layout>
    </div>
  );
};

export default ServicePage;

export const getStaticProps: GetStaticProps = async () => {
  const serviceSectionPageDataRes = await fetch("https://db-json-three.vercel.app/ServicesPage");
  const servicePage: ServicesPageData = await serviceSectionPageDataRes.json();
  
  const svcsBlockPageDataRes = await fetch("https://db-json-three.vercel.app/ServicesPage");
  const svcsblockPage: ServicesPageData = await svcsBlockPageDataRes.json();

  return {
    props: {
      servicesPage: servicePage,
      svcsblockPage: svcsblockPage,
    },
  };
};
