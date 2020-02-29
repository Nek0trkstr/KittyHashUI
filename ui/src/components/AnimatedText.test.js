/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import AnimatedText from './AnimatedText';

test('renders without crashing', () => {
  const div = document.createElement('div');
  const testText = <p>Test Text</p>
  ReactDOM.render(<AnimatedText textToDisplay={testText} />, div);
});

test('animated text contains provided text', () => {
  const testString = 'Test Text'
  const testText = <p>{testString}</p>
  const animatedText = shallow(<AnimatedText textToDisplay={testText} />)
  expect(animatedText.text()).toContain(testString);
})