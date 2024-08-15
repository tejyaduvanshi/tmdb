"use client";

import React, { useEffect, useState } from "react";
import "./TVlist.css";
import Card from "../card/Card";
import { useParams } from "next/navigation";

const TVlist = () => {
  const [tvList, settvList] = useState();
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
      `https://api.themoviedb.org/3/tv/${
        type ? type : "popular"
      }?api_key=35d7b5aac9089983775fb378b5750660&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => settvList(data.results));
  };

  return (
    <div className="tv_list">
      <h2 className="list_title">{(type ? type : "POPULAR").toUpperCase()}</h2>
      <div className="list_cards">
        {tvList &&
          tvList.map((tv, i) => <Card key={i} movie={tv} />)}
      </div>
    </div>
  );
};

export default TVlist;
