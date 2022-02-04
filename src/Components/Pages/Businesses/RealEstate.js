import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../../Utilities/mini-comps/DisplayImg";
import HeroImgWithTxt from "../../Utilities/mini-comps/HeroImgWithTxt";
import NewsLetter from "../../Utilities/mini-comps/NewsLetter";

const RealEstate = () => {
  const dataForHeroImg = {
    heading: "REAL ESTATE",
    content:
      "We laid our very first brick in 2009. Since then we’ve delivered more than 50 projects - everything from first homes to luxurious residences.",
    img: "/assets/pages/business/realestate/hero-img.png",
    mobImg: "/assets/pages/business/realestate/hero-img.png",
  };
  const developersDisplayImgData = {
    img: "/assets/pages/business/realestate/developers.png",
    mobImg: "/assets/pages/business/realestate/developers.png",
  };

  return (
    <div className="page-business-realestate page-business">
      {/* hero img with text  */}
      <HeroImgWithTxt data={dataForHeroImg} />

      <section className="page-content">
        {/* infrastructure */}
        <div className="infrastructure">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            The Arjoi group has been in the Infrastructure vertical since 2009.
          </h3>

          <p className="rte">
          The story of the Arjoi Developers started in 2009 and we have come a long way since then. We are an innovative results-driven company with the agility to respond to the ever-changing demands of the Indian construction industry. Our work is distinguished by our unwavering commitment to designing efficiency, value creation, and client satisfaction. 
            <br />
            <br />
            We have solid, outstanding statistics of completing projects on time and on budget. Our integrated development and construction capabilities allow us to take a project from concept to completion while maintaining constant communication.
          </p>
        </div>
        <br />

        {/* highlights */}
        <div className="highlights">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            Business Highlights FY 2017-2018
          </h3>

          <div className="rte">
            <p className="custom-bullet">
            Anand Niketan was a project in which we designed, executed, and sold a residential cum commercial property of over 50000 sq. ft. consisting of a total of 30 flats and 8 shops located in Shalimar Garden.
            </p>
            <p className="custom-bullet">
            Gurudwara Singh Sabha was a project constructed and designed by us, spread across 60000 sq. ft. located in Shalimar Garden.
            </p>
          </div>
        </div>
        <br />

        {/* developers  */}
        <div className="developers">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            Arjoi Developers
          </h3>

          <div className="img-link-container">
            <Link to="/">
              <DisplayImg data={developersDisplayImgData} />
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

export default RealEstate;
