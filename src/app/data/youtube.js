let YOUTUBE_API_KEY;

const endpoint = 'https://view-tube.herokuapp.com/api/keys/youtube';

(function() {
  return fetch(endpoint).then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    console.log('API Key:', key);
    YOUTUBE_API_KEY = key;
  });
})();

export default YOUTUBE_API_KEY;
