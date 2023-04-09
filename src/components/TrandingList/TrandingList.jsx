import React from 'react';
import { Link } from 'react-router-dom';

function TrandingList({ data }) {
  console.log(data);
  return (
    <>
      {data.map(item => (
        <Link to={`${item.id}`}>{item.title}</Link>
      ))}
    </>
  );
}

export default TrandingList;
