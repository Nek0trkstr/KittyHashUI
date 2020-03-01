/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import AppBody from './AppBody';
import TextType from '../TextTypeEnum'
import Parser from '../metadataParser';

test('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppBody textToDisplay={TextType.ABOUT}/>, div);
})

test('parser', () => {
  const icecastDemoJson = 
  {
    icestats: {
      source: {
        title: 'songArtis - songTitle',
        listeners: 20
      }
    }
  }
  const parsedJson = Parser.parseMetadata(icecastDemoJson)
  expect(parsedJson.songTitle).toEqual('songTitle');
  expect(parsedJson.songArtist).toEqual('songArtis');
  expect(parsedJson.currentlyListening).toEqual(20)
})