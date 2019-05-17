import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import UserList from './index';
import UserRow from '../UserRow';

configure({ adapter: new Adapter() });

describe('UserList', () => {
  it('shows new user when props are changed', () => {
    const wrapper = mount(<UserList />);
    expect(wrapper.find(UserRow).length).toBe(0);
    wrapper.setProps({ users: [{id: 1, name: 'Jane', active: true}]});
    expect(wrapper.find(UserRow).length).toBe(1);
  });
  it('setProps makes componentDidUpdate to be executed', () => {
    const wrapper = shallow(<UserList />);
    jest.spyOn(UserList.prototype, 'componentDidUpdate');
    wrapper.setProps();
    expect(UserList.prototype.componentDidUpdate.mock.calls.length).toBe(1);
  });
});
