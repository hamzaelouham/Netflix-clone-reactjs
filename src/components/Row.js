import React from "react";
import request from "../utils/axios";
import { image_url } from "../utils/api";
import { useQuery } from "react-query";

function Row({ title, url, isLarge = false }) {
  const getMovies = async () => {
    const { data } = await request.get(url);
    return data.results;
  };

  const { data: movies, isLoading } = useQuery([`movies-${title}`], () =>
    getMovies()
  );

  if (isLoading) return <h4>loading ...</h4>;

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
