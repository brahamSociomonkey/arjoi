import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../../Utilities/mini-comps/DisplayImg";
import HeroImgWithTxt from "../../Utilities/mini-comps/HeroImgWithTxt";
import ImagesGrid from "../../Utilities/mini-comps/ImagesGrid";
import NewsLetter from "../../Utilities/mini-comps/NewsLetter";

const Community = () => {
  const dataForHeroImg = {
    heading: "COMMUNITY",
    content:
    "Seva Karat Hoai Nahkaame Thiss ko hoth paraapath suaame. Those who do sewa with no ulterior motives simply in the love of god, they shall obtain union with god.",
    img: "/assets/pages/business/community/hero-img.png",
    mobImg: "/assets/pages/business/community/hero-img.png",
  };
  const communityDisplayImgData = {
    img: "/assets/pages/business/community/foundation.jpg",
    mobImg: "/assets/pages/business/community/foundation.jpg",
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
          The Arjoi group Started with Arjoi Foundation in 2020.
          </h3>

          <p className="rte">
          Covid-19, which began as a health and livelihood crisis, quickly devolved into a food and starvation disaster. We were really caught away by the predicament individuals were in, and it was extremely unpleasant and disturbing for us. That's when we decided to step in and help in this time of great need. We believe that everyone deserves a full life and that no one should go hungry. As a result, we started giving away free food rations to those in need, which proved to be a prudent and kind decision. We felt so accomplished and relieved that we decided to continue our work and assist the country's poor in coping with the food issue.
            
          </p>
        </div>
        <br />

        {/* highlights */}
        <div className="highlights">
          <h3 className="secondary-font heading-with-top-bottom-lines">
          About us inniciative
          </h3>

          <div className="rte">
            <p className="custom-bullet">
            The Arjoi Foundation supports the Arjoi Group's efforts to achieve critical milestones and exceptional development. The Arjoi Foundation has been inspired by our spiritual Gurus, parents, and family heritage. It all started with our dear father's idea that one should aid the less fortunate and that feeding the hungry is the best of all charities. The Arjoi Foundation was founded on the belief that "you have not lived until you have done something for someone who can never repay you," which was inspired by him. During this difficult period of the Covid pandemic, we have directly and indirectly supported society and vulnerable areas, as well as providing financing to non-governmental organisations (NGOs) that address the needs of the underprivileged, so indirectly supporting individuals.
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

      {/* newsletter  */}
      <br />
      <NewsLetter />
    </div>
  );
};

export default Community;
