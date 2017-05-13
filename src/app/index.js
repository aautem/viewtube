import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

let YOUTUBE_API_KEY;

(function() {
  return fetch('https://view-tube.herokuapp.com/api/keys/youtube').then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    YOUTUBE_API_KEY = key;
  });
})();

ReactDOM.render(<App YOUTUBE_API_KEY={YOUTUBE_API_KEY} />, document.getElementById('app'));
