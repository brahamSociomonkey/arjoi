import React from "react";
import HeroImgWithTxt from "../Utilities/mini-comps/HeroImgWithTxt";
import MainImageGrid from "../Utilities/mini-comps/MainImageGrid";
import Projects from "../Utilities/Projects";
import dataForProjects from "../allData/data/dataForProjects";

const Blogs = () => {
  const dataForHeroImg = {
    heading: "BLOGS AND FEATURES",
    content:
      "The Arjoi story in infrastructure began much before Independence. Today, the group is a multi-faceted player in energy, infrastructure, and realty.",
    img: "/assets/pages/blogs/hero.png",
    mobImg: "/assets/pages/blogs/hero.png",
  };

  const dataForPopularGrid = [
    {
      image: "/assets/pages/blogs/popular-grid-1.png",
      subHeading: "COMMUNITY",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/popular-grid-2.png",
      subHeading: "BUSINESS",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/popular-grid-3.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
  ];

  const dataForBusinessGrid = [
    {
      image: "/assets/pages/blogs/business-grid-1.png",
      subHeading: "COMMUNITY",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/business-grid-2.png",
      subHeading: "BUSINESS",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/business-grid-3.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/business-grid-4.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/business-grid-5.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
  ];

  const dataForHeritageGrid = [
    {
      image: "/assets/pages/blogs/heritage-grid-1.png",
      subHeading: "COMMUNITY",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/heritage-grid-2.png",
      subHeading: "BUSINESS",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/heritage-grid-3.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/heritage-grid-4.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
    {
      image: "/assets/pages/blogs/heritage-grid-5.png",
      subHeading: "ENVIRONMENT",
      hading: "Weaving A Brighter Future",
      content:
        "The story of the group's involvement in the energy sector started with the commissioning of the Khopoli power station in 1910. Today, the group leads the energy sector in India and supplies energy to family homes as well as large cities and industries.",
    },
  ];

  return (
    <div className="page-blogs">
      {/* hero area  */}
      <HeroImgWithTxt data={dataForHeroImg} />

      {/* popular  */}
      <article className="popular page-width">
        <h3 className="secondary-font heading-with-top-bottom-lines">
          Popular
        </h3>

        {/* MainImageGrid */}
        <MainImageGrid dataForGrid={dataForPopularGrid} />
      </article>

      {/* projects  */}
      <div className="projects-container">
        <Projects data={{ dataForProjects }} />
      </div>

			
      {/* business  */}
      <article className="business page-width">
        <h3 className="secondary-font heading-with-top-bottom-lines">
          Business
        </h3>

        {/* MainImageGrid */}
        <MainImageGrid dataForGrid={dataForBusinessGrid} />
      </article>
			
      {/* heritage  */}
      <article className="heritage page-width">
        <h3 className="secondary-font heading-with-top-bottom-lines">
          Heritage
        </h3>

        {/* MainImageGrid */}
        <MainImageGrid dataForGrid={dataForHeritageGrid} />
      </article>
    </div>
  );
};

export default Blogs;
