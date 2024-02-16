import React from "react";
import { HomePageData } from "../data";
import Link from "next/link";

interface HeroSectionData {
  heroData: HomePageData;
}

export const HeroSection: React.FC<HeroSectionData> = ({ heroData }) => {
  return (
    <div className="container-fluid">
      <img className="herobanner" src={heroData.banner_content.image} />
      <div className="text-container text-center px-5 pt-5 mt-5">
        <h1 className="hero-title pt-4 px-5 mx-5">
          {heroData.banner_content.title}
        </h1>
        <h5 className="hero-text pt-4">{heroData.banner_content.text}</h5>
        <p className="hero-description px-5 mx-5">
          {heroData.banner_content.description}
        </p>
        <Link href="/aboutus">
          <button className="btn-hero mt-3">Повеќе за нас</button>
        </Link>
      </div>
    </div>
  );
};
