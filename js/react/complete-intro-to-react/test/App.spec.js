/* eslint-env mocha */

import { expect } from 'chai';
import React from 'react';
import Search from '../js/Search';
import { shallow } from 'enzyme';

describe('<Search />', () => {
  it('should pass', () => {
    expect(1 + 1 === 2).to.be.true;
  });

  it('should render the brand', () => {
    const wrapper = shallow(<Search />);
    console.log(wrapper.debug());
    expect(wrapper.contains(<h1 className='brand'>Zetflix</h1>)).to.be.true;
  });
});
