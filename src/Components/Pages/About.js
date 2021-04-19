import React from "react";
import HeroSlider from "../Utilities/HeroSlider";

const About = () => {
  const dataHeroSlider = [
    {
      img: "/assets/pages/about/hero-slider-1.png",
      mobImg: "/assets/pages/about/hero-slider-1.png",
    },
    {
      img: "/assets/pages/about/hero-slider-1.png",
      mobImg: "/assets/pages/about/hero-slider-1.png",
    },
  ];

  return (
    <div id="about" title="about">
      {/* hero slider area */}
      <HeroSlider data={dataHeroSlider} />

      {/* about us area  */}
      <article className="about-us">
        <div className="floating-items-container grid-container">
          <div className="big-container bg">
            <div className="txt-container">
              <h2 className="heading primary-color primary-font float float-top bottom-line">
                ABOUT US
              </h2>
              <p className="rte">
                Starting our journey to success with little steps, we were just
                like a bud that later bloomed into distinct endeavors, leaving
                footprints of positivity and achievements along the way.
                <br />
                <br />
                Arjoi Group is a vertically-integrated company with a modern
                system of business administration. We do not believe in
                unreachable expectations with no answerability, but believe in
                creating extra value as a direct consequence of personal
                approach.
                <br />
                <br />
                The Arjoi Group has of two forms of specific business divisions:
              </p>

              <p>
                <strong>
                  Real Estate & Construction <br />
                  Retail Outlet- “Arjoi Mart”
                </strong>
              </p>

              <p className="rte">
                We recognise that our customers need the convenience of a single
                window for all their needs with outstanding service, so that’s
                where we step in. We lead businesses in real estate and
                construction across the country and run a chain of affordable
                retail stores. We adhere to the highest levels of commitment and
                experience while also striving to leave a positive impact on all
                of our customers.
              </p>

              <p>
                <strong>COMMITMENT TO SERVICE IS PARAMOUNT!</strong>
              </p>
            </div>
          </div>

          <div className="img-container small-container offset-down">
            <img src="/assets/pages/about/about.png" alt="about us image" />
          </div>
        </div>
      </article>

      {/* vision  */}
      <article className="vision">
        <div className="floating-items-container grid-container grid-reverse">
          <div className="big-container bg">
            <div className="txt-container">
              <h2 className="heading primary-color primary-font float float-top bottom-line">
                VISION
              </h2>
              <p className="rte">
                The word 'Arjoi' means 'Ardaas'. Thus, the Arjoi Group wants to
                make unadulterated products, available in their purest form.
                <br />
                <br />
                We plan on creating global businesses with a mix of homegrown
                brands and establish them through our systematically planned
                approaches. We envision to win over the hearts of our customers
                and partners by delivering premium quality services and offer
                the best all-around customer experience.
                <br />
                <br />
                Not only do we focus on businesses but also constitute
                foundations that help the downtrodden. We wish to focus on large
                scale real estate and infrastructure development and become a
                leading corporation that creates opportunities and brings value
                to communities around the world.
              </p>
            </div>
          </div>

          <div className="img-container small-container offset-down">
            <img src="/assets/pages/about/vision.png" alt="about us image" />
          </div>
        </div>
      </article>

      {/* brand mission  */}
      <article className="about-us">
        <div className="floating-items-container grid-container">
          <div className="big-container bg">
            <div className="txt-container">
              <h2 className="heading primary-color primary-font float float-top bottom-line">
                BRAND MISSION
              </h2>
              <p className="rte">
                We are devoted to foster innovation and growth, through our
                willpower and vision, bringing exceptional value with us
                wherever we go. While creating businesses, it is our
                responsibility to ensure that we deliver the most beneficial
                results. We generously focus on creating opportunities for
                growth and employment while focusing on building a brand name
                across the nation. To underpin our workstyle, we would like to
                share our set of values crucial for consistent growth:
              </p>
              <div>
                <strong>
                  <ul>
                    <li>RISK ASSESSMENT</li>
                    <li>QUALITY CONTROL</li>
                    <li>LEADERSHIP</li>
                    <li>INTEGRITY</li>
                    <li>TRAINING</li>
                    <li>SUSTAINIBILITY</li>
                  </ul>
                </strong>
              </div>
            </div>
          </div>

          <div className="img-container small-container offset-down">
            <img
              src="/assets/pages/about/brand-mission.png"
              alt="about us image"
            />
          </div>
        </div>
      </article>

      {/* Pillars of Arjoi Group  */}
      <article className="pillars">
        <div className="floating-items-container grid-container grid-reverse">
          <div className="big-container bg">
            <div className="txt-container">
              <h2 className="heading primary-color primary-font float float-top bottom-line">
                Pillars of Arjoi Group
              </h2>

              <div>
                <h2 className="heading secondary-font">HUMANITY</h2>
                <p className="rte">
                  We intend to reach out to every business or household in need
                  of help of our services.{" "}
                </p>
              </div>

              <div>
                <h2 className="heading secondary-font">COMMITMENT</h2>
                <p className="rte">
                  We believe in taking accountability for our actions and
                  decisions as a group and adhere to all promises and
                  responsibilities towards our customers.
                </p>
              </div>

              <div>
                <h2 className="heading secondary-font">TRANSPARENCY</h2>
                <p className="rte">
                  We aim to bring growth and sustainability to the system by
                  adopting methods that help us deliver services without harming
                  the environment.
                </p>
              </div>

              <div>
                <h2 className="heading secondary-font">ECONOMIZING</h2>
                <p className="rte">
                  Helping meet the nation’s demands not just financially but
                  also by abiding to the intellectual integrity to assist
                  requirements of our economy.
                </p>
              </div>

              <div>
                <h2 className="heading secondary-font">SUSTAINABILITY</h2>
                <p className="rte">
                  It is a fixed target in our long-term strategy for growth.
                </p>
              </div>
            </div>
          </div>

          <div className="img-container small-container offset-down">
            <img src="/assets/pages/about/vision.png" alt="about us image" />
          </div>
        </div>
      </article>

      <div className="txt-center display-txt">
        <p className="rte page-width">
          There are thousands of people/families/ households which have been
          helped by the Arjoi Group. Arjoi Group has not only helped them
          financially, but in every other way possible so that they could live a
          better life.
        </p>
      </div>
    </div>
  );
};

export default About;
