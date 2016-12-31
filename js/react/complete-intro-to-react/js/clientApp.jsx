import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

// arrow function with an implicit return
var MyFirstComponent = () => (
  <div>
    <MyTitle title='Game of Thrones' color='rebeccapurple' />
    <MyTitle title='Clash of Kings' color='mediumaquamarine' />
    <MyTitle title='Storm of Swords' color='peru' />
    <MyTitle title='Feast for Crows' color='papayawhip' />
  </div>
);

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'));
