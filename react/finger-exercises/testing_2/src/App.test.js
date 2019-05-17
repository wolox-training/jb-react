import React from 'react';
import ReactDOM from 'react-dom';
import { configure, mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    // i don't know which way is better, this or the above
    //const root = document.createElement('div');
    //ReactDOM.render(<App />, root);
    const wrapper = mount(<App />);
    expect(wrapper.children().length).toBeGreaterThanOrEqual(1);
  });

  xit('matches the snapshot', () => {
    const tree = mount(<App />);
  });
});
