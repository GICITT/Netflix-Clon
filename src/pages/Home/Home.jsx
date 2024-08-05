import React from "react";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import banner from "../../assets/cards/imgbaner.jpg";
import title from "../../assets/cards/title.png";
import { FaOtter, FaPlay } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="hero">
        <img src={banner} alt="banner-img" className="banner-img" />
        <div className="hero-caption">
          <img src={title} alt="title" className="caption-img" />
          <p>
            {" "}
            Discovering his ties to a secret anciente orde, a young man living
            in modern Istanbul embarkson a quest tos ave the city from an
            inmmortal enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <FaPlay /> Play
            </button>
            <button className="dark-btn">
              {" "}
              <RiErrorWarningLine className="img-!" />
              More Info
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <TitleCards />
      </div>{" "}
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflixs"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
}
