/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import NavBar from './NavBar';
import TextType from '../TextTypeEnum'

test('navbar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar textToDisplay={TextType.ABOUT} handleMenuClick={() => true}/>, div);
})

test('navbar calling a handleMenuClick function', () => {
  const mockFunction = jest.fn();
  const wrapper = shallow(<NavBar textToDisplay={TextType.ABOUT} handleMenuClick={mockFunction} />);
  const firstButton = wrapper.find('button').at(0);
  firstButton.simulate('click');
  expect(mockFunction).toBeCalled();
})

test('about button is only button focused when props passed', () => {
  const wrapper = mount(<NavBar textToDisplay={TextType.ABOUT} handleMenuClick={() => true } />);
  const aboutButton = wrapper.find('button').at(0);
  const contactButton = wrapper.find('button').at(1);
  expect(aboutButton.hasClass('buttonActive')).toEqual(true);
  expect(contactButton.hasClass('buttonActive')).toEqual(false);
})

test('contact button is only button focused when props passed', () => {
  const wrapper = mount(<NavBar textToDisplay={TextType.CONTACT} handleMenuClick={() => true } />);
  const aboutButton = wrapper.find('button').at(0);
  const contactButton = wrapper.find('button').at(1);
  expect(aboutButton.hasClass('buttonActive')).toEqual(false);
  expect(contactButton.hasClass('buttonActive')).toEqual(true);
})