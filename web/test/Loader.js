import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../src/components/Loader';

Enzyme.configure({ adapter: new Adapter() });

describe('Loader component', () => {
  it('should render <Loader /> when loader component is loded', () => {
    const loader = shallow(<Loader />);

    expect(loader.find('Loader').length).to.equal(1);
  });
});
