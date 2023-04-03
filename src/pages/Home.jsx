import React from 'react';
import TopBanner from '../blah';
import MovieList from '../Movies';

function Home() {
  return (
    <div className="App">
      <TopBanner saying="Joel's Movie Collection-a non-comprehensive list" />
      <MovieList />
    </div>
  );
}

export default Home;
