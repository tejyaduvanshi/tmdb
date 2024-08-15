// context.js
"use client"
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyContextProvider({ children }) {
  const [value, setValue] = useState("initialValue");
  const [movieList, setmovieList] = useState([])


  return (
    <MyContext.Provider value={{ value, setValue,movieList, setmovieList }}>
      {children}
    </MyContext.Provider>
  );
}
