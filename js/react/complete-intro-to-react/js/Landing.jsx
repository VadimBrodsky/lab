import React from 'react';

// arrow function with an implicit return
var Landing = () => (
  <div className='app-container'>
    {/* class is a reserved word in JS, DOM/React uses className instead */}
    <div className='home-info'>
      <h1 className='title'>YouTube Searcher</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All</button>
    </div>
  </div>
);

export default Landing;
