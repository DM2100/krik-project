// pages/servicePage.tsx
import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { NewsLetterComponent } from "../components/NewsletterCMP";
import { NewsLetterPageData } from "../data";
import { NewsLetterSection } from "../components/NewsLetterSection";

interface Props {
  newsletterData: NewsLetterPageData;
}

const NewsLetterPage: NextPage<Props> = ({ newsletterData }) => {
  return (
    <div>
      <Layout>
        <NewsLetterComponent newsData={newsletterData} />
        <NewsLetterSection newsData={newsletterData}/>
      </Layout>
    </div>
  );
};

export default NewsLetterPage;

export const getStaticProps: GetStaticProps = async () => {
  const newsletterSectionPageDataRes = await fetch("https://db-json-three.vercel.app/NewsLetterPage");
  const newsletterData: NewsLetterPageData = await newsletterSectionPageDataRes.json();

  return {
    props: {
      newsletterData,
    },
  };
};

