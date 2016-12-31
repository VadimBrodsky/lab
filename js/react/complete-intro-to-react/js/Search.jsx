import React from 'react';
import shows from '../public/data';

const Search = () => (
  <pre><code>
    { JSON.stringify(shows, null, 4) }
  </code></pre>
);

export default Search;
