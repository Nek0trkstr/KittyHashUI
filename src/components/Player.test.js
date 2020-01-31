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

test('player changes state when clicked', () => {
  const player = shallow(<Player songTitle="Test Title" songArtist="Song Artist" />);
  expect(player.state().isPlaying).toEqual(false);
  player.find('button').simulate('click');
  expect(player.state().isPlaying).toEqual(true);
});

test('Player changes icon when clicked', () => {
  const player = shallow(<Player songTitle="Test Title" songArtist="Song Artist" />);
  expect(player.find('i').hasClass('fa-play')).toEqual(true);
  expect(player.find('i').hasClass('fa-pause')).toEqual(false);
  player.find('button').simulate('click');
  expect(player.find('i').hasClass('fa-play')).toEqual(false);
  expect(player.find('i').hasClass('fa-pause')).toEqual(true);
});
