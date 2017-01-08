import * as React from 'react';
import * as ReactDom from 'react-dom';
import './styles/main.styl';

interface HelloProps {
  name: string
}

class Hello extends React.Component<HelloProps, {}> {
  render () {
    return <div>Hello, {this.props.name}</div>
  }
}

ReactDom.render(<Hello name="Vadim"/>, document.getElementById('app'));
