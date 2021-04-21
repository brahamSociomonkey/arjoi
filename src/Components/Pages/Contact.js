import React, { useState, useRef } from "react";
import NewsLetter from "../Utilities/mini-comps/NewsLetter";
import HeroImgWithTxt from "../Utilities/mini-comps/HeroImgWithTxt";
import ContactForm from "../forms/ContactForm";
import DisplayImg from "../Utilities/mini-comps/DisplayImg";
export const ContactFormContext = React.createContext();

const Contact = () => {
  const errorRef = useRef(undefined);

  const dataForHeroImg = {
    heading: "CONTACT US",
    img: "/assets/pages/contact/hero.png",
    mobImg: "/assets/pages/contact/hero.png",
  };

  const dataForLocateImg = {
    heading: "LOCATE US",
    img: "/assets/pages/contact/locate.png",
    mobImg: "/assets/pages/contact/locate.png",
  };

  const dataForDisplayImg = {
    img: "/assets/pages/contact/map.png",
    mobImg: "/assets/pages/contact/map.png",
  };

  const [contactFromData, setContactFromData] = useState({
    name: { value: "", required: true },
    phone: { value: "", required: true },
    email: { value: "", required: false },
    message: { value: "", required: true },
  });

  const handleInvalid = (e) => {
    errorRef.current.classList.remove("form-fade-in-up");

    setTimeout(() => {
      errorRef.current.classList.add("form-fade-in-up");
    }, 3000);
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;

    setContactFromData((prevData) => ({
      ...prevData,
      [name]: { ...prevData[name], name, value },
    }));
  };

  return (
    <div className="page-contact">
      {/* error message  */}
      <div ref={errorRef} className="form-has-error form-fade-in-up">
        Please fill the form carefully !
      </div>

      {/* hero area  */}
      <HeroImgWithTxt data={dataForHeroImg} />

      {/* form area  */}
      <ContactFormContext.Provider
        value={{ contactFromData, handleFromChange, handleInvalid }}
      >
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </ContactFormContext.Provider>

      {/* locate area  */}
      <HeroImgWithTxt data={dataForLocateImg} />

      {/* map area  */}
      <div
        className="map-container"
        style={{ padding: "5%", maxWidth: "1200px", marginInline: "auto" }}
      >
        <DisplayImg data={dataForDisplayImg} />
      </div>

      {/* newsletter  */}
      <br />
      <NewsLetter />
    </div>
  );
};

export default Contact;
