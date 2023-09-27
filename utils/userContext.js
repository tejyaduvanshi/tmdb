"use client"
import {React,useEffect,useState,createContext} from 'react'
import Link from "next/link"
import styles from "../app/page.module.css"
import axios from '../utils/axios'
export const movielist = createContext(null);



const userContext = ({children}) => {

  const [trending, settrending] = useState([]);

  const gettrending = async () =>{
    try {
      const {data} =await axios.get("/trending/all/day?api_key=58acad46009c6107276ed3d22e4ae462")
      console.log(data.results)
      settrending(data.results)
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    gettrending()

  },[])

  return (
    
    <movielist.Provider>
    <div>
    <div className={styles.trending}>
    <h1>Trending</h1>
    <div className={styles.cards}>
        {Array.isArray(trending) && trending.length !==0 
    ? trending.map((card,i)=>(
      <div className={styles.card} key={card.i}>
        <img className={styles.img} src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="" />

        <h1 className={styles.title}>{card.title}</h1>
        <h1 className={styles.name}>{card.name}</h1>
        {/* <h2>{card.overview}</h2> */}
        {/* <h2>hello</h2> */}
      </div>  
    ))
    :"loading......."
  }
    </div>
  </div>
  </div>
  </movielist.Provider>

  )
}

export default userContext