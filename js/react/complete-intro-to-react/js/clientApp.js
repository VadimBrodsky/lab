'use strict';

var div = React.DOM.div;
var h1 = React.DOM.h1;

// createClass - creates a new type of element
// composite component
var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
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
    React.createElement(MyTitle, {title: 'Game of Thrones'}),
    React.createElement(MyTitle, {title: 'Clash of Kings'}),
    React.createElement(MyTitle, {title: 'Storm of Swords'}),
    MyTitleFact({title: 'Feast for Crows'})
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
