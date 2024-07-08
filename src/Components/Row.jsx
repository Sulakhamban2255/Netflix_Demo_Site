import React, { useEffect, useState } from "react";
import instance from "../requestApi/baseUrl";
import "./Row.css";

function Row({ fetchUrl, title , change }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchMovies = async () => {
    const outData = await instance.get(fetchUrl);
    setMovies(outData.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="movies">
        {movies.length > 0 ? (
          movies.map((i) => (
            <img
              className="movie"
              src={`${base_url}${change?i.poster_path : i.backdrop_path}`}
              alt=""
            />
          ))
        ) : (
          <h4>Loading .......</h4>
        )}
      </div>
    </div>
  );
}

export default Row;
