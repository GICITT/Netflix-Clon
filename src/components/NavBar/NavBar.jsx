import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/cards/logo.png";
import searchIcon from "../../assets/cards/search-icon.png";
import { BsBell } from "react-icons/bs";
import Profile from "../../assets/cards/NetflixProfile.jpeg";
import { IoMdArrowDropdown } from "react-icons/io";
import { logout } from "../../firebase";

export default function NavBar() {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener(`scroll`, () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add(`nav-dark`);
      } else {
        navRef.current.classList.remove(`nav-dark`);
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navBar">
      <div className="navBar-left">
        <img src={logo} alt="" className="img" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navBar-right">
        <img src={searchIcon} alt="search-icon" className="searchIcon" />
        <p>Children</p>
        <BsBell className="bellIcon" />
        <div className="navBar-profile">
          <img src={Profile} alt="profile" className="profile" />
          <IoMdArrowDropdown className="dropDownProfile" />
          <div className="dropDown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
