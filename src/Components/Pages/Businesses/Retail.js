import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../../Utilities/mini-comps/DisplayImg";
import HeroImgWithTxt from "../../Utilities/mini-comps/HeroImgWithTxt";
import NewsLetter from "../../Utilities/mini-comps/NewsLetter";

const Retail = () => {
  const dataForHeroImg = {
    heading: "RETAIL",
    content:
    "Arjoi Mart was developed to meet the rising demand for home deliveries and easy online grocery shopping in 2021.",
    img: "/assets/pages/business/retail/hero-img.png",
    mobImg: "/assets/pages/business/retail/hero-img.png",
  };

  const martDisplayImgData = {
    img: "/assets/pages/business/retail/mart.jpg",
    mobImg: "/assets/pages/business/retail/mart.jpg",
  };

  return (
    <div className="page-business-retail page-business">
      {/* hero img with text  */}
      <HeroImgWithTxt data={dataForHeroImg} />

      <section className="page-content">
        {/* infrastructure */}
        <div className="infrastructure">
          <h3 className="secondary-font heading-with-top-bottom-lines">
          The Arjoi group has been in the Retail vertical since 2021.
          </h3>

          <p className="rte">
          We are a reliable all-in-one platform for all your supermarket essentials. With fresh fruits and vegetables procured to an amazing range of household and personal care all through everyday essentials, we are committed to sourcing foods that are grown, owned and manufactured locally. We stand for good food and the good it does for people - for you, for the farmer, for our children and their children as well.
          <br />
          <br />
          Avoid making long trips to find and purchase groceries. Ordering is simple on our new and improved website. Pick from a large selection of Indian & Internation groceries and daily essentials. Save time, save money and enjoy a convenient shopping.
          </p>
        </div>
        <br />

        {/* highlights */}
        <div className="highlights">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            Business Highlights
          </h3>

          <div className="rte">
            <p className="custom-bullet">
            Shop from more than 5000 products from around the country and the world.
            </p>
            <p className="custom-bullet">
            We are also in process of Opening 40+ Retail outlets in Delhi-NCR so that our customers can get their daily essentials fresh & quick.
            </p>
          </div>
        </div>
        <br />

        {/* mart  */}
        <div className="mart">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            Arjoi Mart
          </h3>

          <div className="img-link-container">
            <Link to="/">
              <DisplayImg data={martDisplayImgData} />
            </Link>
          </div>
        </div>
      </section>

      {/* newsletter  */}
      <br />
      <NewsLetter />
    </div>
  );
};

export default Retail;
