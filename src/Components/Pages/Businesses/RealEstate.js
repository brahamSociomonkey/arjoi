import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../../Utilities/mini-comps/DisplayImg";
import HeroImgWithTxt from "../../Utilities/mini-comps/HeroImgWithTxt";
import NewsLetter from "../../Utilities/mini-comps/NewsLetter";

const RealEstate = () => {
  const dataForHeroImg = {
    heading: "REAL ESTATE",
    content:
      "The Arjoi story in infrastructure began much before Independence. Today, the group is a multi-faceted player in energy, infrastructure, and realty.",
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
            The Arjoi group has been in the Infrastructure vertical since the
            early 1900s.
          </h3>

          <p className="rte">
            The story of the group's involvement in the energy sector started
            with the commissioning of the Khopoli power station in 1910. Today,
            the group leads the energy sector in India and supplies energy to
            family homes as well as large cities and industries.
            <br />
            <br />
            The group's prowess in leading large housing, realty and integrated
            projects is well-known, and we boast of some of the finest
            engineering talent in India. In the housing sector, we help families
            access affordable housing, and at the same time engage with local,
            state and national governments to enable infrastructure projects
            which include space exploration to smart, sustainable, livable urban
            spaces.
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
              Tata Power monetised non-core investments in Telecom and Defence
              to deleverage the balance sheet and renewed focus on Renewables
              and Distribution opportunities under a new CEO
            </p>
            <p className="custom-bullet">
              Tata Sons committed Rs 2,500 crore equity in Tata Housing and TRIL
              to deleverage the companies and infuse capital for committed
              projects. New leadership teams are in place in both companies with
              a strategic roadmap for real estate as well as infrastructure
              verticals
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
