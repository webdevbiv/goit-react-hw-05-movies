import React from 'react';
import { IMG_BASE_URL } from 'services/API';

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

  return (
    <>
      {title}
      <div>
        <div>
          <img
            src={`${IMG_BASE_URL}${poster_path}`}
            alt={original_title}
            height="100px"
          />
        </div>
        <div>
          <div>
            <span>{title}</span>
            <span>{release_date}</span>
          </div>
          <div>User Score: {vote_average}</div>
          <div>Overview</div>
          <div>{overview}</div>
          <div>Genres</div>
          <div>
            {genres &&
              genres.map((item, index) => <div key={index}>{item.name}</div>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsCard;
