// import React, { useState } from 'react';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const apiKey = 'YOUR_TMDB_API_KEY';

//   const searchMovies = async (query) => {
//     try {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
//       );
//       const data = await response.json();
//       return data.results;
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleSearch = async () => {
//     if (query.trim() !== '') {
//       const data = await searchMovies(query);
//       setResults(data);
//       console.log(setResults);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for movies..."
//         value={query}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>Search</button>

//       {results.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <img
//             src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
//             alt={`${movie.title} Poster`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Search;