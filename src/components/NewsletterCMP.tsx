import React from "react";
import { NewsLetterPageData } from "../data";

interface NewsLetterData {
  newsData: NewsLetterPageData;
}

export const NewsLetterComponent: React.FC<NewsLetterData> = ({ newsData }) => {
  return (
    <div className="container-fluid banner-content">
      <div className="row">
        <div className="col-12">
          <h1 className="banner-text mt-5 mx-5">{newsData.newsBlock.bannertext}</h1>
        </div>
        <div className="col-12">
            <h1 className="banner-text2 mx-3 mt-2">{newsData.newsBlock.bannertext2}</h1>
        </div>
      </div>
    </div>
  );
};
