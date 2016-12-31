var div = React.DOM.div;
var h1 = React.DOM.h1;

// createClass - creates a new type of element
// composite component
var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1(null, 'Check out this other thing.')
      )
    );
  }
});

// createElement - creates an instance of the class
var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null),
    React.createElement(MyTitle, null)
  )
);

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
