import {useState, useEffect} from 'react';
import { fetchCredits } from 'services/themoviedbApi';
import { PropTypes } from 'prop-types';

export default function Cast({movieId}) {
   const [cast, setCast] = useState(null);
   useEffect(() => {
      fetchCredits(movieId).then((data) => {
         setCast(data.cast);
      })
   }, [movieId]);
   return (
      cast && (
         <ul>
            {cast.map((actor) => (
               <li key={actor.id}>
                    <img
              src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              alt={actor.name}
              width="100"
              height="150"
            ></img>
                  <h3>{actor.name}</h3>
                  <p>Character: {actor.character}</p>
               </li>
      ))}
         </ul>
   )
   )
};

Cast.propTypes = {
   movieId:PropTypes.string.isRequired,
}