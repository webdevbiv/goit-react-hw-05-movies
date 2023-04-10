import React, { useState } from 'react';

function SearchMoviesBar({ onSubmit }) {
  const [userInput, setUserInput] = useState('');

  const handleCange = e => {
    return setUserInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    return onSubmit(userInput.trim());
  };

  return (
    <>
      <h1>SearchMovies</h1>
      <form id="search" onSubmit={handleSubmit}>
        <input type="text" onChange={handleCange}></input>
        <button
          type="submit"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search for Movies"
        >
          X
        </button>
      </form>
    </>
  );
}

export default SearchMoviesBar;
