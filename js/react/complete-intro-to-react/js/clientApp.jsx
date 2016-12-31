import React from 'react';
import ReactDOM from 'react-dom';

// arrow function with an implicit return
var App = () => (
  <div className='app-container'>
    {/* class is a reserved word in JS, DOM/React uses className instead */}
    <div className='home-info'>
      <h1 className='title'>YouTube Searcher</h1>
      <input className='search' type='text' placeholder='Search' />
      <button className='browse-all'> or Browse All</button>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
