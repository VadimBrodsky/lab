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

export default MyTitle;
