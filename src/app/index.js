import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';

injectTapEventPlugin();

const endpoint = 'https://view-tube.herokuapp.com/api/keys/youtube';
// const endpoint = 'http://localhost:3000/api/keys/youtube';

(function() {
  return fetch(endpoint).then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    if (!key) {
      key = window.YOUTUBE_KEY;
    }
    ReactDOM.render(<App YOUTUBE_API_KEY={key} />, document.getElementById('app'));
  });
})();
