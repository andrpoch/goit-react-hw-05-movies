import { useState, useEffect } from 'react';
import { fetchReviews } from 'services/themoviedbApi';
import PropTypes from 'prop-types';

export default function Reviews({movieId}) {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetchReviews().then((data) => {
         setReviews(data.results)
      })
   }, [movieId]);
   return (
      <>
         {reviews.length === 0 ? (
            <>
               <ul>
                  {reviews.map((review) => (
                     <li key={review.id}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                     </li>
                  ))}
               </ul>
            </>     
         ) : (
               <p>Nothing found</p>
      )}
      </>
   )
   };

Reviews.propTypes = {
   movieId: PropTypes.string.isRequired,
};