import React from 'react';
import data from '../public/data';
import ShowCard from './ShowCard';

// const Serarch = React.createClass({});
class Search extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      searchTerm: 'this is the default searchTerm'
    };

    // with the ES6 class syntax need to bind the event handles manually
    // to set the correct context for this
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this);
  }

  handleSearchTermEvent (event) {
    this.setState({ searchTerm: event.target.value });
  }

  render () {
    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>Zetlix</h1>
          <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.map((show) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;
