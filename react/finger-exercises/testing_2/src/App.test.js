import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const tree = shallow(<App />);
    expect(tree.find('#root').children().length).toBe(1);
  });

  xit('matches the snapshot', () => {
    const tree = mount(<App />);
  });
});
