import React from "react";
import { image_url } from "../src/utils/api";

export const Row = ({ title, isLarge = false, movies }) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies[0].results
          .slice(0, 7)
          .map(
            (movie) =>
              ((isLarge && movie.poster_path) ||
                (!isLarge && movie.backdrop_path)) && (
                <img
                  loading="lazy"
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
};
