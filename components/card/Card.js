import React, { useEffect, useState } from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import "./Card.css"
import Link from 'next/link'


const Card = ({movie}) => {

    const [isLoading, setisLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setisLoading(false)
        },1500)
    })

  return (
    
    <>
        {isLoading
        ?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor='#444'>
                <Skeleton height={300} duration={2}></Skeleton>
            </SkeletonTheme>
        </div>
        :
        <Link href={`/movie/${movie.id}`}>
            <div className="cards">
                <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} />
                <div className="cards_overlay">
                    <div className="cards_title">{movie?.original_title}</div>
                    <div className="cards_runtime">
                        {movie?.release_date}
                    </div>
                </div>
            </div>
        </Link>}
    </>
  )
}

export default Card