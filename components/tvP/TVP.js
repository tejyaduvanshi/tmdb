import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import "./TVP.css"

const tvP = () => {
    const [tv, settv] = useState()
    const{id} = useParams()

    useEffect(()=>{
        getData()
        window.scrollTo(0,0)
    },[])

    const getData = () => {
        fetch(
          `https://api.themoviedb.org/3/tv/${id}?api_key=35d7b5aac9089983775fb378b5750660&language=en-US`
        )
          .then((res) => res.json())
          .then((data) => setmovie(data));
      };

  return (
    <div className='movie'>
        <div className="movie_intro">
        <div className="overflow"></div>
            <img className='movie_back' src={`https://image.tmdb.org/t/p/original${tv ? tv.backdrop_path : ""}`} />
        </div>
        <div className="movie_detail">
            <div className="movie_detailLeft">
                <div className="movie_poster">
                    <img src={`https://image.tmdb.org/t/p/original${tv ? tv.poster_path : ""}`} className='movie_poster' />
                </div>
            </div>
            <div className="movie_detailRight">
                <div className="movie_detalRTop">
                    <div className="movie_name">{tv ? tv.original_title : ""}</div>
                    <div className="movie_tagline">{tv ? tv.tagline : ""}</div>
                    <div className="movie_runtime">{tv ? tv.runtime + "min" : ""}</div>
                    <div className="movie_releaseDate">{tv ? "Release date : " + tv.release_date : ""}</div>
                    <div className="movie_genres">
                        {
                            tv && tv.genres ? tv.genres.map(genre => (
                                <span className="movie_genre" id={genre.id}>{genre.name}</span>
                            ))
                            :
                            ""
                        }
                    </div>
                </div>
                <div className="movie_detailRBottom">
                    <div className="overview">Overview</div>
                    <div className="Detail">{tv ? tv.overview : ""}</div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default movieP