const getYouTubeKey = function() {
  return fetch('https://view-tube.herokuapp.com/api/keys/youtube').then(function(response) {
    console.log(response);
    return response;
  });
};

export default getYouTubeKey;
