import React from "react";
import { NewsLetterPageData } from "../data";

interface NewsLetterData {
  newsData: NewsLetterPageData;
}

export const NewsLetterSection: React.FC<NewsLetterData> = ({ newsData }) => {
  return (
    <div className="container ">
      <div className="row my-5 ">
        <div className="col-6 with-vertical-line">
          <h3 className="date1 mx-3">{newsData.newsBlock.date}</h3>
          <p className="date-text1  mt-5 pt-4 mx-3">
            {newsData.newsBlock.datetext}
          </p>
        </div>
        <div className="col-6  ">
          <img
            src={newsData.newsBlock.image1}
            alt=""
            className="news-images mx-5 px-3 "
            style={{
              filter: "grayscale(100%)",
              fill: "rgba(154, 144, 188, 0.30)",
              opacity: "var(--ItemCount, 1)",
            }}
          />
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6 with-vertical-line">
          <img
            src={newsData.newsBlock.image2}
            alt=""
            className="news-images mx-5"
            style={{
              filter: "grayscale(100%)",
              fill: "rgba(154, 144, 188, 0.30)",
              opacity: "var(--ItemCount, 1)",
            }}
          />
        </div>
        <div className="col">
          <h3 className="date2 mx-3">{newsData.newsBlock.date2}</h3>
          <p className="date-text2  mt-5 pt-4 mx-3">
            {newsData.newsBlock.datetext2}
          </p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6 with-vertical-line">
          <h3 className="date3 mx-3">{newsData.newsBlock.date3}</h3>
          <p className="date-text3  mt-5 pt-4 mx-3">
            {newsData.newsBlock.datetext3}
          </p>
        </div>
        <div className="col-6">
          <img
            src={newsData.newsBlock.image3}
            alt=""
            className="news-images mx-5 px-3"
            style={{
              filter: "grayscale(100%)",
              fill: "rgba(154, 144, 188, 0.30)",
              opacity: "var(--ItemCount, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
