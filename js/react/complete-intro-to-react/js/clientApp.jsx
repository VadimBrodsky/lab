import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

// use destructuring to pull out parts of react router
// const Router = ReactRouter.Router;
// const { Router, Route, hashHistory } = ReactRouter;

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
      <Route path='/details/:id' component={Details} />
    </Route>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
