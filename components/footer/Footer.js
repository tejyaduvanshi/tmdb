import React from 'react'
import Link from 'next/link'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="f">
            <h1 className='ulta'>EIVOX</h1><h1 className='seedha'>XOVIE</h1>
        </div>
        <div className="f">
            <h2>The Basics</h2>
            <Link className='l' href="">About</Link>
            <Link className='l' href="">Contact Us</Link>
            <Link className='l' href="">Support</Link>
            <Link className='l' href="">System Status</Link>
        </div>
        <div className="f">
            <h2>GET INVOLVED</h2>
            <Link className='l' href="">Contribution Bible</Link>
            <Link className='l' href="">Add New Movie</Link>
            <Link className='l' href="">Add New TV Show</Link>
        </div>
        <div className="f">
            <h2>COMMUNITY</h2>
            <Link className='l' href="">Guidelines</Link>
            <Link className='l' href="">Discussions</Link>
            <Link className='l' href="">Leaderboard</Link>
            <Link className='l' href="">Twitter</Link>
        </div>
    </div>
  )
}

export default Footer