import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../../Utilities/mini-comps/DisplayImg";
import HeroImgWithTxt from "../../Utilities/mini-comps/HeroImgWithTxt";
import ImagesGrid from "../../Utilities/mini-comps/ImagesGrid";

const Community = () => {
  const dataForHeroImg = {
    heading: "COMMUNITY",
    content:
      "The Arjoi story in infrastructure began much before Independence. Today, the group is a multi-faceted player in energy, infrastructure, and realty.",
    img: "/assets/pages/business/community/hero-img.png",
    mobImg: "/assets/pages/business/community/hero-img.png",
  };
  const communityDisplayImgData = {
    img: "/assets/pages/business/community/foundation.png",
    mobImg: "/assets/pages/business/community/foundation.png",
  };

  const dataForImagesGrid = [
    {
      image: "/assets/pages/business/community/grid-education.png",
      txt: "EDUCATION",
    },
    {
      image: "/assets/pages/business/community/grid-2.png",
      txt: "text 2",
    },
    {
      image: "/assets/pages/business/community/grid-3.png",
      txt: "text 3",
    },
    {
      image: "/assets/pages/business/community/grid-4.png",
      txt: "text 4",
    },
  ];

  return (
    <div className="page-business-community page-business">
      {/* hero img with text  */}
      <HeroImgWithTxt data={dataForHeroImg} />

      {/* Images grid area  */}
      <section className="image-grid-area">
        <ImagesGrid dataForImagesGrid={dataForImagesGrid} />
      </section>

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

        {/* community  */}
        <div className="community">
          <h3 className="secondary-font heading-with-top-bottom-lines">
            Arjoi Foundation
          </h3>

          <div className="img-link-container">
            <Link to="/">
              <DisplayImg data={communityDisplayImgData} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
