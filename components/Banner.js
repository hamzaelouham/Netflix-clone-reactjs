import React, { useEffect, useState } from "react";
import truncate from "../src/utils/fun";
import request from "../src/utils/axios";
import { api_key } from "../src/utils/api";

export const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await request.get(
        `trending/all/week?api_key=${api_key}&language=en-US`
      );
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };
    fetchMovie();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons"></div>
        <button className="banner-button">My list</button>
        <button className="banner-button">play</button>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner-fedbottom" />
    </div>
  );
};
