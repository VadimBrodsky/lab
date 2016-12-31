import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Landing from './Landing';

// use destructuring to pull out parts of react router
// const Router = ReactRouter.Router;
// const { Router, Route, hashHistory } = ReactRouter;

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
