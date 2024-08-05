import React, { useEffect, useState } from "react";
import "./Player.css";
import { SlArrowLeftCircle } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";

export default function Player() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmE5NmQwY2YzNGRjYzYxMWIyYTM3NzU2OWQ5M2MwOSIsIm5iZiI6MTcyMDU0ODUxMS4wNzI2ODUsInN1YiI6IjY1NTdjMGI0NTM4NjZlMDBhYmFjNTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0-XJpZkxvhmKpjyVxeCMjekQ6A6TWydK0ak3Lm5rbA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const videoData = response.results[0];
        setApiData({
          name: videoData.name,
          key: videoData.key,
          published_at: videoData.published_at || "",
          type: videoData.type,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <SlArrowLeftCircle
        className="arrowIcon"
        onClick={() => {
          navigate(-2);
        }}
      />
      <div className="player-info">
        <p>
          {apiData.published_at ? apiData.published_at.slice(0, 10) : "N/A"}
        </p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}
