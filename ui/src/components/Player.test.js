/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Player from './Player';

// Let's enzyme render audio element
window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

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

test('play button starts/stops stream', () => {
  const playFunction = jest.fn();
  const pauseFunction = jest.fn();
  const player = mount(<Player songTitle="Test Title" songArtist="Song Artist" />);
  const playButton = player.find('button');
  window.HTMLMediaElement.prototype.play = playFunction;
  window.HTMLMediaElement.prototype.pause = pauseFunction;
  // Initial state - not playing
  expect(player.state('isPlaying')).toEqual(false);
  expect(player.contains(<i className='fas fa-pause fa-7x' /> ))
  playButton.simulate('click');
  // Playing state
  expect(player.state('isPlaying')).toEqual(true);
  expect(player.contains(<i className='fas fa-play fa-7x' /> ))
  expect(playFunction).toBeCalled();
  // Back to initials state
  playButton.simulate('click');
  expect(player.state('isPlaying')).toEqual(false);
  expect(player.contains(<i className='fas fa-pause fa-7x' /> ))
  expect(pauseFunction).toBeCalled();
});
