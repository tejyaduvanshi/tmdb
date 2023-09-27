"use client"
import {Children, React,useEffect,useState} from 'react'
import Link from "next/link"
import styles from "./page.module.css"
import axios from '../utils/axios'
import userContext, { movielist } from '@/utils/userContext'

const page = () => {
  
  return (
    <div >
      <div id="nav" className={styles.nav}>
        <div id="options" style={{display:"flex",justifyContent:"center", alignItems:"center", gap :"15px"}}>
        <img style={{width:"10vw"}} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
        </div>
              
      {/* <Link href='/movie'> */}

        <h1  className={styles.navtext}>Movies</h1>

      {/* </Link> */}
        <h1  className={styles.navtext}>TV Shows</h1>
        <h1  className={styles.navtext}>More</h1>
        <h1  className={styles.navtext}>People</h1>
      </div>
      {/* <div className={styles.movie}>
        <h3>Popular</h3>
        <h3>now playing</h3>
        <h3>upcomming</h3>
        <h3>Top Rated</h3>
      </div> */}
    <div className={styles.searchbg}>
      <div className={styles.search}>
        <h1>search for movies , tv show ....</h1>
      </div>
    </div>


    </div>
  )
}

export default page