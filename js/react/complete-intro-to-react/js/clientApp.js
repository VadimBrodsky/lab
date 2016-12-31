import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

var div = React.DOM.div;

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
