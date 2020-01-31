/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info';
import TextType from '../TextTypeEnum';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Info textToDisplay={TextType.ABOUT}/>, div);
})
