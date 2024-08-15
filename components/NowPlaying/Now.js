"use client";

import React, { useState , useEffect } from "react";
import "./Now.css";
import Card from "../card/Card";

const MovieList = () => {
  const [movieList, setmovieList] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=35d7b5aac9089983775fb378b5750660&language=en-US&limit=10`
    )
      .then((res) => res.json())
      .then((data) => setmovieList(data.results));
  };

  return (
    <div className="movie_listP">
      <h2 className="list_titleP">Now Playing</h2>
      <div className="list_cardsP">
        {movieList &&
          movieList.map((movie, i) => <Card key={i} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
