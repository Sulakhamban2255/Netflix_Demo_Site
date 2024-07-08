import React, { useEffect, useState } from "react";
import instance from "../requestApi/baseUrl";
import "./Banner.css";

function Banner({ fetchUrl }) {
  const [banner, setBanner] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const fetchMovie = async () => {
    const result = await instance.get(fetchUrl);
    setBanner(
      result.data.results[
        Math.floor([Math.random() * result.data.results.length])
      ]
    );
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  console.log(banner);

  return (
    <div
      className="banner1"
      style={{ backgroundImage: `url(${base_url}${banner.backdrop_path})` }}
    >
      <div>
        <h1>{banner.title ? banner.title : banner.name}</h1>
        <p>{banner.overview}</p>
      </div>
    </div>
  );
}

export default Banner;
