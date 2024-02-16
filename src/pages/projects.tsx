// pages/servicePage.tsx
import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps, NextPage } from "next";
import { ProjectComp } from "../components/ProjectComp";
import { ProjectsPageData } from "../data";

interface Props {
  projectsData: ProjectsPageData;
}

const ProjectPage: NextPage<Props> = ({ projectsData }) => {
  return (
    <div>
      <Layout>
        <ProjectComp projectsData={projectsData} />
      </Layout>
    </div>
  );
};

export default ProjectPage;

export const getStaticProps: GetStaticProps = async () => {
  const projectSectionPageDataRes = await fetch(
    "https://db-json-three.vercel.app/ProjectsPage"
  );
  const projectsData: ProjectsPageData = await projectSectionPageDataRes.json();

  return {
    props: {
      projectsData,
    },
  };
};
