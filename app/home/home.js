import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import PopularM from "@/components/PopularM/PopularM";
import TrendingM from "@/components/TrendingM/TrendingM";
import NowPlaying from "@/components/NowPlaying/Now"
import Footer from '@/components/footer/Footer';

const home = () => {

    const [popularMovies, setpopularMovies] = useState([])

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=35d7b5aac9089983775fb378b5750660&language=en-US")
        .then(res => res.json())
        .then(data => setpopularMovies(data.results))
    },[])
    // console.log(popularMovies);

  return (
    <div>
        <div className="poster">
            <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            >
                {
                    popularMovies?.map((movie,i) => (
                        <Link key={i} style={{textDecoration:"none" , color:"white"}} href={`/movie/${movie?.id}`}>
                            <div className="posterImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}/>
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">
                                    {movie?.original_title}
                                </div>
                                <div className="posterImage_runtime">
                                    {movie?.release_date}
                                </div>
                                <div className="posterImage_description">
                                    {movie ? movie.overview : ""}
                                </div>
                            </div>
                            
                        </Link>
                    ))
                }
            </Carousel>
            <NowPlaying/>
            <TrendingM/>
            <PopularM/>
            <Footer/>
        </div>
    </div>
  )
}

export default home