import React from "react";
import Layout from "../components/Layout";
import { Header } from "../components/Header";
import { LowerHeader } from "../components/LowerHeader";
import { HeroSection } from "../components/HeroSection";
import { GetStaticProps, NextPage } from "next";
import { HomePageData } from "../data";
import { ServicesSection } from "../components/ServicesSection";
import { PartnerSection } from "../components/PartnersSection";
import { NewsSection } from "../components/NewsSection";
import { FrameSection } from "../components/FrameSection";
import { Numbers } from "../components/Numbers";
import { VideoSection } from "../components/VideoSection";

interface Props {
  homepage: HomePageData;
  newssection: HomePageData;
  servicessection: HomePageData;
  partnersection: HomePageData;
}

const Homepage: NextPage<Props> = ({
  homepage,
  newssection,
  servicessection,
  partnersection,
}) => {
  return (
    <div>
      <Layout>
        <HeroSection heroData={homepage} />
        <FrameSection />
        <Numbers />
        <VideoSection />
        <NewsSection newsSectionData={newssection} />
        <ServicesSection servicesData={servicessection} />
        <PartnerSection partnersData={partnersection} />
      </Layout>
    </div>
  );
};

export default Homepage;

export const getStaticProps: GetStaticProps = async () => {
  const bannerDataRes = await fetch(
    "https://db-json-three.vercel.app/HomePage"
  );
  const bannerData: HomePageData = await bannerDataRes.json();

  const newsSectionDataRes = await fetch(
    "https://db-json-three.vercel.app/HomePage"
  );
  const newsSectionData: HomePageData = await newsSectionDataRes.json();

  const servicesSectionDataRes = await fetch(
    "https://db-json-three.vercel.app/HomePage"
  );
  const servicesData: HomePageData = await servicesSectionDataRes.json();

  const partnersSectionDataRes = await fetch(
    "https://db-json-three.vercel.app/HomePage"
  );
  const partnersData: HomePageData = await partnersSectionDataRes.json();

  return {
    props: {
      homepage: bannerData,
      newssection: newsSectionData,
      servicessection: servicesData,
      partnersection: partnersData,
    },
  };
};
