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
};



