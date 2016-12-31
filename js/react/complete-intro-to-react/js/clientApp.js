var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyFirstComponent = (
    div({style: {color: 'red'}},
      h1(null, 'This is my first component!')
      )
    );

ReactDOM.render(MyFirstComponent, document.getElementById('app'));
