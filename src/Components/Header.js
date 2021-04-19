import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HamIcon from "./mini-comps/HamIcon";

export const Header = () => {
  const headerRef = useRef(null);

  const handleHamClick = (e) => {
    const target = e.target.closest(".ham-menu svg");

    if (headerRef.current.classList.contains("hide")) {
      target.classList.add("opened");
      target.setAttribute("aria-expanded", target.classList.contains("opened"));
        headerRef.current.classList.toggle("hide");
    } else {
      target.classList.remove("opened");
      target.setAttribute("aria-expanded", target.classList.contains("opened"));
        headerRef.current.classList.toggle("hide");
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 650) {
      headerRef.current.classList.add("hide");
    }
  }, [window.innerWidth]);

  return (
    <>
      <HamIcon handleHamClick={handleHamClick} />

      <header ref={headerRef}>
        <nav>
          <div className="nav-link-item">
            <Link onClick={handleLinkClick} className="logo-container" to="/">
              <img src="./assets/logo.png" alt="Arjoi logo"></img>
            </Link>
          </div>
          <ul>
            <li className="nav-link-item">
              <Link onClick={handleLinkClick} className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-link-item">
              <Link
                onClick={handleLinkClick}
                className="nav-link"
                to="/businesses"
              >
                BUSINESSES
              </Link>
            </li>
            <li className="nav-link-item">
              <Link onClick={handleLinkClick} className="nav-link" to="/media">
                MEDIA
              </Link>
            </li>
            <li className="nav-link-item">
              <Link
                onClick={handleLinkClick}
                className="nav-link"
                to="/careers"
              >
                CAREERS
              </Link>
            </li>
            <li className="nav-link-item">
              <Link
                onClick={handleLinkClick}
                className="nav-link"
                to="/community"
              >
                COMMUNITY
              </Link>
            </li>
            <li className="nav-link-item">
              <Link
                onClick={handleLinkClick}
                className="menu-container"
                to="/lol"
              >
                <img src="./assets/menu.png" alt="menu"></img>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
