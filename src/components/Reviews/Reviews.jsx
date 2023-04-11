import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/API';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getReviews(movieId).then(res => {
      setReviews(res.data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((item, index) => (
            <li key={index}>
              <div>Author: {item.author}</div>
              <div>{item.content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
}

export default Reviews;
