const endpoint = 'https://view-tube.herokuapp.com/api/keys/youtube';

const getYouTubeKey = function() {
  return fetch(endpoint).then(function(response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function(key) {
    return key;
  });
};

export default getYouTubeKey;
