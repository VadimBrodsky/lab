import * as React from 'react';
import * as ReactDom from 'react-dom';
import Hello from './hello';

ReactDom.render(
  <Hello name="Snow" />,
  document.getElementById('root')
);

