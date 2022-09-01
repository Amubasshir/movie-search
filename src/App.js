import React from 'react';
import SearchMovies from './SearchMovies';
import './styles/App.css';

function App() {
  console.log(process.env);
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
