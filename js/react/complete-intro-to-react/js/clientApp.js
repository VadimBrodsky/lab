/* global React ReactDOM */
'use strict';

var div = React.DOM.div;
var h1 = React.DOM.h1;

// createClass - creates a new type of element
// composite component
var MyTitle = React.createClass({
  // all react components need to have a render method
  // it must return a component
  // needs to be a pure function
  render: function () {
    return (
      div({style: {color: this.props.color}},
        h1(null, this.props.title)
      )
    );
  }
});

// not used with jsx
// component factory, same as React.createElement(MyTitle) but less verbose
// var ce = React.createElement;
var MyTitleFact = React.createFactory(MyTitle);

// createElement - creates an instance of the class
var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'Game of Thrones', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Clash of Kings', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'Storm of Swords', color: 'peru'}),
    MyTitleFact({title: 'Feast for Crows', color: 'papayawhip'})
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
