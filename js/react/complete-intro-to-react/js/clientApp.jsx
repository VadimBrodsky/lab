import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Layout from './Layout';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import data from '../public/data';

// use destructuring to pull out parts of react router
// const Router = ReactRouter.Router;
// const { Router, Route, hashHistory } = ReactRouter;

const App = React.createClass((
  assignShow (nextState, replace) {
    const showArray = shows.filter( (show) => show.imdbID === nextState.id );

    if (showArray.length < 1) {
      return replace('/');
    }

    Object.assign(nextState.params, showArray[0]);
    return nextState;
  },
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Layout} >
          <IndexRoute component={Landing} />
          <Route path='/search' component={Search} shows={data.shows} />
          <Route path='/details/:id' component={Details} onEnter={this.assignShow} />
        </Route>
      </Router>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
