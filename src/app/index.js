import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

(function() {
  return fetch('https://view-tube.herokuapp.com/api/keys/youtube').then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    key = key || window.YOUTUBE_KEY;
    ReactDOM.render(<App YOUTUBE_API_KEY={key} />, document.getElementById('app'));
  });
})();
