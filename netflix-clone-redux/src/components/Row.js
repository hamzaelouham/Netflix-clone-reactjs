import React, { useEffect, useState } from "react";
import request from "../utils/axios";
import { image_url } from "../utils/api";

function Row({ title, url, isLarge = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const { data } = await request.get(url);

      setMovies(data.results);
    };

    getMovies();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map(
          (movie) =>
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                className={`row-poster ${isLarge && "row-posterLarge"}`}
                src={`${image_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                key={movie.id}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
}
export default Row;
