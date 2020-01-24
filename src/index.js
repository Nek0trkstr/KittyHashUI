import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'))
serviceWorker.register()

if ('serviceWorker' in navigator) {
    var iceworker = navigator.serviceWorker.register('testWorker.js')
      .then(function(reg) {
        console.log('Icecast service worker registered');
        //addItem('Icecast service worker registered. Click play to start the stream.');
      }).catch(function(error) {
      console.warn('Error ' + error);
    //   addItem('Error ' + error);
    });
  }

navigator.serviceWorker.addEventListener('message', event => {
    if(event.origin != 'http://localhost'){
        return;
    }
    var meta = event.data.msg;
    meta = meta.substring(meta.indexOf("'") + 1,meta.lastIndexOf("'"));
    // document.querySelector('div').innerText = meta;
    //console.log(meta)
});