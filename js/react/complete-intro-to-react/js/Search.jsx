import React from 'react';
import data from '../public/data';
import ShowCard from './ShowCard';

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard show={show} />
      ))}
    </div>
  </div>
);

export default Search;
