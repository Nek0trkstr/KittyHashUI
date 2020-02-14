/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AppBody from './AppBody';
import TextType from '../TextTypeEnum'

test('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBody textToDisplay={TextType.ABOUT}/>, div);
})