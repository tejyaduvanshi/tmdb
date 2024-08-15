"use client";

import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Card from "../card/Card";
import { useMyContext } from "@/utils/context";
import { useParams } from "next/navigation";

const MovieList = () => {
  const [movieList, setmovieList] = useState();
  // console.log(type);
  const params = useParams();
  const { type } = params;
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=35d7b5aac9089983775fb378b5750660&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setmovieList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {movieList &&
          movieList.map((movie, i) => <Card key={i} movie={movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
