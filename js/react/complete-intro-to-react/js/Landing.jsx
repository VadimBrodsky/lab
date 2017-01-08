import React from 'react';
import { Link } from 'react-router';

// arrow function with an implicit return
var Landing = () => (
  <div className='home-info'>
    {/* class is a reserved word in JS, DOM/React uses className instead */}
    <h1 className='title'>Zetflix Searcher</h1>
    <input className='search' type='text' placeholder='Search' />
    <Link to='/search' className='browse-all'> or Browse All</Link>
  </div>
);

export default Landing;
