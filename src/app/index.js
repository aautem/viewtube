import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App.jsx';

// const endpoint = 'https://view-tube.herokuapp.com/api/keys/youtube';
const endpoint = 'http://localhost:3000/api/keys/youtube';

(function() {
  axios.get(endpoint).then(function(response) {
    var key = response.data;
    if (!key) {
      key = window.YOUTUBE_KEY;
    }
    console.log('KEY:', key);
    ReactDOM.render(<App YOUTUBE_API_KEY={key} />, document.getElementById('app'));
  });
})();
