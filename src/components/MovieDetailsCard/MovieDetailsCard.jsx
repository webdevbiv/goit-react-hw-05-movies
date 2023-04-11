import React from 'react';
import { IMG_BASE_URL } from 'services/API';
import placeHolderImg from '../../img/no-image.png';

function MovieDetailsCard({ details }) {
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
  } = details;

  const formatDate = release_date.slice(0, 4);
  const formatUserScore = vote_average.toFixed(1);

  return (
    <>
      <div>
        <img
          src={poster_path ? `${IMG_BASE_URL}${poster_path}` : placeHolderImg}
          alt={original_title}
          height="100px"
        />
      </div>
      <div>
        <div>
          <span>{title}</span>
          <span>({formatDate})</span>
        </div>
        <div>User Score: {formatUserScore}</div>
        <div>Overview</div>
        <div>{overview}</div>
        <div>Genres</div>
        {genres && (
          <ul>
            {genres.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default MovieDetailsCard;
