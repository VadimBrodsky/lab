import React from 'react';

var div = React.DOM.div;
var h1 = React.DOM.h1;

// createClass - creates a new type of element
// composite component
var MyTitle = React.createClass({
  // all react components need to have a render method
  // it must return a component
  // needs to be a pure function
  render () {
    const style = {color: this.props.color};
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    );
  }
});

export default MyTitle;
