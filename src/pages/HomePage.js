import { useState, useEffect } from 'react';
import { fetchTrending } from 'services/themoviedbApi';
import MovieList from 'components/MovieList/MovieList';

export default function HomePage() {
   const [movies, setMovies] = useState([]);
   useEffect(() => {
      fetchTrending().then((data) => {
         setMovies(data.results)
      })
   }, []);
   return (
      <>
         <h2>Trending Today</h2>
         {movies && <MovieList movies={movies}/>}
      </>
   )
};
