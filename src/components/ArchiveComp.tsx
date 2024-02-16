import React from "react";
import { DocumentsPageData, NewsLetterPageData } from "../data";
import { FaArrowDown } from "react-icons/fa";

interface ArchiveData {
  archivesData: DocumentsPageData;
}

export const ArchiveComponent: React.FC<ArchiveData> = ({ archivesData }) => {
  return (
    <div className="container">
      <div className="row mt-5 mx-auto text-center">
        <div className="col-4">
          <h1 className="heading-texts">
            {archivesData.archiveSection.heading1}
          </h1>
        </div>
        <div className="col-4">
          <h1 className="heading-texts">
            {archivesData.archiveSection.heading2}
          </h1>
        </div>
        <div className="col-4">
          <h1 className="heading-texts">
            {archivesData.archiveSection.heading3}
          </h1>
        </div>
        <hr />
      </div>
      <div className="row mt-5 py-3">
        <h2 className="date-texts">{archivesData.archiveSection.date1}</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-12">
          <button className="button-archive my-3">
            {archivesData.archiveSection.btntext}
          </button>
        </div>
      </div>
      <div className="row mt-5 py-3">
        <h2 className="date-texts">{archivesData.archiveSection.date2}</h2>
      </div>
      <div className="row">
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="button-archive my-3">
          {archivesData.archiveSection.btntext}
        </button>
      </div>
      <div className="row mt-5 py-3">
        <h2 className="date-texts">{archivesData.archiveSection.date3}</h2>
      </div>
      <div className="row my-4">
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text  mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
        <div className="col-3">
          <div
            className="card"
            style={{
              borderRadius: "40px",
              opacity: "var(--ItemCount, 1)",
              background: "var(--White-background, #FBF8F4)",
              boxShadow: "0px 4px 50px 0px rgba(0, 0, 0, 0.10)",
              height: "316px",
              marginBottom: "20px",
            }}
          >
            <p className="card-text mx-4 mt-4 px-2">
              {archivesData.archiveSection.text}
            </p>
            <FaArrowDown className="arrow-down" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="button-archive my-3">
          {archivesData.archiveSection.btntext}
        </button>
      </div>
    </div>
  );
};
