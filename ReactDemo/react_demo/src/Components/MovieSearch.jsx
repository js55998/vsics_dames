// App.js
import React, { useState } from 'react';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=94fb1028`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={searchMovies}>Search</button>
      <div>
        {movies && movies.map((movie) => (
          <div key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
