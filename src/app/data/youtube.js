let YOUTUBE_API_KEY;

const endpoint = 'https://view-tube.herokuapp.com/api/keys/youtube';

const getYouTubeKey = function() {
  return fetch(endpoint).then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    YOUTUBE_API_KEY = key;
  });
};

export default YOUTUBE_API_KEY;
