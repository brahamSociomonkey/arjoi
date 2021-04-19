import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DisplayImg from "../Utilities/mini-comps/DisplayImg";
import NewsLetter from "../Utilities/mini-comps/NewsLetter";
import ScrollIndicator from "../Utilities/mini-comps/ScrollIndicator";
import Timeline from "../Utilities/mini-comps/Timeline";
import HeroSlider from "../Utilities/HeroSlider";
import Projects from "../Utilities/Projects";
import SliderContainer from "../Utilities/SliderContainer";
// import alldata from "../allData/allData";

const Home = () => {
  // const {
  //   dataHeroSlider,
  //   dataForTimeLine,
  //   dataForProjects,
  //   dataForTopSlider,
  //   dataForBottomSlider,
  // } = alldata.homeData;

  const dataHeroSlider = [
    {
      img: "/assets/pages/home/hero-slider-1.png",
      mobImg: "/assets/pages/home/hero-slider-1.png",
    },
    {
      img: "/assets/pages/home/hero-slider-1.png",
      mobImg: "/assets/pages/home/hero-slider-1.png",
    },
  ];

  const dataForTopSlider = [
    {
      img: "/assets/pages/home/home-top-slider-1.png",
      mobImg: "/assets/pages/home/home-top-slider-1.png",
    },
    {
      img: "/assets/pages/home/home-top-slider-1.png",
      mobImg: "/assets/pages/home/home-top-slider-1.png",
    },
    {
      img: "/assets/pages/home/home-top-slider-1.png",
      mobImg: "/assets/pages/home/home-top-slider-1.png",
    },
  ];

  const dataForBottomSlider = [
    {
      img: "/assets/pages/home/home-bottom-slider-1.png",
      mobImg: "/assets/pages/home/home-bottom-slider-1.png",
    },
    {
      img: "/assets/pages/home/home-bottom-slider-1.png",
      mobImg: "/assets/pages/home/home-bottom-slider-1.png",
    },
    {
      img: "/assets/pages/home/home-bottom-slider-1.png",
      mobImg: "/assets/pages/home/home-bottom-slider-1.png",
    },
  ];

  const dataForProjects = [
    {
      heading: `Industrial, logistics real estate sector most resilient asset class: JLL`,
      text: `The demand for e-commerce and pharmaceutical services have ensured that India’s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.`,
      url: `/`,
      img: `/assets/pages/home/project-1.png`,
      imgMob: `/assets/pages/home/project-1.png`,
      imgAlt: ``,
    },
    {
      heading: `Industrial, logistics real estate sector most resilient asset class: JLL`,
      text: `The demand for e-commerce and pharmaceutical services have ensured that India’s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.`,
      url: `/`,
      img: `/assets/pages/home/project-1.png`,
      imgMob: `/assets/pages/home/project-1.png`,
      imgAlt: ``,
    },
    {
      heading: `Industrial, logistics real estate sector most resilient asset class: JLL`,
      text: `The demand for e-commerce and pharmaceutical services have ensured that India’s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.`,
      url: `/`,
      img: `/assets/pages/home/project-1.png`,
      imgMob: `/assets/pages/home/project-1.png`,
      imgAlt: ``,
    },
    {
      heading: `Industrial, logistics real estate sector most resilient asset class: JLL`,
      text: `The demand for e-commerce and pharmaceutical services have ensured that India’s industrial and logistics real estate industry has remained the most resilient asset class in the first quarter of 2020.`,
      url: `/`,
      img: `/assets/pages/home/project-1.png`,
      imgMob: `/assets/pages/home/project-1.png`,
      imgAlt: ``,
    },
  ];

  const dataForTimeLine = [
    {
      year: 2019,
      heading: "Heading 1",
      img: "/assets/logo.png",
    },
    {
      year: 2018,
      heading: "Heading 2",
      img: "/assets/logo.png",
    },
    {
      year: 2017,
      heading: "Heading 3",
      img: "/assets/logo.png",
    },
    {
      year: 2019,
      heading: "Heading 1",
      img: "/assets/logo.png",
    },
    {
      year: 2018,
      heading: "Heading 2",
      img: "/assets/logo.png",
    },
    {
      year: 2017,
      heading: "Heading 3",
      img: "/assets/logo.png",
    },
    {
      year: 2019,
      heading: "Heading 1",
      img: "/assets/logo.png",
    },
    {
      year: 2018,
      heading: "Heading 2",
      img: "/assets/logo.png",
    },
    {
      year: 2017,
      heading: "Heading 3",
      img: "/assets/logo.png",
    },
    {
      year: 2019,
      heading: "Heading 1",
      img: "/assets/logo.png",
    },
    {
      year: 2018,
      heading: "Heading 2",
      img: "/assets/logo.png",
    },
    {
      year: 2017,
      heading: "Heading 3",
      img: "/assets/logo.png",
    },
  ];

  const handleTimeLineScroll = () => {
    const scrollIndicator = document.querySelector(".scrollindicator");
    if (scrollIndicator) scrollIndicator.remove();
  };

  return (
    <div id="home" title="home">
      {/* hero slider area */}
      <HeroSlider data={dataHeroSlider} />

      {/* about us  */}
      <div className="about-us floating-items-container page-width txt-center">
        <div className="floating-base txt-container">
          <p className="rte">
            RP-Sanjiv Goenka Group, in the last few years, has grown
            exponentially in revenue, market cap and profitability. We have made
            all our businesses, leaders in their respective sectors. Our vision
            is to be a dynamic conglomerate driven by sustainable growth,
            efficiency and innovation.
          </p>
        </div>

        <h2 className="float float-top primary-font primary-color heading">
          ABOUT US
        </h2>
        <Link to="/" className="btn float float-bottom">
          Read More
        </Link>
      </div>

      {/* top slider */}
      <section className="top-slider">
        <SliderContainer dataForSlider={dataForTopSlider} />
      </section>

      {/* how it started  */}
      <section className="how-it-started">
        <div className="img-container">
          <picture>
            <source
              srcSet="/assets/pages/home/how-it-started.png"
              media="(max-width: 750px)"
            />
            <img src="/assets/pages/home/how-it-started.png" alt="" />
          </picture>
        </div>

        <div className="time-line-container">
          <Timeline
            dataForTimeLine={dataForTimeLine}
            handleTimeLineScroll={handleTimeLineScroll}
          />
          <ScrollIndicator />
        </div>
      </section>

      {/* display image  */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 0" }}>
        <DisplayImg
          data={{
            img: "/assets/pages/home/display-img.png",
            mobImg: "/assets/pages/home/display-img.png",
          }}
        />
      </div>

      {/* bottom slider */}
      <section className="bottom-slider">
        <SliderContainer dataForSlider={dataForBottomSlider} />
      </section>

      {/* key businesses  */}
      <section className="key-businesses">
        <div className="floating-items-container txt-center">
          <h2 className="float float-top primary-font secondary-color heading">
            KEY BUSINESSES
          </h2>

          <div className="grid-container floating-base">
            {["business-1.png", "business-2.png", "business-3.png"].map(
              (img, index) => (
                <div
                  key={index}
                  className={`img-container grid-item grid-item-${index}`}
                >
                  <img src={`/assets/pages/home/${img}`}></img>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* leadership  */}
      <section className="leadership">
        <div className="floating-items-container txt-center">
          <h2 className="float float-top primary-font primary-color heading">
            LEADERSHIP
          </h2>

          <div className="grid-container floating-base page-width">
            <div className="img-container">
              <picture>
                <source
                  srcSet="/assets/pages/home/leadership-guy.png"
                  media="(max-width: 750px)"
                ></source>
                <img src="/assets/pages/home/leadership-guy.png" alt=""></img>
              </picture>
            </div>

            <div className="txt-container">
              <p className="rte">
                The Founder of Arjoi Group has established this organisation
                with a view to reach out to people for their economic needs as
                well as to serve the society. Being an optimistic person with
                full faith in God, he takes care to fulfill every possible need
                of his employees, which in return helps work for a brand which
                Arjoi is today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* core values  */}
      <section className="core-values">
        <div className="floating-items-container txt-center">
          <h2 className="float float-top primary-font secondary-color heading">
            CORE VALUES
          </h2>

          <div className="grid-container floating-base">
            {["value-1.png", "value-2.png", "value-3.png"].map((img, index) => (
              <div
                key={index}
                className={`img-container grid-item grid-item-${index}`}
              >
                <img src={`/assets/pages/home/${img}`}></img>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ongoing projects  */}
      <section className="projects">
        <div className="floating-items-container">
          <h2 className="float float-top primary-font primary-color txt-center heading">
            ONGOING PROJECTS
          </h2>
          <div className="floating-base">
            <Projects data={{ dataForProjects }} />
          </div>
        </div>
      </section>

      {/* newsletter  */}
      <NewsLetter />
    </div>
  );
};

export default Home;
