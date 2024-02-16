 // pages/aboutus.js
import { GetStaticProps, NextPage } from "next";
import { AboutUs } from "../components/AboutUs";
import Layout from "../components/Layout";
import { AboutUsPageData } from "../data";
import { KrikSection } from "../components/KrikSection";
import FAQSection from "../components/FAQqstns";


interface Props {
  aboutsection: AboutUsPageData;
  kriksection: AboutUsPageData;
  faqsection: AboutUsPageData;
}

const AboutUsPage: NextPage<Props> = ({
  aboutsection,
  kriksection,
  faqsection,
}) => {
  return (
    <Layout>
      <AboutUs aboutUsData={aboutsection} />
      <KrikSection krikData={kriksection} />
       <FAQSection  faqsData={faqsection} />
    </Layout>
  );
};

export default AboutUsPage;

 
export const getStaticProps: GetStaticProps = async () => {
  const aboutUsSectionDataRes = await fetch("https://db-json-three.vercel.app/AboutPage");
  const aboutUsData: AboutUsPageData = await aboutUsSectionDataRes.json();

  const krikSectionDataRes = await fetch("https://db-json-three.vercel.app/AboutPage");
  const krikSData: AboutUsPageData = await krikSectionDataRes.json();

  const faQstSectionDatares = await fetch("https://db-json-three.vercel.app/AboutPage");
  const faqSData: AboutUsPageData = await faQstSectionDatares.json();

  return {
    props: {
      aboutsection: aboutUsData,
      kriksection: krikSData,
      faqsection : faqSData,
    },
  };
};
