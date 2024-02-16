import React from "react";
import { ProjectsPageData } from "../data";

interface ProjectBlocksData {
  projectsData: ProjectsPageData;
}

export const ProjectComp: React.FC<ProjectBlocksData> = ({ projectsData }) => {
  return (
    <div className="projects-block">
      <h1 className="text-center project-heading mt-5">
        {projectsData.projectBlocks.heading}
      </h1>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 mt-5 ">
            <h2 className="project-title mx-5 px-5">
              {projectsData.projectBlocks.title1}
            </h2>
          </div>
        </div>
        <div className="row px-5 mx-4 wrapper">
          <div className="col-6">
            <img src={projectsData.projectBlocks.projectimg1} alt="" />
          </div>
          <div className="col-6">
            <img
              src={projectsData.projectBlocks.projectimg2}
              alt=""
              className="mb-3"
            />
            <img
              src={projectsData.projectBlocks.projectimg3}
              alt=""
              className="mb-3"
            />
            <img
              src={projectsData.projectBlocks.projectimg4}
              alt=""
              className="mb-3 mx-3 "
            />
          </div>
        </div>
      </div>
      <div className="mb-3 d-flex mx-5 px-5 mt-3">
        {Array.from({ length: 10 }, (_, index) => (
          <div key={index} className="image-number mx-2">
            {index + 1}
          </div>
        ))}
      </div>
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-12">
            <h2 className="project-title mx-5 px-5">
              {projectsData.projectBlocks.title3}
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mx-4 px-5 my-5 text-center">
          <div className="col-3">
            <img
              className="py-1 w-100"
              src={projectsData.projectBlocks.projectimg5}
              alt=""
            />
          </div>
          <div className="col-3">
            <div>
              <img
                className="py-1 w-100"
                src={projectsData.projectBlocks.projectimg6}
                alt=""
              />
            </div>
            <div>
              <img
                className="py-1 w-100"
                src={projectsData.projectBlocks.projectimg7}
                alt=""
              />
            </div>
          </div>
          <div className="col-3">
            <img
              className=""
              src={projectsData.projectBlocks.projectimg8}
              alt=""
              style={{ width: "747px", height: "820px" }}
            />
          </div>
        </div>
        <div className="row mx-5 px-4 my-5 text-center">
          <div className="col-6">
            <img 
            className="w-100"
              src={projectsData.projectBlocks.projectimg9}
              alt=""
              style={{ width: "825px", height: "750px" }}
            />
          </div>
          <div className="col-6 ">
            <img src={projectsData.projectBlocks.projectimg10} alt="" />
            <img
              className="mt-3 mx-2 "
              src={projectsData.projectBlocks.projectimg11}
              alt=""
            />
            <img
              className="mt-3 mx-2"
              src={projectsData.projectBlocks.projectimg7}
              alt=""
            />
          </div>
        </div>
        <div className="mb-3 d-flex mx-5 px-5 mt-3">
          {Array.from({ length: 10 }, (_, index) => (
            <div key={index} className="image-number mx-2">
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
