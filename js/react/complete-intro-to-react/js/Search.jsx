import React from 'react';
import data from '../public/data';

const Search = () => (
  <div className='container'>
    {data.shows.map((show) => {
      return <h3>{show.title}</h3>
    })}
  </div>
);

export default Search;
