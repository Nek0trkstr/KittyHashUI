/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { shallow } from 'enzyme';

test('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Counter currentlyListening={100}/>, div);
})

test('displays number provided in props', () => {
  const numberOfListeners = 100;
  const wrapper = shallow(<Counter currentlyListening={numberOfListeners} />);
  expect(wrapper.text()).toContain(numberOfListeners);
})