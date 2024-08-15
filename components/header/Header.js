import React from 'react'
import "./Header.css"
import "@/utils/headerjs"
import Link from 'next/link'
// import Search from "../Search/search"

const Header = () => {
    return (
        <div className='header'>
            <Link href="/" className='xovie'>XOVIE</Link>
            <div className='headerLeft'>
                <div className="dropdown">
                    <span className="hover-text"><h4>Movies</h4></span>
                    <div className="dropdown-content">
                        <Link href="/movies/popular">Popular</Link>
                        <Link href="/movies/top_rated">Top Rated</Link>
                        <Link href="/movies/upcoming">Upcoming</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <span className="hover-text"><h4>TV Shows</h4></span>
                    <div className="dropdown-content">
                        <Link href="/tvs/popular">Popular</Link>
                        <Link href="/tvs/top_rated">Top Rated</Link>
                        <Link href="/tvs/on_the_air">On The Air</Link>
                    </div>
                </div>
                {/* <Search/> */}
            </div>
        </div> 
    )
}

export default Header;