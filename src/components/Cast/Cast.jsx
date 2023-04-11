import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/API';
import { IMG_BASE_URL } from 'services/API';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCast(movieId).then(res => {
      setCast(res.data.cast);
      console.log(res.data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(item => (
            <li key={item.id}>
              <div>
                <img
                  src={`${IMG_BASE_URL}${item.profile_path} `}
                  alt={item.name}
                  height="100px"
                />
                <div>{item.name}</div>
                <div>Charater: {item.character}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Cast;
