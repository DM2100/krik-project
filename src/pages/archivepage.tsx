import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { ArchiveComponent } from "../components/ArchiveComp";
import { DocumentsPageData } from "../data";

interface Props {
  archivesData: DocumentsPageData;
}

const ArchivePage: NextPage<Props> = ({ archivesData }) => {
  return (
    <div>
      <Layout>
        <ArchiveComponent archivesData={archivesData} />
      </Layout>
    </div>
  );
};

export default ArchivePage;

export const getStaticProps: GetStaticProps = async () => {
  const archiveSectionPageDataRes = await fetch(
    "https://db-json-three.vercel.app/DocumentsPage" // Update this URL to point to the correct endpoint
  );
  const archivesData: DocumentsPageData =
    await archiveSectionPageDataRes.json();

  return {
    props: {
      archivesData,
    },
  };
};
