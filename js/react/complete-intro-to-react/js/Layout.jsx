import React from 'react';

// wrapping component
// children is a resevled prop property name
const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Layout;
