import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Search from "components/Search/Search";
import MovieList from "components/MovieList/MovieList";
import { fetchSearch } from "services/themoviedbApi";

export default function MoviesPage() {
   const [movies, setMovies] = useState(null);
   const [searchQuery, setSearchQuery] = useState('');
   const location = useLocation();
   const history = useHistory();
   const searchURL = new URLSearchParams(location.search).get('query') ?? '';

   useEffect(() => {
      if (!searchQuery) {
         return;
      }
      fetchSearch(searchQuery).then((data) => {
         if (!data.results.length) {
            alert('No results');
            return;
         }
         setMovies(data.results);
      })
         .catch((error) => alert('Something went wrong'));
   }, [searchQuery]);
   useEffect(() => {
      if (searchURL === '') {
         return;
      }
      setSearchQuery(searchURL)
   }, [searchURL]);
   const setHistory = (searchQuery) => {
      history.push({
         ...location,
         search: `query=${searchQuery}`,
      })
   };
   const onSubmit = (searchQuery) => {
      setSearchQuery(searchQuery);
      setHistory(searchQuery)
   }
   return (
      <>
         <Search onSubmit={onSubmit}/>
            {movies && <MovieList movies={movies}/>}
      </>
   )
};
