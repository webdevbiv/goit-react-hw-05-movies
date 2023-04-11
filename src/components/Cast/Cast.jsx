import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { IMG_BASE_URL } from 'services/API';
import placeHolderImg from '../../img/no-image.png';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(res => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map((item, index) => (
            <li key={index}>
              <div>
                <img
                  src={
                    item.profile_path
                      ? `${IMG_BASE_URL}${item.profile_path}`
                      : placeHolderImg
                  }
                  alt={item.name}
                  height="100px"
                />
                <div>{item.name}</div>
                <div>Charater: {item.character}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}
    </>
  );
}

export default Cast;
