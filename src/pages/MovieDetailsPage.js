import { useState, useEffect, lazy, Suspense } from "react";
import { Route, NavLink, useParams, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchDetails } from "services/themoviedbApi";
import Loader from "components/Loader/Loader";
import s from './MovieDetailsPage.module.css';

const Review = lazy(() => {
   import('./Reviews' /* webpackChunkName: "review-page" */)
});
const Cast = lazy(() => {
   import('./Cast' /* webpackChunkName: "cast-page" */)
});
export default function MovieDetailsPage() {
   const history = useHistory();
   const location = useLocation();
   const { movieId } = useParams();
   const [movie, setMovie] = useState(null);
   const { url, path } = useRouteMatch();
   useEffect(() => {
      fetchDetails(movieId).then((movie) => {
         setMovie(movie)
      })
   }, [movieId]);
   const onScrollPage = () => {
      setTimeout(() => {
         window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: "smooth",
         });
      }, 1200);
   };
   const goBack = () => {
      history.push(location?.state?.from?.location ?? '/')
   };
   return (
      <>
         {movie && (
            <>
               <div className={s.wrapper}>
                  <button className={s.button} onCLick={goBack} type='button'>Go back</button>
                  <div className={s.card}>
                     <img
                        className={s.poster}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                     />
                     <div className={s.info}>
                        <h2 className={s.title}>{movie.title}</h2>
                        <p>User score:{movie.vote_average}</p>
                        <h3 className={s.title}>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3 className={s.title}>Genres</h3>
                        <p>{movie.genres.map((genre)=>genre.name).join(',')}</p>
                     </div>
                  </div>
                  <div className={s.more}>
                     <h3 className={s.title}>Additional information</h3>
                     <ul>
                        <li>
                           <NavLink
                              className={s.link}
                              onCLick={() => {
                                 onScrollPage();
                              }}
                              to={{
                                 pathname: `${url}/reviews`,
                                 state: {
                                    from:location?.state?.from ?? '/'
                                 },
                              }}
                              
                           >Reviews</NavLink>
                        </li>
                     </ul>
                  </div>
               </div>
               <Suspense fallback={<Loader />}>
                  <Route path={`${path}/cast`}>
                     <Cast movieId={movieId}/>
                  </Route>
                  </Suspense>
               <Suspense fallback={<Loader />}>
                  <Route path={`${path}/reviews`}>
                     <Review movieId={movieId}/>
                  </Route>
                  </Suspense>
            </>
      
         )}
      </>
   )
};



