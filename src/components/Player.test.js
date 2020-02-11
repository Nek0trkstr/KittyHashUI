/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Player from './Player';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Player songTitle="test title" songArtist="test artist" />, div);
});

test('player renders song title', () => {
  const player = shallow(<Player songTitle="Test Title" songArtist="Song Artist" />);
  expect(player.text()).toContain("Test Title");
});

test('player renders song artist', () => {
  const player = shallow(<Player songTitle="Test Title" songArtist="Song Artist" />);
  expect(player.text()).toContain("Song Artist");
});
