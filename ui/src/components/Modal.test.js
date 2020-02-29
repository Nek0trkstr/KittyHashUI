/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Modal from './Modal';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const mockFunction = jest.fn();
  ReactDOM.render(<Modal userConsentGiven={false} handleClick={mockFunction}/>, div);
});

test('do not render modal when consent is already given', () => {
  const mockFunction = jest.fn();
  const emptyObject = {};
  const modal = shallow(<Modal userConsentGiven={true} handleClick={mockFunction}/>);
  expect(modal).toEqual(emptyObject);
})

test('modal is calling handleClick function', ()=> {
  const mockFunction = jest.fn();
  const modal = shallow(<Modal userConsentGiven={false} handleClick={mockFunction}/>);
  const agreeButton = modal.find('button');
  agreeButton.simulate('click');
  expect(mockFunction).toBeCalled();
})
