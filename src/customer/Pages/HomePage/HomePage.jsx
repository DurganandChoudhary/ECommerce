import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { lehngacholiPage2 } from "../../../Data/lehngacholiPage2";
import { gounsPage1 } from "../../../Data/gounsPage1";
import { sareePage1 } from "../../../Data/sareePage1";
import { mens_shirt } from "../../../Data/men_shirt";
import { mens_pants } from "../../../Data/mens_pants";
import { women_dress } from "../../../Data/women_dress";
import { womenTop } from "../../../Data/women_top";

const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={lehngacholiPage2} sectionName={"Lehnga"} />
        <HomeSectionCarousel data={gounsPage1} sectionName={"Gouns"} />
        <HomeSectionCarousel data={sareePage1} sectionName={"Saree"} />
        <HomeSectionCarousel data={women_dress} sectionName={"Women's Dress"} />
        <HomeSectionCarousel data={womenTop} sectionName={"Tops"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"} />
        <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"} />
        <HomeSectionCarousel data={mens_pants} sectionName={"Men's Pants"} />
      </div>
    </div>
  );
};
export default HomePage;
