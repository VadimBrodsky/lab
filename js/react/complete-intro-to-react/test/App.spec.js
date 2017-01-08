/* eslint-env mocha */

import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import Search from '../js/Search';
import ShowCard from '../js/ShowCard';
import { shows } from '../public/data';

describe('<Search />', () => {
  it('should pass', () => {
    expect(1 + 1 === 2).to.be.true;
  });

  it('should render the brand', () => {
    const wrapper = shallow(<Search />);
    // console.log(wrapper.debug());
    expect(wrapper.contains(<h1 className='brand'>Zetflix</h1>)).to.be.true;
  });

  it('should render as many shows as there are data for', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(ShowCard).length).to.equal(shows.length);
  });
});
