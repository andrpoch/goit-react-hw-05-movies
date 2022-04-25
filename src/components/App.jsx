import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import Loader from './Loader/Loader';

const HomePage = lazy(() => {
  import('../pages/HomePage' /* webpackChunkName: 'home-page' */)
});
const MovieDetailsPage = lazy(() => {
  import('../pages/MovieDetailsPage' /* webpackChunkName: 'home-page' */)
});
const MoviesPage = lazy(() => {
  import('../pages/MoviesPage' /* webpackChunkName: 'movies-page' */)
})
export default function App() {
  return (
    <>
        <NavBar />
    <Suspense fallback={<Loader/>}>
        <Switch>
          <Route path='/movies/:movieId'>
            <MovieDetailsPage/>
          </Route>
          <Route path='/movies' exact>
            <MoviesPage />
          </Route>
          <Route path='/'>
            <HomePage/>
          </Route>
        </Switch>
    </Suspense>
    </>
  )
};
