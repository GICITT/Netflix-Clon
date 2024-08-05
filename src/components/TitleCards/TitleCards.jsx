import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import data from "../../assets/cards/cards-data";
import { Link } from "react-router-dom";

export default function TitleCards({ title, category }) {
  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmE5NmQwY2YzNGRjYzYxMWIyYTM3NzU2OWQ5M2MwOSIsIm5iZiI6MTcyMDU0ODUxMS4wNzI2ODUsInN1YiI6IjY1NTdjMGI0NTM4NjZlMDBhYmFjNTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0-XJpZkxvhmKpjyVxeCMjekQ6A6TWydK0ak3Lm5rbA",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const currentCardsRef = cardsRef.current;
    currentCardsRef.addEventListener("wheel", handleWheel);

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    return () => {
      currentCardsRef.removeEventListener("wheel", handleWheel);
    };
  }, [category]);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`player/${card.id}`} className="card" key={index}>
            <img
              className="img"
              src={`https://image.tmdb.org/t/p/w500/` + card.backdrop_path}
              alt={card.name}
            />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
